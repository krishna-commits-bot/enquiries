# 📱 React + Capacitor Project Setup Guide

A comprehensive and professional guide to initialize a React project and integrate Capacitor for cross-platform mobile development.

---

## 🛠️ Initial Setup Overview

**Objectives:**

* Set up the project structure using React
* Integrate Capacitor
* Configure the local development environment

---

## 🚀 Phase 1: Prerequisites & Core Tooling Installation

### ✅ Step 1.1: Verify Node.js and npm Installation

```bash
node -v
npm -v
```

Ensure both commands return version outputs.

---

### ✅ Step 1.2: Verify Git Installation

```bash
git --version
```

Ensure Git is available for version control.

---

### ✅ Step 1.3: Install VS Code and Recommended Extensions

* **VS Code**: [Download Here](https://code.visualstudio.com/)
* **Extensions:**

  * ESLint
  * Prettier - Code formatter
  * Babel JavaScript

---

### ✅ Step 1.4: Install JDK for Android Builds

```bash
javac -version
```

* **Recommended JDK**: [Adoptium Temurin](https://adoptium.net/)
* Ensure JDK is added to your system's `PATH` environment variable.

---

### ✅ Step 1.5: Install Android Studio

* [Download Android Studio](https://developer.android.com/studio)
* During setup, ensure the following are installed:

  * Android SDK
  * SDK Platform-Tools
  * SDK Build-Tools

📌 *Emulator configuration will be addressed later.*

---

### ✅ Step 1.6: Install Xcode (macOS Only)

* Install Xcode from the Mac App Store

```bash
xcode-select --install
```

Installs Xcode Command Line Tools.

---

## 🌱 Phase 2: Create and Set Up React App

### 📂 Step 2.1: Choose a Project Directory

Navigate to your desired development workspace.

### 🧽 Step 2.2: Initialize React App

```bash
npx create-react-app todoApp
```

* `npx`: Executes packages without installing globally
* `create-react-app`: Official React project scaffolding tool
* `todoApp`: Your project name (can be replaced with any name)

### 📁 Step 2.3: Navigate into the App Directory

```bash
cd todoApp
```

### 🔄 Step 2.4: Start the Development Server

```bash
npm start
```

* Launches the default React application in the browser
* Use `Ctrl + C` to stop the server

---

## 🔗 Phase 3: Integrating Capacitor

### 📦 Step 3.1: Install Capacitor Core & CLI

```bash
npm install @capacitor/core @capacitor/cli
```

Ensure you are in the React project root directory.

#### About the Packages:

* `@capacitor/core`: This is the runtime library that provides the core Capacitor APIs (e.g., for accessing native device features such as camera, geolocation, storage, etc.). This acts as a bridge between your web code (JavaScript/TypeScript) and native platforms.
* `@capacitor/cli`: Command-line interface to manage project initialization, platform addition, syncing, and builds

---

### ⚙️ Step 3.2: Initialize Capacitor

```bash
npx cap init
```

**Purpose:**

* This sets up Capacitor within our existing web project. This operation creates the foundational configuration necessary for Capacitor to operate effectively in a cross-platform environment.
* Sets up `capacitor.config.json`
* It will ask you a few questions:

  * **App Name?**: You can enter `<nameOfApp>` (or keep the default if it picked up `smartgoal-app`).
  * **App ID?**: This is a unique identifier for your app, usually in reverse domain style (e.g., `com.companyname.todoapp`). You can use something like `com.todo.app`. **Make a note** of the App ID you choose, as you'll need it if you ever publish the app.
  * **Web asset directory?**: Create-React-App uses `build` as its web asset directory. So, enter `build`.
* This command will create a `capacitor.config.json` file in your project root. This file contains the default Capacitor configuration.
* Enables future addition of native Android/iOS platforms
* initializing Capacitor — sets up the foundational configuration (capacitor.config.json) that links our web app (in this case, a React app) with Capacitor. However, this does not yet create the native Android or iOS projects. It merely prepares the system for them.

---

### 📆 Step 3.3: Install Native Platforms (Android and iOS)

#### Install the Android platform:

```bash
npm install @capacitor/android
npx cap add android
```

#### If you are on macOS and have Xcode installed, install the iOS platform:

```bash
npm install @capacitor/ios
npx cap add ios
```

> If you are not on a Mac, you can skip the iOS part for now.

These commands after initialization of capacitor are to generate the actual native platform-specific folders: 
*  android/: Contains a full-fledged Android Studio project
*  ios/: Contains an Xcode project (macOS only)

---

### ✏️ Step 3.4: Update `capacitor.config.json` (Important for Create React App)

By default, Create-React-App serves content from the root during development, but Capacitor might look for an `index.html` at the root of the web asset directory. We need to ensure Capacitor knows where to look, especially for live reload.

Also, the default `npm start` server for Create-React-App runs on `localhost:3000`. We'll tell Capacitor about this for development.

#### Action:

Open the `capacitor.config.json` file in your VS Code. It should look something like this:

```json
{
  "appId": "com.todoapp.app",
  "appName": "todoapp",
  "webDir": "build",
  "bundledWebRuntime": false
}
```

#### Modify it to include the server configuration for live reload with the React dev server:

```json
{
  "appId": "com.todoapp.app",
  "appName": "todoapp",
  "webDir": "build",
  "bundledWebRuntime": false,
  "server": {
    "url": "http://localhost:3000",
    "cleartext": true
  }
}
```

---

### 🔧 Step 3.5: Update .gitignore

This `.gitignore` file is basically for telling github about things which we don't want to commit. . Capacitor generates native project folders (`android/` and `ios/`) that ideally **should be checked into version control**. However, some generated files within them, and other files specific to your local build environment, **should be ignored**.

* Create React App already provides a comprehensive `.gitignore`.
* We might need to add a few Capacitor-specific ignores if they aren't covered, but typically the defaults are sufficient.
* One thing we **definitely do not want to commit** is the `node_modules` folder. Create React App already includes this in `.gitignore`.

No immediate changes are necessary unless custom native plugins or build outputs introduce additional files. We will revisit `.gitignore` configuration as the project evolves.

---

---

## 📆 Phase 4: Initial Git Commit

### ✏️ Step 4.1: Initialize Git Repository (if not already done by CRA)

Create React App usually initializes a git repository. To check, in the `todoapp` directory, type:

```bash
git status
```

If it says `fatal: not a git repository`, then run:

```bash
git init
git add .
git commit -m "Initial commit: Create React App setup"
```

If it's already a git repository (most likely), Create React App might have made an initial commit.

### 📂 Step 4.2: Commit Capacitor Integration

In your terminal (still in `smartgoal-app` directory):

```bash
git add .
git commit -m "feat: Integrate Capacitor with Android and iOS platforms"
```

> Using `feat:` is a common convention for commit messages indicating a new feature or significant setup step.

---

## ⚖️ Phase 5: Development Environment Configuration

### 📅 Step 5.1: VS Code Project Workspace

Open the `todoapp` folder in VS Code:

This makes VS Code treat it as the root of your project.

### ✍️ Step 5.2: Configure ESLint and Prettier (Basic Setup for now)

Create React App comes with ESLint pre-configured. We'll fine-tune it later.

#### For Prettier:

We will install prettier as dev dependency, as we don't need this once we successfully done with building of our project.

```bash
npm install --save-dev --save-exact prettier
```

Create a Prettier configuration file in the project root by the name `.prettierrc.json`

Add a basic configuration to this file (`.prettierrc.json`):

```json
{
  "semi": true,  
  "trailingComma": "all",
  "singleQuote": true,
  "printWidth": 80,
  "tabWidth": 2
}
```

Create a `.prettierignore` file in the project root:

Add common patterns to ignore:

```
# Build output
build/
coverage/

# Native projects (often have their own formatting)
android/
ios/

# Misc
node_modules/
*.lock
```

To format all relevant files, add the following script to your `package.json` under `scripts`:

Adding a "format" script to the package.json file, as shown below, allows you to run Prettier to automatically format all relevant files in your project with a single command (npm run format)

*  The pattern src/**/*.{js,jsx,ts,tsx,json,css,scss,md} specifies which files to format: 
    *  src/**/ means all files and subdirectories within the src folder.
    *  *.{js,jsx,ts,tsx,json,css,scss,md} includes JavaScript, React, TypeScript, JSON, CSS, SCSS, and Markdown files.
*  This ensures Prettier only formats relevant source files, respecting .prettierignore to skip files like node_modules/ or build/.

```json
"format": "prettier --write \"src/**/*.{js,jsx,ts,tsx,json,css,scss,md}\""
```

Now you can run:

```bash
npm run format
```

To auto-format your codebase.

#### Finalize and Commit Formatter Setup:

```bash
git add .
git commit -m "chore: Configure Prettier for code formatting"
```

> Use `chore:` for maintenance tasks like formatter setup

---

