"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
import { readline } from "./inputOutput";

class PalindromeChecker {
    static isPalindrome(inputString: string): boolean {
        const cleanedString = inputString.toLowerCase().replace(/[^a-z0-9]/g, '');
        const reversedString = cleanedString.split('').reverse().join('');
        return cleanedString === reversedString;
    }
}

readline.question('Input String: ', (inputString: string) => {
    const isPalindrome = PalindromeChecker.isPalindrome(inputString);
    console.log('Palindrome:', isPalindrome);
    readline.close();
});