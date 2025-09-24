import React from 'react';
import { Star, Users, Info } from 'lucide-react';

const StarRating = ({ rating }) => {
  const numRating = parseFloat(rating);
  const fullStars = Math.floor(numRating);
  const hasHalfStar = numRating % 1 >= 0.5;
  const emptyStars = Math.max(0, 5 - fullStars - (hasHalfStar ? 1 : 0));

  return (
    <div className="flex items-center space-x-1">
      {Array(fullStars).fill(0).map((_, i) => (
        <Star key={`full-${i}`} className="w-4 h-4 fill-green-500 text-green-500" />
      ))}
      {hasHalfStar && <Star key="half" className="w-4 h-4 fill-green-400 text-green-400" />}
      {Array(emptyStars).fill(0).map((_, i) => (
        <Star key={`empty-${i}`} className="w-4 h-4 fill-gray-300 text-gray-300" />
      ))}
    </div>
  );
};

const CompanyLogo = ({ company }) => {
  const logoStyles = {
    'Ro': 'bg-white border-2 border-gray-200 text-black font-bold text-4xl',
    'Remedy Meds': 'bg-blue-800 text-white font-bold text-lg italic',
    'Medvi': 'bg-green-600 text-white font-bold text-xl',
    'Clinic Secret': 'bg-gray-700 text-white font-bold text-sm',
    'Sprout': 'bg-green-500 text-white font-bold text-xl',
    'Hers': 'bg-green-400 text-white font-bold text-2xl lowercase',
    'Hims': 'bg-orange-600 text-white font-bold text-2xl lowercase'
  };

  return (
    <div className={`h-16 w-32 rounded-lg flex items-center justify-center shadow-sm ${logoStyles[company.name] || 'bg-gray-100 text-gray-600 font-semibold'}`}>
      <span>{company.name === 'Ro' ? 'ro' : company.name}</span>
    </div>
  );
};

const CompanyCard = ({ company, index }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 mb-4">
      <div className="p-6">
        <div className="flex items-start justify-between">
          {/* Left section - ranking and company info */}
          <div className="flex items-start space-x-6 flex-1">
            {/* Ranking circle and popular badge */}
            <div className="flex flex-col items-center relative">
              {company.isPopular && (
                <div className="mb-2">
                  <span className="bg-green-500 text-white px-3 py-1 text-xs font-semibold rounded-full">
                    Most Popular
                  </span>
                </div>
              )}
              <div className="w-12 h-12 bg-gray-100 border-2 border-gray-300 rounded-full flex items-center justify-center">
                <span className="text-xl font-bold text-gray-700">{index + 1}</span>
              </div>
            </div>
            
            {/* Company logo and details */}
            <div className="flex-1">
              <div className="mb-4">
                <CompanyLogo company={company} />
              </div>
              
              <div className="space-y-3">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">
                    {company.mainTitle}
                  </h3>
                  <div className="border-2 border-dashed border-blue-300 rounded-lg p-3 bg-blue-50">
                    <p className="text-blue-800 font-semibold text-center">
                      {company.subTitle}
                    </p>
                  </div>
                </div>
                
                {/* Features list */}
                <ul className="space-y-2">
                  {company.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm text-gray-700">
                      <span className="text-green-500 mr-3 mt-0.5 flex-shrink-0">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Right section - rating and button */}
          <div className="flex flex-col items-center space-y-4 ml-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-900 mb-1">
                {company.rating}
              </div>
              <div className="mb-1">
                <StarRating rating={parseFloat(company.rating)} />
              </div>
              <div className="text-xs text-gray-500">Our score</div>
            </div>
            
            <div className="relative">
              <button 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                onClick={() => console.log(`Visiting ${company.name}`)}
              >
                Visit Site
              </button>
              
              {company.visitorsMonth && (
                <div className="absolute -top-2 -right-2 bg-blue-100 border border-blue-300 rounded-lg p-2 shadow-md">
                  <div className="flex items-center text-xs text-blue-700 whitespace-nowrap">
                    <Users className="w-3 h-3 mr-1" />
                    <span>{company.visitorsMonth} people visited this site this month</span>
                  </div>
                </div>
              )}
            </div>
            
            {company.visitorsToday && (
              <div className="text-xs text-gray-500 text-center">
                Over {company.visitorsToday} people visited this site today
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const CompanyListings = ({ companies }) => {
  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <p className="text-gray-600 font-medium">Online Prescription</p>
        </div>
        
        <div className="space-y-6">
          {companies.map((company, index) => (
            <CompanyCard key={company.id} company={company} index={index} />
          ))}
        </div>
        
        {/* Repeat Most Popular Section */}
        <div className="mt-12 bg-blue-50 border-2 border-blue-200 rounded-lg p-6">
          <h3 className="text-center text-xl font-bold text-blue-800 mb-6">Our Most Popular</h3>
          <div className="bg-white rounded-lg">
            <CompanyCard company={companies[0]} index={0} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyListings;