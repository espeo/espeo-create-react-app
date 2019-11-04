import { MainArticlesState } from '../namespace';

export const initial: MainArticlesState = {
  isLoading: false,
  page: 1,
  data: [],
  topic: '',
  sortBy: '',
  date: '',
};
