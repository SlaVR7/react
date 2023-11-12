import React, { useContext, useEffect } from 'react';
import Search from '../components/header/Search';
import CardList from '../components/body/CardList';
import MyContext, { MyContextProvider } from '../services/myContext';
import ErrorBoundary from '../components/addition/ErrorBoundary';
import { checkToken } from '../services/getToken';
import { Outlet, useNavigate, useParams } from 'react-router-dom';
import { closeDetails } from '../services/closeProductWindow';

export function MainPage() {
  const navigate = useNavigate();
  const { details } = useParams();
  const { page, limit, setProduct } = useContext(MyContext);
  useEffect(() => {
    checkToken();
  }, []);

  return (
    <MyContextProvider>
      <ErrorBoundary>
        <div className="main-posts-container">
          <div
            onClick={() =>
              details && closeDetails(page, limit, navigate, setProduct)
            }
          >
            <Search />
            <CardList />
          </div>
          <Outlet />
        </div>
      </ErrorBoundary>
    </MyContextProvider>
  );
}

export default MainPage;
