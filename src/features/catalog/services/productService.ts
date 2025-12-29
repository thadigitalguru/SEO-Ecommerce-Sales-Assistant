import { fetchApi } from '../../../api/client';

export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
    seoScore?: number;
    seoSuggestions?: string[];
}

export const productService = {
    async getProduct(id: string): Promise<Product> {
        return fetchApi<Product>(`/catalog/products/${id}`);
    },

    async getProducts(): Promise<Product[]> {
        return fetchApi<Product[]>('/catalog/products');
    },

    async getSEOSuggestions(productId: string): Promise<string[]> {
        return fetchApi<string[]>(`/catalog/products/${productId}/seo-suggestions`);
    }
};
