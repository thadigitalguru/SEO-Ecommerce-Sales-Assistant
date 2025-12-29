export interface TechnicalIssue {
    id: string;
    type: 'error' | 'warning' | 'info';
    category: 'performance' | 'metadata' | 'accessibility' | 'crawlability';
    message: string;
    impact: 'high' | 'medium' | 'low';
    fixSuggestion: string;
}

export const technicalService = {
    async runAudit(): Promise<TechnicalIssue[]> {
        // Mocking technical SEO audit
        return [
            {
                id: '1',
                type: 'error',
                category: 'metadata',
                message: 'Missing meta description on 3 pages',
                impact: 'high',
                fixSuggestion: 'Add unique meta descriptions to all products.'
            },
            {
                id: '2',
                type: 'warning',
                category: 'accessibility',
                message: '5 images missing alt text',
                impact: 'medium',
                fixSuggestion: 'Use AI to generate descriptive alt tags for product images.'
            },
            {
                id: '3',
                type: 'info',
                category: 'crawlability',
                message: 'Sitemap.xml contains 12 links',
                impact: 'low',
                fixSuggestion: 'Ensure all new seasonal products are added to the sitemap.'
            }
        ];
    }
};
