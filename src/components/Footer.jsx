import React, { useState, useEffect } from "react";
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
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [visitorCount, setVisitorCount] = useState(0);

  useEffect(() => {
     // This function fetches and updates the visitor count
    const fetchVisitorCount = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/visitor-count");
        setVisitorCount(response.data.count);
      } catch (error) {
        console.error("Error fetching visitor count:", error);
      }
    };

    fetchVisitorCount();
  }, []);

  const handleSubscription = async () => {
    if (!email) {
      toast.error("Please enter a valid email address.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:4000/subscribe", {
        email,
      });
      toast.success(response.data.message || "Subscription successful!");
      setEmail("");
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Subscription failed. Please try again."
      );
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-4">
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />

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
              <a href="/" className="hover:text-white transition-colors duration-300">
                Home
              </a>
            </li>
            <li>
              <a href="/Privacy-Policy" className="hover:text-white transition-colors duration-300">
                Privacy & Policy
              </a>
            </li>
            <li>
              <a href="/Timer" className="hover:text-white transition-colors duration-300">
                Timer
              </a>
            </li>
            <li>
              <a href="/WorldClock" className="hover:text-white transition-colors duration-300">
                World Clock
              </a>
            </li>
            <li>
              <a href="/counter" className="hover:text-white transition-colors duration-300">
                Stopwatch
              </a>
            </li>
            <li>
              <a href="/Contributors" className="hover:text-white transition-colors duration-300">
                Contributors
              </a>
            </li>
            <li>
              <a href="/Feedback" className="hover:text-white transition-colors duration-300">
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
<div className="bg-gray-900 text-center py-4">
  <div className="container mx-auto flex flex-col items-center">
    
    {/* Stay Updated Section */}
    <div className="mb-2 text-center" style={{ marginTop: '-55px' }}>
      <h3 className="text-teal-500 mb-2 font-bold">Stay Updated</h3>
      <div className="flex justify-center items-center">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="px-3 py-2 rounded-md text-gray-900"
        />
        <button
          onClick={handleSubscription}
          className="ml-2 px-3 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition duration-300"
        >
          Subscribe
        </button>
      </div>
    </div>

    {/* Terms and Conditions Section */}
    <div className="text-center mt-4">
      <a href="/terms" className="text-xs text-gray-500 hover:text-white mr-4">
        Terms and Conditions
      </a>
      <p className="text-xs text-gray-500">
        © 2024 Counter Timer. All Rights Reserved.
      </p>
            {/* Visitor Count */}
            <div className="text-center mt-2 py-2 px-0 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-lg border border-gray-300 shadow-lg">
            <p className="text-white font-semibold text-lg">
              Total Visitors: {visitorCount}
  </p>
</div>
    </div>
    
  </div>
</div>

    </footer>
  );
};

export default Footer;
