import React, { useContext, useEffect, useState } from 'react';
import handleSearch from '../../services/handleSearch';
import myContext from '../../services/myContext';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../hooks/redux';
import { searchSlice } from '../../store/reducers/searchSlice';

function Search() {
  const dispatch = useDispatch();
  const inputValue = useAppSelector((state) => state.searchReducer.userInput);
  const setInputValue = searchSlice.actions.setSearchQuery;
  const navigate = useNavigate();
  const [isSelectCall, setIsSelectCall] = useState(false);
  const {
    setProductsData,
    setIsLoading,
    setTotalProducts,
    setLimit,
    limit,
    page,
    setPage,
  } = useContext(myContext);

  const getError = () => {
    setProductsData(null);
  };

  const handleSearchAndNavigate = (isToFirstPage?: boolean) => {
    handleSearch({
      setIsLoading,
      setProductsData,
      inputValue,
      limit,
      setTotalProducts,
      page,
    });
    let currentPage: string;
    if (isToFirstPage || isSelectCall) {
      currentPage = '1';
    } else currentPage = page;
    setPage(currentPage);
    navigate(`?page=${currentPage}&limit=${limit}`);
    setIsSelectCall(false);
  };

  useEffect(() => {
    if (isSelectCall) {
      handleSearchAndNavigate();
    }
  }, [limit]);

  return (
    <header>
      <input
        className={'search-input'}
        type="text"
        placeholder="Enter your search query"
        value={inputValue}
        onChange={(e) => {
          dispatch(setInputValue(e.target.value));
        }}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleSearchAndNavigate(true);
          }
        }}
      />
      <select
        className={'search-input number-input'}
        onChange={(event) => {
          setLimit(event.target.value);
          setIsSelectCall(true);
        }}
        defaultValue="default"
      >
        <option disabled={true} value="default">
          Cards per page
        </option>
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="15">15</option>
        <option value="20">20</option>
      </select>
      <button
        className={'header-button'}
        onClick={() => {
          handleSearch({
            setIsLoading,
            setProductsData,
            inputValue,
            limit,
            setTotalProducts,
          });
          setPage('1');
          navigate(`?page=1&limit=10`);
        }}
      >
        Search
      </button>
      <button className={'header-button'} onClick={getError}>
        Get an error
      </button>
    </header>
  );
}

export default Search;
