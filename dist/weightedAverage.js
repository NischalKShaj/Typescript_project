"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PromptSync = require("prompt-sync");
const prompt = PromptSync();
let overallGrade = (wMark, pMark, aMark) => {
    return (wMark * 80) / 100 + (pMark * 20) / 100 + (aMark * 10) / 100;
};
let wMark = parseFloat(prompt("Enter the written mark: "));
let pMark = parseFloat(prompt("Enter the practical mark: "));
let aMark = parseFloat(prompt("Enter the assignment mark: "));
let overall = overallGrade(wMark, pMark, aMark);
console.log(overall);
