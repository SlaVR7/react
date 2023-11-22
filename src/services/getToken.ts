import axios from 'axios';
import { TokenResponse } from '../interfaces';
import { authUrl, clientId, projectKey, secret } from '../lib/constants';

export async function getAnonymousToken() {
  try {
    return await axios({
      method: 'post',
      url: `${authUrl}/oauth/${projectKey}/anonymous/token?grant_type=client_credentials`,
      auth: {
        username: clientId,
        password: secret,
      },
    });
  } catch (e) {
    console.log(e);
  }
}

export const setAnonymousToken = async () => {
  const id: TokenResponse | undefined = await getAnonymousToken();
  if (id) {
    localStorage.setItem(`token`, JSON.stringify(id.data));
  }
};
