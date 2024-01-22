import PromptSync from "prompt-sync";
const prompt = PromptSync();

class Calculator {
  addition = (num1: number, num2: number): void => {
    console.log(`sum of the number ${num1} and ${num2} is ${num1 + num2}`);
  };
  subtraction = (num1: number, num2: number): void => {
    console.log(
      `difference of the numbers ${num1} and ${num2} is ${num1 - num2}`
    );
  };
  multiplicatin = (num1: number, num2: number): void => {
    console.log(`product of the numbers ${num1} and ${num2} is ${num1 * num2}`);
  };
  division = (num1: number, num2: number): void => {
    console.log(`quotient of the numbers ${num1} and${num2} is ${num1 / num2}`);
  };
  calculate = (num1: number, num2: number, operation: number): void => {
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
  prompt = prompt;
}
const calculator = new Calculator();
const num1 = parseFloat(prompt("Enter the first number : "));
const num2 = parseFloat(prompt("Enter the second number : "));
const operation = parseInt(
  prompt("Select an operation:\n1. add\n2. sub\n3. mult\n4. div\n")
);
calculator.calculate(num1, num2, operation);
