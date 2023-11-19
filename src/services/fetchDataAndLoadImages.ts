import { ProductData } from '../interfaces';
import React from 'react';

export const fetchDataAndLoadImages = async (
  targetProductObj: ProductData | undefined,
  setIsLoadingImages: React.Dispatch<React.SetStateAction<boolean>>
) => {
  try {
    if (targetProductObj && targetProductObj.masterVariant.images.length > 0) {
      const imagePromises = targetProductObj.masterVariant.images.map(
        (image) =>
          new Promise((resolve, reject) => {
            const img = new Image();
            img.src = image.url;
            img.onload = resolve;
            img.onerror = () =>
              reject(
                new Error(`Не удалось загрузить изображение: ${image.url}`)
              );
          })
      );
      await Promise.all(imagePromises);
    }
  } catch (error) {
    console.error('Ошибка загрузки изображений:', error);
  } finally {
    setIsLoadingImages(false);
  }
};
