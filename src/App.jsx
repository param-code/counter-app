
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import WorldClockPage from './pages/WorldClockPage';
// import SignUpPage from "./pages/SignUpPage";
import TimerPage from './pages/TimerPage';
import AutoCounterPage from './pages/AutoCounterPage';
import Design from './components/Design'; 
import Counter from './pages/Counter';
import Contributors from "./pages/Contributors";
import Footer from "./componenets/Footer";

// import Footer from './Footer'; // Import the Footer component
import Template from "./components/Auth/Template";

const App = () => {

    return (
        <Router>
            <div>
                {/* Particles design will be displayed globally */}
                <Design /> 
                <Routes>
                    <Route path="/" element={<AutoCounterPage />} />
                    <Route path="/timer" element={<TimerPage />} />
                    {/* <Route path="/signup" element={<SignUpPage />} /> */}
                    <Route path="/world-clock" element={<WorldClockPage />} />
                    <Route path="/counter" element={<Counter />} />
                      <Route path="/Contributors" element={<Contributors />} />
                    <Route path='/signup' element={<Template formType={"signup"} />} />
                    <Route path='/login' element={<Template formType={"login"} />} /> 
                </Routes>
                <Footer/>
            </div>
        </Router>
    );

};

export default App;
