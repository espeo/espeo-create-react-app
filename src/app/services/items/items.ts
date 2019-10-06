import axios from 'axios';

import { Response } from '@core/namespace';

export type LogicResponse = Response<Logic>;

export const fetchLogic = (): Promise<Logic> => axios
  .request<LogicResponse>({
    url: '/api/logic',
  })
  .then(getData);
