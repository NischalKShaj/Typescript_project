import PromptSync from "prompt-sync";

const prompt = PromptSync();
let mark: number = parseFloat(prompt("Enter the mark: "));
if (mark > 50 && mark <= 100) {
  console.log("pass");
} else {
  console.log("fail");
}
