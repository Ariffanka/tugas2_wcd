"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const inputOutput_1 = require("./inputOutput");
class DistanceConverter {
    constructor(value, unit) {
        this.value = value;
        this.unit = unit;
    }
    convertToKm() {
        if (this.unit.toLowerCase() === "cm") {
            return this.value / 100000;
        }
        else if (this.unit.toLowerCase() === "km") {
            return this.value;
        }
        else {
            return NaN; // Invalid unit
        }
    }
    convertToCm() {
        if (this.unit.toLowerCase() === "km") {
            return this.value * 100000;
        }
        else if (this.unit.toLowerCase() === "cm") {
            return this.value;
        }
        else {
            return NaN; // Invalid unit
        }
    }
}
class Distance {
    constructor(value, unit) {
        this.value = value;
        this.unit = unit;
    }
    convertToKm() {
        if (this.unit.toLowerCase() === "cm") {
            return this.value / 100000;
        }
        else if (this.unit.toLowerCase() === "km") {
            return this.value;
        }
        else {
            return NaN; // Invalid unit
        }
    }
    convertToCm() {
        if (this.unit.toLowerCase() === "km") {
            return this.value * 100000;
        }
        else if (this.unit.toLowerCase() === "cm") {
            return this.value;
        }
        else {
            return NaN; // Invalid unit
        }
    }
}
const distanceExample = new DistanceConverter(100000, "cm");
console.log("  ====== Welcome to Distance Converter ====== ");
console.log("This is the example how to use Distance Converter");
console.log(`Input Distance: ${distanceExample.value} ${distanceExample.unit} (example input 100000 cm)`);
console.log(`Kilometers: ${distanceExample.convertToKm()}`);
console.log(`Centimeters: ${distanceExample.convertToCm()}`);
console.log();
inputOutput_1.readline.question('Input Distance (value unit): ', (distanceInput) => {
    const parts = distanceInput.split(" ");
    if (parts.length !== 2) {
        console.log('Invalid input. Please enter value and unit (e.g., 100 cm or 1 km).');
        inputOutput_1.readline.close();
        return;
    }
    const value = parseFloat(parts[0]);
    const unit = parts[1];
    if (isNaN(value)) {
        console.log('Invalid value. Please enter a number.');
        inputOutput_1.readline.close();
        return;
    }
    const distance = new Distance(value, unit);
    console.log('Kilometers:', distance.convertToKm());
    console.log('Centimeters:', distance.convertToCm());
    inputOutput_1.readline.close();
});
