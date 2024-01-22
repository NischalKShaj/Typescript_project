import PromptSync = require("prompt-sync");
const prompt = PromptSync();

let multiply = (num: number): void => {
  let i = 1;
  while (i < 11) {
    console.log(`${i} * ${num} = ${i * num}`);
    i++;
  }
};

let num: number = parseInt(prompt("Enter the number:"));
multiply(num);

