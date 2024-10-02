import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AutoCounterPage from "./pages/AutoCounterPage"; // adjust the path as needed
import TimerPage from "./pages/TimerPage"; // create this component
import WorldClockPage from './pages/WorldClockPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AutoCounterPage />} />
        <Route path="/timer" element={<TimerPage />} />
        <Route path="/world-clock" element={<WorldClockPage />} />
      </Routes>
    </Router>
  );
};

export default App;
