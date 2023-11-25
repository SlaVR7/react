import axios from 'axios';
import { authUrl, clientId, projectKey, secret } from '../lib/constants';

export async function getAnonymousToken() {
  try {
    const response = await axios.post(
      `${authUrl}/oauth/${projectKey}/anonymous/token?grant_type=client_credentials`,
      null,
      {
        auth: {
          username: clientId,
          password: secret,
        },
      }
    );
    return response.data.access_token;
  } catch (e) {
    console.log(e);
  }
}
