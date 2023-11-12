import {
  createContext,
  FC,
  PropsWithChildren,
  useEffect,
  useState,
} from 'react';
import { DataState, ProductData } from '../interfaces';
import RouteManager from './routeManager';
import getPagesCount from './getPagesCount';

const MyContext = createContext<DataState>({
  productsData: [],
  setProductsData: () => {},
  setIsLoading: () => {},
  isLoading: false,
  totalProducts: 0,
  inputValue: '',
  limit: '10',
  setInputValue: () => {},
  setLimit: () => {},
  totalPages: 0,
  setTotalProducts: () => {},
  page: '1',
  setPage: () => {},
  product: '',
  setProduct: () => {},
});
export default MyContext;

export const MyContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const { currentPage, currentProduct, currentLimit } = RouteManager();
  const [page, setPage] = useState(currentPage || '1');
  const [product, setProduct] = useState(currentProduct);
  const [totalPages, setTotalPages] = useState(0);
  const [productsData, setProductsData] = useState<ProductData[] | null>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [totalProducts, setTotalProducts] = useState(0);
  const [limit, setLimit] = useState(currentLimit || '10');
  const [inputValue, setInputValue] = useState(
    localStorage.getItem('term') || ''
  );
  const state: DataState = {
    productsData,
    setProductsData,
    setIsLoading,
    isLoading,
    totalProducts,
    setTotalProducts,
    setLimit,
    limit,
    inputValue,
    setInputValue,
    totalPages,
    page,
    setPage,
    product,
    setProduct,
  };

  useEffect(() => {
    setTotalPages(getPagesCount(totalProducts, limit));
  }, [productsData]);

  return <MyContext.Provider value={state}>{children}</MyContext.Provider>;
};
