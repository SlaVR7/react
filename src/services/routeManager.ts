import { useSearchParams } from 'react-router-dom';

function RouteManager() {
  const [searchParams] = useSearchParams();
  const currentPage = searchParams.get('page');
  const currentProduct = searchParams.get('product');
  let currentLimit = searchParams.get('limit');
  if (currentLimit && !['5', '10', '15', '20'].includes(currentLimit)) {
    currentLimit = '10';
  }

  return {
    currentPage,
    currentProduct,
    currentLimit,
  };
}

export default RouteManager;
