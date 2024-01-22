import PromptSync = require("prompt-sync");
const prompt = PromptSync();

let insert = (size: number): number[] => {
  let inputVal = prompt("Enter the values in the array: ");
  let arr = inputVal.split(",").map((value) => {
    let num = parseInt(value.trim());
    return num;
  });
  if (size !== arr.length) {
    console.log("enter the valid number of elements");
  }
  return arr;
};
let multipli = (array: number[]): void => {
  let newArr: number[] = [];
  for (let i = 0; i < array.length - 1; i++) {
    newArr.push(array[i] * array[i + 1]);
  }
  console.log(newArr);
};
const size = parseInt(prompt("Enter the size of the array: "));
const arr = insert(size);
console.log(arr);
multipli(arr);
