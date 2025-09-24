import React from 'react';

const HeroSection = () => {
  return (
    <div className="bannerFullWidth_wrapper relative bg-gradient-to-r from-blue-50 to-blue-100" style={{ minHeight: '170px' }}>
      <div className="bannerFullWidth_container relative">
        <img 
          alt="Best Weight Loss Injections of 2025 | BestWeightLossMeds"
          decoding="async"
          data-nimg="fill"
          className="bannerFullWidth_image absolute"
          style={{
            position: 'absolute',
            height: '100%',
            width: '100%', 
            left: 0,
            top: 0,
            right: 0,
            bottom: 0,
            objectPosition: 'right',
            color: 'transparent'
          }}
          sizes="100vw"
          src="https://images.unsplash.com/photo-1638202993928-7267aad84c31?w=1920&h=600&fit=crop&crop=face"
          onError={(e) => {
            e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1920' height='600' viewBox='0 0 1920 600'%3E%3Cdefs%3E%3ClinearGradient id='grad1' x1='0%25' y1='0%25' x2='100%25' y2='0%25'%3E%3Cstop offset='0%25' style='stop-color:%23dbeafe;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23bfdbfe;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='1920' height='600' fill='url(%23grad1)'/%3E%3Ctext x='1400' y='300' text-anchor='middle' fill='%234b5563' font-size='20' font-family='Arial'%3EMedical Professional%3C/text%3E%3Ctext x='1400' y='350' text-anchor='middle' fill='%234b5563' font-size='60'%3E👩‍⚕️💉%3C/text%3E%3C/svg%3E";
          }}
        />
        
        <div className="bannerFullWidth_content relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="bannerFullWidth_title text-5xl font-bold mb-6 leading-tight" style={{ color: '#2d2d2d' }}>
            <span style={{ display: 'inline' }}>
              <span>Best Weight Loss Injections of 2025</span>
            </span>
          </h1>
          
          <p className="text-xl mb-6 leading-relaxed max-w-2xl" style={{ color: '#2d2d2d' }}>
            Tired of overeating? Compare top weight loss brands to find the best fit for your unique needs. 
            Explore treatment plans, such as Ozempic® and pick a weight loss med to get on track and kickstart a healthier you.
          </p>
          
          <div className="bannerFullWidth_last-update-text flex items-center mb-4">
            <span style={{ color: '#2d2d2d' }} className="flex items-center">
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
              <label style={{ cursor: 'text' }}>
                Last Updated: <span>September 2025</span>
              </label>
            </span>
          </div>
        </div>
        
        <div className="toolTip_container general_desktop-only bannerFullWidth_advertising-disclosure absolute top-4 right-4 z-20 bg-white/90 px-3 py-1 rounded-lg text-sm shadow-md">
          <label style={{ color: '#2d2d2d' }}>
            <span style={{ display: 'inline' }}>
              <span className="text-blue-600 underline cursor-pointer">Advertising Disclosure</span>
            </span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;