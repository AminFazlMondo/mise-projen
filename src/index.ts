import { IConstruct, IMixin } from 'constructs';
import { Project } from 'projen';
import { NodePackage } from 'projen/lib/javascript';
import * as semver from 'semver';
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
  private autoDiscover: boolean;

  constructor(options: MiseOptions = {}) {
    this.fileName = options.fileName;
    this.config = { ...options.config };
    this.autoDiscover = options.autoDiscover ?? true;
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

    const miseFile = MiseFile.ensure(construct, { fileName: this.fileName });

    if (this.autoDiscover) {
      this.discoverTools(construct);
    }

    miseFile.merge(this.config);
  }

  /**
   * Discovers and adds tools to the mixin's configuration based on the project's setup.
   * Currently only works for projects that have node package
   * @param project The projen project instance to discover tools in.
   */
  public discoverTools(project: Project): void {
    const nodePackage = NodePackage.of(project);
    if (!nodePackage) {
      return;
    }

    const nodeVersion = nodePackage.minNodeVersion;
    const parsedMajorVersion = semver.coerce(nodeVersion)?.major?.toString();
    if (parsedMajorVersion) {
      this.addTools({ node: parsedMajorVersion });
    }

    const { packageManager } = nodePackage;

    switch (packageManager) {
      case 'yarn':
      case 'yarn2':
      case 'yarn_classic':
      case 'yarn_berry':
        const parsedYarnMajorVersion = nodePackage.yarnVersion && semver.coerce(nodePackage.yarnVersion)?.major?.toString();
        parsedYarnMajorVersion && this.addTools({ yarn: parsedYarnMajorVersion });
        break;
      case 'pnpm':
        const parsedPnpmMajorVersion = nodePackage.pnpmVersion && semver.coerce(nodePackage.pnpmVersion)?.major?.toString();
        parsedPnpmMajorVersion && this.addTools({ pnpm: parsedPnpmMajorVersion });
        break;
      case 'bun':
        const parsedBunMajorVersion = nodePackage.bunVersion && semver.coerce(nodePackage.bunVersion)?.major?.toString();
        parsedBunMajorVersion && this.addTools({ bun: parsedBunMajorVersion });
        break;
      default:
        project.logger.warn(`No package manager to be added for: ${packageManager}`);
        break;
    }
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
