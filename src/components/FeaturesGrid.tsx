import React, { useState } from 'react';
import {
  Zap,
  Sliders,
  Move,
  GitFork,
  Layers,
  PhoneCall,
  ShieldAlert,
  Activity,
  Boxes,
  CreditCard,
  Truck,
  Cpu,
  Check
} from 'lucide-react';
import { CORE_FEATURES } from '../data/easyfunnelData';

export const FeaturesGrid: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');

  const filterCategories = ['All', 'Checkout Experience', 'Customization', 'Recovery & Security', 'Payments & Architecture'];

  const getCategoryGroup = (cat: string) => {
    if (cat === 'Checkout Experience' || cat === 'Merchandising' || cat === 'Funnel Architecture') return 'Checkout Experience';
    if (cat === 'Customization' || cat === 'Page Builder') return 'Customization';
    if (cat === 'Recovery' || cat === 'Security' || cat === 'Analytics') return 'Recovery & Security';
    return 'Payments & Architecture';
  };

  const filteredFeatures = CORE_FEATURES.filter((f) => {
    if (selectedFilter === 'All') return true;
    return getCategoryGroup(f.category) === selectedFilter;
  });

  const getFeatureIcon = (iconName: string) => {
    switch (iconName) {
      case 'Zap':
        return <Zap className="w-5 h-5 text-blue-600" />;
      case 'Sliders':
        return <Sliders className="w-5 h-5 text-indigo-600" />;
      case 'Move':
        return <Move className="w-5 h-5 text-purple-600" />;
      case 'GitFork':
        return <GitFork className="w-5 h-5 text-emerald-600" />;
      case 'Layers':
        return <Layers className="w-5 h-5 text-sky-600" />;
      case 'PhoneCall':
        return <PhoneCall className="w-5 h-5 text-amber-600" />;
      case 'ShieldAlert':
        return <ShieldAlert className="w-5 h-5 text-rose-600" />;
      case 'Activity':
        return <Activity className="w-5 h-5 text-cyan-600" />;
      case 'Boxes':
        return <Boxes className="w-5 h-5 text-blue-700" />;
      case 'CreditCard':
        return <CreditCard className="w-5 h-5 text-pink-600" />;
      case 'Truck':
        return <Truck className="w-5 h-5 text-emerald-700" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-slate-700" />;
      default:
        return <Zap className="w-5 h-5 text-blue-600" />;
    }
  };

  return (
    <section id="features" className="py-16 lg:py-24 bg-slate-50/60 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 mb-3 text-xs font-bold tracking-wider text-blue-600 uppercase">
            <span>Verified Core Features</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight mb-4 text-balance">
            Everything You Need to Optimize Your WooCommerce Sales.
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            Every feature in EasyFunnel is built specifically to remove purchasing barriers, speed up conversions, and simplify store administration.
          </p>

          {/* Interactive filter buttons */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 mt-8 p-1.5 bg-slate-200/60 rounded-xl max-w-2xl mx-auto">
            {filterCategories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedFilter(category)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                  selectedFilter === category
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* 12 Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFeatures.map((feature) => (
            <div
              key={feature.id}
              className="group bg-white rounded-2xl border border-slate-200/80 p-6 shadow-2xs hover:shadow-md hover:border-blue-300 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Header with Icon and Category Tag */}
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {getFeatureIcon(feature.icon)}
                  </div>
                  <span className="text-[11px] font-semibold text-slate-500">
                    {feature.tag}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {feature.description}
                </p>
              </div>

              {/* Mini UI Preview Badge */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                <span className="flex items-center gap-1 text-emerald-700 font-medium">
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  Native WordPress plugin
                </span>
                <span className="text-slate-400 font-mono text-[10px]">
                  {feature.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
