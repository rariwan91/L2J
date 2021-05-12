const { describe, test, expect } = require('@jest/globals');
const sleepIn = require('../../warmups/day2/sleepIn');

describe('sleepIn', () => {
    test('isWeekday = true and onVacation = true should return true', () => {
        const isWeekday = true;
        const onVacation = true;

        expect(sleepIn(isWeekday, onVacation)).toBe(true);
    });

    test('isWeekday = true and onVacation = false should return false', () => {
        const isWeekday = true;
        const onVacation = false;

        expect(sleepIn(isWeekday, onVacation)).toBe(false);
    });

    test('isWeekday = false and onVacation = true should return true', () => {
        const isWeekday = false;
        const onVacation = true;

        expect(sleepIn(isWeekday, onVacation)).toBe(true);
    });

    test('isWeekday = false and onVacation = false should return true', () => {
        const isWeekday = false;
        const onVacation = false;

        expect(sleepIn(isWeekday, onVacation)).toBe(true);
    });
});
