import { Response } from '@core/utils';

export interface Logic {
  id: string;
  name: string;
}
export type LogicResponse = Response<Logic>;
