"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
let heightString = prompt("Enter your height: ");
try {
    let height = parseFloat(heightString);
    if (isNaN(height)) {
        throw new Error("error1");
    }
    else if (height > 250) {
        throw new Error("error2");
    }
    else if (height < 40) {
        throw new Error("error3");
    }
}
catch (error) {
    if (error.message === "error1") {
        console.log("The height is NaN");
    }
    else if (error.message === "error2") {
        console.log("Huge height error");
    }
    else if (error.message === "error3") {
        console.log("Tiny height error");
    }
    else {
        console.log("valid");
    }
}
