const minus = require('./minus');

describe('minus', () => {
  it('should return correct value',  () => {
    expect(minus(10, 5)).toEqual(5);
    expect(minus(5, 1)).toEqual(4);
  });
});
