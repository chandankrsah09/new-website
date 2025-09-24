import React from 'react';
import { Clock, Truck, Tag, FileText } from 'lucide-react';

const FeaturesBar = () => {
  const features = [
    { icon: Clock, text: 'Fast Approval', color: 'text-blue-600' },
    { icon: Truck, text: 'Free Shipping', color: 'text-green-600' },
    { icon: Tag, text: 'Exclusive Coupons', color: 'text-orange-600' },
    { icon: FileText, text: 'Online Prescription', color: 'text-purple-600' },
  ];

  return (
    <div className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col sm:flex-row items-center justify-center sm:justify-start text-center sm:text-left space-y-2 sm:space-y-0 sm:space-x-3">
              <feature.icon className={`w-6 h-6 sm:w-8 sm:h-8 ${feature.color}`} />
              <span className="text-gray-700 font-medium text-sm sm:text-base">{feature.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesBar;