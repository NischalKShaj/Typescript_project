import PromptSync from "prompt-sync";
const prompt = PromptSync();

class Car {
  name: string;
  mileage: number;
  max_speed: number;

  constructor(name: string, mileage: number, max_speed: number) {
    this.name = name;
    this.mileage = mileage;
    this.max_speed = max_speed;
  }
  display(): void {
    console.log(
      `Your car name is ${this.name} it has a mileage upto ${this.mileage}kmpl and it has a maximum speed of ${this.max_speed}kmph`
    );
  }
}
let name = prompt("Enter the name of the car : ");
let mileage = parseFloat(prompt("Enter the mileage of the car : "));
let max_speed = parseFloat(prompt("Enter the speed of the car : "));
let car = new Car(name, mileage, max_speed);
car.display();
