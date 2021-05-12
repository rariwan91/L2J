/*
    Given an int n, return the absolute difference between n and 21,
    except return double the absolute difference if n is over 21.

    function definition: diff21(n)

    Math.abs(numberValue)

    npm install --save prompt
*/


function diff21(n) {
    let absoluteDifference = 21 - n;
    //if the absolute value of n is over 21 then return double
    if ( n > 21 ) {
        return Math.abs(absoluteDifference) * 2
    } else {
        return Math.abs(absoluteDifference)
    }
}

module.exports = diff21;