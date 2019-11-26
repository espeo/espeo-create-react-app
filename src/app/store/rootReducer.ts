import { combineReducers, Reducer } from 'redux';
import { mainArticlesReducer } from '@core/pages/MainArticles/store/reducers';

const rootReducer: Reducer = combineReducers({
  articles: mainArticlesReducer,
});

export default rootReducer;
