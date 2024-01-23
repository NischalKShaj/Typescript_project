"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
class Calculator {
    constructor() {
        this.addition = (num1, num2) => {
            console.log(`sum of the number ${num1} and ${num2} is ${num1 + num2}`);
        };
        this.subtraction = (num1, num2) => {
            console.log(`difference of the numbers ${num1} and ${num2} is ${num1 - num2}`);
        };
        this.multiplicatin = (num1, num2) => {
            console.log(`product of the numbers ${num1} and ${num2} is ${num1 * num2}`);
        };
        this.division = (num1, num2) => {
            console.log(`quotient of the numbers ${num1} and${num2} is ${num1 / num2}`);
        };
        this.calculate = (num1, num2, operation) => {
            switch (operation) {
                case 1:
                    this.addition(num1, num2);
                    break;
                case 2:
                    this.subtraction(num1, num2);
                    break;
                case 3:
                    this.multiplicatin(num1, num2);
                    break;
                case 4:
                    this.division(num1, num2);
                    break;
                default:
                    console.log("invalid operation...");
            }
        };
        this.prompt = prompt;
    }
}
const calculator = new Calculator();
const num1 = parseFloat(prompt("Enter the first number : "));
const num2 = parseFloat(prompt("Enter the second number : "));
console.log("Enter the operation \n1.Addition \n2.Subtraction \n3.Multiplication \n4.Division");
const operation = parseInt(prompt(""));
calculator.calculate(num1, num2, operation);
