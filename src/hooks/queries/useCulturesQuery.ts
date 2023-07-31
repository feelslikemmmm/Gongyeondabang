import { useQuery } from 'react-query';
import axios from 'axios';

export const QUERY_KEY = '/cultures';
const today = new Date();
const formatToday = today.toISOString().substring(0, 10).replace(/-/g, '');

const fetcher = () =>
  axios
    .get('/period', {
      params: {
        serviceKey: import.meta.env.VITE_API_SERVICE_KEY,
        from: formatToday,
        to: formatToday,
      },
    })
    .then((response) => response.data);

const useCulturesQuery = () => {
  return useQuery([QUERY_KEY], fetcher, {
    onSuccess: (data) => {
      console.log('성공!', data);
    },
    onError: (err) => console.log('err발생!', err),
  });
};

export default useCulturesQuery;
