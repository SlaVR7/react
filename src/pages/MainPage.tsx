import React from 'react';
import Search from '../components/header/Search';
import CardList from '../components/body/CardList';
import ErrorBoundary from '../components/addition/ErrorBoundary';
import { Outlet, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { productsSlice } from '../redux/store/reducers/productSlice';

export function MainPage() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const isDetailsOpen = useAppSelector(
    (state) => state.productsReducer.isDetailsOpen
  );
  const setIsDetailsOpen = productsSlice.actions.setIsDetailsOpen;

  const page = useAppSelector((state) => state.pagesReducer.currentPage);
  const limit = useAppSelector((state) => state.limitReducer.limit);

  return (
    <ErrorBoundary>
      <div data-testid="main-page" className="main-posts-container">
        <div
          onClick={() => {
            if (isDetailsOpen) {
              dispatch(setIsDetailsOpen(false));
              navigate(`/?page=${page}&limit=${limit}`);
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
