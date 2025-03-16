"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const inputOutput_1 = require("./inputOutput");
class TemperatureConverter {
    constructor(fahrenheit) {
        this.fahrenheit = fahrenheit;
    }
    convertToCelsius() {
        return (this.fahrenheit - 32) * (5 / 9);
    }
}
class Temperature {
    constructor(fahrenheit) {
        this.fahrenheit = fahrenheit;
    }
    convertToCelsius() {
        return (this.fahrenheit - 32) * (5 / 9);
    }
}
const temperatureExample = new TemperatureConverter(68);
console.log("  ====== Welcome to Temperature Converter ====== ");
console.log("This is the example how to use Temperature Converter");
console.log(`Input Fahrenheit: ${temperatureExample.fahrenheit} (example input 68)`);
console.log(`Celsius: ${temperatureExample.convertToCelsius()}`);
console.log();
inputOutput_1.readline.question('Input Fahrenheit: ', (fahrenheitInput) => {
    const fahrenheit = parseFloat(fahrenheitInput);
    if (isNaN(fahrenheit)) {
        console.log('Invalid input. Please enter a number.');
        inputOutput_1.readline.close();
        return;
    }
    const temperature = new Temperature(fahrenheit);
    console.log('Celsius:', temperature.convertToCelsius());
    inputOutput_1.readline.close();
});
