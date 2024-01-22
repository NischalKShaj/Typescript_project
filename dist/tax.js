"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PromptSync = require("prompt-sync");
const prompt = PromptSync();
let taxCalc = (amount) => {
    if (amount <= 250000) {
        console.log("No tax required");
    }
    else if (amount >= 250000 && amount < 500000) {
        let tax = (amount * 5) / 100;
        console.log(tax);
    }
    else if (amount >= 500000 && amount < 1000000) {
        let tax = (amount * 20) / 100;
        console.log(tax);
    }
    else if (amount >= 1000000 && amount < 5000000) {
        let tax = (amount * 30) / 100;
        console.log(tax);
    }
};
const amount = parseFloat(prompt("Enter your anual income: "));
taxCalc(amount);
