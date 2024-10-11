import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import AutoCounterPage from './AutoCounterPage'; // Adjust the import paths as necessary
// import TimerPage from './TimerPage';
// import WorldClockPage from './WorldClockPage';
import Footer from './components/Footer';
import WorldClockPage from './pages/WorldClockPage';
import SignUpPage from "./pages/SignUpPage";
import TimerPage from './pages/TimerPage';
import AutoCounterPage from './pages/AutoCounterPage';
import Counter from './pages/Counter';
// import Footer from './Footer'; // Import the Footer component

const App = () => {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<AutoCounterPage />} />
                    <Route path="/timer" element={<TimerPage />} />
                    <Route path="/signup" element={<SignUpPage />} />
                    <Route path="/world-clock" element={<WorldClockPage />} />
                    <Route path="/counter" element={<Counter />}/>
                </Routes>
                <Footer /> {/* Add the Footer component here */}
            </div>
        </Router>
    );
};

export default App;
