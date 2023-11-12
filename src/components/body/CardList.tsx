import React, { useContext } from 'react';
import ProductCard from './Card';
import MyContext from '../../services/myContext';
import { ProductData } from '../../interfaces';
import Pagination from '../addition/Pagination';
import { Link } from 'react-router-dom';
import { Loader } from '../addition/Loader';

function CardList() {
  const { productsData, isLoading, page, limit } = useContext(MyContext);
  let content;
  if (productsData) {
    const isCardsExist = productsData.length !== 0;
    if (isLoading) {
      content = <Loader />;
    } else if (isCardsExist) {
      content = productsData.map((product: ProductData, index: number) => (
        <Link
          key={product.name.en}
          to={`details/?page=${page}&limit=${limit}&product=${product.name.en}`}
        >
          <ProductCard key={index} data={product} />
        </Link>
      ));
    } else {
      content = <h1>Oops! Products does not found</h1>;
    }
  }

  return (
    <main>
      <div className="main">{content}</div>
      <Pagination />
    </main>
  );
}

export default CardList;
