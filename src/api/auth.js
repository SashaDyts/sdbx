import axios from 'axios';

const instance = axios.create({
  // baseURL: 'http://localhost:3000/api',
  baseURL: 'https://sdbx-b-production.up.railway.app/api',
});

const setToken = token => {
  if (token) {
    return (instance.defaults.headers.common.authorization = `Bearer ${token}`);
  }
  instance.defaults.headers.common.authorization = '';
};

export const login = async credentials => {
  const { data } = await instance.post('/login', credentials);
  setToken(data.token);

  return data;
};

export default instance;
