import React, { useContext } from 'react';
import { SearchButtonProps } from '../../interfaces';
import myContext from '../../services/myContext';
import handleSearch from '../../services/handleSearch';
import { useNavigate } from 'react-router-dom';

function NavigationButtons({ inputValue, limit }: SearchButtonProps) {
  const navigate = useNavigate();
  const { setProductsData, setIsLoading, setTotalProducts, setPage } =
    useContext(myContext);

  const getError = () => {
    setProductsData(null);
  };

  return (
    <>
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
    </>
  );
}

export default NavigationButtons;
