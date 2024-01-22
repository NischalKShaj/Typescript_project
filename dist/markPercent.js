"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
const mark = parseFloat(prompt("Enter your mark in percent"));
if (mark >= 90) {
    console.log("Your grade is A");
}
else if (mark >= 80 && mark < 89) {
    console.log("Your grade is B");
}
else if (mark >= 70 && mark < 79) {
    console.log("Your grade is C");
}
else if (mark >= 60 && mark < 69) {
    console.log("Your grade is D");
}
else if (mark >= 50 && mark < 59) {
    console.log("Your grade is A");
}
else {
    console.log("You have failed");
}
