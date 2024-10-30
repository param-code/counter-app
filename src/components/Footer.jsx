import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
    <footer className="bg-gray-900 text-white py-4">
      {/* Social Media and Language */}
      <div className="bg-teal-600 py-2">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <p className="text-sm">Get connected with us on social networks:</p>
          <div className="social-icons flex space-x-4">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-500 transition-all duration-300"
            >
              <FontAwesomeIcon icon={faFacebook} size="lg" />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400 transition-all duration-300"
            >
              <FontAwesomeIcon icon={faXTwitter} size="lg" />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-pink-500 transition-all duration-300"
            >
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-600 transition-all duration-300"
            >
              <FontAwesomeIcon icon={faLinkedin} size="lg" />
            </a>
            <a
              href="https://github.com/param-code/counter-app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-500 transition-all duration-300"
            >
              <FontAwesomeIcon icon={faGithub} size="lg" />
            </a>
          </div>
          <div className="ml-4 googletranslate">
            <GoogleTranslate />
          </div>
        </div>
      </div>

      {/* Footer Content */}
      <div className="container mx-auto px-4 py-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
        {/* Company Info */}
        <div className="flex flex-col items-center">
          <h2 className="font-bold text-2xl mb-2 transition-all duration-300 ease-in-out hover:text-teal-500 hover:scale-105 hover:shadow-lg">
            Counter Timer
          </h2>
          <img src={Clock} alt="Clock" className="clock-icon" />
        </div>

        {/* Useful Links */}
        <div className="flex flex-col items-center">
          <h2 className="font-bold text-2xl mb-2 transition-all duration-300 ease-in-out hover:text-teal-500 hover:scale-105 hover:shadow-lg">
            Useful Links
          </h2>
          <ul className="flex flex-wrap justify-center p-2 space-x-4 text-sm text-gray-400">
            <li>
              <a
                href="/"
                className="hover:text-white transition-colors duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/Privacy-Policy"
                className="hover:text-white transition-colors duration-300"
              >
                Privacy & Policy
              </a>
            </li>
            <li>
              <a
                href="/Timer"
                className="hover:text-white transition-colors duration-300"
              >
                Timer
              </a>
            </li>
            <li>
              <a
                href="/WorldClock"
                className="hover:text-white transition-colors duration-300"
              >
                World Clock
              </a>
            </li>
            <li>
              <a
                href="/counter"
                className="hover:text-white transition-colors duration-300"
              >
                Stopwatch
              </a>
            </li>
            <li>
              <a
                href="/Contributors"
                className="hover:text-white transition-colors duration-300"
              >
                Contributors
              </a>
            </li>
            <li>
              <a
                href="/Feedback"
                className="hover:text-white transition-colors duration-300"
              >
                Feedback
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col items-center">
          <h2 className="font-bold text-2xl mb-2 transition-all duration-300 ease-in-out hover:text-teal-500 hover:scale-105 hover:shadow-lg">
            Contact
          </h2>
          <ul className="text-gray-400 text-sm">
            <li>
              <i className="fa fa-home mr-2"></i> India
            </li>
            <li>
              <i className="fa fa-envelope mr-2"></i> countertimer.com
            </li>
            <li>
              <i className="fa fa-phone mr-2"></i> + 01 234 567 88
            </li>
            <li>
              <i className="fa fa-print mr-2"></i> + 01 234 567 89
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-gray-900 text-center">
        <a href="/terms" className="text-xs text-gray-500 hover:text-white">
          Terms and Conditions
        </a>
        <p className="text-xs text-gray-500">
          © 2024 Counter Timer. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
