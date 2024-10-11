import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import useAuth from './useAuth';

const axiosSecure = axios.create({
  baseURL: 'http://localhost:5000', // API base URL
});

const useAxiosSecure = () => {
  const navigate = useNavigate();
  const { logOut } = useAuth();

  // Request interceptor to attach the authorization header
  axiosSecure.interceptors.request.use(
    config => {
      const token = localStorage?.getItem('access-token');
      console.log('secure token by interceptor', token);
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    error => Promise.reject(error)
  );

  // Response interceptor to handle 401 and 403 errors
  axiosSecure.interceptors.response.use(
    response => response,
    async error => {
      const status = error.response.status;
      if (status === 401 || status === 403) {
        await logOut();
        navigate('/login');
      }
      return Promise.reject(error);
    }
  );

  return axiosSecure;
};

export default useAxiosSecure;
