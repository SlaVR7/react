type Url = {
  url: string;
};

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

export interface TokenResponse {
  data: {
    access_token: string;
  };
}

export interface AxiosResponse {
  response: {
    status: number;
  };
}
