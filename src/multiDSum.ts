import PromptSync from "prompt-sync";

const prompt = PromptSync();

let multiDarray = (
  rows: number,
  column: number,
  arraynumber: number
): number[][] => {
  let arr: number[][] = [];
  for (let i = 0; i < rows; i++) {
    let rows: number[] = [];
    for (let j = 0; j < column; j++) {
      let input = prompt(
        `Entere the value at the position ${i + 1} and & ${
          j + 1
        } for array ${arraynumber}: `
      );
      let value = parseInt(input);
      rows.push(value);
    }
    arr.push(rows);
  }
  return arr;
};
let sumArray = (array1: number[][], array2: number[][]): number[][] => {
  let sum: number[][] = [];
  for (let i = 0; i < array1.length; i++) {
    let row: number[] = [];
    for (let j = 0; j < array1[i].length; j++) {
      let add = array1[i][j] + array2[i][j];
      row.push(add);
    }
    sum.push(row);
  }
  return sum;
};
let display = (array: number[][]): void => {
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
