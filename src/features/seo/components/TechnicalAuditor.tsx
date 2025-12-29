import { useState, useEffect } from 'react';
import { technicalService } from '../services/technicalService';
import type { TechnicalIssue } from '../services/technicalService';

export const TechnicalAuditor: React.FC = () => {
    const [issues, setIssues] = useState<TechnicalIssue[]>([]);
    const [isAuditing, setIsAuditing] = useState(false);

    const runAudit = async () => {
        setIsAuditing(true);
        try {
            const data = await technicalService.runAudit();
            setIssues(data);
        } finally {
            setIsAuditing(false);
        }
    };

    useEffect(() => {
        runAudit();
    }, []);

    const getSeverityStyle = (type: string) => {
        switch (type) {
            case 'error': return 'text-rose-600 bg-rose-50 border-rose-100';
            case 'warning': return 'text-amber-600 bg-amber-50 border-amber-100';
            default: return 'text-indigo-600 bg-indigo-50 border-indigo-100';
        }
    };

    return (
        <div className="space-y-4">
            <div className="flex justify-between items-center">
                <h3 className="text-lg font-bold text-slate-900">Technical Health Audit</h3>
                <button
                    onClick={runAudit}
                    disabled={isAuditing}
                    className="text-xs font-bold text-indigo-600 hover:text-indigo-700 uppercase tracking-widest"
                >
                    {isAuditing ? 'Auditing...' : 'Run New Scan'}
                </button>
            </div>

            <div className="space-y-3">
                {issues.map((issue) => (
                    <div key={issue.id} className={`p-4 rounded-xl border ${getSeverityStyle(issue.type)} transition-all hover:shadow-md`}>
                        <div className="flex justify-between items-start mb-2">
                            <span className="font-bold text-sm flex items-center gap-2">
                                <span className={`w-2 h-2 rounded-full ${issue.type === 'error' ? 'bg-rose-500' : issue.type === 'warning' ? 'bg-amber-500' : 'bg-indigo-500'}`}></span>
                                {issue.category.toUpperCase()}
                            </span>
                            <span className="text-[10px] font-black uppercase tracking-tighter opacity-60">{issue.impact} Impact</span>
                        </div>
                        <p className="font-medium text-slate-800 mb-2">{issue.message}</p>
                        <div className="flex items-center gap-2 bg-white/50 p-2 rounded-lg border border-current border-opacity-10">
                            <span className="text-[10px] font-bold">FIX:</span>
                            <p className="text-xs italic">{issue.fixSuggestion}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
