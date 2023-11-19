import React from 'react';
import Search from '../components/header/Search';
import CardList from '../components/body/CardList';
import ErrorBoundary from '../components/addition/ErrorBoundary';
import { Outlet } from 'react-router-dom';

export function MainPage() {
  return (
    <ErrorBoundary>
      <div data-testid="main-page" className="main-posts-container">
        <div>
          <Search />
          <CardList />
        </div>
        <Outlet />
      </div>
    </ErrorBoundary>
  );
}

export default MainPage;
