import { combineEpics } from 'redux-observable';

import { mainEpic } from '@core/pages/main/store/epics';

export const rootEpic = combineEpics(...mainEpic);
