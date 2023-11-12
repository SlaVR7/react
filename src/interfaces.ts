import React, { ReactNode } from 'react';

export interface SearchButtonProps {
  inputValue: string;
  limit: string;
}

export interface ProductData {
  name: {
    en: string;
  };
  masterVariant: {
    images: [
      {
        url: string;
      },
      {
        url: string;
      },
    ];
    prices: [
      {
        value: {
          centAmount: number;
        };
      },
    ];
  };
  description: {
    en: string;
  };
}

export interface ProductList {
  results: ProductData[];
  total: number;
}
export interface ProductCardProps {
  data: ProductData | null;
}

export interface ErrorBoundaryProps {
  children: ReactNode;
}

export interface ErrorBoundaryState {
  hasError: boolean;
}

export interface ImageComponentProps {
  src: string;
  alt: string;
}

export interface DataState {
  productsData: ProductData[] | null;
  setProductsData: React.Dispatch<React.SetStateAction<ProductData[] | null>>;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  isLoading: boolean;
  totalProducts: number;
  setTotalProducts: React.Dispatch<React.SetStateAction<number>>;
  setLimit: React.Dispatch<React.SetStateAction<string>>;
  limit: string;
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  totalPages: number;
  page: string;
  setPage: React.Dispatch<React.SetStateAction<string>>;
  product: string | null;
  setProduct: React.Dispatch<React.SetStateAction<string | null>>;
}

export interface AxiosResponse {
  data: {
    access_token: string;
  };
}

export interface SearchParams {
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setProductsData: React.Dispatch<React.SetStateAction<ProductData[] | null>>;
  inputValue: string;
  limit: string;
  setTotalProducts: React.Dispatch<React.SetStateAction<number>>;
  page?: string;
}

export interface DetailedProductCardProps {
  productData: ProductData | undefined;
}

export interface Location {
  search: string;
}
