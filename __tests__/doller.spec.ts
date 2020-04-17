import { Doller } from '../src/doller';

describe('doller のテスト', () => {
    it('2 * 5 = 10', () => {
    const five  = new Doller(5)
    expect(five.times(2)).toStrictEqual(new Doller(10));
    });
    it('2 * 5 = 10, 3 * 5 = 15', () => {
        const five  = new Doller(5)
        expect(five.times(3)).toStrictEqual(new Doller(15));
        });
    it('equal method:true', () => expect(new Doller(5).equal(new Doller(5))).toBeTruthy())
    it('equal method:false', () => expect(new Doller(5).equal(new Doller(6))).toBeFalsy())
});