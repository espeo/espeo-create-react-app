import { dateValues } from '../../pages/MainArticles/store/saga/index';
import ApiService from '../config';

const apiUrl = 'https://newsapi.org/v2/';
const API_KEY = 'f7bcdf1d533f4c4491fc0536acfa84ca';

export const getArticlesService = (
  page = 1,
  topic = 'sport',
  sortBy?: string,
  date?: dateValues,
) => {
  const sort = sortBy ? `&sortBy=${sortBy}` : '';
  const dateFilter = date || '';
  const myUrl = `${apiUrl}everything?q=${topic}&page=${page}${sort}${dateFilter}&apiKey=${API_KEY}`;

  return ApiService.get(myUrl)
    .then((data: any) => {
      return data;
    })
    .catch((error: any) => {
      console.log(error);
    });
};
