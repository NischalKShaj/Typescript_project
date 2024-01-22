"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PromptSync = require("prompt-sync");
const prompt = PromptSync();
let multiply = (num) => {
    let i = 1;
    while (i < 11) {
        console.log(`${i} * ${num} = ${i * num}`);
        i++;
    }
};
let num = parseInt(prompt("Enter the number:"));
multiply(num);
