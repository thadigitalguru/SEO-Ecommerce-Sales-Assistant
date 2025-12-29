import { useState } from 'react';
import { AnalyticsDashboard } from './features/analytics/components/Dashboard';
import { RecommendationSlider } from './features/recommendations/components/RecommendationSlider';
import { SEOSuggestions } from './features/catalog/components/SEOSuggestions';
import { KeywordExplorer } from './features/seo/components/KeywordExplorer';
import { TechnicalAuditor } from './features/seo/components/TechnicalAuditor';
import { CompetitorMonitor } from './features/seo/components/CompetitorMonitor';
import { ContentGenerator } from './features/content/components/ContentGenerator';

function App() {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'seo' | 'content'>('dashboard');

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 leading-normal">
      {/* Navigation */}
      <nav className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <span className="text-xl font-display font-bold tracking-tight text-slate-900">
                SEO Sales Assistant
              </span>
            </div>
            <div className="hidden md:flex space-x-8 text-sm font-medium text-slate-500">
              <button
                onClick={() => setActiveTab('dashboard')}
                className={`${activeTab === 'dashboard' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'hover:text-slate-900'} px-1 pt-1 h-16 flex items-center transition-all`}
              >
                Dashboard
              </button>
              <button
                onClick={() => setActiveTab('seo')}
                className={`${activeTab === 'seo' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'hover:text-slate-900'} px-1 pt-1 h-16 flex items-center transition-all`}
              >
                SEO Tools
              </button>
              <button
                onClick={() => setActiveTab('content')}
                className={`${activeTab === 'content' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'hover:text-slate-900'} px-1 pt-1 h-16 flex items-center transition-all`}
              >
                Content Engine
              </button>
            </div>
            <div className="flex items-center gap-4">
              <button className="p-2 text-slate-400 hover:text-slate-600">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
              </button>
              <div className="w-8 h-8 rounded-full bg-slate-200"></div>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
        {activeTab === 'dashboard' && (
          <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* Hero */}
            <section className="bg-gradient-to-br from-indigo-900 to-slate-900 rounded-3xl p-8 md:p-12 text-white overflow-hidden relative shadow-2xl shadow-indigo-200">
              <div className="relative z-10 max-w-2xl">
                <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 leading-tight">
                  Optimize for Humans, <br />
                  <span className="text-indigo-400 font-extrabold italic">Rank for Machines.</span>
                </h1>
                <p className="text-indigo-100 text-lg mb-8 opacity-90">
                  Powered by semantic AI to understand user intent and drive higher conversions through personalized experiences.
                </p>
                <div className="relative max-w-md">
                  <input
                    type="text"
                    placeholder="Search products semantically..."
                    className="w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-4 py-3 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all font-medium"
                  />
                  <span className="absolute right-3 top-3 text-white/30 text-xs bg-white/5 px-2 py-1 rounded border border-white/10">⌘ K</span>
                </div>
              </div>
              <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-indigo-500 rounded-full blur-[100px] opacity-20"></div>
            </section>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-12">
                <AnalyticsDashboard />
                <RecommendationSlider title="Personalized Recommendations" />
              </div>
              <div className="space-y-8">
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                  <h3 className="text-lg font-bold mb-4 flex items-center gap-2 text-slate-900">
                    <span className="w-1.5 h-6 bg-indigo-600 rounded-full"></span>
                    On-Page SEO Auditor
                  </h3>
                  <SEOSuggestions productId="sample-1" />
                </div>
                <div className="bg-indigo-600 rounded-2xl p-6 text-white shadow-xl shadow-indigo-100 group">
                  <h4 className="text-xl font-bold mb-2">Technical Health</h4>
                  <p className="text-indigo-100 text-sm mb-4">Your site health is at 94%. We found 3 minor metadata issues to fix.</p>
                  <button onClick={() => setActiveTab('seo')} className="bg-white text-indigo-600 px-4 py-2 rounded-lg text-sm font-bold hover:bg-indigo-50 transition-colors">View Audit Details</button>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'seo' && (
          <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <header>
              <h2 className="text-3xl font-display font-black text-slate-900">Advanced SEO Suite</h2>
              <p className="text-slate-500">Uncover keyword opportunities, fix technical debt, and monitor competition.</p>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-8">
                <section className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
                  <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                    <span className="p-2 bg-indigo-50 text-indigo-600 rounded-lg">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </span>
                    Semantic Keyword Research
                  </h3>
                  <KeywordExplorer />
                </section>

                <section className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
                  <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                    <span className="p-2 bg-rose-50 text-rose-600 rounded-lg">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                    </span>
                    Technical SEO Audit
                  </h3>
                  <TechnicalAuditor />
                </section>
              </div>

              <div className="space-y-8">
                <section className="bg-slate-900 p-8 rounded-3xl text-white shadow-2xl">
                  <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                    <span className="p-2 bg-white/10 text-white rounded-lg">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                    </span>
                    Competitor Tracker
                  </h3>
                  <CompetitorMonitor />
                </section>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'content' && (
          <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <header>
              <h2 className="text-3xl font-display font-black text-slate-900">AI Content Marketing</h2>
              <p className="text-slate-500">Scale your organic reach with high-quality, SEO-optimized content.</p>
            </header>

            <div className="max-w-3xl mx-auto">
              <section className="bg-white p-8 md:p-12 rounded-3xl border border-slate-200 shadow-xl">
                <div className="mb-8 text-center">
                  <div className="inline-flex p-3 bg-indigo-50 text-indigo-600 rounded-2xl mb-4">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">AI Article Generator</h3>
                  <p className="text-slate-500">Draft blog posts and social content in seconds.</p>
                </div>
                <ContentGenerator />
              </section>
            </div>
          </div>
        )}
      </main>

      <footer className="bg-white border-t border-slate-200 py-12 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-8 text-slate-400 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-slate-900 rounded flex items-center justify-center">
              <span className="text-white font-bold text-xs uppercase">S</span>
            </div>
            <span className="font-bold text-slate-900 uppercase tracking-tighter">SEO Assistant &copy; 2024</span>
          </div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-indigo-600 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-indigo-600 transition-colors">Technical Docs</a>
            <a href="#" className="hover:text-indigo-600 transition-colors">API Status</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
