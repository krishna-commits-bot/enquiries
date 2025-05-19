# Prettier Ignore Configuration (.prettierignore)

This document explains the patterns in the `.prettierignore` file, which specifies files and directories that Prettier should skip during formatting. The syntax is similar to `.gitignore`.

## Ignored Patterns

Below is a breakdown of each pattern in `.prettierignore` and its purpose:

- **`build/`**
  - **Description**: Ignores the build output directory, common in JavaScript/TypeScript projects.
  - **Purpose**: Generated files (e.g., compiled JavaScript or bundled assets) don’t need formatting.

- **`coverage/`**
  - **Description**: Ignores code coverage reports.
  - **Purpose**: These are generated files (e.g., from testing tools like Jest) and should not be formatted.

- **`android/`**
  - **Description**: Ignores Android native project files.
  - **Purpose**: Android projects often use their own formatting rules (e.g., via Gradle or Android Studio).

- **`ios/`**
  - **Description**: Ignores iOS native project files.
  - **Purpose**: iOS projects use Xcode’s formatting or other tools, so Prettier should skip them.

- **`node_modules/`**
  - **Description**: Ignores the Node.js dependencies folder.
  - **Purpose**: Third-party libraries should not be formatted, as they are managed externally.

- **`*.lock`**
  - **Description**: Ignores lock files (e.g., `package-lock.json`, `yarn.lock`).
  - **Purpose**: These machine-generated files don’t require formatting.

## Usage

- The `.prettierignore` file is placed in the project root, and Prettier automatically detects it.
- It works with the `npm run format` script (defined in `package.json`) and the Prettier VS Code extension.
- No additional VS Code extension is required; Prettier respects `.prettierignore` natively.
- To format files (excluding ignored patterns), run:
  ```bash
  npm run format
  ```

## Why Use These Patterns?

These patterns prevent Prettier from formatting files that are either generated, managed by other tools, or irrelevant to source code styling. This keeps the formatting process efficient and avoids unnecessary changes in version control.

For more details on `.prettierignore`, visit the [Prettier Documentation](https://prettier.io/docs/en/ignore.html).
