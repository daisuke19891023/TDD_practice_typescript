import { Doller } from '../src/doller';

describe('doller のテスト', () => {
    it('2 * 5 = 10', () => {
    const five  = new Doller(5)
    let product:Doller = five.times(2)
      expect(product.amount).toBe(10);
      product = five.times(3)
      expect(product.amount).toBe(15);
    });
});