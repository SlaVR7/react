import { useNavigate, useSearchParams } from 'react-router-dom';
import { Loader } from '../components/addition/Loader';
import { closeDetails } from '../services/closeProductWindow';
import { useAppSelector } from '../hooks/redux';
import { useGetProductsListQuery } from '../redux/productsApi';
import { useEffect, useState } from 'react';
import { fetchDataAndLoadImages } from '../services/fetchDataAndLoadImages';
import { ProductData } from '../interfaces';

function DetailedCard() {
  const limit = useAppSelector((state) => state.limitReducer.limit);
  const page = useAppSelector((state) => state.pagesReducer.currentPage);
  const query = useAppSelector((state) => state.searchReducer.userInput);
  const { data } = useGetProductsListQuery({ query, limit, page });
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const productName = searchParams.get('product');
  const targetProductObj = data?.results?.find(
    (product: ProductData) => productName === product.name.en
  );
  // ХРАНИТЬ В STORE
  const [imagesLoading, setImagesLoading] = useState(true);
  const images = targetProductObj?.masterVariant.images;

  useEffect(() => {
    fetchDataAndLoadImages(targetProductObj, setImagesLoading);
  }, []);

  return (
    <div
      data-testid="detailed-container"
      className="detailed-product-container"
    >
      <div className="product-page">
        <button
          className="detailed-product-close"
          onClick={() => closeDetails(page, limit, navigate)}
        >
          Close
        </button>
        {!data || imagesLoading ? (
          <Loader />
        ) : (
          <>
            <h1 className="detailed-product-title">
              {targetProductObj?.name.en}
            </h1>
            <div className="detailed-images-block">
              {images
                .slice(0, 2)
                .map((image: { url: string }, index: number) => (
                  <img
                    key={index}
                    className="detailed-product-image"
                    src={image.url}
                    alt={`product image ${index + 1}`}
                  />
                ))}
            </div>
            <p className="detailed-product-info">
              {targetProductObj?.description.en}
            </p>
          </>
        )}
      </div>
    </div>
  );
}

export default DetailedCard;
