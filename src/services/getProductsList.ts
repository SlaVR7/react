import axios from 'axios';
import { apiUrl, projectKey } from '../lib/constants';
import { setAnonymousToken } from './getToken';

export async function getProductsList(
  query: string,
  limit: number,
  page: string
) {
  try {
    const token = localStorage.getItem('token') || '';
    return await axios.get(
      `${apiUrl}/${projectKey}/product-projections/search`,
      {
        params: {
          offset: (+page - 1) * +limit,
          limit,
          ['text.en']: query.trim().toLowerCase(),
        },
        headers: {
          Authorization: `Bearer ${JSON.parse(token).access_token}`,
        },
      }
    );
  } catch (e) {
    await setAnonymousToken();
    return await getProductsList(query, limit, page);
  }
}
