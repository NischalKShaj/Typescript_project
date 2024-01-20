"use strict";
// file to find the principle amount
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
let p = parseFloat(prompt("Enter the priciple amount"));
let n = parseFloat(prompt("Enter the yerar"));
let r = parseFloat(prompt("Enter the rate of interest"));
let si = (p * n * r) / 100;
console.log(si);
