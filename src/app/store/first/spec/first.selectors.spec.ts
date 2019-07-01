import { getFirstData } from '../first.selectors';
import { mockStore } from '@core/mocks';

describe('fist selectors', () => {
  it('getFirstData', () => {
    expect(getFirstData(mockStore)).toEqual(null);
  });
});
