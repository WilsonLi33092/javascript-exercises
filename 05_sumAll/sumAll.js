const sumAll = function(lower, upper) {
    let sum = 0;
    if(lower > upper) {
        let placeholder = lower;
        lower = upper;
        upper = placeholder;
    }
    if(lower < 0 || upper < 0 ) {
        return "ERROR";
    }
    if(!Number.isInteger(lower) || !Number.isInteger(upper)){
        return "ERROR";
    }
    for(let i = parseInt(lower); i<= parseInt(upper); i++) {
        sum+= parseInt(i);
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
