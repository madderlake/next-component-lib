import { BaseExperienceProvider } from "@/contexts/BaseExperience/BaseExperienceProvider";
import { GalleryContextProvider } from "@/contexts/Gallery/GalleryContextProvider";
import { NextRouterProvider } from "@/contexts/NextRouter/NextRouterProvider";
import { QueryStringProvider } from "@/contexts/QueryStringContext/QueryStringProvider";
import { TextZoomContexProvider } from "@/contexts/TextZoom/TextZoomProvider";
import { SassKitViewportsProvider } from "@/contexts/Viewport/SassKitViewportsProvider";
import { WindowContextProvider } from "@/contexts/Window/WindowContextProvider";
import { useQueryStringAdapterMock } from "@/layouts/utils/useQueryStringAdapterMock";

// import sassData from "@/styles/shared/sasskitData.module.scss";

import { sassData } from "@/contexts/Viewport/SassKitViewportsProvider";

export function DefaultContexts({
  children,
}: {
  children?: React.ReactNode;
}): JSX.Element {
  const qsAdapter = useQueryStringAdapterMock();

  return (
    <NextRouterProvider>
      <QueryStringProvider adapter={qsAdapter}>
        <WindowContextProvider wait={300}>
          <TextZoomContexProvider>
            <GalleryContextProvider>
              <SassKitViewportsProvider sassData={sassData}>
                <BaseExperienceProvider>{children}</BaseExperienceProvider>
              </SassKitViewportsProvider>
            </GalleryContextProvider>
          </TextZoomContexProvider>
        </WindowContextProvider>
      </QueryStringProvider>
    </NextRouterProvider>
  );
}
