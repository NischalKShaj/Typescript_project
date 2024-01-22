import PromptSync = require("prompt-sync");
const prompt = PromptSync();

let sumOdd = (limit: number): number => {
  let sum = 0;
  let i = 0;
  while (i < limit) {
    if (i % 2 !== 0) {
      sum += i;
      i++;
    } else {
      i++;
    }
  }
  return sum;
};
let limit: number = parseInt(prompt("Enter the limit : "));
let result: number = sumOdd(limit);
console.log(result);
