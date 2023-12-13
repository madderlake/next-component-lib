import React from "react";

export interface GalleryContextProps {
  galleryObserve: ((el: Element, id: string) => void) | null;
  galleryUnobserve: ((el: Element, id: string) => void) | null;
  activeGalleryId: string | null;
}

export const GalleryContext = React.createContext<GalleryContextProps>({
  galleryObserve: null,
  galleryUnobserve: null,
  activeGalleryId: null,
});
