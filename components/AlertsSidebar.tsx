
import React from 'react';
import { NEWS_ALERTS } from '../constants';

export const AlertsSidebar: React.FC = () => {
    return (
        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 sticky top-8">
            <h3 className="text-2xl font-bold text-deep-blue border-b-2 border-desert-tan pb-2 mb-4">
                Adelson Alerts
            </h3>
            <div className="space-y-4">
                {NEWS_ALERTS.map((alert, index) => (
                    <div key={index} className="p-3 bg-sandstone/30 rounded-lg">
                        <h4 className="font-bold text-gray-800">{alert.title}</h4>
                        <p className="text-sm text-gray-600 mt-1">{alert.content}</p>
                        <p className="text-xs text-gray-400 text-right mt-2">{alert.date}</p>
                    </div>
                ))}
            </div>
             <div className="mt-6 text-center">
                <button className="w-full py-2 bg-gold-rush text-deep-blue font-bold rounded-lg shadow-md hover:bg-yellow-500 transition-colors">
                    Unlock full alerts for $4.99/mo
                </button>
            </div>
        </div>
    );
};
