
import React, { useState } from 'react';
import type { LandListing, AIScore } from '../types';
import { getCasinoPotentialScore } from '../services/geminiService';
import { SparklesIcon, DollarSignIcon, AreaIcon, LocationIcon } from './icons/CardIcons';

const PotentialBadge: React.FC<{ potential: 'High' | 'Medium' | 'Low' }> = ({ potential }) => {
    const color = {
        High: 'bg-green-100 text-green-800 border-green-300',
        Medium: 'bg-yellow-100 text-yellow-800 border-yellow-300',
        Low: 'bg-red-100 text-red-800 border-red-300',
    }[potential];
    return <span className={`px-3 py-1 text-sm font-semibold rounded-full border ${color}`}>{potential} Potential</span>;
};

const AIScoreDisplay: React.FC<{ scoreData: AIScore }> = ({ scoreData }) => (
    <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg animate-fade-in">
        <div className="flex items-center gap-4">
             <div className="flex flex-col items-center justify-center w-20 h-20 rounded-full bg-deep-blue text-white shadow-lg">
                <span className="text-3xl font-bold">{scoreData.score}</span>
                <span className="text-xs">/ 10</span>
            </div>
            <div>
                <h4 className="font-bold text-deep-blue">AI Viability Score</h4>
                <p className="text-sm text-gray-700 italic">"{scoreData.justification}"</p>
            </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4 text-sm">
            <div>
                <h5 className="font-semibold text-green-700">Pros:</h5>
                <ul className="list-disc list-inside text-gray-600">
                    {scoreData.pros.map((pro, i) => <li key={i}>{pro}</li>)}
                </ul>
            </div>
            <div>
                <h5 className="font-semibold text-red-700">Cons:</h5>
                <ul className="list-disc list-inside text-gray-600">
                    {scoreData.cons.map((con, i) => <li key={i}>{con}</li>)}
                </ul>
            </div>
        </div>
    </div>
);


export const ListingCard: React.FC<{ listing: LandListing }> = ({ listing }) => {
    const [aiScore, setAiScore] = useState<AIScore | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleGetScore = async () => {
        setIsLoading(true);
        setError(null);
        try {
            const score = await getCasinoPotentialScore(listing);
            setAiScore(score);
        } catch (err) {
            setError('Failed to get AI score. Please ensure your API key is configured correctly.');
            console.error(err);
        } finally {
            setIsLoading(false);
        }
    };
    
    return (
        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
            <img src={listing.imageUrl} alt={listing.name} className="w-full h-48 object-cover" />
            <div className="p-6">
                <div className="flex justify-between items-start">
                    <h3 className="text-2xl font-bold text-deep-blue">{listing.name}</h3>
                    <PotentialBadge potential={listing.potential} />
                </div>
                <div className="flex items-center text-gray-600 mt-2 space-x-4 text-sm">
                    <span className="flex items-center"><LocationIcon />{listing.location}</span>
                    <span className="flex items-center"><DollarSignIcon />${listing.pricePerAcre.toLocaleString()}/acre</span>
                    <span className="flex items-center"><AreaIcon />{listing.sizeAcres} acres</span>
                </div>
                <p className="text-gray-700 mt-4 text-sm">{listing.details}</p>

                {error && <p className="mt-4 text-sm text-red-600 bg-red-100 p-3 rounded-md">{error}</p>}
                
                {isLoading && (
                    <div className="mt-4 text-center text-gray-600">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-deep-blue mx-auto"></div>
                        <p className="mt-2">Scouting with AI...</p>
                    </div>
                )}
                
                {aiScore && <AIScoreDisplay scoreData={aiScore} />}
                
                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                    <button 
                        onClick={handleGetScore}
                        disabled={isLoading}
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-deep-blue to-blue-700 text-white font-semibold rounded-lg shadow-md hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-opacity"
                    >
                        <SparklesIcon /> {aiScore ? 'Re-Analyze' : 'Get AI Score'}
                        <span className="ml-1 px-2 py-0.5 text-xs font-bold bg-gold-rush text-deep-blue rounded-full">Premium</span>
                    </button>
                    <a 
                        href={listing.zillowUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex-1 text-center px-4 py-2 bg-gray-200 text-gray-800 font-semibold rounded-lg shadow-sm hover:bg-gray-300 transition-colors"
                    >
                        Buy Now
                    </a>
                </div>
            </div>
        </div>
    );
};
