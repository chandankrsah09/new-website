import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-blue-100 to-blue-200 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex-1 max-w-2xl">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Best Weight Loss Injections of 2025
            </h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Tired of overeating? Compare top weight loss brands to find the best fit for your unique needs. 
              Explore treatment plans, such as Ozempic® and pick a weight loss med to get on track and kickstart a healthier you.
            </p>
            <div className="flex items-center text-gray-600">
              <span className="mr-2">✓</span>
              <span>Last Updated: September 2025</span>
            </div>
            <div className="mt-4">
              <span className="text-blue-600 underline cursor-pointer">Advertising Disclosure</span>
            </div>
          </div>
          
          <div className="flex-1 flex justify-end">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1594736797933-d0ca8ba97c46?w=500&h=600&fit=crop&crop=face"
                alt="Happy woman with weight loss injections"
                className="w-80 h-96 object-cover rounded-lg shadow-lg"
              />
              <div className="absolute top-4 right-4 bg-white/90 px-3 py-1 rounded-lg text-sm">
                <span className="text-blue-600 underline">Advertising Disclosure</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;