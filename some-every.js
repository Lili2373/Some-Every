function hasOddNumber(arr) {
    return arr.some(element => element % 2 !== 0);
}


function hasAZero(number) {
    const numAsString = number.toString();
    return numAsString.includes('0');
}


function hasOnlyOddNumbers(arr) {
    return arr.every(number => number % 2 !== 0);
}


function hasNoDuplicates(arr) {
    return arr.every((element, index) => arr.indexOf(element) === index);
}


function hasCertainKey(arr, key) {
    return arr.every(obj => obj.hasOwnProperty(key));
}

function hasCertainValue(arr, key, value) {
    return arr.every(obj => obj.hasOwnProperty(key) && obj[key] === value);
}