let palindrome = (str: string): boolean => {
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }
  return true;
};

const str: string = "MALAYALAM";
const isPalindrome = palindrome(str);
console.log(isPalindrome);
