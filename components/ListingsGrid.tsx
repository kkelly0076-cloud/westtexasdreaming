
import React from 'react';
import type { LandListing } from '../types';
import { ListingCard } from './ListingCard';
import { MapIcon, ListIcon } from './icons/ToggleIcons';

interface ListingsGridProps {
    listings: LandListing[];
    showMap: boolean;
    setShowMap: React.Dispatch<React.SetStateAction<boolean>>;
}

const MapView: React.FC = () => (
    <div className="bg-white p-4 rounded-xl shadow-lg border border-gray-200 h-[600px]">
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1773099.9829378122!2d-103.3289050965893!3d31.95159020948956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86fba27dd7516583%3A0x44636551062e030!2sPermian%20Basin!5e0!3m2!1sen!2sus!4v1672533300000"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Permian Basin Map"
        ></iframe>
    </div>
);

export const ListingsGrid: React.FC<ListingsGridProps> = ({ listings, showMap, setShowMap }) => {
    return (
        <div>
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-3xl font-bold text-deep-blue">Land Listings</h2>
                <div className="flex items-center space-x-2 bg-white p-1 rounded-full border shadow-sm">
                    <button onClick={() => setShowMap(false)} className={`p-2 rounded-full transition-colors ${!showMap ? 'bg-deep-blue text-white' : 'text-gray-600 hover:bg-gray-100'}`}>
                       <ListIcon />
                    </button>
                    <button onClick={() => setShowMap(true)} className={`p-2 rounded-full transition-colors ${showMap ? 'bg-deep-blue text-white' : 'text-gray-600 hover:bg-gray-100'}`}>
                        <MapIcon />
                    </button>
                </div>
            </div>
            {showMap ? (
                <MapView />
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {listings.length > 0 ? (
                        listings.map(listing => <ListingCard key={listing.id} listing={listing} />)
                    ) : (
                       <div className="md:col-span-2 text-center py-16 px-6 bg-white rounded-xl shadow-lg border border-gray-200">
                           <h3 className="text-xl font-semibold text-gray-700">No listings found.</h3>
                           <p className="text-gray-500 mt-2">Try adjusting your search filters to find your piece of the dream.</p>
                       </div>
                    )}
                </div>
            )}
        </div>
    );
};
