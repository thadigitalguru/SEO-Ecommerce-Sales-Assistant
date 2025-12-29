/**
 * Base API client for interacting with Azure Functions.
 */

const API_BASE_URL = import.meta.env.VITE_API_URL || '/api';

export async function fetchApi<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
    const url = `${API_BASE_URL}${endpoint}`;

    const headers = {
        'Content-Type': 'application/json',
        ...options.headers,
    };

    const response = await fetch(url, {
        ...options,
        headers,
    });

    if (!response.ok) {
        const errorBody = await response.json().catch(() => ({}));
        throw new Error(errorBody.message || `API request failed with status ${response.status}`);
    }

    return response.json();
}
