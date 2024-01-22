import PromptSync from "prompt-sync";

const prompt = PromptSync();

let arrayInp = (size: number): number[] => {
  let input = prompt("Enter the value in the array: ");
  let arr = input.split(",").map((value) => {
    const num = parseInt(value.trim());
    return num;
  });
  if (arr.length !== size) {
    console.log("invalid size");
    return arr;
  }
  return arr;
};
let evenNumberVal = (array: number[]): number => {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      count++;
    }
  }
  return count;
};
const size: number = parseInt(prompt("Enter the size of the array : "));
const array = arrayInp(size);
console.log(array);
const even = evenNumberVal(array);
console.log(`The number of even numbers in the array is ${even}`);
