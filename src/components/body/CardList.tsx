import ProductCard from './Card';
import { ProductData, ProductsResponse } from '../../interfaces';
import Pagination from '../addition/Pagination';
import Link from 'next/link';
import { useRouter } from 'next/router';

function CardList({ data }: ProductsResponse) {
  const router = useRouter();
  const { page, limit, search } = router.query;
  return (
    <main>
      <div className="main">
        {data.results.length > 0 ? (
          data.results.map((product: ProductData, index: number) => (
            <Link
              key={product.name.en}
              href={{
                query: {
                  page: page || '1',
                  limit: limit || '10',
                  search: search || '',
                  details: product.name.en,
                },
              }}
            >
              <ProductCard key={index} data={product} />
            </Link>
          ))
        ) : (
          <h1>Oops! Products not found</h1>
        )}
      </div>
      <Pagination data={data} />
    </main>
  );
}

export default CardList;
