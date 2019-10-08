import axios from 'axios';
import localStorageService from '@core/services/local-storage';

const baseURL = 'http://localhost:4201'; // default mocked server url

const UNAUTHORIZED = 401;
const ACCESS_DENIED = 403;

class ApiService {
  public request: any;

  constructor() {
    const config = {
      baseURL,
      headers: {
        'Content-Type': 'application/json',
        ...this.getHeaders(),
      },
    };

    this.request = axios.create(config);

    this.request.interceptors.response.use(
      (response: any) => response,
      (error: any) => {
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

  public get<T>(url: string, params?: any, options?: {}): Promise<T> {
    const config = { params, ...options };

    return this.request.get(url, config);
  }

  public post<T>(url: string, data?: {}, options?: {}): Promise<T> {
    return this.request.post(url, data, options);
  }

  private getHeaders() {
    const token = localStorageService.get('token');

    let headers = {};

    if (token) {
      headers = {
        'x-auth-token': token,
      };
    }

    return {
      headers,
    };
  }
}

export default new ApiService();
