import { getFirstData } from '../first.selectors';

describe('fist selectors', () => {
    it('getFirstData', () => {
        const importantData = 42;
        const store = { first: { data: importantData }} as any;

        expect(getFirstData(store)).toEqual(importantData);
    });
});
