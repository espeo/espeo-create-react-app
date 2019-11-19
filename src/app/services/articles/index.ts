import { dateValues } from '../../pages/MainArticles/store/saga/index';
import ApiService from '../config';

const apiUrl = process.env.API_URL;
const apiKey = process.env.API_KEY;

export const getArticlesService = (
  page = 1,
  topic = 'sport',
  sortBy?: string,
  date?: dateValues,
) => {
  const sort = sortBy ? `&sortBy=${sortBy}` : '';
  const dateFilter = date || '';
  const myUrl = `${apiUrl}everything?q=${topic}&page=${page}${sort}${dateFilter}&apiKey=${apiKey}`;

  return ApiService.get(myUrl)
    .then((data: any) => {
      return data;
    })
    .catch((error: any) => {
      console.log(error);
    });
};
