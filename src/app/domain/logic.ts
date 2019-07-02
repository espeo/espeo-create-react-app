import { Response } from './common';

export interface Logic {
  id: string;
  name: string;
}

export type LogicResponse = Response<Logic>;
