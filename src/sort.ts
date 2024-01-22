import PromptSync from "prompt-sync";

const prompt = PromptSync();

let arrayInp = (size: number): number[] => {
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
const size: number = parseInt(prompt("Enter the size of the array: "));
const arr = arrayInp(size);
console.log("Array before sorting : ", arr);
let sortarr = arr.sort((a, b) => b - a);
console.log("Array after sorting : ", sortarr);
