import React from 'react';
import { XCircle, CheckCircle2, ArrowRight } from 'lucide-react';

export const ProblemSolution: React.FC = () => {
  const comparisons = [
    {
      problemTitle: 'Complicated Multi-Step Checkout',
      problemDesc:
        'Standard WooCommerce forces customers through Cart → Shipping Calculator → Login Prompt → Long Billing Form, causing high abandonment.',
      solutionTitle: '1-Page Express Checkout',
      solutionDesc:
        'EasyFunnel consolidates product selection, customer details, and payment onto a single, high-converting one-page checkout.',
    },
    {
      problemTitle: 'Unnecessary Form Friction',
      problemDesc:
        'Default checkouts require irrelevant fields like company name, postcodes, and country codes that slow down mobile buyers.',
      solutionTitle: 'Custom Checkout Field Manager',
      solutionDesc:
        'Enable, disable, or reorder any field with a single click. Keep only essential fields like Customer Name and Phone Number.',
    },
    {
      problemTitle: 'Difficult Funnel & Page Setup',
      problemDesc:
        'Building sales landing pages and order bumps usually demands 4-5 conflicting plugins and messy PHP code snippets.',
      solutionTitle: 'All-in-One Sales Funnel & 18 Widgets',
      solutionDesc:
        'Design custom funnel steps, express buy buttons, countdown timers, and order bumps directly inside Elementor with native widgets.',
    },
    {
      problemTitle: 'Lost & Incomplete Orders',
      problemDesc:
        'When shoppers type their phone number and abandon the page, standard WooCommerce leaves you with zero lead record or follow-up trail.',
      solutionTitle: 'Real-Time Incomplete Order Capture',
      solutionDesc:
        'EasyFunnel saves customer details as they type, giving your sales team an actionable list to contact and recover abandoned carts.',
    },
    {
      problemTitle: 'Limited Conversion Visibility',
      problemDesc:
        'Standard pixels frequently misfire during redirected checkout steps, giving Meta ads inaccurate purchase values and event data.',
      solutionTitle: 'Accurate Event & Pixel Tracking',
      solutionDesc:
        'Fires standard Facebook/Meta events (PageView, AddToCart, InitiateCheckout, Purchase) cleanly with accurate cart totals.',
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 mb-3 text-xs font-bold tracking-wider text-blue-600 uppercase">
            <span>Checkout Optimization</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight mb-4 text-balance">
            Your Checkout Should Help You Sell, Not Lose Customers.
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            Most WooCommerce stores suffer from friction-heavy default checkout flows. EasyFunnel replaces that friction with a focused, streamlined purchasing path.
          </p>
        </div>

        {/* 2-Column Comparison Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {/* Left Column: Common Checkout Problems */}
          <div className="rounded-2xl border border-red-200/70 bg-gradient-to-b from-red-50/30 to-white p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-red-100">
              <div className="w-8 h-8 rounded-lg bg-red-100 text-red-600 flex items-center justify-center shrink-0">
                <XCircle className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900">
                  Standard WooCommerce Friction
                </h3>
                <p className="text-xs text-red-700/80">
                  Where store revenue silently drops off
                </p>
              </div>
            </div>

            <div className="space-y-6">
              {comparisons.map((item, index) => (
                <div key={index} className="flex gap-3.5">
                  <div className="pt-0.5 text-red-500 shrink-0">
                    <XCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-800 mb-1">
                      {item.problemTitle}
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {item.problemDesc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: EasyFunnel Solutions */}
          <div className="rounded-2xl border border-blue-200/80 bg-gradient-to-b from-blue-50/30 to-white p-6 sm:p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-blue-100">
              <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900">
                  The EasyFunnel Experience
                </h3>
                <p className="text-xs text-blue-700">
                  Engineered to capture and convert every interested buyer
                </p>
              </div>
            </div>

            <div className="space-y-6">
              {comparisons.map((item, index) => (
                <div key={index} className="flex gap-3.5">
                  <div className="pt-0.5 text-emerald-600 shrink-0">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 mb-1 flex items-center gap-2">
                      <span>{item.solutionTitle}</span>
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {item.solutionDesc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
