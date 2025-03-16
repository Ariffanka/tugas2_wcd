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

# Making Script for exercise 2 using Typescript
1. Convert fahrenheit into celcius as fahreheitIntoCelsius.ts
2. Convert distance(cm into km or vice versa) as cmIntoKm.ts
3. Find odd or even number as oddEven.ts
4. Find search string and remove first occurence as searchString.ts
5. Find palindrome string as palindrome.ts
