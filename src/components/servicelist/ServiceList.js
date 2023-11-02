import React from 'react';

const services = [
  {
    id: 1,
    name: 'Cardiology',
    description: 'Expert cardiac care and consultation.',
  },
  {
    id: 2,
    name: 'Dermatology',
    description: 'Skin, hair, and nail health services.',
  },
  // Add more service data as needed
];

const ServiceList = () => {
  return (
    <div className="service-list">
      {services.map((service) => (
        <div key={service.id} className="service-item">
          <h3>{service.name}</h3>
          <p>{service.description}</p>
          {/* Add more service information as needed */}
        </div>
      ))}
    </div>
  );
};

export default ServiceList;
