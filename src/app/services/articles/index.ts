import { dateValues } from '../../pages/MainArticles/store/saga/index';
import ApiService from '../config';

const apiUrl = process.env.API_URL;
const apiKey = process.env.API_KEY;

export const getArticlesService = (
  page = 1,
  topic?: string,
  sortBy?: string,
  date?: dateValues,
) => {
  const selectedTopic = topic || 'sport';
  const sort = sortBy || '';
  let to;
  to = new Date();
  let from;
  switch (date) {
    case 'today':
      from = to;
      break;
    case 'week':
      from = new Date().setDate(to.getDate() - 7);
      break;
    case 'month':
      from = new Date().setDate(to.getDate() - 10);
      break;
    default:
      from = to;
  }
  to = to.toISOString().substr(0, 10);
  from = new Date(from).toISOString().substr(0, 10);

  const myUrl = `${apiUrl}everything?q=${selectedTopic}&page=${page}&sortBy=${sort}&from=${from}&to=${to}&apiKey=${apiKey}`;

  return ApiService.get(myUrl)
    .then((data: any) => {
      return data;
    })
    .catch((error: any) => {
      console.error(error);
    });
};
