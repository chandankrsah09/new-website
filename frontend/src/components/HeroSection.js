import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-50 to-blue-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between">
          <div className="flex-1 max-w-3xl pr-8">
            <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Best Weight Loss Injections of 2025
            </h1>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
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
          
          <div className="flex-shrink-0">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1638202993928-7267aad84c31?w=400&h=500&fit=crop&crop=face"
                alt="Healthcare professional with stethoscope"
                className="w-80 h-96 object-cover rounded-lg shadow-xl"
                onError={(e) => {
                  e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='320' height='384' viewBox='0 0 320 384'%3E%3Crect width='320' height='384' fill='%23f3f4f6'/%3E%3Ctext x='160' y='180' text-anchor='middle' fill='%236b7280' font-size='16' font-family='Arial'%3EHealthcare Professional%3C/text%3E%3Ctext x='160' y='220' text-anchor='middle' fill='%236b7280' font-size='48'%3E👩‍⚕️%3C/text%3E%3C/svg%3E";
                }}
              />
              <div className="absolute top-4 right-4 bg-white/90 px-3 py-1 rounded-lg text-sm shadow-md">
                <span className="text-blue-600 underline cursor-pointer">Advertising Disclosure</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;