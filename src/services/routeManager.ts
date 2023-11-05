import { useLocation } from 'react-router-dom';
import { Location } from '../interfaces';

function RouteManager() {
  const location: Location = useLocation();
  const searchParams = new URLSearchParams(location.search);
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
