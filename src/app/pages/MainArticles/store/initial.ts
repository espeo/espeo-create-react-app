import { MainArticlesState } from '../namespace';

export const initial: MainArticlesState = {
  isLoading: false,
  isErr: false,
  page: 1,
  data: [],
  topic: '',
  sortBy: '',
  date: '',
};
