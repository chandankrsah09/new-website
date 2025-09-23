import React from 'react';
import { Star, Users } from 'lucide-react';

const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex items-center">
      {[...Array(fullStars)].map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-green-500 text-green-500" />
      ))}
      {hasHalfStar && <Star className="w-4 h-4 fill-green-300 text-green-300" />}
      {[...Array(emptyStars)].map((_, i) => (
        <Star key={i} className="w-4 h-4 text-gray-300" />
      ))}
    </div>
  );
};

const CompanyCard = ({ company, index }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between">
        {/* Left side - Ranking and Logo */}
        <div className="flex items-center space-x-6">
          <div className="flex flex-col items-center">
            {company.isPopular && (
              <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium mb-2">
                Most Popular
              </span>
            )}
            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-xl font-bold text-gray-700 border-2 border-gray-300">
              {index + 1}
            </div>
          </div>
          
          <div className="flex-1">
            <img 
              src={company.logo} 
              alt={`${company.name} logo`}
              className="h-12 w-auto mb-4"
            />
            
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-gray-900">
                {company.mainTitle}
              </h3>
              <p className="text-gray-600 font-medium">
                {company.subTitle}
              </p>
              
              {/* Features */}
              <ul className="space-y-1 mt-4">
                {company.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-600">
                    <span className="text-green-500 mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Right side - Rating and Button */}
        <div className="flex flex-col items-end space-y-4 ml-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900 mb-1">
              {company.rating}
            </div>
            <StarRating rating={parseFloat(company.rating)} />
            <div className="text-sm text-gray-500 mt-1">Our score</div>
          </div>
          
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
            Visit Site
          </button>
          
          {company.visitorsToday && (
            <div className="flex items-center text-xs text-gray-500 mt-2">
              <Users className="w-4 h-4 mr-1" />
              <span>{company.visitorsToday} people visited this site today</span>
            </div>
          )}
          
          {company.visitorsMonth && (
            <div className="flex items-center text-xs text-blue-600 bg-blue-50 px-2 py-1 rounded">
              <Users className="w-4 h-4 mr-1" />
              <span>{company.visitorsMonth} people visited this site this month</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const CompanyListings = ({ companies }) => {
  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <p className="text-center text-gray-600 mb-8">Online Prescription</p>
          
          {companies.map((company, index) => (
            <CompanyCard key={company.id} company={company} index={index} />
          ))}
          
          {/* Repeat Most Popular */}
          <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6 mt-8">
            <h3 className="text-center text-xl font-bold text-blue-800 mb-6">Our Most Popular</h3>
            <CompanyCard company={companies[0]} index={0} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyListings;