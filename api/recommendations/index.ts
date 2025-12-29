import { app, HttpRequest, HttpResponseInit, InvocationContext } from "@azure/functions";

export async function getRecommendations(req: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {
    context.log('Processing recommendations request.');

    const mockRecommendations = [
        {
            id: 'p1',
            name: 'Mountain Trekker 40L',
            price: 89.99,
            imageUrl: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=200&q=80',
            score: 0.98
        },
        {
            id: 'p2',
            name: 'City Commuter Pro',
            price: 59.50,
            imageUrl: 'https://images.unsplash.com/photo-1523983388277-336a66bf9bcd?w=200&q=80',
            score: 0.85
        }
    ];

    return {
        status: 200,
        jsonBody: mockRecommendations
    };
};

app.http('getRecommendations', {
    methods: ['GET'],
    authLevel: 'anonymous',
    handler: getRecommendations
});
