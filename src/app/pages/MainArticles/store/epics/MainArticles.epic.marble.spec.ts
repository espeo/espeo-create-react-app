import { RootStore, Dependencies } from './../../../../store/index';
import { ActionsObservable, StateObservable } from 'redux-observable';
import { fetchArticles, fetchArticlesSuccess, fetchArticlesFailed } from './../actions/index';

import {TestScheduler} from "rxjs/testing";
import { executeGetItemsEpic } from ".";


describe('Fetching list of articles should', () => {    
    const testScheduler: TestScheduler = new TestScheduler((actual, expected) => {
        expect(actual).toEqual(expected);
    });
  it("fetch articles and call fetchArticlesSuccess action", () => {
    
        testScheduler.run(({ hot, cold, expectObservable }) => {
            const action$ = hot('a', {
                a: fetchArticles(1, undefined),
            })

            const state$ = cold('b')

            const dependencies = {
                getArticles: () =>{
                    return cold('a', {
                        a: {
                            items: []
                        }
                    })
                }
            };
            //@ts-ignore
            const output$ = executeGetItemsEpic(action$, state$, dependencies);

            expectObservable(output$).toBe('a', {
                a: fetchArticlesSuccess({items: []})
            })

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