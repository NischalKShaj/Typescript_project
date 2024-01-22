import PromptSync = require("prompt-sync");
const prompt = PromptSync();
const getUserInputArray = (size: number, arrayNumber: number): number[] => {
  const inputString = prompt(`Enter the values of Array ${arrayNumber}: `);
  const inputArray = inputString.split(",").map((value) => {
    const num = parseInt(value.trim());
    return num;
  });

  // Check if the entered array size matches the expected size
  if (inputArray.length !== size) {
    console.log(
      `Error: Expected array size is ${size}. Please enter ${size} values.`
    );
    return inputArray; // Exit the program with an error code
  }

  return inputArray;
};

const swap = (array1: number[], array2: number[]): void => {
  let temp: number;
  for (let i = 0; i < array1.length; i++) {
    temp = array1[i];
    array1[i] = array2[i];
    array2[i] = temp;
  }
  console.log("Swapped array 1", array1);
  console.log("Swapped array 2:", array2);
};

// Function to display an array on the console
const displayArray = (array: number[]): void => {
  console.log("Array:", array);
};

// Get the size of arrays from the user
const size = parseInt(prompt("Enter the size of arrays: "));

// Get and display Array 1
const array1 = getUserInputArray(size, 1);
displayArray(array1);

// Get and display Array 2
const array2 = getUserInputArray(size, 2);
displayArray(array2);

// to swap the array
swap(array1, array2);
