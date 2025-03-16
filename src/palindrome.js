"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
Object.defineProperty(exports, "__esModule", { value: true });
const inputOutput_1 = require("./inputOutput");
class PalindromeChecker {
    static isPalindrome(inputString) {
        const cleanedString = inputString.toLowerCase().replace(/[^a-z0-9]/g, '');
        const reversedString = cleanedString.split('').reverse().join('');
        return cleanedString === reversedString;
    }
}
inputOutput_1.readline.question('Input String: ', (inputString) => {
    const isPalindrome = PalindromeChecker.isPalindrome(inputString);
    console.log('Palindrome:', isPalindrome);
    inputOutput_1.readline.close();
});
