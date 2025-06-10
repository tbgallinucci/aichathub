
import React from 'react';
import SiteCard from './components/SiteCard';
import { AI_SITES } from './constants';
import { AISite } from './types';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 p-4 sm:p-6 lg:p-8">
      <header className="text-center mb-10 sm:mb-12 lg:mb-16">
        <h1 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-cyan-300 to-teal-400">
          AI Chat Hub
        </h1>
        <p className="mt-3 text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto">
          Your curated dashboard for accessing leading AI chat platforms and tools.
        </p>
      </header>

      <main>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
          {AI_SITES.map((site: AISite) => (
            <SiteCard key={site.id} site={site} />
          ))}
        </div>
      </main>

      <footer className="text-center mt-12 sm:mt-16 py-6 border-t border-slate-700">
        <p className="text-slate-500 text-sm">
          AI Chat Hub &copy; {new Date().getFullYear()}. Explore responsibly.
        </p>
      </footer>
    </div>
  );
};

export default App;
