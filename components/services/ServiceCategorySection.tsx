import React from 'react';
import { ServiceCategory } from '../../types';
import ServiceCard from './ServiceCard';

interface ServiceCategorySectionProps {
  category: ServiceCategory;
}

const ServiceCategorySection: React.FC<ServiceCategorySectionProps> = ({ category }) => {
  return (
    <section className="py-12">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-3">{category.name}</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">{category.description}</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {category.services.map(service => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </section>
  );
};

export default ServiceCategorySection; 