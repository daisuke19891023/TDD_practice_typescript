import { Money } from '../src/money';
describe('dollar のテスト', () => {
    it('2 * 5 = 10, 3 * 5 = 15', () => {
        const five  = Money.dollar(5)
        expect(five.times(3)).toStrictEqual(Money.dollar(15));
        });
    it('2 * 5 = 10', () => {
        const five  = Money.dollar(5)
        expect(five.times(2)).toStrictEqual(Money.dollar(10));
    });
    it('equal method:true', () => expect(Money.dollar(5).equal(Money.dollar(5))).toBeTruthy())
    it('equal method:false', () => expect(Money.dollar(5).equal(Money.dollar(6))).toBeFalsy())
    it('equal method:false', () => expect(Money.dollar(5).equal(Money.franc(5))).toBeFalsy())
});
describe('franc のテスト', () => {
    it('2 * 5 = 10', () => {
        const five  = Money.franc(5)
        expect(five.times(2)).toStrictEqual(Money.franc(10));
        });
    it('2 * 5 = 10, 3 * 5 = 15', () => {
        const five  = Money.franc(5)
        expect(five.times(3)).toStrictEqual(Money.franc(15));
        });
    it('equal method:true', () => expect(Money.franc(5).equal(Money.franc(5))).toBeTruthy())
    it('equal method:false', () => expect(Money.franc(5).equal(Money.franc(6))).toBeFalsy())
});