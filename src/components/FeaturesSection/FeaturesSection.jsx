import React from 'react';

const features = [
  {
    title: 'Fully Integrated with BigCommerce',
    description: 'B2B Ninja works seamlessly with BigCommerce...',
    icon: '/path/to/icon1.png'
  },
  {
    title: 'Single Click Quote-to-Order',
    description: 'Streamlines the ordering process...',
    icon: '/path/to/icon2.png'
  },
  // ... add more features
];

export default function FeaturesSection() {
  return (
    <section className="bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4">Features</h2>
        <p className="mb-8 max-w-2xl">
          B2B Ninja is the BigCommerce tool you need to convert more B2B customers...
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <div key={idx} className="flex flex-col items-start bg-white p-4 rounded shadow-sm">
              <img src={feature.icon} alt={feature.title} className="w-12 h-12 mb-3"/>
              <h3 className="font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-6">
          <button className="inline-flex items-center px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-900">
            View all Features
          </button>
        </div>
      </div>
    </section>
  );
}
