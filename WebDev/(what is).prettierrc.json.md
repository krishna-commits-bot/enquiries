# Prettier Configuration (.prettierrc.json)

This document explains the settings in the `.prettierrc.json` file, which configures Prettier to enforce consistent code styling across the project.

## Configuration Settings

Below is a breakdown of each setting in `.prettierrc.json` and its purpose:

- **`semi: true`**
  - **Description**: Ensures semicolons are added at the end of statements.
  - **Example**: `let x = 5;` instead of `let x = 5`.
  - **Purpose**: Improves code clarity and prevents potential issues in JavaScript where automatic semicolon insertion (ASI) might fail.

- **`trailingComma: "all"`**
  - **Description**: Adds trailing commas wherever possible in arrays, objects, and function parameters.
  - **Example**: `{ a: 1, b: 2, }` instead of `{ a: 1, b: 2 }`.
  - **Purpose**: Reduces git diff noise when adding new items and prevents syntax errors during code edits.

- **`singleQuote: true`**
  - **Description**: Uses single quotes (`'`) instead of double quotes (`"`) for strings.
  - **Example**: `'hello'` instead of `"hello"`.
  - **Purpose**: Enforces a consistent string style, reducing debates over quote usage.

- **`printWidth: 80`**
  - **Description**: Sets the maximum line length to 80 characters before Prettier wraps code to the next line.
  - **Example**: Long lines are split to stay within 80 characters.
  - **Purpose**: Improves readability, especially on smaller screens or in side-by-side code reviews.

- **`tabWidth: 2`**
  - **Description**: Specifies that indentation uses 2 spaces per tab level.
  - **Example**: Nested code is indented with two spaces (e.g., inside a function or block).
  - **Purpose**: Ensures consistent and compact indentation across all files.

## Usage

- These settings are applied automatically when running `npm run format` (defined in `package.json` as `"format": "prettier --write \"src/**/*.{js,jsx,ts,tsx,json,css,scss,md}\""`).
- Files ignored by Prettier are listed in `.prettierignore` (e.g., `node_modules/`, `build/`).
- To apply formatting, run:
  ```bash
  npm run format
  ```
- If using the Prettier VS Code extension, these settings are applied on save (ensure `"editor.defaultFormatter": "esbenp.prettier-vscode"` in VS Code settings).

## Why Use These Settings?

These settings standardize code formatting, making it easier to read, maintain, and collaborate on. They align with common JavaScript/TypeScript community practices and minimize style-related discussions in code reviews.

For more details on Prettier configuration, visit the [Prettier Documentation](https://prettier.io/docs/en/configuration.html).
