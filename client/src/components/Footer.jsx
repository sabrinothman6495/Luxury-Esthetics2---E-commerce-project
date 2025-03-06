import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 mt-10">
      <div className="container mx-auto px-6 py-10 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Brand Section */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Luxury Esthetics</h2>
            <p className="mt-2 text-sm text-gray-600">
              Enhancing beauty with elegance and care.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Quick Links</h3>
            <ul className="mt-2 space-y-2">
              <li>
                <a href="/services" className="hover:text-gray-500 transition">Services</a>
              </li>
              <li>
                <a href="/about" className="hover:text-gray-500 transition">About Us</a>
              </li>
              <li>
                <a href="/contact" className="hover:text-gray-500 transition">Contact</a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Follow Us</h3>
            <div className="flex justify-center md:justify-start mt-2 space-x-4">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" 
                 className="hover:text-gray-500 transition flex items-center space-x-2">
                <FaFacebookF /> <span>Facebook</span>
              </a>
              <a href="https://www.instagram.com/jade_estheticcs/" target="_blank" rel="noopener noreferrer" 
                 className="hover:text-gray-500 transition flex items-center space-x-2">
                <FaInstagram /> <span>Instagram</span>
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" 
                 className="hover:text-gray-500 transition flex items-center space-x-2">
                <FaTwitter /> <span>Twitter</span>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t pt-4 text-center text-sm">
          &copy; {new Date().getFullYear()} Luxury Esthetics. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
