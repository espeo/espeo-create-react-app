import { Logic } from '@core/domain';

import { RootStore } from '../index';

export const getSecondDate = ({ second }: RootStore): Logic => second.data;
