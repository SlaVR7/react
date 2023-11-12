import React from 'react';
import { ProductCardProps, ProductData } from '../../interfaces';
import ImageComponent from '../addition/ImageComponent';

function ProductCard(props: ProductCardProps) {
  const data: ProductData | null = props.data;
  if (!data) return;

  return (
    <div data-testid="product-card" className={'product-card'}>
      <div>
        <ImageComponent
          src={data.masterVariant.images[0].url}
          alt={data.name + ' photo'}
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
