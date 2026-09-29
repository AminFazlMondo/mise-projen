import { MiseTomlSchema } from './miseConfig';

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