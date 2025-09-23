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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex justify-center space-x-12">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center space-x-3">
              <feature.icon className={`w-8 h-8 ${feature.color}`} />
              <span className="text-gray-700 font-medium">{feature.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesBar;