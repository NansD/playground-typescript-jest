import sum from '../src/sum';

describe("Sum", () => {
  it('should sum 2 + 2 and return 4', () => {
    expect(sum(2, 2)).toBe(4);
  })
})
