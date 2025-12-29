import React, { useState, useEffect } from 'react';
import { productService } from '../services/productService';

interface SEOSuggestionsProps {
    productId: string;
}

export const SEOSuggestions: React.FC<SEOSuggestionsProps> = ({ productId }) => {
    const [suggestions, setSuggestions] = useState<string[]>([]);
    const [score, setScore] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Mocking real-time scoring and suggestions
        const fetchSEOData = async () => {
            setIsLoading(true);
            const data = await productService.getSEOSuggestions(productId);
            setSuggestions(data);
            setScore(Math.floor(Math.random() * (95 - 60 + 1)) + 60); // Random score between 60-95
            setIsLoading(false);
        };

        fetchSEOData();
    }, [productId]);

    if (isLoading) return <div className="text-slate-400 text-sm animate-pulse">Analyzing on-page SEO...</div>;

    const getScoreColor = (s: number) => {
        if (s >= 90) return 'text-emerald-500';
        if (s >= 70) return 'text-amber-500';
        return 'text-rose-500';
    };

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between bg-slate-50 p-4 rounded-xl border border-slate-100">
                <div>
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-tighter">SEO Health Score</span>
                    <div className={`text-3xl font-black ${getScoreColor(score)}`}>{score}/100</div>
                </div>
                <div className="text-right">
                    <div className="text-xs font-bold text-slate-800">Crawlable: <span className="text-emerald-500">YES</span></div>
                    <div className="text-xs font-bold text-slate-800">Indexable: <span className="text-emerald-500">YES</span></div>
                </div>
            </div>

            <div className="space-y-3">
                <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">Optimization Tasks</h4>
                <ul className="space-y-2">
                    {suggestions.map((suggestion, index) => (
                        <li key={index} className="flex gap-3 text-sm text-slate-600 bg-white p-3 rounded-lg border border-slate-50 shadow-sm border-l-4 border-l-indigo-500">
                            <span className="text-indigo-400 flex-shrink-0 mt-0.5">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                            </span>
                            {suggestion}
                        </li>
                    ))}
                </ul>
            </div>

            <button className="w-full py-2 bg-indigo-50 text-indigo-600 font-bold text-xs rounded-lg hover:bg-indigo-100 transition-colors uppercase tracking-widest">
                Auto-Optimize All
            </button>
        </div>
    );
};
