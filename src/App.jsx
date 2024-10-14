import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import WorldClockPage from './pages/WorldClockPage';
import SignUpPage from "./pages/SignUpPage";
import TimerPage from './pages/TimerPage';
import AutoCounterPage from './pages/AutoCounterPage';
import Design from './components/Design'; 
import Counter from './pages/Counter';
import AboutPage from './pages/AboutPage';    // Import About page
import HistoryPage from './pages/HistoryPage'; // Import History page
import SettingsPage from './pages/SettingsPage'; // Import Settings page
import ThemesPage from './pages/ThemesPage';   // Import Themes page
// import Footer from './Footer'; // Import the Footer component

const App = () => {
    return (
        <Router>
            <div>
                {/* Particles design will be displayed globally */}
                <Design /> 
                <Routes>
                    <Route path="/" element={<AutoCounterPage />} />
                    <Route path="/timer" element={<TimerPage />} />
                    <Route path="/signup" element={<SignUpPage />} />
                    <Route path="/world-clock" element={<WorldClockPage />} />
                    <Route path="/counter" element={<Counter />}/>
                    <Route path="/about" element={<AboutPage />} />  {/* New Route for About */}
                    <Route path="/history" element={<HistoryPage />} /> {/* New Route for History */}
                    <Route path="/settings" element={<SettingsPage />} /> {/* New Route for Settings */}
                    <Route path="/themes" element={<ThemesPage />} /> {/* New Route for Themes */}
                </Routes>
            </div>
        </Router>
    );
};

// Define the new sections at the bottom of App.jsx

/*const AboutPage = () => {
    return (
        <div>
            <h1>About Page</h1>
            <p>This is the About section of the Counter App, explaining its features and purpose.</p>
        </div>
    );
};*/

/*const HistoryPage = () => {
    return (
        <div>
            <h1>History Page</h1>
            <p>This is the History section of the Counter App where you can review your past counter sessions.</p>
        </div>
    );
};*/

/*const SettingsPage = () => {
    return (
        <div>
            <h1>Settings Page</h1>
            <p>This is the Settings section of the Counter App where you can configure app settings like notifications and time zones.</p>
        </div>
    );
};*/

/*const ThemesPage = () => {
    return (
        <div>
            <h1>Themes Page</h1>
            <p>This is the Themes section of the Counter App where you can switch between light and dark modes.</p>
        </div>
    );
};*/

// Define the NotFoundPage component to display when no routes match
const NotFoundPage = () => {
    return (
        <div>
            <h1>404 - Page Not Found</h1>
            <p>Oops! The page you're looking for doesn't exist.</p>
        </div>
    );
};
<Route path="*" element={<NotFoundPage />} />

export default App;
