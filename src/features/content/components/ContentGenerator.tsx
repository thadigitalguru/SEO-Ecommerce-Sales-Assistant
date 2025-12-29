import { useState } from 'react';
import { contentService } from '../services/contentService';
import type { ContentArticle } from '../services/contentService';

export const ContentGenerator: React.FC = () => {
    const [topic, setTopic] = useState('');
    const [keywords, setKeywords] = useState('');
    const [article, setArticle] = useState<ContentArticle | null>(null);
    const [isGenerating, setIsGenerating] = useState(false);

    const handleGenerate = async () => {
        if (!topic) return;
        setIsGenerating(true);
        try {
            const kwList = keywords.split(',').map(k => k.trim()).filter(Boolean);
            const data = await contentService.generateContent(topic, kwList);
            setArticle(data);
        } finally {
            setIsGenerating(false);
        }
    };

    return (
        <div className="space-y-6">
            <div className="space-y-4">
                <div>
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 block">Campaign Topic</label>
                    <input
                        type="text"
                        value={topic}
                        onChange={(e) => setTopic(e.target.value)}
                        placeholder="e.g. Sustainable Hiking Trends 2024"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:bg-white focus:ring-2 focus:ring-indigo-500 transition-all outline-none"
                    />
                </div>
                <div>
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 block">Target Keywords (comma separated)</label>
                    <input
                        type="text"
                        value={keywords}
                        onChange={(e) => setKeywords(e.target.value)}
                        placeholder="e.g. eco-friendly, hiking boots, sustainable"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:bg-white focus:ring-2 focus:ring-indigo-500 transition-all outline-none"
                    />
                </div>
                <button
                    onClick={handleGenerate}
                    disabled={isGenerating || !topic}
                    className="w-full bg-slate-900 text-white font-bold py-3 rounded-xl hover:bg-indigo-600 transition-colors disabled:opacity-50"
                >
                    {isGenerating ? 'AI is Writing...' : 'Generate Content Strategy'}
                </button>
            </div>

            {article && (
                <div className="bg-indigo-50 border border-indigo-100 p-6 rounded-2xl animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <div className="flex justify-between items-start mb-4">
                        <span className="text-[10px] font-black bg-indigo-600 text-white px-2 py-0.5 rounded uppercase">{article.type}</span>
                        <span className="text-[10px] font-bold text-indigo-400 italic">Est. {article.suggestedLength}</span>
                    </div>
                    <h4 className="text-xl font-display font-bold text-indigo-900 mb-3 leading-tight">{article.title}</h4>
                    <p className="text-indigo-700 text-sm mb-6 leading-relaxed opacity-80">{article.excerpt}</p>
                    <div className="flex flex-wrap gap-2">
                        {article.keywords.map(kw => (
                            <span key={kw} className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded">✓ {kw}</span>
                        ))}
                    </div>
                    <button className="mt-6 w-full py-2 border-2 border-indigo-200 text-indigo-600 font-bold rounded-lg hover:bg-indigo-600 hover:text-white transition-colors text-sm">
                        Export to CMS
                    </button>
                </div>
            )}
        </div>
    );
};
