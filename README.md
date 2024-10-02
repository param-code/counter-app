# Counter App

This project is a simple counter application built using React and Vite. It demonstrates the basic setup of a React project with Vite, including Hot Module Replacement (HMR) and ESLint for code quality.

## Table of Contents

- Introduction
- Features
- Installation
- Usage
- How It Works
- Functionality Details
- Videos
- Contributing
- License

## Introduction

The Counter App is a minimalistic application that allows users to increment and decrement a counter. It serves as a starting point for learning and building React applications with Vite.

## Features

- Increment and decrement the counter
- Hot Module Replacement (HMR) for a smooth development experience
- ESLint integration for maintaining code quality

## Installation

To get started with the Counter App, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/param-code/counter-app.git
   cd counter-app
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

## Usage

Once the development server is running, you can access the application at `http://localhost:3000`. Use the buttons to increment or decrement the counter.

## How It Works

The Counter App is built using React and Vite. Vite provides a fast development environment with HMR, which means any changes you make to the code are instantly reflected in the browser without a full reload.

### Project Structure

- `src/`: Contains the source code of the application
  - `App.jsx`: The main component that renders the counter
  - `index.jsx`: The entry point of the application
- `public/`: Contains static assets
- `vite.config.js`: Configuration file for Vite
- `.eslintrc.cjs`: Configuration file for ESLint

## Functionality Details

### Increment Counter

The increment functionality increases the counter value by 1 each time the "Increment" button is clicked. This is achieved using React's state management.

### Decrement Counter

The decrement functionality decreases the counter value by 1 each time the "Decrement" button is clicked. Similar to the increment functionality, it uses React's state management.

### Hot Module Replacement (HMR)

HMR allows you to see changes in real-time without refreshing the browser. This is enabled by Vite and helps in a smoother development workflow.

### ESLint Integration

ESLint is used to ensure code quality and consistency. It helps in identifying and fixing problems in the codebase.

## Videos

Here are some videos explaining the project and its functionalities:

- Project Overview - A brief overview of the Counter App and its features.
- How to Install and Run - Step-by-step guide on how to set up the project.
- Increment and Decrement Functionality - Detailed explanation of how the counter works.
- Understanding HMR - Explanation of Hot Module Replacement and its benefits.

## Contributing

Contributions are welcome! If you have any suggestions or improvements, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.
