const sumAll = function(num1, num2) {
    if (typeof num1 !== "number" || typeof num2 !== "number") return "ERROR";
    if (num1 < 0 || num2 < 0) return "ERROR";
    if (num1 === num2) return num1;

    let max = num1 > num2 ? num1 : num2;
    let min = num1 === max ? num2 : num1;

    let sum = 0;
    for (let i = min; i < max + 1; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
