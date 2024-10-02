// Footer.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-6">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="footer-logo mb-4 md:mb-0">
                        <h1 className="text-xl font-bold">Counter Timer</h1>
                    </div>
                    <div className="footer-links mb-4 md:mb-0">
                        <a href="/" className="text-gray-300 hover:text-white mx-2">Home</a>
                        <a href="/timer" className="text-gray-300 hover:text-white mx-2">Timer</a>
                        <a href="/world-clock" className="text-gray-300 hover:text-white mx-2">World Clock</a>
                    </div>
                    <div className="footer-socials flex">
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white mx-2">
                            <FontAwesomeIcon icon={faFacebook} size="lg" />
                        </a>
                        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white mx-2">
                            <FontAwesomeIcon icon={faTwitter} size="lg" />
                        </a>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white mx-2">
                            <FontAwesomeIcon icon={faInstagram} size="lg" />
                        </a>
                    </div>
                </div>
                <div className="footer-bottom mt-4 text-center">
                    <p className="text-sm">© 2024 Counter Timer. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
