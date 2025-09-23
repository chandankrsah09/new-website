import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      {/* Advertising Disclosure Bar */}
      <div className="bg-gray-50 py-2 px-4 text-center text-sm text-gray-600">
        We earn a commission from the offers on this page, which influences which offers are displayed{' '}
        <span className="text-blue-600 underline cursor-pointer">Advertising Disclosure</span>
      </div>
      
      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold text-blue-600">
              <span className="text-yellow-500">●</span> BestWeight
              <br />
              <span className="text-xl text-blue-600 ml-4">LossMeds</span>
            </div>
          </div>
          
          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Knowledge</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Reviews</a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;