import { getData } from '.';

describe('Utils: getData', () => {
  it('should return value from data key', () => {
    const exampleId = 42;
    expect(getData({ data: exampleId })).toEqual(exampleId);
    expect(getData({ data: 'example' })).toEqual('example');
  });
});
