import { Money } from '../src/money';
import { Bank } from '../src/bank';
import { Sum } from '../src/sum';
import { Pair } from '../src/pair';
import { Expression } from '../src/expression';
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
    it('testReducceMoney', () => {
        const bank = new Bank()
        const result = bank.reduce(Money.dollar(1), "USD")
        expect(result).toEqual(Money.dollar(1));
    })
})
describe('Sum Expression', () => {
    let fiveBucks:Expression
    let tenFrencs:Expression
    let bank:Bank
    beforeAll(() => {
        fiveBucks = Money.dollar(5) as Expression
        tenFrencs = Money.franc(10) as Expression
    })
    beforeEach(() => {
        bank = new Bank()
        bank.addRate("CHF", "USD", 2)
        bank.addRate("USD", "USD", 1)
        bank.addRate("CHF", "CHF", 1)
        bank.addRate("USD", "CHF", 0.5)
    })
    it('testMixedAddition', () => {
        const result = bank.reduce(fiveBucks.plus(tenFrencs), "USD")
        expect(result).toEqual(Money.dollar(10))

    })
    it('testSumPlusMoney', () => {
        const sum = new Sum(fiveBucks, tenFrencs).plus(fiveBucks)
        const result = bank.reduce(sum, "USD")
        expect(result).toEqual(Money.dollar(15))
    })
    it('testSumTimes', () => {
        const sum = new Sum(fiveBucks, tenFrencs).times(2)
        const result = bank.reduce(sum, "USD")
        expect(result).toEqual(Money.dollar(20))        
    })
})
describe('convert', () => {
    it('testReduceMoneyDifferenceCurrency',() => {
        const bank = new Bank()
        bank.addRate("CHF", "USD", 2)
        const result = bank.reduce(Money.franc(2), "USD")
        expect(result).toEqual(Money.dollar(1));
    })
    it('testIdentityRate', () => {   
        expect(1).toEqual(new Bank().rate("USD", "USD"))
    })
})