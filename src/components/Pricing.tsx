import React from 'react';
import { Check, Download, ArrowRight, ShieldCheck, Sparkles, Layers, Cpu, Heart } from 'lucide-react';
import { FREE_EDITION } from '../data/easyfunnelData';

interface PricingProps {
  onDownloadFree: () => void;
  onOpenLiveDemo: () => void;
}

export const Pricing: React.FC<PricingProps> = ({ onDownloadFree, onOpenLiveDemo }) => {
  return (
    <section id="pricing" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 mb-3 text-xs font-bold tracking-wider text-emerald-600 uppercase">
            <span>100% Free · No Strings Attached</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight mb-4 text-balance">
            Currently 100% Free for Every WooCommerce Store.
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            EasyFunnel is completely free to use. All 18 Elementor custom widgets, 1-page express checkout, incomplete order tracking, and fraud protection features are fully unlocked with zero subscription fees.
          </p>
        </div>

        {/* 3 Pillar Free Guarantee Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 max-w-5xl mx-auto">
          <div className="p-5 rounded-2xl border border-slate-200/90 bg-slate-50/50 flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900 mb-1">
                All 18 Widgets Included
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                No locked &quot;Pro&quot; tiers. Every single Elementor widget is free and ready to use on your store today.
              </p>
            </div>
          </div>

          <div className="p-5 rounded-2xl border border-slate-200/90 bg-slate-50/50 flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900 mb-1">
                Unlimited Store Activations
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Use it across your personal stores, staging servers, and client eCommerce websites with zero license limits.
              </p>
            </div>
          </div>

          <div className="p-5 rounded-2xl border border-slate-200/90 bg-slate-50/50 flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
              <Cpu className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900 mb-1">
                HPOS & AJAX Architecture
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Fully compatible with WooCommerce 9.x High-Performance Order Storage with high speed and zero bloat.
              </p>
            </div>
          </div>
        </div>

        {/* Main Free Download Card */}
        <div className="max-w-3xl mx-auto rounded-3xl border-2 border-blue-600/30 bg-gradient-to-b from-blue-50/30 via-white to-white p-7 sm:p-10 shadow-xl relative overflow-hidden">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
            <div>
              <span className="text-xs font-bold text-emerald-700 bg-emerald-100/70 px-3 py-1 rounded-full uppercase tracking-wider">
                {FREE_EDITION.badge}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
                EasyFunnel Plugin v2.4
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                {FREE_EDITION.licenseText}
              </p>
            </div>

            <div className="text-left sm:text-right">
              <div className="flex items-baseline gap-1 sm:justify-end">
                <span className="text-4xl sm:text-5xl font-black text-slate-900">
                  $0
                </span>
                <span className="text-xs text-emerald-600 font-bold uppercase tracking-wider">
                  / 100% Free
                </span>
              </div>
              <div className="text-[11px] text-slate-500 font-medium">
                No credit card required
              </div>
            </div>
          </div>

          {/* Features Checklist */}
          <div className="py-6">
            <div className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-4">
              Everything Unlocked in this Free Download:
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {FREE_EDITION.features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Download Action Area */}
          <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center gap-3">
            <button
              type="button"
              onClick={onDownloadFree}
              className="w-full sm:flex-1 py-3.5 px-6 rounded-xl text-xs sm:text-sm font-bold bg-slate-900 hover:bg-slate-800 text-white shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-blue-600"
            >
              <Download className="w-4 h-4" />
              <span>Download EasyFunnel Free (.zip)</span>
            </button>
            <button
              type="button"
              onClick={onOpenLiveDemo}
              className="w-full sm:w-auto py-3.5 px-5 rounded-xl text-xs sm:text-sm font-semibold bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 transition-colors"
            >
              Explore Live Demo
            </button>
          </div>

          <div className="mt-4 text-center text-[11px] text-slate-400 flex items-center justify-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>Open GPL License · Safe direct WordPress installation · No ads or telemetry</span>
          </div>
        </div>
      </div>
    </section>
  );
};
