let numPattern = (num: number): void => {
  let k = 1;
  for (let i = 1; i <= num; i++) {
    let res = "";
    for (let j = 1; j <= num; j++) {
      if (j <= i) {
        res += k + " ";
        k++;
      }
    }
    console.log(res.trim());
  }
};
const n: number = 4;
numPattern(n);
