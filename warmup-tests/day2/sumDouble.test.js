const { describe, test, expect } = require('@jest/globals');
const sumDouble = require('../../warmups/day2/sumDouble');

describe('sumDouble', () => {
    test('1 and 2 returns 3', () => {
        const a = 1;
        const b = 2;

        expect(sumDouble(a, b)).toBe(3);
    });

    test('3 and 2 returns 5', () => {
        const a = 3;
        const b = 2;

        expect(sumDouble(a, b)).toBe(5);
    });

    test('2 and 2 returns 8', () => {
        const a = 2;
        const b = 2;

        expect(sumDouble(a, b)).toBe(8);
    });

    test('-1 and 0 returns -1', () => {
        const a = -1;
        const b = 0;

        expect(sumDouble(a, b)).toBe(-1);
    });

    test('3 and 3 returns 12', () => {
        const a = 3;
        const b = 3;

        expect(sumDouble(a, b)).toBe(12);
    });

    test('0 and 0 returns 0', () => {
        const a = 0;
        const b = 0;

        expect(sumDouble(a, b)).toBe(0);
    });

    test('0 and 1 returns 1', () => {
        const a = 0;
        const b = 1;

        expect(sumDouble(a, b)).toBe(1);
    });

    test('3 and 4 returns 7', () => {
        const a = 3;
        const b = 4;

        expect(sumDouble(a, b)).toBe(7);
    });
});
