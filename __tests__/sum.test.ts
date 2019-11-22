import sum from '../src/sum';

describe("Example function", () => {
  it('should sum 2 + 2 an equals 4', () => {
    expect(sum(2, 2)).toBe(4);
  })
})