import { Link, useSearchParams } from 'react-router-dom';
import { Loader } from '../components/addition/Loader';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { useGetProductsListQuery } from '../redux/productsApi';
import { useEffect, useState } from 'react';
import { fetchDataAndLoadImages } from '../services/fetchDataAndLoadImages';
import { ProductData } from '../interfaces';
import { setDetailsLoading } from '../redux/store/reducers/loadingSlice';

function DetailedCard() {
  const dispatch = useAppDispatch();
  const limit = useAppSelector((state) => state.limitReducer.limit);
  const page = useAppSelector((state) => state.pagesReducer.currentPage);
  const query = useAppSelector((state) => state.searchReducer.userInput);
  const { data } = useGetProductsListQuery({ query, limit, page });
  const [searchParams] = useSearchParams();
  const productName = searchParams.get('product');
  const targetProductObj = data?.results?.find(
    (product: ProductData) => productName === product.name.en
  );
  const isDetailsLoading = useAppSelector(
    (state) => state.loadingReducer.isDetailsLoading
  );
  const [imagesLoading, setImagesLoading] = useState(true);
  const images = targetProductObj?.masterVariant.images;

  useEffect(() => {
    imagesLoading
      ? dispatch(setDetailsLoading(true))
      : dispatch(setDetailsLoading(false));
  }, [imagesLoading]);

  useEffect(() => {
    fetchDataAndLoadImages(targetProductObj, setImagesLoading);
  }, []);

  return (
    <div
      data-testid="detailed-container"
      className="detailed-product-container"
    >
      <div className="product-page">
        <Link to={`/?page=${page}&limit=${limit}`}>
          <button className="detailed-product-close">Close</button>
        </Link>
        {!data || isDetailsLoading ? (
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
