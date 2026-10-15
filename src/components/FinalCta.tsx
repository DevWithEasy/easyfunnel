import React from 'react';
import { ArrowRight, Play, CheckCircle2, Shield } from 'lucide-react';

interface FinalCtaProps {
  onOpenLiveDemo: () => void;
  onOpenPricing: () => void;
}

export const FinalCta: React.FC<FinalCtaProps> = ({
  onOpenLiveDemo,
  onOpenPricing,
}) => {
  return (
    <section className="py-20 lg:py-28 bg-slate-950 text-white relative overflow-hidden">
      {/* Decorative gradient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-blue-600/20 blur-[120px] rounded-full pointer-events-none" />

      {/* Subtle grid lines */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.05]"
        style={{
          backgroundImage:
            'radial-gradient(#ffffff 1px, transparent 1px), radial-gradient(#ffffff 1px, #020617 1px)',
          backgroundSize: '28px 28px',
          backgroundPosition: '0 0, 14px 14px',
        }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 mb-4 text-xs font-bold tracking-wider text-emerald-400 uppercase">
          <span>100% Free WordPress Plugin</span>
        </div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-5 text-balance">
          Ready to Build a Better WooCommerce Checkout?
        </h2>

        {/* Supporting text */}
        <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-10">
          Bring your checkout tools, sales funnel features, and store workflow together with EasyFunnel—completely free for every WooCommerce merchant.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <button
            onClick={onOpenPricing}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-bold text-slate-950 bg-white hover:bg-slate-100 rounded-xl shadow-lg transition-all focus:outline-hidden focus-visible:ring-2 focus-visible:ring-blue-400"
          >
            <span>Download EasyFunnel Free</span>
            <ArrowRight className="w-4 h-4 text-slate-900" />
          </button>
          <a
            href="#features"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-bold text-white bg-slate-800/90 hover:bg-slate-800 border border-slate-700 rounded-xl transition-all"
          >
            <span>Explore Features</span>
          </a>
        </div>

        {/* Trust Points */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-slate-400">
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-blue-400" />
            <span>18 Elementor Widgets Included</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-blue-400" />
            <span>HPOS & WooCommerce 9.x Compatible</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-blue-400" />
            <span>Native COD & Local Gateway Ready</span>
          </div>
        </div>
      </div>
    </section>
  );
};
