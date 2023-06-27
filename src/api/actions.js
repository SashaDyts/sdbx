import instance from './auth';

export const getAccs = async () => {
  const { data } = await instance.get('/accounts');
  return data;
};
export const getAccMaps = async acc => {
  const { data } = await instance.get(`/getAccMaps?accountName=${acc}`);
  return data;
};
export const changeAccEP = async credentials => {
  const { data } = await instance.post('/changeAccEP', credentials);
  return data;
};
export const changeMapDone = async credentials => {
  const { data } = await instance.post('/changeMapDone', credentials);
  return data;
};
export const favorites = async credentials => {
  const { data } = await instance.post('/favorites', credentials);
  return data;
};
