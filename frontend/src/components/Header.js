import React from 'react';

const Header = () => {
  return (
    <header className="bg-white">
      {/* Advertising Disclosure Bar */}
      <div className="bg-gray-50 border-b border-gray-200 py-2 px-4 text-center text-sm text-gray-600">
        We earn a commission from the offers on this page, which influences which offers are displayed{' '}
        <span className="text-blue-600 underline cursor-pointer hover:text-blue-800">Advertising Disclosure</span>
      </div>
      
      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">●</span>
              </div>
              <div className="text-2xl font-bold">
                <span className="text-blue-600">BestWeight</span>
                <br />
                <span className="text-blue-600 text-xl">LossMeds</span>
              </div>
            </div>
          </div>
          
          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a 
              href="#" 
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
            >
              Knowledge
            </a>
            <a 
              href="#" 
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
            >
              Reviews
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;