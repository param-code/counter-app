# Counter App

This project is a feature-rich stopwatch application built using React and Vite. It includes functionalities such as lap tracking, session analysis, light/dark mode switching, and a world clock.

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

The Counter App is a comprehensive stopwatch application that allows users to track time, record laps, analyze sessions, switch between light and dark modes, and view world clocks.

## Features

- Start, pause, and reset the stopwatch
- Record laps with individual lap times
- Analyze sessions with average, fastest, and slowest lap times
- Display lap times in bar graphs
- Switch between light and dark modes
- View current times of different countries

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

Once the development server is running, you can access the application at `http://localhost:3000`. Use the stopwatch to start, pause, and reset the timer. Record laps and analyze your session. Switch between light and dark modes and check the world clock for different countries.

## How It Works

The Counter App is built using React and Vite. Vite provides a fast development environment with Hot Module Replacement (HMR), which means any changes you make to the code are instantly reflected in the browser without a full reload.

### Project Structure

- `src/`: Contains the source code of the application
  - `App.jsx`: The main component that renders the stopwatch and other features
  - `index.jsx`: The entry point of the application
- `public/`: Contains static assets
- `vite.config.js`: Configuration file for Vite
- `.eslintrc.cjs`: Configuration file for ESLint

## Functionality Details

### Stopwatch

The stopwatch allows users to start, pause, and reset the timer. Users can also record laps, which are displayed with their respective lap times.

### Session Analysis

Users can analyze their session by clicking the "Show Analysis" button. This feature displays the average time, fastest time, and slowest time. It also shows all the laps in the form of bar graphs with their respective lap times.

### Light/Dark Mode

Users can switch between light and dark modes using a dedicated button. This enhances the user experience by providing a comfortable viewing option based on their preference.

### World Clock

The world clock feature displays the current time of different countries, allowing users to keep track of time zones across the globe.

## Videos

Here are some videos explaining the project and its functionalities:

- Project Overview - A brief overview of the Counter App and its features.
- How to Install and Run - Step-by-step guide on how to set up the project.
- Stopwatch and Lap Functionality - Detailed explanation of how the stopwatch and lap recording works.
- Session Analysis - Explanation of the session analysis feature.
- Light/Dark Mode - Demonstration of the light and dark mode switching.
- World Clock - Overview of the world clock feature.

## Contributing

Contributions are welcome! If you have any suggestions or improvements, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.
