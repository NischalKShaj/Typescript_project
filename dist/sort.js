"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
let arrayInp = (size) => {
    let arrayval = prompt("Enter the value in the array :");
    let val = arrayval.split(",").map((value) => {
        const num = parseInt(value.trim());
        return num;
    });
    if (val.length !== size) {
        return val;
    }
    return val;
};
const size = parseInt(prompt("Enter the size of the array: "));
const arr = arrayInp(size);
console.log("Array before sorting : ", arr);
let sortarr = arr.sort((a, b) => b - a);
console.log("Array after sorting : ", sortarr);
