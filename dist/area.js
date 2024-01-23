"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
class Area {
    circle() {
        const pi = 3.14;
        const radius = parseFloat(prompt("Enter the radius of the circle: "));
        let area = pi * Math.pow(radius, 2);
        console.log("Area of the circle is : ", area);
    }
    square() {
        const side = parseFloat(prompt("Enter the side of the square : "));
        let area = side * side;
        console.log("Area of the square is : ", area);
    }
    rectangle() {
        const length = parseFloat(prompt("Enter the length of the rectangle: "));
        const breadth = parseFloat(prompt("Enter the breadth of the rectangle: "));
        let area = length * breadth;
        console.log("Area of the rectangle is : ", area);
    }
    triangle() {
        const height = parseFloat(prompt("Enter the height of the triangle: "));
        const base = parseFloat(prompt("Enter the base of the triangle: "));
        let area = 0.5 * (base * height);
        console.log("Area of the triangle is : ", area);
    }
}
class MyClass extends Area {
    main() {
        console.log("Enter your choice : \n1.Area of circle \n2.Area of square \n3.Area of rectangle \n4.Area of triangle");
        let choice = parseInt(prompt(""));
        switch (choice) {
            case 1:
                this.circle();
                break;
            case 2:
                this.square();
                break;
            case 3:
                this.rectangle();
                break;
            case 4:
                this.triangle();
                break;
            default:
                console.log("Invalid choice ...");
        }
    }
}
const area = new MyClass();
area.main();
