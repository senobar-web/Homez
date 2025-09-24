import axios from 'axios';
import type {AxiosRequestConfig, AxiosResponse} from 'axios';
export interface ApiResponse<T> {
  data: T;
  status: number;
}
const ApiRequest = async <T,>(
  endpoint: string,
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' = 'GET',
  body?: T,
  headers?: Record<string, string>
): Promise<ApiResponse<T>> => {
  const Api_Url: string | undefined = import.meta.env.VITE_API_URL;
  const url = `${Api_Url}${endpoint}`;
  const options: AxiosRequestConfig = {
    method,
    url,
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
    data: body,
  };

  try {
    const response: AxiosResponse<T> = await axios(options);
    return response;
  } catch (error) {
    console.error('درخواست Api ناموفق بود:', error);
    throw error;
  }
};

export default ApiRequest;
