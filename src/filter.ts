let myFilter = (myArray: number[], callback: () => boolean): number => {
  let sum = 0;

  for (let element of myArray) {
    sum += element;
  }

  if (callback()) {
    return sum;
  } else {
    return 0;
  }
};

// Example usage:
let numbers = [1, 2, 3, 4, 5];
let isSumValid = (): boolean => true;
let results = myFilter(numbers, isSumValid);

console.log(results);
