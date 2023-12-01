const repeatString = function(string, repeats) {
    if (repeats === 0) return "";
    if (repeats < 0) return 'ERROR';
    
    let output = "";

    for (let i = 0; i < repeats; i++) {
        output += string;
    }

    return output;
};

// Do not edit below this line
module.exports = repeatString;
