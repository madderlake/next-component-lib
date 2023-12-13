/**
 * NOTE -- this file is manually generated and currently ignored by
 * the scss-typed-modules config as the tool does not support the Sass
 * option for configuring paths to custom Sass functions. This file's
 * respective SCSS Module uses our internal `serialize` Sass function and
 * as a result is not compatible with the tool. Manual upkeep of this file
 * is required until we can figure out a solve.
 *
 * rdar://102326652 (CODE : typed-scss-modules does not support custom Sass functions)
 */
export interface ClassMap {
  readonly [key: string]: string;
}

export type ClassName = keyof ClassMap;

declare const styles: ClassMap;

export default styles;
