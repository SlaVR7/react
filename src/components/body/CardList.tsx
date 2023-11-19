import React, { useEffect } from 'react';
import ProductCard from './Card';
import { ProductData } from '../../interfaces';
import Pagination from '../addition/Pagination';
import { Link } from 'react-router-dom';
import { Loader } from '../addition/Loader';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { useGetProductsListQuery } from '../../redux/productsApi';
import { setTotalPages } from '../../redux/store/reducers/pagesSlice';

function CardList() {
  const dispatch = useAppDispatch();
  const limit = useAppSelector((state) => state.limitReducer.limit);
  const page = useAppSelector((state) => state.pagesReducer.currentPage);
  const query = useAppSelector((state) => state.searchReducer.userInput);
  const isLoading = useAppSelector((state) => state.loadingReducer.isLoading);
  const { data } = useGetProductsListQuery({ query, limit, page });

  useEffect(() => {
    if (data) {
      dispatch(setTotalPages(data.total / +limit));
    }
  }, [data]);

  let content;
  if (data) {
    const isCardsExist = data.results.length !== 0;
    if (isLoading) {
      content = <Loader />;
    } else if (isCardsExist) {
      content = data.results.map((product: ProductData, index: number) => (
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
      {isLoading ? <Loader /> : <div className="main">{content}</div>}
      <Pagination />
    </main>
  );
}

export default CardList;
