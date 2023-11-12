import { SearchParams } from '../interfaces';
import { getProductsList } from './getProductList';

const handleSearch = async (params: SearchParams) => {
  const {
    setIsLoading,
    setProductsData,
    inputValue,
    limit,
    setTotalProducts,
    page,
  } = params;
  setIsLoading(true);
  try {
    const newState = await getProductsList(inputValue, +limit, page);
    setTotalProducts(newState.total);
    setProductsData(newState.results);
    localStorage.setItem('term', inputValue);
  } finally {
    setIsLoading(false);
  }
};

export default handleSearch;
