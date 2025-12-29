import { AnalyticsDashboard } from './features/analytics/components/Dashboard';
import { RecommendationSlider } from './features/recommendations/components/RecommendationSlider';
import { SEOSuggestions } from './features/catalog/components/SEOSuggestions';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Navigation */}
      <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
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
              <a href="#" className="text-indigo-600 border-b-2 border-indigo-600 px-1 pt-1 h-16 flex items-center">Dashboard</a>
              <a href="#" className="hover:text-slate-900 px-1 pt-1 h-16 flex items-center">Catalog</a>
              <a href="#" className="hover:text-slate-900 px-1 pt-1 h-16 flex items-center">Analytics</a>
              <a href="#" className="hover:text-slate-900 px-1 pt-1 h-16 flex items-center">Settings</a>
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
        {/* Hero / Hero Search Placeholder */}
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
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-indigo-500 rounded-full blur-[100px] opacity-20"></div>
          <div className="absolute bottom-0 right-0 mr-20 mb-20 w-64 h-64 bg-emerald-500 rounded-full blur-[80px] opacity-10"></div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Dashboard Area */}
          <div className="lg:col-span-2 space-y-12">
            <AnalyticsDashboard />
            <RecommendationSlider title="Personalized Recommendations" />
          </div>

          {/* Sidebar Area */}
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-indigo-600 rounded-full"></span>
                SEO Optimization
              </h3>
              <SEOSuggestions productId="sample-1" />
            </div>

            <div className="bg-indigo-600 rounded-2xl p-6 text-white shadow-xl shadow-indigo-100 relative overflow-hidden group">
              <div className="relative z-10">
                <h4 className="text-xl font-bold mb-2">Pro Insights</h4>
                <p className="text-indigo-100 text-sm mb-4">Your "consideration" stage visitors are up 12% this week. Consider a 10% discount to boost conversions.</p>
                <button className="bg-white text-indigo-600 px-4 py-2 rounded-lg text-sm font-bold hover:bg-indigo-50 transition-colors">Apply Optimization</button>
              </div>
              <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-white/10 rounded-full scale-150 group-hover:scale-110 transition-transform duration-700"></div>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-white border-t border-slate-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-slate-900 rounded flex items-center justify-center">
              <span className="text-white font-bold text-xs">P</span>
            </div>
            <span className="font-bold text-slate-900">SEO Ecommerce Sales Assistant</span>
          </div>
          <p className="text-slate-400 text-sm italic">Built for the future of semantic commerce.</p>
          <div className="flex gap-6 text-slate-400 text-sm">
            <a href="#" className="hover:text-slate-600 transition-colors">Privacy</a>
            <a href="#" className="hover:text-slate-600 transition-colors">Terms</a>
            <a href="#" className="hover:text-slate-600 transition-colors">Support</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
