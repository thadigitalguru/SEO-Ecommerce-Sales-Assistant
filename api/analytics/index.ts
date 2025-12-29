import { app, HttpRequest, HttpResponseInit, InvocationContext } from "@azure/functions";

export async function analyticsInsights(req: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {
    context.log('Processing analytics insights request.');

    const mockInsights = [
        {
            id: '1',
            topic: 'Eco-friendly Outdoor Gear',
            sentiment: 'positive',
            trend: 'up',
            keywords: ['sustainable', 'hiking', 'recycled']
        },
        {
            id: '2',
            topic: 'Budget Tech Accessories',
            sentiment: 'neutral',
            trend: 'stable',
            keywords: ['cheap', 'adapter', 'generic']
        }
    ];

    const mockPerformance = [
        { query: 'waterproof backpack', impressions: 1200, clicks: 156, ctr: 0.13 },
        { query: 'usb-c hub', impressions: 800, clicks: 45, ctr: 0.056 }
    ];

    const type = req.query.get('type') || 'insights';

    return {
        status: 200,
        jsonBody: type === 'insights' ? mockInsights : mockPerformance
    };
};

app.http('analyticsInsights', {
    methods: ['GET'],
    authLevel: 'anonymous',
    handler: analyticsInsights
});
