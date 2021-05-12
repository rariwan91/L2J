const { describe, test, expect } = require('@jest/globals');
const diff21 = require('../../warmups/day2/diff21');

describe('diff21', () => {
    test('19 returns 2', () => {
        const n = 19;

        expect(diff21(n)).toBe(2);
    });

    test('10 returns 11', () => {
        const n = 10;

        expect(diff21(n)).toBe(11);
    });

    test('21 returns 0', () => {
        const n = 21;

        expect(diff21(n)).toBe(0);
    });

    test('22 returns 2', () => {
        const n = 22;

        expect(diff21(n)).toBe(2);
    });

    test('25 returns 8', () => {
        const n = 25;

        expect(diff21(n)).toBe(8);
    });

    test('30 returns 18', () => {
        const n = 30;

        expect(diff21(n)).toBe(18);
    });

    test('0 returns 21', () => {
        const n = 0;

        expect(diff21(n)).toBe(21);
    });

    test('1 returns 20', () => {
        const n = 1;

        expect(diff21(n)).toBe(20);
    });

    test('2 returns 19', () => {
        const n = 2;

        expect(diff21(n)).toBe(19);
    });

    test('-1 returns 22', () => {
        const n = -1;

        expect(diff21(n)).toBe(22);
    });

    test('-2 returns -23', () => {
        const n = -2;

        expect(diff21(n)).toBe(23);
    });

    test('50 returns 58', () => {
        const n = 50;

        expect(diff21(n)).toBe(58);
    });
});
