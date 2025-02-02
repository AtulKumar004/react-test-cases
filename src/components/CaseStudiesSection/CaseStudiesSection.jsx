import React from 'react';

const caseStudies = [
  {
    title: 'Bulk Bookstore',
    subtitle: 'Revolutionizes Their Quote Process',
    image: '/path/to/bulkbookstore.jpg',
  },
  {
    title: 'Atlanta Light Bulbs',
    subtitle: 'Reaches New Customers Using B2B Ninja',
    image: '/path/to/ALB.jpg',
  },
  // ... more case studies
];

export default function CaseStudiesSection() {
  return (
    <section className="bg-white py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4">Real Case Studies</h2>
        <p className="mb-8 max-w-2xl">
          Before you try B2B Ninja, learn about how our customers use B2B Ninja...
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {caseStudies.map((study, idx) => (
            <div
              key={idx}
              className="relative group bg-black text-white overflow-hidden rounded-lg"
            >
              <img
                src={study.image}
                alt={study.title}
                className="w-full h-full object-cover opacity-75 group-hover:opacity-50 transition duration-300"
              />
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
                <h3 className="text-xl font-bold mb-1">{study.title}</h3>
                <p className="mb-4">{study.subtitle}</p>
                <button className="bg-black bg-opacity-80 px-4 py-2 rounded hover:bg-gray-800">
                  See Case Study
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
