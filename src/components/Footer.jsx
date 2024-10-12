// Footer.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faXTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import GoogleTranslate from './GoogleTranslate';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-6">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="footer-logo mb-4 md:mb-0">
                        <h1 className="text-xl font-bold hover:text-blue-400 transition-colors duration-300">Counter Timer</h1>
                    </div>
                    <div className="footer-links mb-4 md:mb-0">
                        <a href="/" className="text-gray-300 hover:text-white mx-2 transition-all duration-300 hover:underline transform hover:scale-110 inline-block">Home</a>
                        <a href="/Timer" className="text-gray-300 hover:text-white mx-2 transition-all duration-300 hover:underline transform hover:scale-110 inline-block">Timer</a>
                        <a href="/WorldClock" className="text-gray-300 hover:text-white mx-2 transition-all duration-300 hover:underline transform hover:scale-110 inline-block">World Clock</a>
                    </div>
                    <div className="footer-socials flex">
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-500 mx-2 transition-all duration-300 transform hover:scale-125">
                            <FontAwesomeIcon icon={faFacebook} size="lg" className="hover:animate-pulse" />
                        </a>
                        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white mx-2">
                            <FontAwesomeIcon icon={faXTwitter} size="lg" />
                        </a>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-pink-500 mx-2 transition-all duration-300 transform hover:scale-125">
                            <FontAwesomeIcon icon={faInstagram} size="lg" className="hover:animate-spin-slow" />
                        </a>
                    </div>
                </div>
                <div className="footer-bottom mt-4 text-center">
                    <p className="text-sm hover:text-gray-400 transition-colors duration-300">© 2024 Counter Timer. All Rights Reserved.</p>
                </div>

            </div>
            <div className="flex items-center justify-center mt-4">
                <img
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Google_Translate_logo.svg/2048px-Google_Translate_logo.svg.png'
                    alt="Google Translate"
                    className="w-[2rem] h-[2rem] mr-2"
                /></div>
            <div className="flex items-center justify-center ml-[5rem]">
                <GoogleTranslate />
            </div>


        </footer>
    );
};

export default Footer;
