import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import WorldClockPage from './pages/WorldClockPage';
import TimerPage from './pages/TimerPage';
import AutoCounterPage from './pages/AutoCounterPage';
import Design from './components/Design'; 

const App = () => {
    return (
        <Router>
            <div>
                {/* Particles design will be displayed globally */}
                <Design /> 
                <Routes>
                    <Route path="/" element={<AutoCounterPage />} />
                    <Route path="/timer" element={<TimerPage />} />
                    <Route path="/world-clock" element={<WorldClockPage />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
};

export default App;
