"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
import { readline } from "./inputOutput";


class StringRemover {
    static removeFirstOccurrence(inputString: string, searchString: string): string {
        const index = inputString.indexOf(searchString);
        if (index === -1) {
            return inputString; // Search string not found
        }
        return inputString.slice(0, index) + inputString.slice(index + searchString.length);
    }
}

readline.question('Input String: ', (inputString: string) => {
    readline.question('Input Search String: ', (searchString: string) => {
        const result = StringRemover.removeFirstOccurrence(inputString, searchString);
        console.log('Result:', result);
        readline.close();
    });
});