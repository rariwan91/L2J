/*
    The parameter weekday is true if it is a weekday, and the parameter vacation is true if we are on vacation.
    We sleep in if it is not a weekday or we're on vacation.
    Return true if we sleep in.

    function definition: sleepIn(weekday, vacation)

    OR - ||
    AND - &&
    NOT - !parameterName

    npm run test sleepIn
*/

function sleepIn(weekday, vacation) {
    if (!weekday || vacation) {
        return true;
    }
    else {
        return false;
    }
}

module.exports = sleepIn;