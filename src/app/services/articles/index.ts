import dayjs from 'dayjs';

import { dateValues } from '../../pages/MainArticles/store/saga/index';
import ApiService from '../config';

const apiUrl = process.env.API_URL;
const apiKey = process.env.API_KEY;
const now = dayjs();

export const getArticlesService = (
  page = 1,
  topic?: string,
  sortBy?: string,
  date?: dateValues,
) => {
  const selectedTopic = topic || 'sport';
  const sort = sortBy || '';
  const to = now.format('YYYY-MM-DD');
  let from;
  switch (date) {
    case 'today':
      from = to;
      break;
    case 'week':
      from = now.subtract(7, 'day').format('YYYY-MM-DD');
      break;
    case 'month':
      from = now.subtract(10, 'day').format('YYYY-MM-DD');
      break;
    default:
      from = to;
  }

  const myUrl = `${apiUrl}everything?q=${selectedTopic}&page=${page}&sortBy=${sort}&from=${from}&to=${to}&apiKey=${apiKey}`;

  return ApiService.get(myUrl)
    .then((data: any) => {
      return data;
    })
    .catch((error: any) => {
      console.error(error);
    });
};
