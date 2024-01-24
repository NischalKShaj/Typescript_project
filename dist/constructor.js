"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
class Car {
    constructor(name, mileage, max_speed) {
        this.name = name;
        this.mileage = mileage;
        this.max_speed = max_speed;
    }
    display() {
        console.log(`Your car name is ${this.name} it has a mileage upto ${this.mileage}kmpl and it has a maximum speed of ${this.max_speed}kmph`);
    }
}
let name = prompt("Enter the name of the car : ");
let mileage = parseFloat(prompt("Enter the mileage of the car : "));
let max_speed = parseFloat(prompt("Enter the speed of the car : "));
let car = new Car(name, mileage, max_speed);
car.display();
