const { describe, test, expect } = require('@jest/globals');
const buyCandy = require('../../src/day1/coupons');

describe('Buying candy', () => {
    test('with 100 coupons', () => {
        const result = buyCandy(100);

        expect(result.numberOfCandyBars).toBe(10);
        expect(result.numberOfGumballs).toBe(0);
        expect(result.leftoverCoupons).toBe(0);
    });

    test('with 101 coupons', () => {
        const result = buyCandy(101);

        expect(result.numberOfCandyBars).toBe(10);
        expect(result.numberOfGumballs).toBe(0);
        expect(result.leftoverCoupons).toBe(1);
    });

    test('with 102 coupons', () => {
        const result = buyCandy(102);

        expect(result.numberOfCandyBars).toBe(10);
        expect(result.numberOfGumballs).toBe(0);
        expect(result.leftoverCoupons).toBe(2);
    });

    test('with 103 coupons', () => {
        const result = buyCandy(103);

        expect(result.numberOfCandyBars).toBe(10);
        expect(result.numberOfGumballs).toBe(1);
        expect(result.leftoverCoupons).toBe(0);
    });

    test('with 104 coupons', () => {
        const result = buyCandy(104);

        expect(result.numberOfCandyBars).toBe(10);
        expect(result.numberOfGumballs).toBe(1);
        expect(result.leftoverCoupons).toBe(1);
    });

    test('with 105 coupons', () => {
        const result = buyCandy(105);

        expect(result.numberOfCandyBars).toBe(10);
        expect(result.numberOfGumballs).toBe(1);
        expect(result.leftoverCoupons).toBe(2);
    });

    test('with 106 coupons', () => {
        const result = buyCandy(106);

        expect(result.numberOfCandyBars).toBe(10);
        expect(result.numberOfGumballs).toBe(2);
        expect(result.leftoverCoupons).toBe(0);
    });

    test('with 107 coupons', () => {
        const result = buyCandy(107);

        expect(result.numberOfCandyBars).toBe(10);
        expect(result.numberOfGumballs).toBe(2);
        expect(result.leftoverCoupons).toBe(1);
    });

    test('with 108 coupons', () => {
        const result = buyCandy(108);

        expect(result.numberOfCandyBars).toBe(10);
        expect(result.numberOfGumballs).toBe(2);
        expect(result.leftoverCoupons).toBe(2);
    });

    test('with 109 coupons', () => {
        const result = buyCandy(109);

        expect(result.numberOfCandyBars).toBe(10);
        expect(result.numberOfGumballs).toBe(3);
        expect(result.leftoverCoupons).toBe(0);
    });

    test('with 110 coupons', () => {
        const result = buyCandy(110);

        expect(result.numberOfCandyBars).toBe(11);
        expect(result.numberOfGumballs).toBe(0);
        expect(result.leftoverCoupons).toBe(0);
    });
});
