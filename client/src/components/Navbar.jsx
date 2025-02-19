import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isAuthenticated = false; // TODO: Replace with actual auth logic

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-gray-800">
            Luxury Esthetics
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="block md:hidden text-gray-600 focus:outline-none"
          >
            {isOpen ? "✖" : "☰"}
          </button>

          {/* Nav Links */}
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="text-gray-600 hover:text-gray-800">Home</Link>
            <Link to="/services" className="text-gray-600 hover:text-gray-800">Services</Link>
            <Link to="/bookings" className="text-gray-600 hover:text-gray-800">Bookings</Link>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex space-x-4">
            {isAuthenticated ? (
              <Link to="/dashboard" className="px-4 py-2 bg-blue-600 text-white rounded-lg">Dashboard</Link>
            ) : (
              <>
                <Link to="/login" className="px-4 py-2 text-blue-600 border border-blue-600 rounded-lg">Login</Link>
                <Link to="/register" className="px-4 py-2 bg-blue-600 text-white rounded-lg">Sign Up</Link>
              </>
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden flex flex-col space-y-4 pt-4 pb-4">
            <Link to="/" className="text-gray-600 hover:text-gray-800" onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/services" className="text-gray-600 hover:text-gray-800" onClick={() => setIsOpen(false)}>Services</Link>
            <Link to="/bookings" className="text-gray-600 hover:text-gray-800" onClick={() => setIsOpen(false)}>Bookings</Link>

            {/* Mobile Auth Buttons */}
            {isAuthenticated ? (
              <Link to="/dashboard" className="px-4 py-2 bg-blue-600 text-white rounded-lg text-center" onClick={() => setIsOpen(false)}>Dashboard</Link>
            ) : (
              <>
                <Link to="/login" className="px-4 py-2 text-blue-600 border border-blue-600 rounded-lg text-center" onClick={() => setIsOpen(false)}>Login</Link>
                <Link to="/register" className="px-4 py-2 bg-blue-600 text-white rounded-lg text-center" onClick={() => setIsOpen(false)}>Sign Up</Link>
              </>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
