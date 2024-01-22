let pattern = (num: number): void => {
  for (let i = 1; i <= num; i++) {
    let res: string = "";
    for (let j = 1; j <= num; j++) {
      if (j <= i) {
        res += j + " ";
      }
    }
    console.log(res.trim());
  }
};
let num: number = 5;
pattern(num);
