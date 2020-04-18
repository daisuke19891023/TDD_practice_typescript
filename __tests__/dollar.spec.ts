import { Dollar } from '../src/dollar';
import {Franc} from '../src/franc';
import { Money } from '../src/money';
describe('dollar のテスト', () => {
    it('2 * 5 = 10', () => {
    const five  = new Dollar(5)
    expect(five.times(2)).toStrictEqual(new Dollar(10));
    });
    it('2 * 5 = 10, 3 * 5 = 15', () => {
        const five  = Money.dollar(5)
        expect(five.times(3)).toStrictEqual(new Dollar(15));
        });
    it('equal method:true', () => expect(new Dollar(5).equal(new Dollar(5))).toBeTruthy())
    it('equal method:false', () => expect(new Dollar(5).equal(new Dollar(6))).toBeFalsy())
    it('equal method:false', () => expect(new Dollar(5).equal(new Franc(5))).toBeFalsy())
});