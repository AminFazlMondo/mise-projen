import { MiseTomlSchema } from './miseConfig';

/**
 * Options for `Mise` / `MiseFile`.
 */
export interface MiseFileOptions {
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

export interface MiseOptions extends MiseFileOptions {
  /**
   * Whether to automatically discover tools in the project.
   *
   * @default true
   */
  readonly autoDiscover?: boolean;
}