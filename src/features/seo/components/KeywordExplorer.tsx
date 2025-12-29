import { useState } from 'react';
import { keywordService } from '../services/keywordService';
import type { KeywordResult } from '../services/keywordService';

export const KeywordExplorer: React.FC = () => {
    const [seed, setSeed] = useState('');
    const [results, setResults] = useState<KeywordResult[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    const handleSearch = async () => {
        if (!seed) return;
        setIsLoading(true);
        try {
            const data = await keywordService.discoverKeywords(seed);
            setResults(data);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="space-y-6">
            <div className="flex gap-2">
                <input
                    type="text"
                    value={seed}
                    onChange={(e) => setSeed(e.target.value)}
                    placeholder="Enter a topic (e.g. Hiking Boots)..."
                    className="flex-1 bg-white border border-slate-200 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                />
                <button
                    onClick={handleSearch}
                    className="bg-indigo-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-indigo-700 transition"
                    disabled={isLoading}
                >
                    {isLoading ? 'Exploring...' : 'Discover'}
                </button>
            </div>

            {results.length > 0 && (
                <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
                    <table className="min-w-full divide-y divide-slate-200 text-sm">
                        <thead className="bg-slate-50">
                            <tr>
                                <th className="px-4 py-3 text-left font-semibold text-slate-700">Keyword</th>
                                <th className="px-4 py-3 text-right font-semibold text-slate-700">Volume</th>
                                <th className="px-4 py-3 text-center font-semibold text-slate-700">Difficulty</th>
                                <th className="px-4 py-3 text-right font-semibold text-slate-700">Opportunity</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {results.map((res) => (
                                <tr key={res.keyword} className="hover:bg-slate-50">
                                    <td className="px-4 py-3 text-slate-900 font-medium">{res.keyword}</td>
                                    <td className="px-4 py-3 text-right text-slate-500 font-mono">{res.volume.toLocaleString()}</td>
                                    <td className="px-4 py-3 text-center">
                                        <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${res.difficulty === 'low' ? 'bg-emerald-100 text-emerald-700' :
                                                res.difficulty === 'medium' ? 'bg-amber-100 text-amber-700' :
                                                    'bg-rose-100 text-rose-700'
                                            }`}>
                                            {res.difficulty}
                                        </span>
                                    </td>
                                    <td className="px-4 py-3 text-right">
                                        <div className="flex items-center justify-end gap-2">
                                            <div className="w-12 bg-slate-100 h-1.5 rounded-full overflow-hidden">
                                                <div className="bg-indigo-500 h-full" style={{ width: `${res.opportunity}%` }}></div>
                                            </div>
                                            <span className="font-bold text-indigo-600">{res.opportunity}%</span>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};
