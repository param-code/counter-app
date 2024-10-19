import { useState } from "react";
import Navbar from "../components/navbar";

function TermsAndConditions() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <div className={theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-gray-900"}>
      <Navbar toggleTheme={toggleTheme} />
      <section className="terms-conditions-container max-w-4xl mx-auto px-6 py-10">
        <h1 className="text-4xl font-bold mb-6 text-center">Terms and Conditions</h1>
        <p className="text-lg mb-4">
          Welcome to our platform. Please read these terms and conditions carefully before using our services.
        </p>
        
        <div className="border-l-4 border-blue-500 pl-4 mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
          <p className="text-base leading-relaxed mb-4">
            By accessing or using our website, you agree to comply with these terms and all applicable laws.
          </p>
        </div>

        <div className="border-l-4 border-green-500 pl-4 mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. Privacy Policy</h2>
          <p className="text-base leading-relaxed mb-4">
            We respect your privacy and are committed to protecting your personal information. Please refer to our Privacy Policy for details.
          </p>
        </div>

        <div className="border-l-4 border-red-500 pl-4 mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. User Obligations</h2>
          <p className="text-base leading-relaxed mb-4">
            You agree not to use the website for any unlawful purposes and to comply with all applicable laws and regulations.
          </p>
        </div>

        <div className="border-l-4 border-yellow-500 pl-4 mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Intellectual Property</h2>
          <p className="text-base leading-relaxed mb-4">
            All content on this site, including text, graphics, logos, and software, is the property of our platform and protected by copyright laws.
          </p>
        </div>

        <div className="border-l-4 border-purple-500 pl-4 mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. Limitation of Liability</h2>
          <p className="text-base leading-relaxed mb-4">
            We are not liable for any damages or losses arising from your use of the service, including, but not limited to, direct, indirect, or consequential damages.
          </p>
        </div>

        <div className="border-l-4 border-teal-500 pl-4 mb-8">
          <h2 className="text-2xl font-semibold mb-4">6. Termination</h2>
          <p className="text-base leading-relaxed mb-4">
            We reserve the right to suspend or terminate your access to the website if you breach any of these terms.
          </p>
        </div>

        <div className="border-l-4 border-orange-500 pl-4 mb-8">
          <h2 className="text-2xl font-semibold mb-4">7. Changes to the Terms</h2>
          <p className="text-base leading-relaxed mb-4">
            We may update these terms from time to time, and it is your responsibility to review them regularly.
          </p>
        </div>

        <p className="text-lg">
          If you have any questions, feel free to contact us.
        </p>
      </section>
    </div>
  );
}

export default TermsAndConditions;
