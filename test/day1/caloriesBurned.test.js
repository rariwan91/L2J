const { test, expect, describe } = require('@jest/globals');
const { getCalBurned, getCalPerMinBurned } = require('../../src/day1/caloriesBurned');

describe('getCalPerMinBurned', () => {
    test('150 lbs person, 30 minutes running, 30 minutes playing basketball, 6 hours sleeping', () => {
        const weightInLbs = 150;
        const weightInKg = weightInLbs / 2.2;

        const runningMET = 10;
        const basketballMET = 8;
        const sleepingMET = 1;

        const minutesRunning = 30;
        const minutesBasketball = 30;
        const minutesSleeping = 6 * 60;

        var result = minutesRunning * getCalPerMinBurned(runningMET, weightInKg)
            + minutesBasketball * getCalPerMinBurned(basketballMET, weightInKg)
            + minutesSleeping * getCalPerMinBurned(sleepingMET, weightInKg);

        expect(result).toBe(1073.8636363636363);
    });
});

describe('getCalBurned', () => {
    test('150 lbs person, 30 minutes running, 30 minutes playing basketball, 6 hours sleeping', () => {
        const weightInLbs = 150;
        const weightInKg = weightInLbs / 2.2;

        const runningMET = 10;
        const basketballMET = 8;
        const sleepingMET = 1;

        const minutesRunning = 30;
        const minutesBasketball = 30;
        const minutesSleeping = 6 * 60;

        var result = getCalBurned(runningMET, weightInKg, minutesRunning)
            + getCalBurned(basketballMET, weightInKg, minutesBasketball)
            + getCalBurned(sleepingMET, weightInKg, minutesSleeping);

        expect(result).toBe(1073.8636363636363);
    });
})

