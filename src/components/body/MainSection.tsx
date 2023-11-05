import React, { useContext } from 'react';
import ProductCard from './ProductCard';
import MyContext from '../../services/myContext';
import { ProductData } from '../../interfaces';
import Pagination from '../addition/Pagination';
import { Link } from 'react-router-dom';
import { Loader } from '../addition/Loader';

function MainSection() {
  const { productsData, isLoading, page, limit } = useContext(MyContext);
  const isCardsExist = productsData!.length !== 0;

  let content;
  if (isLoading) {
    content = <Loader />;
  } else if (isCardsExist) {
    content = productsData!.map((product: ProductData, index: number) => (
      <Link
        key={product.name.en}
        to={`details/?page=${page}&limit=${limit}&product=${product.name.en}`}
      >
        <ProductCard key={index} data={product} />
      </Link>
    ));
  } else {
    content = <h1>Oops! Character does not found</h1>;
  }

  return (
    <main>
      <div className="main">{content}</div>
      <Pagination />
    </main>
  );
}

export default MainSection;
