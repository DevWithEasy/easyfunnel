import React from 'react';
import { DownloadCloud, SlidersHorizontal, Rocket, Check } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Install on WordPress',
      description:
        'Upload the EasyFunnel plugin zip file to your WordPress Plugins directory and click Activate. EasyFunnel immediately connects with your WooCommerce store.',
      icon: DownloadCloud,
      metaText: 'Takes under 2 minutes',
      badge: 'Step 1'
    },
    {
      step: '02',
      title: 'Configure Fields & Widgets',
      description:
        'Select 1-page checkout mode, arrange your required customer fields with the drag-and-drop manager, set COD delivery charges, and select your Elementor widgets.',
      icon: SlidersHorizontal,
      metaText: 'No coding required',
      badge: 'Step 2'
    },
    {
      step: '03',
      title: 'Publish & Manage Orders',
      description:
        'Publish your custom checkout funnel. All incoming orders and captured incomplete leads flow automatically into your standard WooCommerce & HPOS admin orders list.',
      icon: Rocket,
      metaText: 'HPOS & AJAX ready',
      badge: 'Step 3'
    },
  ];

  return (
    <section id="how-it-works" className="py-16 lg:py-24 bg-slate-50/70 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3 text-xs font-bold tracking-wider text-blue-600 uppercase">
            <span>Fast Implementation</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight mb-4 text-balance">
            Launch a Better Checkout Experience in Three Simple Steps.
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            EasyFunnel plugs directly into your existing WooCommerce store without complicated migrations, theme conflicts, or external checkout redirects.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative">
          {/* Desktop connecting line */}
          <div className="hidden lg:block absolute top-1/2 left-12 right-12 h-0.5 bg-slate-200 -translate-y-8 z-0" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
            {steps.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-7 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    {/* Header Row: Step number & Icon */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-xl bg-slate-900 text-white flex items-center justify-center font-extrabold text-base shadow-xs">
                        {item.step}
                      </div>
                      <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                    <span className="font-semibold text-blue-600">{item.badge}</span>
                    <span className="flex items-center gap-1 font-medium">
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      {item.metaText}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
