import { Subject } from 'rxjs';
import { ActionsObservable, StateObservable } from 'redux-observable';
import {
    MainActions,
    MainArticlesTypes
} from '../actions';

import { RootStore } from '@core/store';
import { executeGetItemsEpic } from './index';

describe('Fetching list of articles should', () => {
    const type = MainArticlesTypes.FETCH_ARTICLES;
    const action$: ActionsObservable<MainActions> = ActionsObservable.of({
        type,
        payload: {
            page:1,
            filters: undefined
        }
    });
    const getArticles = jest.fn();
    const state$: StateObservable<RootStore> = new StateObservable(new Subject(), {} as RootStore );

    it('fetch articles and call fetchArticlesSuccess action', async () => {
        getArticles.mockReturnValue(Promise.resolve({items: []}));
        const result = await executeGetItemsEpic(action$, state$, { getArticles }).toPromise();
        
        expect(result).toEqual({
            type: MainArticlesTypes.FETCH_ARTICLES_SUCCESS,
            payload: {
                items: []
            }
        });
    })

    it('call fetchArticlesFailed action when getArticles fails', async () => {
        getArticles.mockReturnValue(Promise.reject());
        const result = await executeGetItemsEpic(action$, state$, { getArticles }).toPromise();
        
        expect(result).toEqual({
            type: MainArticlesTypes.FETCH_ARTICLES_FAILED
        });
    })
})