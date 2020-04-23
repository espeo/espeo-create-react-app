import { Subject } from 'rxjs';
import { TestScheduler } from 'rxjs/testing';
import { ActionsObservable, StateObservable } from 'redux-observable';

import { RootStore } from '@core/store';
import { initial } from '../initial';
import {
  fetchArticles,
  fetchArticlesSuccess,
  fetchArticlesFailed,
} from '../actions/index';
import { executeGetItemsEpic } from '.';

describe('Fetching list of articles should', () => {
    const testScheduler: TestScheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });

    const response = {
      type: '',
      items: [],
    };

    const marbles = {
      i: 'i', // input action
      r: 'r', // mock api response
      o: 'o', // output action
    };

    const values = {
      i: fetchArticles(1, undefined),
      r: response,
    };
    const state$ = new StateObservable<RootStore>(new Subject(),{
      main: initial
    });

  it('fetch articles and call fetchArticlesSuccess action', () => {
      testScheduler.run(({ hot, cold, expectObservable }) => {
        const caseValues$ = {
          ...values,
          o: fetchArticlesSuccess(response),
        };

        const action$ = new ActionsObservable(
          hot(marbles.i, {
            [marbles.i]: caseValues$.i
          }),
        );

        const dependencies: {
          getArticles: any;
        } = {
          getArticles: () => {
            return cold(marbles.r, caseValues$);
          },
        };

        const output$ = executeGetItemsEpic(action$, state$, dependencies);

        expectObservable(output$).toBe(marbles.o, caseValues$);
    });
  });

  it('call fetchArticlesFailed action when getArticles fails', () => {
    testScheduler.run(({ hot, cold, expectObservable }) => {
      const caseValues$ = {
        ...values,
        o: fetchArticlesFailed(),
      };

      const action$ = new ActionsObservable(
        hot(marbles.i, {
          [marbles.i]: caseValues$.i
        }),
      );

      const dependencies: {
        getArticles: any;
      } = {
        getArticles: () => {
          return cold('#', undefined);
        },
      };

      const output$ = executeGetItemsEpic(action$, state$, dependencies);

      expectObservable(output$).toBe(marbles.o, caseValues$);
    });
  });
});
