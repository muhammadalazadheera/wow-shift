import React, { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";
import SectionTitle from "../../Global/SectionTitle";

function ServicesSection() {
  const [services, setServices] = useState(null);
  useEffect(() => {
    fetch("/services.json")
      .then((response) => response.json())
      .then((data) => setServices(data));
    console.log(typeof services);
  }, []);

  return (
    <section className="py-12 mb-12 bg-[#03373d] rounded-4xl">
      <div className="max-w-6xl mx-auto">
        <div className="capitalize text-center">
          <h1 className='font-extrabold text-3xl text-white'>
            Our Services
          </h1>
          <h2 className="text-white w-[70%] mx-auto">Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-12">
          {services?.map((service, i) => (
            <ServiceCard
              key={i}
              icon={service?.icon}
              title={service?.title}
              description={service?.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
