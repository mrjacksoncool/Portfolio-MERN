import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-transparent shadow-md fixed top-0 left-0 right-0 z-10">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="flex items-center">
          <span className="text-xl font-light text-white">Mojela Ratsita</span>
        </div>

        {/* Mobile Menu Button */}
        <div className="block lg:hidden">
          <button
            onClick={toggleMobileMenu}
            className="flex items-center px-3 py-2 border rounded text-white border-white hover:text-white-200 hover:border-gray-200"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>

          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex lg:items-center lg:w-auto">
          <ul className="text-gray-800 text-lg font-semibold lg:flex items-center space-x-6">
            <li>
              <a href="#" className="hover:text-gray-600">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-600">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-600">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-600">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Mobile Menu (hidden by default) */}
      <div className={`lg:hidden ${isMobileMenuOpen ? '' : 'hidden'}`}>
        <ul className="bg-transparent px-2 py-3 rounded-lg shadow-md w-2/5 ml-auto">
          <li>
            <a href="#" className="block px-4 py-2 text-white font-semibold hover:bg-gray-900 text-right">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="block px-4 py-2 text-white font-semibold hover:bg-gray-900 text-right">
              About
            </a>
          </li>
          <li>
            <a href="#" className="block px-4 py-2 text-white font-semibold hover:bg-gray-900 text-right">
              Services
            </a>
          </li>
          <li>
            <a href="#" className="block px-4 py-2 text-white font-semibold hover:bg-gray-900 text-right">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
