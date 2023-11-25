import axios from 'axios';
import { apiUrl, projectKey } from '../lib/constants';

export async function getProductsList(
  query: string,
  limit: number,
  page: string,
  token: string
) {
  return await axios.get(`${apiUrl}/${projectKey}/product-projections/search`, {
    params: {
      offset: (+page - 1) * +limit,
      limit,
      ['text.en']: query.trim().toLowerCase(),
    },
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}
