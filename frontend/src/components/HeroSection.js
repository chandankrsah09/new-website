import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative w-full bg-gradient-to-r from-blue-100 to-blue-200 overflow-hidden min-h-[300px] sm:min-h-[400px]">
      {/* Background Image - Woman with medical syringes */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-100/90 to-transparent z-10" />
        <img 
          alt="Best Weight Loss Injections of 2025 | BestWeightLossMeds"
          className="absolute h-full w-full object-cover md:object-right"
          style={{
            position: 'absolute',
            height: '100%',
            width: '100%',
            left: 0,
            top: 0,
            right: 0,
            bottom: 0,
            objectPosition: 'center',
            color: 'transparent'
          }}
          src="https://images.unsplash.com/photo-1542884841-9f546e727bca?w=1920&h=800&fit=crop&crop=face"
          onError={(e) => {
            // Fallback to woman with syringe
            e.target.src = "https://images.unsplash.com/photo-1542868727-5b8fcd21495e?w=1920&h=800&fit=crop&crop=face";
          }}
        />
      </div>
      
      {/* Content Overlay */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex-1 max-w-full md:max-w-2xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 leading-tight text-gray-900">
              <span>Best Weight Loss Injections of 2025</span>
            </h1>
            
            <p className="text-base sm:text-lg mb-4 sm:mb-6 leading-relaxed text-gray-800">
              Tired of overeating? Compare top weight loss brands to find the best fit for your unique needs. 
              Explore treatment plans, such as Ozempic® and pick a weight loss med to get on track and kickstart a healthier you.
            </p>
            
            <div className="flex items-center mb-4">
              <span className="flex items-center text-sm sm:text-base text-gray-800">
                <svg 
                  stroke="currentColor" 
                  fill="currentColor" 
                  strokeWidth="0" 
                  viewBox="0 0 512 512" 
                  height="1em" 
                  width="1em" 
                  className="mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path>
                </svg>
                <span>Last Updated: September 2025</span>
              </span>
            </div>
          </div>
          
          {/* Right side space for the woman image (now background) */}
          <div className="hidden md:block flex-1"></div>
        </div>
      </div>
      
      {/* Advertising Disclosure - Top Right */}
      <div className="absolute top-4 right-4 z-20 bg-white/90 px-4 py-2 rounded-lg shadow-lg">
        <span style={{ color: '#2d2d2d' }}>
          <span className="text-blue-600 underline cursor-pointer hover:text-blue-800">Advertising Disclosure</span>
        </span>
      </div>
    </section>
  );
};

export default HeroSection;