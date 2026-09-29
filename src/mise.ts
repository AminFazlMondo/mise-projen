import { IConstruct, IMixin } from 'constructs';
import { Component, Project, TomlFile } from 'projen';
import { MiseTomlSchema, toJson_MiseTomlSchema } from './mise-config';
import { deepMerge, normalizeTools } from './util';

const MISE_COMPONENT_ID = 'Mise';

/**
 * Options for `Mise` / `MiseFile`.
 */
export interface MiseOptions {
  /**
   * Name of the mise config file.
   *
   * @default "mise.toml"
   */
  readonly fileName?: string;

  /**
   * Initial mise configuration.
   *
   * Further fragments can be merged in later via `merge()`, `addTools()`, or by
   * applying additional `Mise` mixins to the same project.
   *
   * @default {}
   */
  readonly config?: MiseTomlSchema;
}

/**
 * The `mise.toml` file for a project, and the merge point for every `Mise`
 * mixin applied to it.
 *
 * Only one `MiseFile` is allowed per project. Use `MiseFile.ensure()` to get
 * the existing instance or create one, and `merge()`/`addTools()` to
 * contribute configuration from multiple places - similar to how projen's
 * `TypescriptConfig` lets several components shape a single `tsconfig.json`.
 */
export class MiseFile extends Component {
  /**
   * Returns the `MiseFile` instance already attached to the given project, if any.
   */
  public static of(scope: IConstruct): MiseFile | undefined {
    const project = Project.of(scope);
    return project.node.tryFindChild(MISE_COMPONENT_ID) as MiseFile | undefined;
  }

  /**
   * Returns the `MiseFile` instance attached to the given project, creating
   * one if it doesn't already exist.
   */
  public static ensure(scope: IConstruct, options: MiseOptions = {}): MiseFile {
    return MiseFile.of(scope) ?? new MiseFile(scope, options);
  }

  /**
   * The generated mise config file.
   */
  public readonly file: TomlFile;

  private config: MiseTomlSchema;

  constructor(scope: IConstruct, options: MiseOptions = {}) {
    super(scope, MISE_COMPONENT_ID);

    this.config = { ...options.config };

    this.file = new TomlFile(scope, options.fileName ?? 'mise.toml', {
      omitEmpty: true,
      obj: () => toJson_MiseTomlSchema(this.config),
    });
  }

  /**
   * Deep-merges the given configuration fragment into the current mise configuration.
   *
   * Objects are merged key by key, arrays are concatenated and de-duplicated, and
   * any other value overwrites the previous one.
   */
  public merge(config: MiseTomlSchema): void {
    this.config = deepMerge({ ...this.config }, config as Record<string, any>) as MiseTomlSchema;
  }

  /**
   * Adds (or extends) dev tools managed by mise.
   *
   * @example mise.addTools({ node: '24', pnpm: ['11', '10'] });
   */
  public addTools(tools: { [tool: string]: string | string[] }): void {
    this.merge({ tools: normalizeTools(tools) });
  }
}

/**
 * A mixin that adds mise (https://mise.jdx.dev) support to any projen project.
 *
 * Apply it with `project.with(new Mise(options))` (or `applyTo()` directly).
 * Applying multiple `Mise` mixins to the same project merges their
 * configuration into a single `mise.toml`, backed by `MiseFile`.
 *
 * @example
 * project.with(new Mise({ config: { tools: { node: ['24'] } } }));
 */
export class Mise implements IMixin {
  private readonly fileName?: string;
  private config: MiseTomlSchema;

  constructor(options: MiseOptions = {}) {
    this.fileName = options.fileName;
    this.config = { ...options.config };
  }

  /**
   * Returns true if the construct is a projen `Project`.
   */
  public supports(construct: IConstruct): construct is Project {
    return Project.isProject(construct);
  }

  /**
   * Ensures a `MiseFile` exists on the project and merges this mixin's
   * configuration into it.
   */
  public applyTo(construct: IConstruct): void {
    if (!this.supports(construct)) {
      return;
    }

    MiseFile.ensure(construct, { fileName: this.fileName }).merge(this.config);
  }

  /**
   * Deep-merges the given configuration fragment into this mixin's configuration.
   *
   * Objects are merged key by key, arrays are concatenated and de-duplicated, and
   * any other value overwrites the previous one.
   */
  public merge(config: MiseTomlSchema): void {
    this.config = deepMerge({ ...this.config }, config as Record<string, any>) as MiseTomlSchema;
  }

  /**
   * Adds (or extends) dev tools managed by mise.
   *
   * @example mise.addTools({ node: '24', pnpm: ['11', '10'] });
   */
  public addTools(tools: { [tool: string]: string | string[] }): void {
    this.merge({ tools: normalizeTools(tools) });
  }
}
