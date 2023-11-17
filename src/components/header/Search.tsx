import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { searchSlice } from '../../redux/store/reducers/searchSlice';
import { limitSlice } from '../../redux/store/reducers/limitSlice';
import { pagesSlice } from '../../redux/store/reducers/pagesSlice';

function Search() {
  const dispatch = useAppDispatch();
  const setInputValue = searchSlice.actions.setSearchQuery;
  const userTypeValue = useAppSelector((state) => state.searchReducer.userType);
  const setUserType = searchSlice.actions.setUserType;
  const setLimit = limitSlice.actions.setLimit;
  const setPage = pagesSlice.actions.setCurrentPage;
  const navigate = useNavigate();

  return (
    <header>
      <input
        className={'search-input'}
        type="text"
        placeholder="Enter your search query"
        value={userTypeValue}
        onChange={(e) => {
          dispatch(setUserType(e.target.value));
        }}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            dispatch(setInputValue(userTypeValue));
          }
        }}
      />
      <select
        className={'search-input number-input'}
        onChange={(event) => {
          dispatch(setLimit(event.target.value));
          dispatch(setPage('1'));
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
          dispatch(setPage('1'));
          dispatch(setInputValue(userTypeValue));
          navigate(`?page=1&limit=10`);
        }}
      >
        Search
      </button>
    </header>
  );
}

export default Search;
