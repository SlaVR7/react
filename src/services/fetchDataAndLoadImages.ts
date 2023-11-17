import { ProductData } from '../interfaces';
import React from 'react';

export const fetchDataAndLoadImages = async (
  targetProductObj: ProductData | undefined,
  setIsLoadingImages: React.Dispatch<React.SetStateAction<boolean>>
) => {
  if (targetProductObj && targetProductObj) {
    const imagePromises = targetProductObj.masterVariant.images.map(
      async (image) => {
        return new Promise((resolve) => {
          const img = new Image();
          img.src = image.url;
          img.onload = resolve;
          img.onerror = resolve;
        });
      }
    );
    await Promise.all(imagePromises);
  }
  setIsLoadingImages(false);
};
