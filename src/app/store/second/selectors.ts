import { Logic } from '@core/namespace';

import { RootStore } from './../index';

export const getSecondDate = ({ second }: RootStore): Logic | null => second.data;
