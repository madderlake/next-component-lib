/* eslint-disable max-lines-per-function */
import type { Layout } from "@marcom/fresco-app/layouts";
import { withLayout } from "@marcom/fresco-app/layouts";
import { useRouter } from "next/router";
import React from "react";

import PricingProvider from "@/components/Pricing/PricingContext";
import type { PricingEnvSettings } from "@/components/Pricing/types";
import { BaseExperienceProvider } from "@/contexts/BaseExperience/BaseExperienceProvider";
import { GalleryContextProvider } from "@/contexts/Gallery/GalleryContextProvider";
import { QueryStringProvider } from "@/contexts/QueryStringContext/QueryStringProvider";
import { SassKitViewportsProvider } from "@/contexts/Viewport/SassKitViewportsProvider";
import { WindowContextProvider } from "@/contexts/Window/WindowContextProvider";
import { NextRouterProvider } from "@/contexts/NextRouter/NextRouterProvider";
import sassData from "@/styles/shared/sasskitData.module.scss";

import { useQueryStringAdapterFromNext } from "../utils/useQueryStringAdapterFromNext";
import type { SchemaType } from "./schema";

const Overview: Layout<SchemaType> = () => {
  const pricingSettingsData: PricingEnvSettings = { ids: {} };
  const router = useRouter();
  const qsAdapter = useQueryStringAdapterFromNext({ router });

  return (
    <NextRouterProvider>
      <QueryStringProvider adapter={qsAdapter}>
        <WindowContextProvider wait={300}>
          <SassKitViewportsProvider sassData={sassData}>
            <PricingProvider data={pricingSettingsData}>
              <BaseExperienceProvider>
                <GalleryContextProvider>
                  <main>
                    <h1>Rome Shared Components</h1>
                  </main>
                </GalleryContextProvider>
              </BaseExperienceProvider>
            </PricingProvider>
          </SassKitViewportsProvider>
        </WindowContextProvider>
      </QueryStringProvider>
    </NextRouterProvider>
  );
};

export default withLayout(Overview);
