// file to find the sum of two numbers from the user input value

import PromptSync from "prompt-sync";

const prompt = PromptSync();

const number1: number = parseInt(prompt("Enter first number:"));
const number2: number = parseInt(prompt("Enter second number:"));

let sum = number1 + number2;
console.log("The sum of the numbers are:", sum);
