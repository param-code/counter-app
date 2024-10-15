import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WorldClockPage from './pages/WorldClockPage';
// import SignUpPage from "./pages/SignUpPage";
import TimerPage from './pages/TimerPage';
import AutoCounterPage from './pages/AutoCounterPage';
import Design from './components/Design'; 
import Counter from './pages/Counter';
import Contributors from "./pages/Contributors";
import Footer from "./components/Footer.jsx";
import SpotifyPlayer from './components/SpotifyPlayer';
import About from './components/About';
// import AboutPage from './pages/AboutPage';    // Import About page
// import HistoryPage from './pages/HistoryPage'; // Import History page
// import SettingsPage from './pages/SettingsPage'; // Import Settings page
// import ThemesPage from './pages/ThemesPage';   // Import Themes page
// import Footer from './Footer'; // Import the Footer component
import Template from "./components/Auth/Template";

const App = () => {

    return (
        <Router>
            <div>
                {/* Particles design will be displayed globally */}
                <Design /> 
                <SpotifyPlayer />
                <Routes>
                    <Route path="/" element={<AutoCounterPage />} />
                    <Route path="/timer" element={<TimerPage />} />
                    {/* <Route path="/signup" element={<SignUpPage />} /> */}
                    <Route path="/WorldClock" element={<WorldClockPage />} />
                    <Route path="/counter" element={<Counter />} />
                      <Route path="/Contributors" element={<Contributors />} />
                    <Route path='/signup' element={<Template formType={"signup"} />} />
                    <Route path='/login' element={<Template formType={"login"} />} /> 
                    <Route path='/about' element={<About/>}/>
                </Routes>
                <Footer/>
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
