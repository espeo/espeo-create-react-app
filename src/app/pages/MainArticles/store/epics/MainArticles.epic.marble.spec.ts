import { MainArticlesState } from './../../namespace/index';
import { RootStore, Dependencies } from './../../../../store/index';
import { ActionsObservable, StateObservable } from 'redux-observable';
import { fetchArticles, fetchArticlesSuccess, fetchArticlesFailed, MainActions } from './../actions/index';

import {TestScheduler} from "rxjs/testing";
import { executeGetItemsEpic } from ".";
import { Subject } from 'rxjs';


describe('Fetching list of articles should', () => {    
    const testScheduler: TestScheduler = new TestScheduler((actual, expected) => {
        expect(actual).toEqual(expected);
    });
  it("fetch articles and call fetchArticlesSuccess action", () => {
    
        testScheduler.run(({ hot, cold, expectObservable }) => {

            const response = {
                items: []
            };

            const marbles = {
                i: 'i', // input action
                r: 'r', // mock api response
                o: 'o', // output action
              };

              const values = {
                i: fetchArticles(1, undefined),
                r: response,
                o: fetchArticlesSuccess(response),
              };


            const action$ = hot(marbles.i, values) as any;

            const state$ = null as any;

            const dependencies = {
                getArticles: () =>{
                    return cold(marbles.r, values)
                }
            };

            const output$ = executeGetItemsEpic(action$, state$, dependencies);

            expectObservable(output$).toBe(marbles.o, values)

        });
    
    });
    // it("call fetchArticlesFailed action when getArticles fails", () => {
    
    //     testScheduler.run(({ hot, cold, expectObservable }) => {
    //         const action$ = new ActionsObservable(hot('a', {
    //             a: fetchArticles(1, undefined),
    //         }))
    
    //         const state$ = cold('b');
    
    //         const dependencies : Dependencies = {
    //             getArticles: () =>{
    //                 return cold('#', undefined)
    //             }
    //         };
            
    //         const output$ = executeGetItemsEpic(action$, state$, dependencies);
    
    //         expectObservable(output$).toBe('a', {
    //             a: fetchArticlesFailed()
    //         })
    
    //     });
    // })
});