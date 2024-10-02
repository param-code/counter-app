import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const SwitchTab = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  const handleSwitch = () => {
    navigate("/"); // Navigate to the AutoCounter page
  };

  return (
    <button onClick={handleSwitch} className="mt-4 bg-indigo-500 text-white py-2 px-4 rounded hover:bg-indigo-600 transition">
      Switch to AutoCounter Tab
    </button>
  );
};

export default SwitchTab;
