import React from 'react';
import { ProductData } from '../../interfaces';

export interface ProductCardProps {
  data: ProductData | null;
}

function ProductCard(props: ProductCardProps) {
  const data: ProductData | null = props.data;
  if (!data) return;

  return (
    <div data-testid="product-card" className={'product-card'}>
      <div>
        <img
          data-testid="product-image"
          src={data.masterVariant.images[0].url}
          alt={data.name + ' photo'}
          className={'product-image'}
        />
        <h2 className={'product-name'}>{data.name.en}</h2>
      </div>
      <p className={'product-info'}>
        <span className={'product-price'}>Price: </span>
        {data.masterVariant.prices[0].value.centAmount / 100} EUR
      </p>
    </div>
  );
}

export default ProductCard;
