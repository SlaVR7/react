import React from 'react';
import Search from '../components/header/Search';
import CardList from '../components/body/CardList';
import ErrorBoundary from '../components/addition/ErrorBoundary';
import { Outlet, useNavigate, useParams } from 'react-router-dom';
import { closeDetails } from '../services/closeProductWindow';
import { useAppSelector } from '../hooks/redux';

export function MainPage() {
  const navigate = useNavigate();
  const { details } = useParams();

  const page = useAppSelector((state) => state.pagesReducer.currentPage);
  const limit = useAppSelector((state) => state.limitReducer.limit);

  return (
    <ErrorBoundary>
      <div className="main-posts-container">
        <div
          onClick={(e) => {
            if (details) {
              e.preventDefault();
              closeDetails(page, limit, navigate);
            }
          }}
        >
          <Search />
          <CardList />
        </div>
        <Outlet />
      </div>
    </ErrorBoundary>
  );
}

export default MainPage;
