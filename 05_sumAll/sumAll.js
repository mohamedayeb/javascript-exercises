const sumAll = function(min, max) {
    const isMinInvalid = min < 0 || !Number.isInteger(min);
    const isMaxInvalid = max < 0 || !Number.isInteger(max);
    if (isMinInvalid || isMaxInvalid) {
        return 'ERROR';
    }
    if (min > max) {
        [min, max] = [max, min];
    }
    let sum = 0;
    for (let i = min; i <= max; i += 1) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
