import { combineEpics } from 'redux-observable';

import { articlesEpic } from '@core/pages/MainArticles/store/epics';

export const rootEpic = combineEpics(...articlesEpic);
