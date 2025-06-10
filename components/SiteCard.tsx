
import React from 'react';
import { AISite } from '../types';
import ExternalLinkIcon from './icons/ExternalLinkIcon';

interface SiteCardProps {
  site: AISite;
}

const SiteCard: React.FC<SiteCardProps> = ({ site }) => {
  const logoUrl = `https://picsum.photos/seed/${site.logoSeed}/80/80`;

  return (
    <div className="bg-slate-800 rounded-xl shadow-2xl overflow-hidden flex flex-col transition-all duration-300 hover:shadow-brand-accent/30 hover:ring-2 hover:ring-brand-accent/50">
      <div className="p-6 flex-grow flex flex-col">
        <div className="flex items-center mb-4">
          <img 
            src={logoUrl} 
            alt={`${site.name} logo`} 
            className="w-16 h-16 rounded-lg mr-4 object-cover bg-slate-700" 
          />
          <div>
            <h3 className="text-xl font-semibold text-slate-100">{site.name}</h3>
            {site.tags && site.tags.length > 0 && (
              <div className="mt-1 flex flex-wrap gap-1">
                {site.tags.slice(0, 2).map(tag => ( // Show max 2 tags for brevity
                  <span key={tag} className="text-xs bg-slate-700 text-sky-300 px-2 py-0.5 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
        
        <p className="text-slate-400 text-sm mb-5 flex-grow min-h-[60px]">
          {site.description}
        </p>

        <a
          href={site.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto inline-flex items-center justify-center px-4 py-2.5 bg-brand-accent text-slate-900 font-medium rounded-lg hover:bg-brand-accent-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-800 focus:ring-brand-accent transition-colors duration-200 group"
        >
          Visit {site.name}
          <ExternalLinkIcon className="w-5 h-5 ml-2 transition-transform duration-200 group-hover:translate-x-0.5" />
        </a>
      </div>
    </div>
  );
};

export default SiteCard;
