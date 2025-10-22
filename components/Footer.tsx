
import React from 'react';

export const Footer: React.FC = () => {
    return (
        <footer className="bg-desert-tan text-deep-blue mt-16">
            <div className="container mx-auto p-8 text-center">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div className="text-left">
                        <h4 className="font-bold text-lg">West Texas Dreaming</h4>
                        <p className="text-sm mt-2 max-w-sm">
                            Furloughed Fed Project, Day 21. Built with grit, Gemini, and a little bit of hope. <br/>
                            Scout the treasure before the Baptists bury it!
                        </p>
                         <p className="text-xs mt-4">&copy; {new Date().getFullYear()} West Texas Dreaming. All Rights Reserved.</p>
                         <p className="text-xs mt-1">Domain via Namecheap Order #184376174.</p>
                    </div>
                    <div className="bg-white/50 p-6 rounded-lg shadow-inner">
                        <h5 className="font-bold text-lg">Support the Dream</h5>
                        <p className="text-sm mt-2">
                           Grab a 'West Texas Dreaming' laser-engraved coaster. Scan the QR code for beta access and bragging rights.
                        </p>
                        <a href="https://www.etsy.com" target="_blank" rel="noopener noreferrer" className="inline-block mt-4 px-6 py-2 bg-deep-blue text-white font-semibold rounded-lg shadow-md hover:bg-opacity-90 transition-opacity">
                            Visit Mock Merch Store
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};
