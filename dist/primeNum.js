"use strict";
let checkPrime = (num) => {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % 2 === 0) {
            return false;
        }
    }
    return true;
};
const nums = 3;
const prime = checkPrime(nums);
console.log(prime);
