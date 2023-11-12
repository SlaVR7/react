import React, { useContext } from 'react';
import myContext from '../../services/myContext';
import handleSearch from '../../services/handleSearch';
import { useNavigate } from 'react-router-dom';

function NavigationButtons() {
  const navigate = useNavigate();
  const {
    setProductsData,
    setIsLoading,
    setTotalProducts,
    setPage,
    inputValue,
    limit,
  } = useContext(myContext);
  console.log('input in NavigBTNS: ', inputValue);
  const getError = () => {
    setProductsData(null);
  };

  return (
    <>
      <button
        className={'header-button'}
        onClick={() => {
          console.log('Call HandleSearch With:', inputValue);
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
    </>
  );
}

export default NavigationButtons;
