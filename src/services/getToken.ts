import axios from 'axios';
import { AxiosResponse } from '../interfaces';
import { authUrl, clientId, projectKey, secret } from '../lib/constants';

export async function getAnonymousToken() {
  try {
    const response: AxiosResponse = await axios({
      method: 'post',
      url: `${authUrl}/oauth/${projectKey}/anonymous/token?grant_type=client_credentials`,
      auth: {
        username: clientId,
        password: secret,
      },
    });
    return response;
  } catch (e) {
    console.log(e);
  }
}

export const setAnonymousToken = async () => {
  const id: AxiosResponse | undefined = await getAnonymousToken();
  if (id) {
    localStorage.setItem(`token`, JSON.stringify(id.data));
  }
};

export async function checkToken() {
  if (!localStorage.getItem('token')) {
    await setAnonymousToken();
  }
}
