import React from 'react';
import { useAudienceInsights } from '../hooks/useAudienceInsights';
import type { AudienceInsight, SearchPerformance } from '../services/analyticsService';

export const AnalyticsDashboard: React.FC = () => {
    const { insights, performance, isLoading, error } = useAudienceInsights();

    if (isLoading) return <div className="p-8 animate-pulse text-slate-400 text-center">Loading AI Insights...</div>;
    if (error) return <div className="p-8 text-red-500 text-center">Error loading analytics. Please try again.</div>;

    return (
        <div className="p-6 bg-slate-50 rounded-xl border border-slate-200 shadow-sm">
            <header className="mb-8">
                <h2 className="text-2xl font-display font-semibold text-slate-900">AI Audience Insights</h2>
                <p className="text-slate-500 mt-1">Semantic analysis of recent search queries and user trends.</p>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Sentiment & Trends Section */}
                <section className="space-y-4">
                    <h3 className="font-semibold text-slate-700 uppercase text-xs tracking-wider">Top Audience Clusters</h3>
                    <div className="space-y-3">
                        {insights.map((insight: AudienceInsight) => (
                            <div key={insight.id} className="p-4 bg-white rounded-lg border border-slate-100 flex items-center justify-between">
                                <div>
                                    <span className="font-medium text-slate-900">{insight.topic}</span>
                                    <div className="flex gap-2 mt-1">
                                        {insight.keywords.slice(0, 3).map((kw: string) => (
                                            <span key={kw} className="text-[10px] bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded">#{kw}</span>
                                        ))}
                                    </div>
                                </div>
                                <div className="text-right">
                                    <div className={`text-xs font-bold ${insight.trend === 'up' ? 'text-emerald-500' : 'text-slate-400'}`}>
                                        {insight.trend === 'up' ? '▲ Trending' : '▬ Stable'}
                                    </div>
                                    <div className="text-[10px] text-slate-400 capitalize">{insight.sentiment} Intent</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Search Performance Section */}
                <section className="space-y-4">
                    <h3 className="font-semibold text-slate-700 uppercase text-xs tracking-wider">Search Query Performance</h3>
                    <div className="overflow-hidden bg-white rounded-lg border border-slate-100">
                        <table className="min-w-full divide-y divide-slate-100 text-sm">
                            <thead className="bg-slate-50">
                                <tr>
                                    <th className="px-4 py-2 text-left text-slate-500 font-medium">Query</th>
                                    <th className="px-4 py-2 text-right text-slate-500 font-medium">CTR</th>
                                    <th className="px-4 py-2 text-right text-slate-500 font-medium">Clicks</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-50">
                                {performance.map((p: SearchPerformance) => (
                                    <tr key={p.query}>
                                        <td className="px-4 py-2 text-slate-900 semibold">{p.query}</td>
                                        <td className="px-4 py-2 text-right text-emerald-600 font-medium">{(p.ctr * 100).toFixed(1)}%</td>
                                        <td className="px-4 py-2 text-right text-slate-600 font-mono">{p.clicks}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>
            </div>
        </div>
    );
};
