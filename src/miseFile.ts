import { IConstruct } from 'constructs';
import { Component, Project, TomlFile } from 'projen';
import { MiseTomlSchema, toJson_MiseTomlSchema } from './miseConfig';
import { MiseOptions } from './types';
import { deepMerge, normalizeTools } from './util';

const MISE_COMPONENT_ID = 'Mise';

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