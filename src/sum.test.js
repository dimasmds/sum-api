const sum = require('./sum');

describe('sum', () => {
  it('should return correct value', () => {
    expect(sum(1, 1,)).toEqual(2);
    expect(sum(2, 1)).toEqual(3);
    expect(sum(3, 9)).toEqual(12);
  });
});
