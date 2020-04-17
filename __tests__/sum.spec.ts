import { sum } from '../src/sum';
// describe-it の書き方でもよい
describe('sum() のテスト', () => {
  it('sum(1, 2) == 3', () => {
    expect(sum(1, 2)).toBe(3);
  });
});