import { getFirstData } from './selectors';
import { mockStore } from '@core/tests/mocks';

describe('fist selectors', () => {
  it('getFirstData', () => {
    expect(getFirstData(mockStore)).toEqual(null);
  });
});
