import { getProductsList } from './getProductList';
import { ProductData } from '../interfaces';
import React from 'react';

export const fetchDataAndLoadImages = async (
  targetProductObj: ProductData | undefined,
  setCurrentObj: React.Dispatch<React.SetStateAction<ProductData | undefined>>,
  setIsLoadingImages: React.Dispatch<React.SetStateAction<boolean>>
) => {
  if (!targetProductObj) {
    return;
  }

  const fetchedObj = await getProductsList(targetProductObj.name.en);
  setCurrentObj(fetchedObj.results[0]);
  setIsLoadingImages(true);

  if (fetchedObj && fetchedObj.results[0]) {
    const imagePromises = fetchedObj.results[0].masterVariant.images.map(
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
