import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';

import { Provider } from "react-redux";
import rootReducer from "./reducer";
import { configureStore } from "@reduxjs/toolkit";
import { Toaster } from 'react-hot-toast';
import Review from './components/Auth/Review.jsx';
import Cursor from './components/Cursor'; // Import the Cursor component

const store = configureStore({
	reducer: rootReducer,
});

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<Provider store={store}>
			<Cursor /> {/* Add the Cursor component here */}
			<App />
			<Toaster />
		</Provider>
		<Review />
	</StrictMode>
);
