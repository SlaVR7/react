import { useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import MyContext from '../services/myContext';
import { ProductData } from '../interfaces';
import RouteManager from '../services/routeManager';
import { Loader } from '../components/addition/Loader';
import { fetchDataAndLoadImages } from '../services/fetchDataAndLoadImages';
import { closeDetails } from '../services/closeProductWindow';

function DetailedCard() {
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
      data-testid="detailed-container"
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
          <>
            <h1 className="detailed-product-title">{currentObj?.name.en}</h1>
            <div className="detailed-images-block">
              <img
                className="detailed-product-image"
                src={currentObj?.masterVariant.images[0].url}
                alt="product image"
              />
              {currentObj?.masterVariant.images[1] && (
                <img
                  className="detailed-product-image"
                  src={currentObj.masterVariant.images[1].url}
                  alt="product image"
                />
              )}
            </div>
            <p className="detailed-product-info">
              {currentObj?.description.en}
            </p>
          </>
        )}
      </div>
    </div>
  );
}

export default DetailedCard;
