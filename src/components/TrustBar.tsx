import React from 'react';
import { CheckCircle2, Cpu, Truck, Layout, Layers } from 'lucide-react';

export const TrustBar: React.FC = () => {
  const items = [
    {
      title: 'WordPress Core',
      detail: 'v6.0+ Verified',
      icon: (
        <div className="w-5 h-5 rounded-full bg-slate-800 text-white font-serif font-bold text-xs flex items-center justify-center shrink-0">
          W
        </div>
      ),
    },
    {
      title: 'WooCommerce',
      detail: 'v8.x & 9.x Tested',
      icon: (
        <div className="w-5 h-5 rounded-md bg-[#7F54B3] text-white font-bold text-[10px] flex items-center justify-center shrink-0">
          Woo
        </div>
      ),
    },
    {
      title: 'Elementor Integration',
      detail: '18 Custom Widgets Included',
      icon: (
        <div className="w-5 h-5 rounded-md bg-[#92003B] text-white font-bold text-xs flex items-center justify-center shrink-0">
          E
        </div>
      ),
    },
    {
      title: 'HPOS Compatible',
      detail: 'High-Performance Order Storage',
      icon: <Cpu className="w-5 h-5 text-blue-600 shrink-0" />,
    },
    {
      title: 'COD Ready',
      detail: 'Inside/Outside City Rates',
      icon: <Truck className="w-5 h-5 text-emerald-600 shrink-0" />,
    },
  ];

  return (
    <section className="border-y border-slate-200/80 bg-slate-50/50 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-semibold text-slate-400 uppercase tracking-wider mb-5">
          Ecosystem Compatibility & Technical Standards
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 items-center justify-center">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3 px-3 py-2 rounded-xl bg-white/70 border border-slate-200/60 shadow-2xs hover:bg-white transition-colors"
            >
              {item.icon}
              <div className="min-w-0">
                <div className="text-xs font-bold text-slate-800 leading-tight truncate">
                  {item.title}
                </div>
                <div className="text-[11px] text-slate-500 truncate">
                  {item.detail}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
