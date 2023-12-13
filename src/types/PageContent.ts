import type { ReactNode } from "react";

import type { JSONObject } from "./JSON";

export interface ContentResponse {
  __typename: string;
  id: string;
  props: PageContentItem;
}

export type AssetResponse = {
  __typename: string;
  id: string;
  // Can be a union type as more are added later
} & { type: "image"; props: GraphQLImageAssetProps };

export interface GraphQLPageDataResponse {
  page: {
    __typename: string;
    id: string;
    pageKey: string;
    pageTemplate: string;
    contentRoot: string; // Not in API yet - may need to be added to PCS - CYZ 7/27/2022
    siteRelativeRoute: string;
    theme: string;
    contents: ContentResponse[];
    assets: AssetResponse[];
  };
}

interface GraphQLImageAssetProps {
  __typename: string;
  src: string;
  height: number;
  width: number;
  properties: {
    density: number;
    viewport: string;
  };
}

// TODO: If we monorepo this, we can import this from the API gateway
type PageDataPropBase =
  | PageContentBoolean
  | PageContentDatetime
  | PageContentNumber
  | PageContentString;

export type PageDataContentProp =
  | PageDataPropBase
  | PageDataHtml
  | PageContentReference;

export type PageDataProp = PageDataContentProp | PageDataAsset;

export interface Page {
  id: string;
  pageKey: string;
  pageTemplate: string;
  contentRoot: string; // Not in API yet - may need to be added to PCS - CYZ 7/27/2022
  siteRelativeRoute: string;
  theme: string;
}

export type PageContent = Record<string, PageContentItem>;
export type PageContentItem = Record<string, PageDataContentProp>;

export interface PageContentItemProps {
  type: string;
  value: JSONObject;
}

export type PageAssets = Record<string, PageAsset>;
// Can be a union type for other asset types in the future
export type PageAsset = PageAssetImageItem;
export type PageAssetProps = PageAssetImageItemProps;

export type PageAssetImageItemProps = Omit<
  GraphQLImageAssetProps,
  "__typename"
>;

export interface PageAssetImageItem {
  type: "image";
  props: PageAssetImageItemProps;
}

export type PageContentPropValuesBase =
  | PageDataPropBase
  | PageContentHtml
  | PageContentAsset;

export type PageContentPropValuesShallow =
  | PageContentPropValuesBase
  | PageContentReference;

export type PageContentPropValuesDeep =
  | PageContentPropValuesBase
  | PageContentReferenceDeep;

export type PageContentPropValues =
  | PageContentPropValuesShallow
  | PageContentPropValuesDeep;

export type PageContentPropsShallow = Record<
  string,
  PageContentPropValuesShallow
>;
export type PageContentPropsDeep = Record<string, PageContentPropValuesDeep>;
export type PageContentProps = PageContentPropsShallow | PageContentPropsDeep;

export interface PageContentBoolean {
  type: "boolean";
  value: boolean;
}

export interface PageContentDatetime {
  type: "datetime";
  value: number;
}

export interface PageDataHtml {
  type: "html";
  value: string;
}

export interface PageContentHtml {
  type: "html";
  value: ReactNode;
}

export interface PageContentNumber {
  type: "number";
  value: number;
}

export interface PageContentReference {
  type: "reference";
  value: string[] | string;
}

export interface PageContentReferenceDeep {
  type: "reference";
  value: PageContentProps[] | PageContentProps;
}

export interface PageContentString {
  type: "string";
  value: string;
}

export interface PageDataAsset {
  type: "asset";
  value: string | string[];
}

export interface PageContentAsset {
  type: "asset";
  value: PageAssetImageItem | PageAssetImageItem[];
}
