## Tugas 2 Web Client Development

Welcome back to my github repo. right now guys i wanna share about result of this exercise divided into two part. First about merge repo github flow strategy and second making script like expected in exercise 2.

# How To Merge Repo (using GitHub Flow strategy)

GitHub Flow is a lightweight, branch-based workflow that's perfect for teams and individuals. It's designed to be simple and efficient. Let's walk through the steps:

1.  **Create a Branch:**
    * Start by creating a new branch for each feature or bug fix you're working on.
    * Use a descriptive name, like `feature/add-login-form` or `bugfix/fix-header-style`.
    * In your terminal, navigate to your repository and use the following command:

    ```bash
    git checkout -b feature/my-new-feature
    ```

    * This creates a new branch and switches to it.

2.  **Make Changes:**
    * Make your changes, commit them regularly with clear messages.

    ```bash
    git add .
    git commit -m "Add login form with validation"
    ```

3.  **Push to GitHub:**
    * Push your branch to your remote repository.

    ```bash
    git push origin feature/my-new-feature
    ```

4.  **Create a Pull Request (PR):**
    * Go to your repository on GitHub.
    * You'll see a prompt to create a pull request for your new branch.
    * Click "Compare & pull request".
    * Write a clear title and description for your PR.
    * Request reviews from your team members.

5.  **Code Review:**
    * Your team members review your code, provide feedback, and may request changes.
    * Make the necessary changes and push them to your branch.
    * The PR will automatically update.

6.  **Merge:**
    * Once the PR is approved, you can merge it into the `main` branch.
    * Click "Merge pull request" and confirm the merge.
    * You can then delete the branch.

7.  **Deploy:**
    * The `main` branch should always be deployable.
    * Deploy your changes to your production environment.

8.  **Repeat:**
    * Start the process again for your next feature or bug fix.

# Exercise 2: TypeScript Scripts

This exercise involved creating TypeScript scripts for various tasks. Here are the scripts and their functionalities:

1.  **Temperature Converter (Fahrenheit to Celsius):**
    * Converts Fahrenheit to Celsius and rounds the result to an integer.
    * Example:

    ```typescript
    // Example usage:
    const temp = new Temperature(90);
    console.log("Celsius:", temp.convertToCelsius()); // Output: Celsius: 32
    ```

2.  **Distance Converter (cm to km or vice versa):**
    * Converts centimeters to kilometers or kilometers to centimeters.
    * Example:

    ```typescript
    // Example usage:
    const distance = new Distance(100000, "cm");
    console.log("Kilometers:", distance.convertToKm()); // Output: Kilometers: 1
    ```

3.  **Odd/Even Checker:**
    * Checks if a given number is odd or even.
    * Example:

    ```typescript
    // Example usage:
    const checker = new NumberChecker(7);
    console.log("isEven:", checker.isEven()); // Output: isEven: false
    ```

4.  **String Remover:**
    * Removes the first occurrence of a search string from a given string.
    * Example:

    ```typescript
    // Example usage:
    const result = StringRemover.removeFirstOccurrence("Hello World", "ello");
    console.log("Result:", result); // Output: Result: Ho World
    ```

5.  **Palindrome Checker:**
    * Checks if a given string is a palindrome.
    * Example:

    ```typescript
    // Example usage:
    const isPalindrome = PalindromeChecker.isPalindrome("madam");
    console.log("Palindrome:", isPalindrome); // Output: Palindrome: true
    ```

# Making Script for exercise 2
1. Convert fahrenheit into celcius as fahreheitIntoCelsius.ts
2. Convert distance(cm into km or vice versa) as cmIntoKm.ts
3. Find odd or even number as oddEven.ts
4. Find search string and remove first occurence as searchString.ts
5. Find palindrome string as palindrome.ts
