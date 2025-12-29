import { useState, useEffect } from 'react';
import { recommendationService } from '../services/recommendationService';
import type { ProductRecommendation } from '../services/recommendationService';

export function useRecommendations(productId?: string, stage?: string) {
    const [recommendations, setRecommendations] = useState<ProductRecommendation[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        async function fetchRecs() {
            try {
                setIsLoading(true);
                const data = await recommendationService.getRecommendations(productId, stage);
                setRecommendations(data);
            } catch (err) {
                setError(err instanceof Error ? err : new Error('Failed to fetch recommendations'));
            } finally {
                setIsLoading(false);
            }
        }

        fetchRecs();
    }, [productId, stage]);

    return { recommendations, isLoading, error };
}
