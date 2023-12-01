const reverseString = function(string) {
    let output = "";
    for (let i = string.length; i > 0; i--) {
        output += string.slice(i-1,i);
    }
    return output;
};

// Do not edit below this line
module.exports = reverseString;
