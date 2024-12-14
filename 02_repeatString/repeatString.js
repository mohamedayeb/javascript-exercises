const repeatString = function(string, num) {
    if (num < 0) {
        return 'ERROR';
    }
    let modifyString = '';
    for (let i = 0; i < num; i += 1) {
        modifyString += string;
    }
    return modifyString;
};

// Do not edit below this line
module.exports = repeatString;
