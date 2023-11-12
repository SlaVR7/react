import axios, { AxiosResponse } from 'axios';
import { setAnonymousToken } from './getToken';
import { ProductList } from '../interfaces';

const apiUrl: string = 'https://api.us-central1.gcp.commercetools.com';
const projectKey: string = 'soap-shop';

export async function getProductsList(
  query = '',
  limit = 10,
  page = '1'
): Promise<ProductList> {
  query = query.trim().toLowerCase();
  const offset = (+page - 1) * +limit;
  const accessTokenJson: string | null = localStorage.getItem('token');
  try {
    const accessToken = JSON.parse(accessTokenJson!).access_token;

    const response: AxiosResponse<ProductList> = await axios.get(
      `${apiUrl}/${projectKey}/product-projections/search`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        params: {
          offset,
          limit,
          ['text.en']: query,
        },
      }
    );
    return response.data;
  } catch (error) {
    await setAnonymousToken();
    return await getProductsList(query, limit, page);
  }
}
