
import React, { useState, useMemo } from 'react';
import { Header } from './components/Header';
import { SearchBar } from './components/SearchBar';
import { ListingsGrid } from './components/ListingsGrid';
import { AlertsSidebar } from './components/AlertsSidebar';
import { Footer } from './components/Footer';
import { MOCK_LAND_LISTINGS } from './constants';
import type { LandListing, FilterState } from './types';

const App: React.FC = () => {
    const [filters, setFilters] = useState<FilterState>({
        searchTerm: '',
        priceRange: 'any',
        location: 'all',
        potential: 'any'
    });
    
    const [showMap, setShowMap] = useState<boolean>(false);

    const filteredListings = useMemo(() => {
        return MOCK_LAND_LISTINGS.filter(listing => {
            const searchTermMatch = listing.name.toLowerCase().includes(filters.searchTerm.toLowerCase()) ||
                                    listing.location.toLowerCase().includes(filters.searchTerm.toLowerCase());
            
            const priceMatch = filters.priceRange === 'any' || listing.pricePerAcre <= parseInt(filters.priceRange);
            
            const locationMatch = filters.location === 'all' || listing.location === filters.location;

            const potentialMatch = filters.potential === 'any' || listing.potential.toLowerCase() === filters.potential;
            
            return searchTermMatch && priceMatch && locationMatch && potentialMatch;
        });
    }, [filters]);

    const handleSearch = () => {
        // In a real app, this might trigger a new API call. Here it's handled by useMemo.
        console.log("Applying filters:", filters);
    };

    return (
        <div className="min-h-screen bg-sandstone font-sans text-gray-800">
            <Header onStartScouting={() => document.getElementById('search-section')?.scrollIntoView({ behavior: 'smooth' })} />
            
            <main className="container mx-auto p-4 md:p-8">
                <div id="search-section" className="mb-8">
                    <SearchBar filters={filters} setFilters={setFilters} onSearch={handleSearch} />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    <div className="lg:col-span-3">
                        <ListingsGrid 
                            listings={filteredListings} 
                            showMap={showMap} 
                            setShowMap={setShowMap} 
                        />
                    </div>
                    <div className="lg:col-span-1">
                        <AlertsSidebar />
                    </div>
                </div>
            </main>
            
            <Footer />
        </div>
    );
};

export default App;
