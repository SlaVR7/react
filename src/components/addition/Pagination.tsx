import { getPagesArray } from '../../services/getPagesCount';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { setCurrentPage } from '../../redux/store/reducers/pagesSlice';
import { useNavigate } from 'react-router-dom';

function Pagination() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const page = useAppSelector((state) => state.pagesReducer.currentPage);
  const limit = useAppSelector((state) => state.limitReducer.limit);
  const totalPages = useAppSelector((state) => state.pagesReducer.totalPages);

  const currentPage = +page > +totalPages ? '1' : page;
  const pagesArray: string[] = getPagesArray(+totalPages);

  return (
    <div className="pagination-pages">
      {pagesArray.map((p: string) => {
        return (
          <div
            onClick={() => {
              dispatch(setCurrentPage(p));
              navigate(`/?page=${p}&limit=${limit}`);
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
