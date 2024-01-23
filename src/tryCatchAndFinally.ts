let stri: any; 

try {
  stri = "1234";

  if (typeof stri === "string") {
    let s: string = stri.split("").reverse().join("");
    console.log("Reversed string is:", s);
  } else {
    throw new Error("stri is not a string");
  }
} catch (error) {
  console.error(error);
} finally {
  console.log("Type of stri is", typeof stri);
}
