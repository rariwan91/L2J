const { describe, test, expect } = require('@jest/globals');
const parrotTrouble = require('../../warmups/day2/parrotTrouble');

describe('parrotTrouble', () => {
    test('Parrot is talking and the hour is 6 means we\'re in trouble', () => {
        const parrotIsTalking = true;
        const hour = 6;

        expect(parrotTrouble(parrotIsTalking, hour)).toBe(true);
    });

    test('Parrot is talking and the hour is 7 means we\'re not in trouble', () => {
        const parrotIsTalking = true;
        const hour = 7;

        expect(parrotTrouble(parrotIsTalking, hour)).toBe(false);
    });

    test('Parrot is not talking and the hour is 6 means we\'re not in trouble', () => {
        const parrotIsTalking = false;
        const hour = 6;

        expect(parrotTrouble(parrotIsTalking, hour)).toBe(false);
    });

    test('Parrot is talking and the hour is 21 means we\'re in trouble', () => {
        const parrotIsTalking = true;
        const hour = 21;

        expect(parrotTrouble(parrotIsTalking, hour)).toBe(true);
    });

    test('Parrot is not talking and the hour is 21 means we\'re not in trouble', () => {
        const parrotIsTalking = false;
        const hour = 21;

        expect(parrotTrouble(parrotIsTalking, hour)).toBe(false);
    });

    test('Parrot is talking and the hour is 23 means we\'re in trouble', () => {
        const parrotIsTalking = true;
        const hour = 23;

        expect(parrotTrouble(parrotIsTalking, hour)).toBe(true);
    });

    test('Parrot is not talking and the hour is 23 means we\'re not in trouble', () => {
        const parrotIsTalking = false;
        const hour = 23;

        expect(parrotTrouble(parrotIsTalking, hour)).toBe(false);
    });

    test('Parrot is talking and the hour is 20 means we\'re not in trouble', () => {
        const parrotIsTalking = true;
        const hour = 20;

        expect(parrotTrouble(parrotIsTalking, hour)).toBe(false);
    });

    test('Parrot is not talking and the hour is 12 means we\'re not in trouble', () => {
        const parrotIsTalking = false;
        const hour = 12;

        expect(parrotTrouble(parrotIsTalking, hour)).toBe(false);
    });
});
