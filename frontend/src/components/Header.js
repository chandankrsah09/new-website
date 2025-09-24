import React, { useState } from 'react';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { Button } from './ui/button';
import { Menu } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white">
      {/* Advertising Disclosure Bar */}
      <div className="bg-gray-50 border-b border-gray-200 py-2 px-4 text-center text-xs sm:text-sm text-gray-600">
        <span className="inline-block max-w-prose">
          We earn a commission from the offers on this page, which influences which offers are displayed{' '}
          <span className="text-blue-600 underline cursor-pointer hover:text-blue-800">Advertising Disclosure</span>
        </span>
      </div>
      
      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">●</span>
              </div>
              <div className="text-xl sm:text-2xl font-bold">
                <span className="text-blue-600">BestWeight</span>
                <br />
                <span className="text-blue-600 text-lg sm:text-xl">LossMeds</span>
              </div>
            </div>
          </div>
          
          {/* Desktop Navigation */}
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

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="sm">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[240px] sm:w-[300px]">
              <nav className="flex flex-col space-y-4 mt-8">
                <a 
                  href="#" 
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  Knowledge
                </a>
                <a 
                  href="#" 
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  Reviews
                </a>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;