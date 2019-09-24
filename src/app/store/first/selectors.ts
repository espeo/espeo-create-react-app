import { Logic } from '@core/namespace';

import { RootStore } from './../index';

export const getFirstData = ({ first }: RootStore): Logic | null => first.data;
