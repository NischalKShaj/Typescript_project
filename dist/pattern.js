"use strict";
let pattern = (num) => {
    for (let i = 1; i <= num; i++) {
        let res = "";
        for (let j = 1; j <= num; j++) {
            if (j <= i) {
                res += j + " ";
            }
        }
        console.log(res.trim());
    }
};
let num = 5;
pattern(num);
