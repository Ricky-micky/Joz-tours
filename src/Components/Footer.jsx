import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-auto">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-yellow-400 mb-4">
              Jozz Tembo Tours and Safari
            </h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Driven by passion, guided by experience. With over 30 years of
              excellence in tourism and safari industry, we provide
              unforgettable African experiences from our base in Malindi. In
              cooperation with Cimo Service.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/joztembotours/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-yellow-400 transition-colors duration-300"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-yellow-400 transition-colors duration-300"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-yellow-400 transition-colors duration-300"
              >
                <FaTwitter size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-yellow-400">
              Our Services
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#safari"
                  className="text-gray-300 hover:text-white transition-colors duration-300 block py-1"
                >
                  Safari Adventures
                </a>
              </li>
              <li>
                <a
                  href="#beach"
                  className="text-gray-300 hover:text-white transition-colors duration-300 block py-1"
                >
                  Beach Tours
                </a>
              </li>
              <li>
                <a
                  href="#cultural"
                  className="text-gray-300 hover:text-white transition-colors duration-300 block py-1"
                >
                  Cultural Experiences
                </a>
              </li>
              <li>
                <a
                  href="#airport"
                  className="text-gray-300 hover:text-white transition-colors duration-300 block py-1"
                >
                  Airport Transfers
                </a>
              </li>
              <li>
                <a
                  href="#custom"
                  className="text-gray-300 hover:text-white transition-colors duration-300 block py-1"
                >
                  Custom Packages
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-yellow-400">
              Contact Us
            </h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-yellow-400 mt-1 flex-shrink-0" />
                <span className="text-gray-300">
                  Malindi, Lamu Road
                  <br />
                  Kenya
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <FaPhone className="text-yellow-400 flex-shrink-0" />
                <div className="flex flex-col">
                  <span className="text-gray-300">+254 722 266 955</span>
                  <span className="text-gray-300">+254 734 400 077</span>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-yellow-400 flex-shrink-0" />
                <span className="text-gray-300">info@jozztembotours.com</span>
              </div>
            </div>

            {/* Partnership Info */}
            <div className="mt-4 p-3 bg-gray-800 rounded-lg">
              <p className="text-sm text-gray-300">
                <strong className="text-yellow-400">Partnership:</strong>
                <br />
                In cooperation with
                <br />
                <span className="text-white">Cimo Service</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Experience Banner */}
      <div className="bg-yellow-600 py-4">
        <div className="container mx-auto px-4 text-center">
          <p className="text-white text-lg font-semibold">
            🦁 Over 30 Years of Safari Excellence | Trusted Since 1993 🦒
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} Jozz Tembo Tours and Safari. All
                rights reserved.
              </p>
              <p className="text-yellow-400 text-sm mt-1 italic">
                Driven by passion, guided by experience
              </p>
            </div>
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-gray-400 hover:text-white text-sm transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white text-sm transition-colors duration-300"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white text-sm transition-colors duration-300"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
