import React from "react";

function ServiceCard({ icon, title, description }) {
  return (
    <div className="card bg-white shadow-lg text-center p-6 flex flex-col items-center text-[#03373D] hover:bg-[#caeb66] transition-all duration-100">
      <img src={icon} alt={title} className="w-16 h-16 mb-4" />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="">{description}</p>
    </div>
  );
}

export default ServiceCard;
