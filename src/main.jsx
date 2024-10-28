import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { Provider } from "react-redux";
import rootReducer from "./reducer";
import { configureStore } from "@reduxjs/toolkit";
import { Toaster } from 'react-hot-toast';
import Review from './components/Auth/Review.jsx';

const store = configureStore({
	reducer: rootReducer,
});


createRoot(document.getElementById("root")).render(
	<StrictMode>
		<Provider store={store}>
      <App />
      <Toaster />
		</Provider>
	<Review />
	</StrictMode>
);

const scrollBtn = document.querySelector('.scroll-btn') ;


window.addEventListener('scroll', () => {
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollBtn.style.display = 'block' ;
    }
    else {
        scrollBtn.style.display = 'none' ;
    }
})
scrollBtn.addEventListener('click' , () => {
    window.scroll({
        top: 0 ,
        behavior: "smooth"
    })
})

