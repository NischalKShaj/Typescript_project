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
let display = (array: number[][]): void => {
  console.log(array);
};
const rows = parseInt(prompt("Enter the rows:"));
const column = parseInt(prompt("Enter the column:"));
const array1 = multiDarray(rows, column, 1);
const array2 = multiDarray(rows, column, 2);
display(array1);
display(array2);
