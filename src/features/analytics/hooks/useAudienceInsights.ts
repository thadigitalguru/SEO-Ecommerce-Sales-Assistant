import { useState, useEffect } from 'react';
import { analyticsService } from '../services/analyticsService';
import type { AudienceInsight, SearchPerformance } from '../services/analyticsService';

export function useAudienceInsights() {
    const [insights, setInsights] = useState<AudienceInsight[]>([]);
    const [performance, setPerformance] = useState<SearchPerformance[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        async function fetchData() {
            try {
                setIsLoading(true);
                // Using Promise.allSettled to handle potential mock errors
                const [insightsRes, performanceRes] = await Promise.allSettled([
                    analyticsService.getAudienceInsights(),
                    analyticsService.getSearchPerformance()
                ]);

                if (insightsRes.status === 'fulfilled') setInsights(insightsRes.value);
                if (performanceRes.status === 'fulfilled') setPerformance(performanceRes.value);

            } catch (err) {
                setError(err instanceof Error ? err : new Error('Failed to fetch analytics'));
            } finally {
                setIsLoading(false);
            }
        }

        fetchData();
    }, []);

    return { insights, performance, isLoading, error };
}
