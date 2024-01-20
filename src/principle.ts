// file to find the principle amount

import PromptSync from "prompt-sync";

const prompt = PromptSync();
let p: number = parseFloat(prompt("Enter the priciple amount"));
let n: number = parseFloat(prompt("Enter the yerar"));
let r: number = parseFloat(prompt("Enter the rate of interest"));
let si: number = (p * n * r) / 100;
console.log(si);
