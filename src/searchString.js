"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
Object.defineProperty(exports, "__esModule", { value: true });
const inputOutput_1 = require("./inputOutput");
class StringRemover {
    static removeFirstOccurrence(inputString, searchString) {
        const index = inputString.indexOf(searchString);
        if (index === -1) {
            return inputString; // Search string not found
        }
        return inputString.slice(0, index) + inputString.slice(index + searchString.length);
    }
}
inputOutput_1.readline.question('Input String: ', (inputString) => {
    inputOutput_1.readline.question('Input Search String: ', (searchString) => {
        const result = StringRemover.removeFirstOccurrence(inputString, searchString);
        console.log('Result:', result);
        inputOutput_1.readline.close();
    });
});
