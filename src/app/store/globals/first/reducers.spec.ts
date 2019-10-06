import { firstReducer } from './reducers';

describe('First Reducers', () => {
  it('should return default state ', () => {
    const state = firstReducer(undefined as any, {} as any);
    expect(state).toEqual({
      data: null,
      isLoading: false,
      isError: false,
    });
  });
});
