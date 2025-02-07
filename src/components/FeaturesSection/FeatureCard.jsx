import React from "react";

export default function FeatureCard({ title, description, icon }) {
  if (!title || !description || !icon) return null;
  return (
    <div
      className="flex flex-col items-start p-4 rounded"
      data-testid="feature-card"
    >
      <img src={icon} alt={title} className="w-12 h-12 mb-3" />
      <h3 className="font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
}
