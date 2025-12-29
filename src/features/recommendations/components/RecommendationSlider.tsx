import React from 'react';
import { useRecommendations } from '../hooks/useRecommendations';
import type { ProductRecommendation } from '../services/recommendationService';

interface RecommendationSliderProps {
    productId?: string;
    stage?: string;
    title?: string;
}

export const RecommendationSlider: React.FC<RecommendationSliderProps> = ({
    productId,
    stage,
    title = "Recommended for You"
}) => {
    const { recommendations, isLoading, error } = useRecommendations(productId, stage);

    if (isLoading) return <div className="h-64 flex items-center justify-center text-slate-400">Loading recommendations...</div>;
    if (error || recommendations.length === 0) return null;

    return (
        <section className="py-12">
            <h3 className="text-xl font-display font-semibold text-slate-900 mb-6">{title}</h3>
            <div className="flex gap-6 overflow-x-auto pb-6 scrollbar-hide">
                {recommendations.map((product: ProductRecommendation) => (
                    <div key={product.id} className="min-w-[200px] flex-shrink-0 group cursor-pointer">
                        <div className="aspect-square bg-slate-100 rounded-xl overflow-hidden mb-3 relative">
                            <img
                                src={product.imageUrl}
                                alt={product.name}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute top-2 right-2 bg-white/90 backdrop-blur px-2 py-1 rounded text-[10px] font-bold text-emerald-600">
                                AI Match: {(product.score * 100).toFixed(0)}%
                            </div>
                        </div>
                        <h4 className="text-slate-900 font-medium line-clamp-1">{product.name}</h4>
                        <p className="text-slate-500 text-sm">${product.price.toFixed(2)}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};
