
import React from 'react';
import type { FilterState } from '../types';

interface SearchBarProps {
    filters: FilterState;
    setFilters: React.Dispatch<React.SetStateAction<FilterState>>;
    onSearch: () => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ filters, setFilters, onSearch }) => {
    const handleInputChange = <K extends keyof FilterState>(key: K, value: FilterState[K]) => {
        setFilters(prev => ({ ...prev, [key]: value }));
    };

    return (
        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <input
                    type="text"
                    placeholder="Search by city/name..."
                    value={filters.searchTerm}
                    onChange={(e) => handleInputChange('searchTerm', e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-rush focus:border-transparent"
                />
                
                <select 
                    value={filters.priceRange} 
                    onChange={(e) => handleInputChange('priceRange', e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-rush focus:border-transparent"
                >
                    <option value="any">Any Price/Acre</option>
                    <option value="2000">$2,000 or less</option>
                    <option value="5000">$5,000 or less</option>
                    <option value="10000">$10,000 or less</option>
                </select>

                <select 
                    value={filters.location} 
                    onChange={(e) => handleInputChange('location', e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-rush focus:border-transparent"
                >
                    <option value="all">All Locations</option>
                    <option value="Midland">Midland</option>
                    <option value="Odessa">Odessa</option>
                    <option value="Lubbock">Lubbock</option>
                    <option value="San Angelo">San Angelo</option>
                </select>

                <select 
                    value={filters.potential} 
                    onChange={(e) => handleInputChange('potential', e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-rush focus:border-transparent"
                >
                    <option value="any">Any Potential</option>
                    <option value="high">High Potential</option>
                    <option value="medium">Medium Potential</option>
                    <option value="low">Low Potential</option>
                </select>
            </div>
             <div className="mt-4 text-center">
                <button 
                    onClick={onSearch}
                    className="px-8 py-3 bg-gold-rush text-deep-blue font-bold rounded-lg shadow-md hover:bg-yellow-500 transition-colors"
                >
                    Apply Filters
                </button>
            </div>
        </div>
    );
};
