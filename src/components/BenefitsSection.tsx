import React from 'react';
import { TrendingUp, Smartphone, ShieldCheck, Zap, ArrowUpRight } from 'lucide-react';

export const BenefitsSection: React.FC = () => {
  const benefits = [
    {
      title: 'Eliminate Redundant Checkout Steps',
      description:
        'Standard WooCommerce flows lose buyers between the cart, account creation, and shipping calculation pages. EasyFunnel condenses all actions into one focused viewport.',
      icon: TrendingUp,
      highlight: 'Single-Viewport Experience',
    },
    {
      title: 'Optimized for Mobile Shoppers',
      description:
        'Over 75% of social media traffic shops on smartphones. EasyFunnel provides large touch targets, simplified inputs, and instant payment switches.',
      icon: Smartphone,
      highlight: 'Thumb-Friendly Layout',
    },
    {
      title: 'Built for COD & Local Regional Markets',
      description:
        'Tailored specifically for Cash on Delivery dynamics with area-based delivery rates (inside vs outside city) and native support for local MFS gateways like bKash and Nagad.',
      icon: ShieldCheck,
      highlight: 'COD & MFS Ready',
    },
    {
      title: 'Recover Leads Before They Disappear',
      description:
        'Shoppers often hesitate right at the payment step. With Incomplete Order Tracking, your store captures the phone number first, opening a direct follow-up opportunity.',
      icon: Zap,
      highlight: 'Real-Time Lead Capture',
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-slate-50/70 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 mb-3 text-xs font-bold tracking-wider text-blue-600 uppercase">
            <span>Commercial Advantages</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight mb-4 text-balance">
            Why WooCommerce Merchants Choose EasyFunnel.
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            Engineered from real store requirements to deliver tangible conversion improvements and cleaner order management.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-slate-200/90 p-6 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-semibold text-blue-700 bg-blue-50/80 px-2 py-0.5 rounded">
                    {item.highlight}
                  </span>
                  <h3 className="text-base font-bold text-slate-900 mt-3 mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-400 font-medium">
                  WooCommerce Optimized
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
