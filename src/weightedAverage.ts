import PromptSync = require("prompt-sync");
const prompt = PromptSync();

let overallGrade = (wMark: number, pMark: number, aMark: number): number => {
  return (wMark * 80) / 100 + (pMark * 20) / 100 + (aMark * 10) / 100;
};

let wMark: number = parseFloat(prompt("Enter the written mark: "));
let pMark: number = parseFloat(prompt("Enter the practical mark: "));
let aMark: number = parseFloat(prompt("Enter the assignment mark: "));
let overall = overallGrade(wMark, pMark, aMark);
console.log(overall);
