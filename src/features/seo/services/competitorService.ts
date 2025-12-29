export interface CompetitorData {
    name: string;
    domainAuthority: number;
    topKeywords: string[];
    estimatedTraffic: string;
    overlap: number; // % of shared keywords
}

export const competitorService = {
    async getCompetitorAnalysis(): Promise<CompetitorData[]> {
        // Mocking competitor analysis
        return [
            {
                name: 'EcoAdventurer',
                domainAuthority: 45,
                topKeywords: ['sustainable hiking', 'recycled gear'],
                estimatedTraffic: '120K/mo',
                overlap: 35
            },
            {
                name: 'GearMaster',
                domainAuthority: 68,
                topKeywords: ['pro camping equipment', 'alpine tents'],
                estimatedTraffic: '450K/mo',
                overlap: 15
            }
        ];
    }
};
