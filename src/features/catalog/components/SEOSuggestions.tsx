import React, { useState, useEffect } from 'react';
import { productService } from '../services/productService';

interface SEOSuggestionsProps {
    productId: string;
}

export const SEOSuggestions: React.FC<SEOSuggestionsProps> = ({ productId }) => {
    const [suggestions, setSuggestions] = useState<string[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function load() {
            try {
                const data = await productService.getSEOSuggestions(productId);
                setSuggestions(data);
            } catch (e) {
                console.error("Failed to load SEO suggestions", e);
            } finally {
                setIsLoading(false);
            }
        }
        load();
    }, [productId]);

    if (isLoading) return <div className="animate-pulse h-20 bg-slate-50 rounded-lg"></div>;
    if (suggestions.length === 0) return null;

    return (
        <div className="mt-8 p-4 bg-indigo-50 border border-indigo-100 rounded-lg">
            <h3 className="text-sm font-bold text-indigo-900 flex items-center gap-2">
                <span className="text-base">✨</span> AI SEO Suggestions
            </h3>
            <ul className="mt-2 space-y-2">
                {suggestions.map((suggestion, i) => (
                    <li key={i} className="text-sm text-indigo-700 flex gap-2">
                        <span className="text-indigo-300">•</span> {suggestion}
                    </li>
                ))}
            </ul>
        </div>
    );
};
