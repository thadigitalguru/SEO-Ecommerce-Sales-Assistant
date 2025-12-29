import { useState, useEffect } from 'react';
import { competitorService } from '../services/competitorService';
import type { CompetitorData } from '../services/competitorService';

export const CompetitorMonitor: React.FC = () => {
    const [competitors, setCompetitors] = useState<CompetitorData[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        competitorService.getCompetitorAnalysis().then(data => {
            setCompetitors(data);
            setIsLoading(false);
        });
    }, []);

    if (isLoading) return <div className="animate-pulse text-slate-400 py-8 text-center text-sm">Spying on competitors...</div>;

    return (
        <div className="space-y-4">
            {competitors.map((comp) => (
                <div key={comp.name} className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
                    <div className="flex justify-between items-center mb-4">
                        <div>
                            <h4 className="font-bold text-slate-900">{comp.name}</h4>
                            <p className="text-xs text-slate-500">DA: {comp.domainAuthority} | Est. Traffic: {comp.estimatedTraffic}</p>
                        </div>
                        <div className="text-right">
                            <div className="text-lg font-black text-indigo-600">{comp.overlap}%</div>
                            <div className="text-[10px] text-slate-400 uppercase font-bold">Keyword Overlap</div>
                        </div>
                    </div>

                    <div>
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-2">Competing On</span>
                        <div className="flex flex-wrap gap-2">
                            {comp.topKeywords.map(kw => (
                                <span key={kw} className="bg-slate-50 text-slate-600 text-[10px] px-2 py-1 rounded-full border border-slate-100">
                                    {kw}
                                </span>
                            ))}
                            <span className="text-[10px] text-indigo-500 font-bold flex items-center cursor-pointer hover:underline">+ Find Gaps</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};
