const removeFromArray = function(array, ...toRemove) {
    if (toRemove.length === 0) return array;
    
    let filteredArray = [];
    for (let i = 0; i < array.length ; i++) {
        let canIncludeInOutput = true;
        innerLoop : for (let j = 0; j < toRemove.length; j++) {
            if (toRemove[j] === array[i]) {
                canIncludeInOutput = false;
                break innerLoop;
            }
        }
        if (canIncludeInOutput) filteredArray.push(array[i]);
    }

    return filteredArray;
};

// Do not edit below this line
module.exports = removeFromArray;
