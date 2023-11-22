import React, { useEffect } from 'react';
import ProductCard from './Card';
import { ProductData } from '../../interfaces';
import Pagination from '../addition/Pagination';
import Link from 'next/link';
import { Loader } from '../addition/Loader';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { useGetProductsListQuery } from '../../redux/productsApi';
import { setTotalPages } from '../../redux/store/reducers/pagesSlice';
import {getProductsList} from "../../services/getProductsList";

function CardList({ data }) {
  // const dispatch = useAppDispatch();
  // const limit = useAppSelector((state) => state.limitReducer.limit);
  // const page = useAppSelector((state) => state.pagesReducer.currentPage);
  // const query = useAppSelector((state) => state.searchReducer.userInput);
  // const isLoading = useAppSelector((state) => state.loadingReducer.isLoading);
  // // const { data } = useGetProductsListQuery({ query, limit, page });
  console.log('DATA', data)
  // useEffect(() => {
  //   if (data) {
  //     dispatch(setTotalPages(data.total / +limit));
  //   }
  // }, [data]);

  return (
    <main>
      {!data ? (
        <Loader />
      ) : (
        <div className="main">
          {data.results.length > 0 ? (
            data.results.map((product: ProductData, index: number) => (
              <Link
                key={product.name.en}
                href={`details/?page=${'1'}&limit=${'10'}&product=${product.name.en}`}
              >
                <ProductCard key={index} data={product} />
              </Link>
            ))
          ) : (
            <h1>Oops! Products not found</h1>
          )}
        </div>
      )}
      <Pagination />
    </main>
  );
}

export default CardList;
