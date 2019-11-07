import { dateValues } from '../store/saga/index';

export interface MainArticlesState {
  isLoading: boolean;
  isErr: boolean;
  page: number;
  topic: string;
  sortBy: string;
  date: dateValues;
  data: {
    author: string;
    content: string;
    description: string;
    publishedAt: string;
    source: {
      id: null | string;
      name: string;
    };
    id: null;
    name: string;
    title: string;
    url: string;
    urlToImage: string;
  }[];
}

export default MainArticlesState;
