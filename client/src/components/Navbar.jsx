import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* Brand Name / Logo */}
        <Link to="/" className="text-2xl font-bold text-gray-900">
          Luxury Esthetics
        </Link>

        {/* Nav Links */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <Link to="/" className="text-gray-700 hover:text-blue-500 transition">Home</Link>
          </li>
          <li>
            <Link to="/services" className="text-gray-700 hover:text-blue-500 transition">Services</Link>
          </li>
          <li>
            <Link to="/about" className="text-gray-700 hover:text-blue-500 transition">About</Link>
          </li>
          <li>
            <Link to="/contact" className="text-gray-700 hover:text-blue-500 transition">Contact</Link>
          </li>
        </ul>

        {/* Mobile Menu Button (for small screens) */}
        <button className="md:hidden text-gray-700 focus:outline-none">
          ☰
        </button>
      </div>
    </nav>
  );
}
