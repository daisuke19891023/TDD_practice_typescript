import { Franc } from '../src/franc';

describe('franc のテスト', () => {
    it('2 * 5 = 10', () => {
    const five  = new Franc(5)
    expect(five.times(2)).toStrictEqual(new Franc(10));
    });
    it('2 * 5 = 10, 3 * 5 = 15', () => {
        const five  = new Franc(5)
        expect(five.times(3)).toStrictEqual(new Franc(15));
        });
    it('equal method:true', () => expect(new Franc(5).equal(new Franc(5))).toBeTruthy())
    it('equal method:false', () => expect(new Franc(5).equal(new Franc(6))).toBeFalsy())
});