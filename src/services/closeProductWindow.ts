import { NavigateFunction } from 'react-router-dom';
import React from 'react';

export const closeDetails = (
  page: string,
  limit: string,
  navigate: NavigateFunction,
  setProduct: React.Dispatch<React.SetStateAction<string | null>>
) => {
  navigate(`/?page=${page}&limit=${limit}`);
  setProduct(null);
};
