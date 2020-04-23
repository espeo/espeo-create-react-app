import dayjs from 'dayjs';
import { dateValues } from '@pages/MainArticles/store/saga';
import ApiService from '../config';

const apiKey = process.env.API_KEY;

export const getArticles = ({
  page = 1,
  topic = 'sport',
  sortBy = '',
  date = '',
}: {
  page: number;
  topic?: string;
  sortBy?: string;
  date?: dateValues;
}) => {
  const now = dayjs();
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

  const url = `everything`;
  const params = {
    q: selectedTopic,
    page,
    sortBy: sort,
    from,
    to,
    apiKey,
  };
  return ApiService.get(url, params)
    .then((data: any) => data)
    .catch((error: any) => {
      throw new Error(error);
    });
};

export const getArticleByTitle = (title: string) => {
  const url = `everything`;
  const params = {
    q: title,
    pageSize: 1,
    apiKey,
  };

  return ApiService.get(url, params)
    .then((response: any) => {
      const {
        data: { status, articles },
      } = response;

      const [article] = articles;

      return {
        ...response,
        data: {
          status,
          article,
        },
      };
    })
    .catch((error: any) => {
      throw new Error(error);
    });
};
