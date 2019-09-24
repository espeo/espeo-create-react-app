import axios from 'axios';

import { getData } from '@core/utils';
import { Logic, Response } from '@core/namespace';

interface URLS {
  '/logic': Logic;
}

export type LogicResponse = Response<Logic>;

export const fetchLogic = (): Promise<Logic> => axios
  .request<LogicResponse>({
    url: '/api/logic',
  })
  .then(getData);
