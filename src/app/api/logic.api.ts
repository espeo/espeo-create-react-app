import axios from 'axios';

import { Logic, LogicResponse } from '@core/domain';
import { getData } from '@core/utils';

export const fetchLogic = (): Promise<Logic> =>
  axios
    .request<LogicResponse>({
      url: '/api/logic',
    })
    .then(getData);
