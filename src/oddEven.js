"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const inputOutput_1 = require("./inputOutput");
class OddEvenChecker {
    constructor(number) {
        this.number = number;
    }
    isEven() {
        return this.number % 2 === 0;
    }
}
class NumberChecker {
    constructor(number) {
        this.number = number;
    }
    isEven() {
        return this.number % 2 === 0;
    }
}
const oddEvenExample = new OddEvenChecker(10);
console.log("  ====== Welcome to Odd Even Checker ====== ");
console.log("This is the example how to use Odd Even Checker");
console.log(`Input Number: ${oddEvenExample.number} (example input 10)`);
console.log(`isEven: ${oddEvenExample.isEven()}`);
console.log();
inputOutput_1.readline.question('Input Number: ', (numberInput) => {
    const number = parseInt(numberInput);
    if (isNaN(number)) {
        console.log('Invalid input. Please enter a number.');
        inputOutput_1.readline.close();
        return;
    }
    const numberChecker = new NumberChecker(number);
    console.log('isEven:', numberChecker.isEven());
    inputOutput_1.readline.close();
});
