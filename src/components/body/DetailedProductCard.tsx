import { DetailedProductCardProps } from '../../interfaces';

export function DetailedProductCard({ productData }: DetailedProductCardProps) {
  return (
    <>
      <h1 className="detailed-product-title">{productData?.name.en}</h1>
      <div className="detailed-images-block">
        <img
          className="detailed-product-image"
          src={productData?.masterVariant.images[0].url}
          alt="product image"
        />
        {productData?.masterVariant.images[1] && (
          <img
            className="detailed-product-image"
            src={productData.masterVariant.images[1].url}
            alt="product image"
          />
        )}
      </div>
      <p className="detailed-product-info">{productData?.description.en}</p>
    </>
  );
}
