import { Logic } from '@core/domain';

import { RootStore } from '../index';

export const getFirstData = ({ first }: RootStore): Logic | null => first.data;
