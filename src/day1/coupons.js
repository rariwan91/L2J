/*
    The video game machines at your local arcade output coupons
    according to how well you play.
    10 coupons gets you a candy bar.
    3 coupons gets you a gumball.
    You prefer candy bars.

    Write a program that defines a variable initially assigned
    to the number of coupons that you have. Then have it output
    how many candy bars you can get. Then have it output how
    many gumballs you can get with the remaining coupons after
    buying all your candy bars.
*/

function buyCandy(totalCoupons) {
    const costOfCandyBars = 10;
    const costOfGumballs = 3;

    const numberOfCandyBars = Math.floor(totalCoupons / costOfCandyBars);
    const leftoverCoupons = totalCoupons % costOfCandyBars;

    const numberOfGumballs = Math.floor(leftoverCoupons / costOfGumballs);
    const finalLeftOverCoupons = leftoverCoupons % costOfGumballs;

    return {
        numberOfCandyBars: numberOfCandyBars,
        numberOfGumballs: numberOfGumballs,
        leftoverCoupons: finalLeftOverCoupons
    }
}

module.exports = buyCandy;
