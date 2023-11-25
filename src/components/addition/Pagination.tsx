import { useRouter } from 'next/router';
import { ProductsResponse } from '../../interfaces';

function Pagination({ data }: ProductsResponse) {
  const router = useRouter();
  const { limit, page, search } = router.query;
  const totalPages = data.total / +(limit || 10);
  let currentPage: string;
  if (page) {
    currentPage = +page > +totalPages ? '1' : (page as string);
  } else {
    currentPage = '1';
  }
  const pagesArray: string[] = Array.from({ length: totalPages }, (_e, i) =>
    (i + 1).toString()
  );
  return (
    <div className="pagination-pages">
      {pagesArray.map((p: string) => {
        return (
          <div
            onClick={() => {
              router.push(
                `/?page=${p}&limit=${limit || '10'}&search=${search || ''}`
              );
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
