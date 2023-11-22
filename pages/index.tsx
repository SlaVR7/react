import ErrorBoundary from '../src/components/addition/ErrorBoundary';
import Search from '../src/components/header/Search';
import CardList from '../src/components/body/CardList';
import { Outlet } from 'react-router-dom';
import React from 'react';
import { GetServerSidePropsContext } from 'next';
import { getProductsList } from '../src/services/getProductsList';
import Head from 'next/head';
import {getAnonymousToken} from "../src/services/getToken";

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const query = '';
  const limit = 10;
  const page = '1';
  console.log('TOKEN IS ', context.req.headers);

  const authorizationToken = await getAnonymousToken();

  try {
    const response = await getProductsList(query, limit, page, authorizationToken);
    console.log('response', response)
    return {
      props: {
        data: response.data,
      },
    };
  } catch (error) {
    // console.log('error catch', error)
    return {
      props: {
        data: null,
      },
    };
  }
};

const MainPage = (props: GetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <>
      <Head>
        <title>Product list</title>
        <meta name="description" content="Some description" />
      </Head>
      <ErrorBoundary>
        <div data-testid="main-page" className="main-posts-container">
          <div>
            <Search />
            <CardList data={props.data} />
          </div>
          <Outlet />
        </div>
      </ErrorBoundary>
    </>
  );
};

export default MainPage;
