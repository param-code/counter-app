import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import WorldClockPage from './pages/WorldClockPage';
import SignUpPage from "./pages/SignUpPage";
import TimerPage from './pages/TimerPage';
import AutoCounterPage from './pages/AutoCounterPage';
import Design from './components/Design'; 
import Counter from './pages/Counter';
import PageNotfound from "./components/PageNotfound";
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
                    <Route path='*' element={<PageNotfound />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
