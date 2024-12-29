const repeatString = function(string, num) {
    let stringResult ="";
    let stringError ="ERROR";
    if(num < 0 ) {
        return stringError;
    }

    for(let i=0;i<num;i++){
        stringResult += string;
    }
    return stringResult;
};

// Do not edit below this line
module.exports = repeatString;
