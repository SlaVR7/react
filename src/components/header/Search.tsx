import { useRouter } from 'next/router';
import { FormEvent } from 'react';

function Search() {
  const router = useRouter();
  const limit = router.query.limit;
  const search = router.query.search;

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const inputValue = formData.get('searchInput');
    router.push(`?page=1&limit=${limit || '10'}&search=${inputValue}`);
  };

  return (
    <header>
      <form role="form" onSubmit={handleSubmit} id="myForm">
        <input
          className={'search-input'}
          type="text"
          name="searchInput"
          placeholder="Enter your search query"
          form={'myForm'}
        />
        <select
          role="select"
          className={'search-input number-input'}
          onChange={(event) => {
            router.push(
              `?page=1&limit=${event.target.value}&search=${search || ''}`
            );
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
        <button className={'header-button'} type={'submit'}>
          Search
        </button>
      </form>
    </header>
  );
}

export default Search;
