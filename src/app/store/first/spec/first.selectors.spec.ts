import { mockStore } from '@core/mocks';
import { getFirstData } from '../first.selectors';

describe('fist selectors', () => {
  it('getFirstData', () => {
    expect(getFirstData(mockStore)).toEqual(null);
  });
});
