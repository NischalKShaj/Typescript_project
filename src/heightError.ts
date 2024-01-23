import PromptSync from "prompt-sync";
const prompt = PromptSync();
let heightString = prompt("Enter your height: ");

try {
  let height = parseFloat(heightString);

  if (isNaN(height)) {
    throw new Error("error1");
  } else if (height > 250) {
    throw new Error("error2");
  } else if (height < 40) {
    throw new Error("error3");
  }
} catch (error) {
  if ((error as Error).message === "error1") {
    console.log("The height is NaN");
  } else if ((error as Error).message === "error2") {
    console.log("Huge height error");
  } else if ((error as Error).message === "error3") {
    console.log("Tiny height error");
  } else {
    console.log("valid");
  }
}
