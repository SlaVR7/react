import { ProductData, ProductsResponse } from '../../interfaces';
import { useRouter } from 'next/router';

function DetailedCard({ data }: ProductsResponse) {
  const router = useRouter();
  const { page, limit, search, details } = router.query;
  const targetProductObj = data?.results?.find(
    (product: ProductData) => details === product.name.en
  );
  const images = targetProductObj?.masterVariant.images;
  return (
    <div
      data-testid="detailed-container"
      className="detailed-product-container"
    >
      <div className="product-page">
        <button
          onClick={() =>
            router.push(`/?page=${page}&limit=${limit}&search=${search}`)
          }
          className="detailed-product-close"
        >
          Close
        </button>
        <>
          <h1 className="detailed-product-title">
            {targetProductObj?.name.en}
          </h1>
          <div className="detailed-images-block">
            {images &&
              images
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
      </div>
    </div>
  );
}

export default DetailedCard;
