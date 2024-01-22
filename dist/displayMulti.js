"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
let multiDarray = (rows, column, arraynumber) => {
    let arr = [];
    for (let i = 0; i < rows; i++) {
        let rows = [];
        for (let j = 0; j < column; j++) {
            let input = prompt(`Entere the value at the position ${i + 1} and & ${j + 1} for array ${arraynumber}: `);
            let value = parseInt(input);
            rows.push(value);
        }
        arr.push(rows);
    }
    return arr;
};
let display = (array) => {
    console.log(array);
};
const rows = parseInt(prompt("Enter the rows:"));
const column = parseInt(prompt("Enter the column:"));
const array1 = multiDarray(rows, column, 1);
const array2 = multiDarray(rows, column, 2);
display(array1);
display(array2);
