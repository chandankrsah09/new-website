import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-50 to-blue-100 overflow-hidden">
      {/* Background Image - positioned absolutely like the original */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1638202993928-7267aad84c31?w=1920&h=600&fit=crop&crop=face"
          alt="Best Weight Loss Injections of 2025"
          className="absolute h-full w-full object-cover object-right"
          style={{
            position: 'absolute',
            height: '100%',
            width: '100%',
            left: 0,
            top: 0,
            right: 0,
            bottom: 0,
            objectPosition: 'right'
          }}
          onError={(e) => {
            e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1920' height='600' viewBox='0 0 1920 600'%3E%3Cdefs%3E%3ClinearGradient id='grad1' x1='0%25' y1='0%25' x2='100%25' y2='0%25'%3E%3Cstop offset='0%25' style='stop-color:%23dbeafe;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23bfdbfe;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='1920' height='600' fill='url(%23grad1)'/%3E%3Ctext x='1400' y='300' text-anchor='middle' fill='%234b5563' font-size='20' font-family='Arial'%3EMedical Professional%3C/text%3E%3Ctext x='1400' y='350' text-anchor='middle' fill='%234b5563' font-size='60'%3E👩‍⚕️💉%3C/text%3E%3C/svg%3E";
          }}
        />
      </div>
      
      {/* Content overlay */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center">
          <div className="flex-1 max-w-3xl">
            <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Best Weight Loss Injections of 2025
            </h1>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed max-w-2xl">
              Tired of overeating? Compare top weight loss brands to find the best fit for your unique needs. 
              Explore treatment plans, such as Ozempic® and pick a weight loss med to get on track and kickstart a healthier you.
            </p>
            <div className="flex items-center text-gray-600 mb-4">
              <span className="mr-2">✓</span>
              <span>Last Updated: September 2025</span>
            </div>
            <div className="mt-4">
              <span className="text-blue-600 underline cursor-pointer hover:text-blue-800">Advertising Disclosure</span>
            </div>
          </div>
          
          {/* Right side space for image (image is now background) */}
          <div className="flex-1"></div>
        </div>
      </div>
      
      {/* Advertising Disclosure overlay - positioned like original */}
      <div className="absolute top-4 right-4 z-20 bg-white/90 px-3 py-1 rounded-lg text-sm shadow-md">
        <span className="text-blue-600 underline cursor-pointer">Advertising Disclosure</span>
      </div>
    </section>
  );
};

export default HeroSection;