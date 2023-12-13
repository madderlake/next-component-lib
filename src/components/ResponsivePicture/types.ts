export type ViewportStyleProps<T extends string> = Record<string, T>;

export type ViewportStyleValue<T extends string> =
  | ViewportStyleProps<T>
  | Record<string, ViewportStyleProps<T>>;

export type ViewportClassNameValue<T extends string> =
  | T
  | ViewportStyleProps<T>;
