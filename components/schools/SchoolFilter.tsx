import React, { useState } from 'react';
import { SchoolFilter } from '../../types';

interface SchoolFilterProps {
  countries: string[];
  specialties: string[];
  onFilterChange: (filter: SchoolFilter) => void;
}

const SchoolFilterComponent: React.FC<SchoolFilterProps> = ({ 
  countries, 
  specialties, 
  onFilterChange 
}) => {
  const [selectedCountries, setSelectedCountries] = useState<string[]>([]);
  const [selectedSpecialties, setSelectedSpecialties] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleCountryChange = (country: string) => {
    const newSelection = selectedCountries.includes(country)
      ? selectedCountries.filter(c => c !== country)
      : [...selectedCountries, country];
    
    setSelectedCountries(newSelection);
    onFilterChange({
      countries: newSelection,
      specialties: selectedSpecialties,
      search: searchTerm
    });
  };

  const handleSpecialtyChange = (specialty: string) => {
    const newSelection = selectedSpecialties.includes(specialty)
      ? selectedSpecialties.filter(s => s !== specialty)
      : [...selectedSpecialties, specialty];
    
    setSelectedSpecialties(newSelection);
    onFilterChange({
      countries: selectedCountries,
      specialties: newSelection,
      search: searchTerm
    });
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    onFilterChange({
      countries: selectedCountries,
      specialties: selectedSpecialties,
      search: value
    });
  };

  const clearFilters = () => {
    setSelectedCountries([]);
    setSelectedSpecialties([]);
    setSearchTerm('');
    onFilterChange({
      countries: [],
      specialties: [],
      search: ''
    });
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow mb-6">
      <div className="mb-4">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-lg font-medium text-gray-900">筛选学校</h3>
          {(selectedCountries.length > 0 || selectedSpecialties.length > 0 || searchTerm) && (
            <button 
              onClick={clearFilters}
              className="text-sm text-blue-600 hover:text-blue-800"
            >
              清除全部
            </button>
          )}
        </div>
        
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input
            type="search"
            className="block w-full p-2 pl-10 text-sm border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
            placeholder="搜索学校名称或描述..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
      </div>
      
      <div className="mb-4">
        <h4 className="text-sm font-medium text-gray-900 mb-2">国家/地区</h4>
        <div className="flex flex-wrap gap-2">
          {countries.map((country) => (
            <button
              key={country}
              onClick={() => handleCountryChange(country)}
              className={`px-3 py-1 rounded-full text-xs font-medium ${
                selectedCountries.includes(country)
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
            >
              {country}
            </button>
          ))}
        </div>
      </div>
      
      <div>
        <h4 className="text-sm font-medium text-gray-900 mb-2">专业方向</h4>
        <div className="flex flex-wrap gap-2">
          {specialties.map((specialty) => (
            <button
              key={specialty}
              onClick={() => handleSpecialtyChange(specialty)}
              className={`px-3 py-1 rounded-full text-xs font-medium ${
                selectedSpecialties.includes(specialty)
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
            >
              {specialty}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SchoolFilterComponent; 