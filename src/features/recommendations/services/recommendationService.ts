import { fetchApi } from '../../../api/client';

export interface ProductRecommendation {
    id: string;
    name: string;
    price: number;
    imageUrl: string;
    score: number; // Semantic similarity score
}

export const recommendationService = {
    async getRecommendations(productId?: string, stage?: string): Promise<ProductRecommendation[]> {
        const params = new URLSearchParams();
        if (productId) params.append('productId', productId);
        if (stage) params.append('stage', stage);

        return fetchApi<ProductRecommendation[]>(`/recommendations?${params.toString()}`);
    }
};
