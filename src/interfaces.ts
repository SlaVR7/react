type Url = {
  url: string;
};

export interface ProductsResponse {
  data: {
    results: ProductData[];
    total: number;
  };
}

export interface ProductData {
  name: {
    en: string;
  };
  masterVariant: {
    images: [Url, Url];
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

export interface ErrorBoundaryState {
  hasError: boolean;
}
