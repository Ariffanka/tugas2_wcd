import { readline } from "./inputOutput";

class TemperatureConverter {
  fahrenheit: number;

  constructor(fahrenheit: number) {
    this.fahrenheit = fahrenheit;
  }

  convertToCelsius(): number {
    return (this.fahrenheit - 32) * (5 / 9);
  }
}

class Temperature {
  fahrenheit: number;

  constructor(fahrenheit: number) {
    this.fahrenheit = fahrenheit;
  }

  convertToCelsius(): number {
    return (this.fahrenheit - 32) * (5 / 9);
  }
}

const temperatureExample = new TemperatureConverter(68);
console.log("  ====== Welcome to Temperature Converter ====== ");
console.log("This is the example how to use Temperature Converter");
console.log(`Input Fahrenheit: ${temperatureExample.fahrenheit} (example input 68)`);
console.log(`Celsius: ${temperatureExample.convertToCelsius()}`);
console.log();

readline.question('Input Fahrenheit: ', (fahrenheitInput: string) => {
  const fahrenheit = parseFloat(fahrenheitInput);

  if (isNaN(fahrenheit)) {
    console.log('Invalid input. Please enter a number.');
    readline.close();
    return;
  }

  const temperature = new Temperature(fahrenheit);
  console.log('Celsius:', temperature.convertToCelsius());

  readline.close();
});