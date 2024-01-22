"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
let arrayInp = (size) => {
    let input = prompt("Enter the value in the array: ");
    let arr = input.split(",").map((value) => {
        const num = parseInt(value.trim());
        return num;
    });
    if (arr.length !== size) {
        console.log("invalid size");
        return arr;
    }
    return arr;
};
let evenNumberVal = (array) => {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            count++;
        }
    }
    return count;
};
const size = parseInt(prompt("Enter the size of the array : "));
const array = arrayInp(size);
console.log(array);
const even = evenNumberVal(array);
console.log(`The number of even numbers in the array is ${even}`);
