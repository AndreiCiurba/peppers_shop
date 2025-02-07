import React from 'react';

const AboutPage = () => {
  return (
    <div className="container mx-auto py-16 px-4">
      <h1 className="text-3xl font-bold text-red-800 mb-6">About Our Pepper Shop</h1>
      <div className="bg-white shadow-md rounded-lg p-8">
        <p className="text-gray-700 mb-4">
          We're passionate about bringing the world's most extreme and flavorful peppers directly to your kitchen.
        </p>
        <p className="text-gray-700 mb-4">
          From the mild jalapeño to the scorching Carolina Reaper, our collection represents the pinnacle of pepper cultivation.
        </p>
        <h2 className="text-2xl font-semibold text-red-700 mt-6 mb-4">Our Mission</h2>
        <p className="text-gray-700">
          To educate, excite, and ignite your culinary adventures with the most extraordinary peppers on the planet.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;