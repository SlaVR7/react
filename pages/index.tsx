import ErrorBoundary from '../src/components/addition/ErrorBoundary';
import Search from '../src/components/header/Search';
import CardList from '../src/components/body/CardList';
import React from 'react';
import { GetServerSidePropsContext } from 'next';
import Head from 'next/head';
import { getAnonymousToken } from '../src/services/getToken';
import { productsApi } from '../src/redux/productsApi';
import { store } from '../src/redux/store';
import { ProductsResponse } from '../src/interfaces';
import { useRouter } from 'next/router';
import DetailedCard from '../src/components/addition/DetailedCard';

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const { query } = context;
  const token = await getAnonymousToken();
  const searchQuery = query.search || '';
  const limit = query.limit || 10;
  const page = query.page || '1';
  try {
    const data = await store.dispatch(
      productsApi.endpoints.getProductsList.initiate({
        query: searchQuery,
        limit: +limit,
        page,
        token,
      })
    );
    return {
      props: {
        data: data.data,
      },
    };
  } catch (error) {
    return {
      props: {
        data: null,
      },
    };
  }
};

const MainPage = (props: ProductsResponse) => {
  const router = useRouter();
  const detailsProduct = router.query.details;
  return (
    <>
      <Head>
        <title>Product list</title>
        <meta name="description" content="Some description" />
        <link rel="shortcut icon" href="logo.svg" type="image/x-icon" />
      </Head>
      <ErrorBoundary>
        <div data-testid="main-page" className="main-posts-container">
          <div>
            <Search />
            <CardList data={props.data} />
          </div>
          {detailsProduct && <DetailedCard data={props.data} />}
        </div>
      </ErrorBoundary>
    </>
  );
};

export default MainPage;
