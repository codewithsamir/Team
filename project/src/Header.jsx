
import React, { useState } from 'react';

const Header = () => {

   return (
    <header className="bg-blue-600 text-white shadow-md">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="text-xl font-bold">MyLogo</div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <a href="#home" className="hover:text-gray-300 transition duration-300">Home</a>
            <a href="#about" className="hover:text-gray-300 transition duration-300">About</a>
            <a href="#services" className="hover:text-gray-300 transition duration-300">Services</a>
            <a href="#contact" className="hover:text-gray-300 transition duration-300">Contact</a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-blue-700">
          <div className="flex flex-col items-center space-y-4 py-4">
            <a href="#home" className="text-white hover:text-gray-300">Home</a>
            <a href="#about" className="text-white hover:text-gray-300">About</a>
            <a href="#services" className="text-white hover:text-gray-300">Services</a>
            <a href="#contact" className="text-white hover:text-gray-300">Contact</a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
