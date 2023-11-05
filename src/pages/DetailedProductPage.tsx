import { useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import MyContext from '../services/myContext';
import { ProductData } from '../interfaces';
import RouteManager from '../services/routeManager';
import { Loader } from '../components/addition/Loader';
import { DetailedProductCard } from '../components/body/DetailedProductCard';
import { fetchDataAndLoadImages } from '../services/fetchDataAndLoadImages';
import { closeDetails } from '../services/closeProductWindow';

function DetailedProductPage() {
  const { page, setProduct, productsData, limit } = useContext(MyContext);
  const navigate = useNavigate();
  const productName = RouteManager().currentProduct;
  const targetProductObj = productsData?.find(
    (product) => productName === product.name.en
  );

  const [currentObj, setCurrentObj] = useState<ProductData>();
  const [isLoadingImages, setIsLoadingImages] = useState(true);

  useEffect(() => {
    fetchDataAndLoadImages(targetProductObj, setCurrentObj, setIsLoadingImages);
  }, [targetProductObj]);

  return (
    <div
      onClick={() => closeDetails(page, limit, navigate, setProduct)}
      className="detailed-product-container"
    >
      <div className="product-page">
        <button
          className="detailed-product-close"
          onClick={() => closeDetails(page, limit, navigate, setProduct)}
        >
          Close
        </button>
        {isLoadingImages ? (
          <Loader />
        ) : (
          <DetailedProductCard productData={currentObj} />
        )}
      </div>
    </div>
  );
}

export default DetailedProductPage;
