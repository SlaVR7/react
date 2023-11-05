import React, { useContext, useEffect, useState } from 'react';
import handleSearch from '../../services/handleSearch';
import { getPagesArray } from '../../services/getPagesCount';
import MyContext from '../../services/myContext';
import { useNavigate } from 'react-router-dom';

function Pagination() {
  const navigate = useNavigate();

  const {
    setIsLoading,
    setProductsData,
    inputValue,
    limit,
    setTotalProducts,
    totalPages,
    page,
    setPage,
    product,
  } = useContext(MyContext);

  const [isInitialLoad, setIsInitialLoad] = useState(true);
  useEffect(() => {
    setIsInitialLoad(false);
  }, []);

  useEffect(() => {
    if (!isInitialLoad) {
      handleSearch({
        setIsLoading,
        setProductsData,
        inputValue,
        limit,
        setTotalProducts,
        page,
      });
      product
        ? navigate(`?page=${page}&limit=${limit}&product=${product}`)
        : navigate(`?page=${page}&limit=${limit}`);
    }
  }, [page, isInitialLoad]);

  const currentPage = +page > totalPages ? '1' : page;
  const pagesArray: string[] = getPagesArray(totalPages);

  return (
    <div className="pagination-pages">
      {pagesArray.map((p: string) => {
        return (
          <div
            onClick={() => {
              setPage(p);
            }}
            className={
              currentPage === p
                ? 'pagination-page pagination-page-current'
                : 'pagination-page'
            }
            key={p}
          >
            {p}
          </div>
        );
      })}
    </div>
  );
}

export default Pagination;
