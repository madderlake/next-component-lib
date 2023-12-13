export interface QueryStringAdapterSetOptions {
  history?: boolean;
}

export interface QueryStringAdapter {
  getQuery: (name: string) => string | string[] | undefined;
  setQuery: (
    name: string,
    value: string | undefined,
    options?: QueryStringAdapterSetOptions
  ) => Promise<void>;
  clearQuery: (
    name: string,
    options?: QueryStringAdapterSetOptions
  ) => Promise<void>;
}
