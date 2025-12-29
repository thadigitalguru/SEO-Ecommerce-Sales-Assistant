import { fetchApi } from '../../../api/client';

export interface AudienceInsight {
    id: string;
    topic: string;
    sentiment: 'positive' | 'neutral' | 'negative';
    trend: 'up' | 'down' | 'stable';
    keywords: string[];
}

export interface SearchPerformance {
    query: string;
    impressions: number;
    clicks: number;
    ctr: number;
}

export const analyticsService = {
    async getAudienceInsights(): Promise<AudienceInsight[]> {
        // In production, this would call Azure Functions which processes Azure AI Search logs
        return fetchApi<AudienceInsight[]>('/analytics/insights');
    },

    async getSearchPerformance(): Promise<SearchPerformance[]> {
        return fetchApi<SearchPerformance[]>('/analytics/performance');
    }
};
