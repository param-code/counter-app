
# ⏱️ Counter App - Stopwatch Application

Welcome to the **Counter App**, a simple stopwatch application built using **React** and **Vite**. This app allows users to measure time intervals with features for starting, pausing, and resetting the stopwatch.

<p align="center">
  <img src="https://img.shields.io/badge/React-17.0.2-blue?style=for-the-badge&logo=react"/>
  <img src="https://img.shields.io/badge/Vite-3.0-646CFF?style=for-the-badge&logo=vite"/>
  <img src="https://img.shields.io/badge/npm-v8.5.5-red?style=for-the-badge&logo=npm"/>
  <img src="https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge"/>
</p>

### 🌐 Backend is available at https://counter-app-backend.vercel.app/

## 📈 GitHub Repository Stats
| 🌟 **Stars** | 🍴 **Forks** | 🐛 **Issues** | 🔔 **Open PRs** | 🔕 **Closed PRs** | 🛠️ **Languages** | ✅ **Contributors** |
|--------------|--------------|---------------|-----------------|------------------|------------------|------------------|
| ![GitHub stars](https://img.shields.io/github/stars/param-code/counter-app) | ![forks](https://img.shields.io/github/forks/param-code/counter-app) | ![issues](https://img.shields.io/github/issues/param-code/counter-app?color=32CD32) | ![pull requests](https://img.shields.io/github/issues-pr/param-code/counter-app?color=FFFF8F) | ![Closed PRs](https://img.shields.io/github/issues-pr-closed/param-code/counter-app?color=20B2AA) | ![Languages](https://img.shields.io/github/languages/count/param-code/counter-app?color=20B2AA) | ![Contributors](https://img.shields.io/github/contributors/param-code/counter-app?color=00FA9A) |

## 📋 Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [How It Works](#how-it-works)
- [Functionality Overview](#functionality-overview)
- [Video Demo](#video-demo)
- [Contributing](#contributing)
- [License](#license)
- [Our Valuable Contributors](#our-valuable-contributors)

## 🛠️ Features

- 🚀 Start, pause, and reset stopwatch functionality
- ⏱️ Real-time time display
- 💻 Easy-to-use and responsive user interface
- ⚡ Fast performance with Vite for development
- 🌐 Deployed version available (optional: include link)

## 🧰 Installation

Follow these steps to get the Counter App up and running on your local machine.

1. **Clone the repository**
    ```bash
    git clone https://github.com/yourusername/counter-app.git
    ```
2. **Navigate to the project directory**
    ```bash
    cd counter-app
    ```
3. **Install dependencies**
    ```bash
    npm install
    ```
4. **Start the development server**
    ```bash
    npm run dev
    ```

Vite will launch the app in your default browser at `http://localhost:5173`.

## 🖥️ Usage

1. **Start/Stop**: Click the 'Start' button to begin timing, and the same button will turn into 'Stop' when the timer is running.
2. **Pause/Resume**: Pause the stopwatch by pressing the 'Stop' button and resume with 'Start'.
3. **Reset**: Reset the timer to zero by clicking the 'Reset' button.

## ⚙️ How It Works

The Counter App uses React's state management to control the stopwatch functionality. When the 'Start' button is pressed, the app starts counting time using `setInterval()`, and when paused or stopped, it clears the interval. Time is displayed in real-time by continuously updating the state.

### 🔍 Functionality Overview:
- **Start Timer**: Initializes the timer using a `setInterval` function, updating every 100 milliseconds.
- **Pause Timer**: Stops the interval without resetting the elapsed time.
- **Reset Timer**: Clears the interval and resets the state to the initial value of `00:00:00`.

## 🎥 Video Demo

Check out the app in action by watching this demo:

<video width="600" controls>
  <source src="src/assets/counter-app-video-demo2 (1) (2).mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>


## 🤝 Contributing

Contributions are welcome! If you would like to make any changes, feel free to fork the repository and submit a pull request.

1. Fork the repository
2. Clone the forked repository `git clone https://github.com/yourusername/counter-app.git`
3. Create a new branch for your feature: `git checkout -b feature-branch`
4. Commit your changes: `git commit -m 'Add new feature'`
5. Push to the branch: `git push origin feature-branch`
6. Submit a pull request

For more detailed guidelines on contributing, please refer to the [Contributing.md](Contributing.md) file.

## 📜 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## 🙌 Our Valuable Contributors 

[![Contributors](https://contrib.rocks/image?repo=param-code/counter-app)](https://github.com/param-code/counter-app/graphs/contributors)

![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)



## ⭐ Stargazers ❤️

<div align='left'>

[![Stargazers repo roster for @param-code/counter-app](https://reporoster.com/stars/dark/param-code/counter-app)](https://github.com/param-code/counter-app/stargazers)


</div>

## 🍴 Forkers ❤️

[![Forkers repo roster for @param-code/counter-app](https://reporoster.com/forks/dark/param-code/counter-app)](https://github.com/param-code/counter-app/network/members)




![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)


<div align="left">
    <a href="#top">
        <img src="https://img.shields.io/badge/Back%20to%20Top-000000?style=for-the-badge&logo=github&logoColor=white" alt="Back to Top">
    </a>
</div>