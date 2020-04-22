import { Money } from '../src/money';
import { Bank } from '../src/bank';
import { Sum } from '../src/sum';
describe('dollar のテスト', () => {
    it('2 * 5 = 10, 3 * 5 = 15', () => {
        const five  = Money.dollar(5)
        expect(five.times(3)).toEqual(Money.dollar(15));
        });
    it('2 * 5 = 10', () => {
        const five  = Money.dollar(5)
        expect(five.times(2)).toEqual(Money.dollar(10));
    });
});

describe('等価性',() =>{
    it('equal method:true', () => expect(Money.dollar(5).equal(Money.dollar(5))).toBeTruthy())
    it('equal method:false', () => expect(Money.dollar(5).equal(Money.dollar(6))).toBeFalsy())
    it('equal method:false', () => expect(Money.dollar(5).equal(Money.franc(5))).toBeFalsy())

})
describe('通貨のテスト',() =>{
    it("USD",() => expect("USD").toBe(Money.dollar(1).currency()))
    it("CHF",() => expect("CHF").toBe(Money.franc(1).currency()))
})
describe('sum',() =>{
    it('Simple Addition', () => {
        const sum  = Money.dollar(5).plus(Money.dollar(5))
        expect(Money.dollar(10)).toEqual(sum);
        });
    it('reduced', () => {
        const five  = Money.dollar(5)
        const sum  = five.plus(five)
        const bank = new Bank()
        const reduced = bank.reduce(sum, "USD")
        expect(Money.dollar(10)).toEqual(reduced);
        });
    it('testPlusReturnSum', () => {
        const five = Money.dollar(5)
        const result = five.plus(five)
        const sum = result as Sum
        expect(five).toEqual(sum.augend);
        expect(five).toEqual(sum.addend);
    })
    it('testReducceSum', () => {
        const sum = new Sum(Money.dollar(3), Money.dollar(4))
        const bank = new Bank()
        const result = bank.reduce(sum, "USD")
        expect(Money.dollar(7)).toEqual(result);
    })
})