
import React from 'react';

interface HeaderProps {
    onStartScouting: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onStartScouting }) => {
    return (
        <header className="bg-desert-tan text-deep-blue w-full shadow-md">
            <div className="container mx-auto px-4 py-8 md:py-16 text-center">
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
                    West Texas Dreaming
                </h1>
                <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto">
                    Scout West Texas land for the next Vegas—before Cuban and Sands do.
                </p>
                <button 
                    onClick={onStartScouting}
                    className="mt-8 px-8 py-3 bg-deep-blue text-white font-bold rounded-lg shadow-lg hover:bg-opacity-90 transform hover:-translate-y-1 transition-all duration-300 ease-in-out"
                >
                    Start Scouting
                </button>
            </div>
        </header>
    );
};
