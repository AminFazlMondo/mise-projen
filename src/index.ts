import { IConstruct, IMixin } from 'constructs';
import { Project } from 'projen';
import { MiseTomlSchema } from './miseConfig';
import { MiseFile } from './miseFile';
import { MiseOptions } from './types';
import { deepMerge, normalizeTools } from './util';

export * from './miseFile';
export * from './miseConfig';
export * from './types';

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
