import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-50 to-blue-100 overflow-hidden">
      {/* Background Image - positioned absolutely like the original */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1747995371003-f920a24e7b93?w=1920&h=600&fit=crop&crop=face"
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
            e.target.src = "https://images.unsplash.com/photo-1638202993928-7267aad84c31?w=1920&h=600&fit=crop&crop=face";
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