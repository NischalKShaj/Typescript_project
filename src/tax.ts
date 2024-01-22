import PromptSync = require("prompt-sync");
const prompt = PromptSync();

let taxCalc = (amount: number): void => {
  if (amount <= 250000) {
    console.log("No tax required");
  } else if (amount >= 250000 && amount < 500000) {
    let tax: number = (amount * 5) / 100;
    console.log(tax);
  } else if (amount >= 500000 && amount < 1000000) {
    let tax: number = (amount * 20) / 100;
    console.log(tax);
  } else if (amount >= 1000000 && amount < 5000000) {
    let tax: number = (amount * 30) / 100;
    console.log(tax);
  }
};
const amount: number = parseFloat(prompt("Enter your anual income: "));
taxCalc(amount);
