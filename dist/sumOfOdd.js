"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PromptSync = require("prompt-sync");
const prompt = PromptSync();
let sumOdd = (limit) => {
    let sum = 0;
    let i = 0;
    while (i < limit) {
        if (i % 2 !== 0) {
            sum += i;
            i++;
        }
        else {
            i++;
        }
    }
    return sum;
};
let limit = parseInt(prompt("Enter the limit : "));
let result = sumOdd(limit);
console.log(result);
