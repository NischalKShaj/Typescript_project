import PromptSync from "prompt-sync";
const prompt = PromptSync();

class Area {
  circle(): void {
    const pi = 3.14;
    const radius = parseFloat(prompt("Enter the radius of the circle: "));
    let area = pi * Math.pow(radius, 2);
    console.log("Area of the circle is : ", area);
  }
  square(): void {
    const side = parseFloat(prompt("Enter the side of the square : "));
    let area = side * side;
    console.log("Area of the square is : ", area);
  }
  rectangle(): void {
    const length = parseFloat(prompt("Enter the length of the rectangle: "));
    const breadth = parseFloat(prompt("Enter the breadth of the rectangle: "));
    let area = length * breadth;
    console.log("Area of the rectangle is : ", area);
  }
  triangle(): void {
    const height = parseFloat(prompt("Enter the height of the triangle: "));
    const base = parseFloat(prompt("Enter the base of the triangle: "));
    let area = 0.5 * (base * height);
    console.log("Area of the triangle is : ", area);
  }
}

class MyClass extends Area {}
const area = new MyClass();
