import { Money, Franc } from '../src/money';
describe('dollar のテスト', () => {
    it('2 * 5 = 10, 3 * 5 = 15', () => {
        const five  = Money.dollar(5)
        expect(five.times(3)).toEqual(Money.dollar(15));
        });
    it('2 * 5 = 10', () => {
        const five  = Money.dollar(5)
        expect(five.times(2)).toEqual(Money.dollar(10));
    });
    it('equal method:true', () => expect(Money.dollar(5).equal(Money.dollar(5))).toBeTruthy())
    it('equal method:false', () => expect(Money.dollar(5).equal(Money.dollar(6))).toBeFalsy())
    it('equal method:false', () => expect(Money.dollar(5).equal(Money.franc(5))).toBeFalsy())
});
describe('franc のテスト', () => {
    it('2 * 5 = 10', () => {
        const five  = Money.franc(5)
        expect(five.times(2)).toEqual(Money.franc(10));
        });
    it('2 * 5 = 10, 3 * 5 = 15', () => {
        const five  = Money.franc(5)
        expect(five.times(3)).toEqual(Money.franc(15));
        });
    it('equal method:true', () => expect(Money.franc(5).equal(Money.franc(5))).toBeTruthy())
    it('equal method:false', () => expect(Money.franc(5).equal(Money.franc(6))).toBeFalsy())
});

describe('通貨のテスト',() =>{
    it("USD",() => expect("USD").toBe(Money.dollar(1).currency()))
    it("CHF",() => expect("CHF").toBe(Money.franc(1).currency()))
    it('Different Class', () => expect(new Money(10, "CHF").equal(new Franc(10,"CHF"))).toBeTruthy())
})