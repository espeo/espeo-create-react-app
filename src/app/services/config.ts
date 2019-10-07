import axios from 'axios';
import localStorageService from '@core/services/local-storage';

const DOMAIN = 'http://localhost:4201'; // default mocked server url

const UNAUTHORIZED = 401;
const ACCESS_DENIED = 403;

interface ApiService {
  [name: string]: any;
}

class ApiService implements ApiService {
  public constructor() {
    axios.interceptors.response.use(
      response => {
        return response;
      },
      async error => {
        if (error && error.response) {
          const { status } = error.response;
          if (status === UNAUTHORIZED || status === ACCESS_DENIED) {
            // for example logout action here
          }
        }
        return Promise.reject(error);
      },
    );
  }

  public request(type: string, url: string, data: any) {
    const config = this.getConfig();
    /* eslint-disable */
    // @ts-ignore
    return axios[type](`${DOMAIN}/${url}`, data, config);
    /* eslint-enable */
  }

  private getConfig() {
    const token = localStorageService.get('token');

    let headers = {
      'Content-Type': 'application/json',
    };

    if (token) {
      headers = {
        ...headers,
        // 'x-auth-token': token,
      };
    }

    return {
      headers,
    };
  }
}

export default new ApiService();
