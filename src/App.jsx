import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AutoCounterPage from './pages/AutoCounterPage';
import WorldClockPage from './pages/worldclockpage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AutoCounterPage />} />
        <Route path="/world-clock" element={<WorldClockPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;