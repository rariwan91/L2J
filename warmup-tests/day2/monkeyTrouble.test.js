const { describe, test, expect } = require('@jest/globals');
const monkeyTrouble = require('../../warmups/day2/monkeyTrouble');

describe('monkeyTrouble', () => {
    test('monkey a is smiling and monkey b is smiling means we\'re in trouble', () => {
        const smileA = true;
        const smileB = true;

        expect(monkeyTrouble(smileA, smileB)).toBe(true);
    });

    test('monkey a is not smiling and monkey b is not smiling means we\'re in trouble', () => {
        const smileA = false;
        const smileB = false;

        expect(monkeyTrouble(smileA, smileB)).toBe(true);
    });

    test('monkey a is smiling and monkey b is not smiling means we\'re not in trouble', () => {
        const smileA = true;
        const smileB = false;

        expect(monkeyTrouble(smileA, smileB)).toBe(false);
    });

    test('monkey a is not smiling and monkey b is smiling means we\'re not in trouble', () => {
        const smileA = false;
        const smileB = true;

        expect(monkeyTrouble(smileA, smileB)).toBe(false);
    });
});
