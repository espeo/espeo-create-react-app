import { Logic } from '@core/domain';

import { RootStore } from '../index';

export const getFirstDate = ({ first }: RootStore): Logic => first.data;
