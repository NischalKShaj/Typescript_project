"use strict";
// file to find the sum of two numbers from the user input value
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
const number1 = parseInt(prompt("Enter first number:"));
const number2 = parseInt(prompt("Enter second number:"));
let sum = number1 + number2;
console.log("The sum of the numbers are:", sum);
