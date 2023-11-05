import axios from 'axios';
import { AxiosResponse } from '../interfaces';

const authUrl: string = 'https://auth.us-central1.gcp.commercetools.com';
const projectKey: string = 'soap-shop';
const secret: string = 'D2-f8EsBnWlpZgopdolhXmfiDa795vOt';
const clientId: string = 'LTszMlT5Ri7IS0_ZZIVDCMsD';

export async function getAnonymousToken() {
  try {
    const response: AxiosResponse = await axios({
      method: 'post',
      url: `${authUrl}/oauth/${projectKey}/anonymous/token?grant_type=client_credentials`,
      headers: {
        Authorization: 'Basic ' + btoa(`${clientId}:${secret}`),
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
