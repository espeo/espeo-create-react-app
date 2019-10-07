import { mainPageReducer } from '.';

describe('First Reducers', () => {
  it('should return default state ', () => {
    const state = mainPageReducer(undefined as any, {} as any);
    expect(state).toEqual({
      items: [],
      isLoading: false,
      error: false,
    });
  });
});
