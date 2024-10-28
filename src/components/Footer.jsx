import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import Clock from "../assets/clock_img.png";
import Clock from "../assets/clock_img.webp";
import {
  faFacebook,
  faXTwitter,
  faInstagram,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import GoogleTranslate from "./GoogleTranslate";
import "./css/Footer.css";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-2">
      {" "}
      {/* Reduced overall padding */}
      {/* Social Media and Language */}
      <div className="bg-teal-600 py-2">
        {" "}
        {/* Reduced padding */}
        <div className="container mx-auto px-4 flex justify-between items-center">
          <p className="text-sm mr-4">
            Get connected with us on social networks:
          </p>{" "}
          {/* Adjusted margin */}
          <div className="social-icons flex space-x-4">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-500 transition-all duration-300"
            >
              <FontAwesomeIcon icon={faFacebook} size="lg" /> Facebook
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400 transition-all duration-300"
            >
              <FontAwesomeIcon icon={faXTwitter} size="lg" /> Twitter
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-pink-500 transition-all duration-300"
            >
              <FontAwesomeIcon icon={faInstagram} size="lg" /> Instagram
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-600 transition-all duration-300"
            >
              <FontAwesomeIcon icon={faLinkedin} size="lg" /> LinkedIn
            </a>
            <a
              href="https://github.com/param-code/counter-app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-500 transition-all duration-300"
            >
              <FontAwesomeIcon icon={faGithub} size="lg" /> GitHub
            </a>
          </div>
          {/* Google Translate (Language selection) */}
          <div className="ml-4 googletranslate">
            <GoogleTranslate />
          </div>
        </div>
      </div>
      {/* Footer Content */}
      <div className="container mx-auto px-4 py-4 grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
        {" "}
        {/* Reduced padding */}
        {/* Company Info (Center aligned) */}
        <div className="flex flex-col items-center">
          <h2  className="font-bold text-2xl mb-2 transition-all duration-300 ease-in-out hover:text-teal-500 hover:scale-105 hover:shadow-lg">Counter Timer</h2>
          <img src={Clock} alt="Clock" className="clock-icon" />
        </div>
        {/* Useful Links (Center aligned) */}
        <div className="flex flex-col items-center">
          <h2 className="font-bold text-2xl mb-2 transition-all duration-300 ease-in-out hover:text-teal-500 hover:scale-105 hover:shadow-lg">
            Useful Links
          </h2>

          <ul>
            <li className="mb-1">
              <a
                href="/"
                className="text-gray-400 hover:text-white text-sm transition-colors duration-300"
              >
                Home
              </a>
            </li>
            <li className="mb-1">
              <a href="/Privacy-Policy" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
              Privacy & Policy
              </a>
              <li className="mb-1"></li>
              <a
                href="/Timer"
                className="text-gray-400 hover:text-white text-sm transition-colors duration-300"
              >
                Timer
              </a>
            </li>
            <li className="mb-1">
              <a
                href="/WorldClock"
                className="text-gray-400 hover:text-white text-sm transition-colors duration-300"
              >
                World Clock
              </a>
            </li>
            <li className="mb-1">
              <a
                href="/counter"
                className="text-gray-400 hover:text-white text-sm transition-colors duration-300"
              >
                Stopwatch
              </a>
            </li>
            <li className="mb-1">
              <a
                href="/Contributors"
                className="text-gray-400 hover:text-white text-sm transition-colors duration-300"
              >
                Contributors
              </a>
            </li>
            <li className="mb-1">
              <a
                href="/Feedback"
                className="text-gray-400 hover:text-white text-sm transition-colors duration-300"
              >
                Feedback
              </a>
            </li>
          </ul>
        </div>
        {/* Contact Info (Center aligned) */}
        <div className="flex flex-col items-center">
          <h2  className="font-bold text-2xl mb-2 transition-all duration-300 ease-in-out hover:text-teal-500 hover:scale-105 hover:shadow-lg">Contact</h2>
          <ul className="text-gray-400 text-sm">
            <li className="mb-1">
              <i className="fa fa-home mr-2"></i> India
            </li>
            <li className="mb-1">
              <i className="fa fa-envelope mr-2"></i> countertimer.com
            </li>
            <li className="mb-1">
              <i className="fa fa-phone mr-2"></i> + 01 234 567 88
            </li>
            <li>
              <i className="fa fa-print mr-2"></i> + 01 234 567 89
            </li>
          </ul>
        </div>
      </div>
      {/* Footer Bottom */}
      <div className="bg-gray-900 py-1 text-center">
        <a href="/terms" className="text-xs text-gray-500 hover:text-white">
          Terms and Conditions
        </a>

        {/* Reduced padding */}
        <p className="text-xs text-gray-500">
          © 2024 Counter Timer. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
