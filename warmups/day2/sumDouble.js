/*
    Given two int values, return their sum.
    Unless the two values are the same, then return double their sum.

    function definition: sumDouble(a, b)
*/

function sumDouble(a, b) {
    //get the sum of two different numbers
    let sum = a + b;
    //if the same value for both a and b return and multiply it by 2
    if ( a === b) {
        return sum * 2; // return sum = sum * 2; // <-- also works. Don't do.
    } else {
        // if not the same 
        return sum
    }
}

module.exports = sumDouble;