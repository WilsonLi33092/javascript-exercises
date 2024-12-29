const reverseString = function(string) {
    // let stringResult = "";
    // for(let i =string.length-1; i >= 0;i--) {
    //     stringResult += string[i];
    // }
    // return stringResult;
    return string.split("").reverse().join("");
};
//return string.split("").reverse().join("");
// Do not edit below this line
module.exports = reverseString;
