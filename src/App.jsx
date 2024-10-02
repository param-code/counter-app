import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AutoCounterPage from "./pages/AutoCounterPage"; // adjust the path as needed
import TimerPage from "./pages/TimerPage"; // create this component

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AutoCounterPage />} />
        <Route path="/timer" element={<TimerPage />} />
      </Routes>
    </Router>
  );
};

export default App;
