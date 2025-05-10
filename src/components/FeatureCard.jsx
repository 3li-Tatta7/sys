import React from "react";

function FeatureCard({ title, icon, onClick }) {
  return (
    <div
      onClick={onClick}
      className="bg-white p-6 rounded-xl shadow hover:shadow-lg cursor-pointer transition transform hover:-translate-y-1 text-center"
    >
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-lg font-medium">{title}</h3>
    </div>
  );
}

export default FeatureCard;
