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
let sumArray = (array1, array2) => {
    let sum = [];
    for (let i = 0; i < array1.length; i++) {
        let row = [];
        for (let j = 0; j < array1[i].length; j++) {
            let add = array1[i][j] + array2[i][j];
            row.push(add);
        }
        sum.push(row);
    }
    return sum;
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
const total = sumArray(array1, array2);
display(total);
