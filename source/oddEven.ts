import { readline } from "./inputOutput";

class OddEvenChecker {
  number: number;

  constructor(number: number) {
    this.number = number;
  }

  isEven(): boolean {
    return this.number % 2 === 0;
  }
}

class NumberChecker {
  number: number;

  constructor(number: number) {
    this.number = number;
  }

  isEven(): boolean {
    return this.number % 2 === 0;
  }
}

const oddEvenExample = new OddEvenChecker(10);
console.log("  ====== Welcome to Odd Even Checker ====== ");
console.log("This is the example how to use Odd Even Checker");
console.log(`Input Number: ${oddEvenExample.number} (example input 10)`);
console.log(`isEven: ${oddEvenExample.isEven()}`);
console.log();

readline.question('Input Number: ', (numberInput: string) => {
  const number = parseInt(numberInput);

  if (isNaN(number)) {
    console.log('Invalid input. Please enter a number.');
    readline.close();
    return;
  }

  const numberChecker = new NumberChecker(number);
  console.log('isEven:', numberChecker.isEven());

  readline.close();
});