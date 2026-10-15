import React from 'react';
import { CheckCircle2, ShieldCheck, AlertCircle, Cpu, Layers, Truck, CreditCard, Activity } from 'lucide-react';

export const Integrations: React.FC = () => {
  const integrations = [
    {
      name: 'WordPress Core',
      version: 'WordPress 6.0 – 6.7+',
      description:
        'Engineered to run natively on standard WordPress hooks and filters without theme override hacks or breaking core plugin updates.',
      icon: (
        <div className="w-8 h-8 rounded-lg bg-slate-900 text-white font-serif font-bold text-sm flex items-center justify-center">
          W
        </div>
      ),
      status: 'Verified Native',
    },
    {
      name: 'WooCommerce Core',
      version: 'WooCommerce 7.5 – 9.x+',
      description:
        'Uses standard WooCommerce cart, tax calculation, coupon validation, shipping zones, and email notifications.',
      icon: (
        <div className="w-8 h-8 rounded-lg bg-[#7F54B3] text-white font-bold text-xs flex items-center justify-center">
          Woo
        </div>
      ),
      status: 'Fully Compatible',
    },
    {
      name: 'Elementor & Elementor Pro',
      version: 'v3.16 – v3.24+',
      description:
        'Includes 18 bespoke widgets that drag directly into your Elementor editor without needing third-party add-on packs.',
      icon: (
        <div className="w-8 h-8 rounded-lg bg-[#92003B] text-white font-bold text-xs flex items-center justify-center">
          E
        </div>
      ),
      status: '18 Widgets Included',
    },
    {
      name: 'High-Performance Order Storage (HPOS)',
      version: 'WooCommerce Custom Tables',
      description:
        'Directly reads and writes to WooCommerce custom order tables (`wc_orders`), eliminating legacy `wp_posts` and `wp_postmeta` database bottlenecks.',
      icon: <Cpu className="w-7 h-7 text-blue-600" />,
      status: 'HPOS Certified',
    },
    {
      name: 'Cash on Delivery (COD)',
      version: 'WooCommerce COD Extension',
      description:
        'Optimized COD workflow with dynamic delivery rate adjustment (inside city vs outside city) and telephone validation rules.',
      icon: <Truck className="w-7 h-7 text-emerald-600" />,
      status: 'Optimized Flow',
    },
    {
      name: 'Bangladesh Mobile Financial Services',
      version: 'bKash, Nagad & Rocket',
      description:
        'Seamless compatibility with standard bKash and Nagad payment gateways, merchant checkout links, and manual transaction ID inputs.',
      icon: <CreditCard className="w-7 h-7 text-pink-600" />,
      status: 'Local MFS Ready',
    },
    {
      name: 'Meta / Facebook Pixel',
      version: 'Browser & CAPI Ready',
      description:
        'Reliably triggers PageView, AddToCart, InitiateCheckout, and Purchase events with accurate cart totals and deduplication parameters.',
      icon: <Activity className="w-7 h-7 text-blue-700" />,
      status: 'Pixel Ready',
    },
  ];

  return (
    <section id="integrations" className="py-16 lg:py-24 bg-slate-50/60 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 mb-3 text-xs font-bold tracking-wider text-blue-600 uppercase">
            <span>Seamless Ecosystem</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight mb-4 text-balance">
            Fits Into Your Existing WooCommerce Workflow.
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            No messy migrations or proprietary lock-in. EasyFunnel works alongside your favorite plugins and WordPress setup.
          </p>
        </div>

        {/* Integration Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {integrations.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-2xs hover:shadow-sm transition-all"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0">
                  {item.icon}
                </div>
                <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md">
                  {item.status}
                </span>
              </div>

              <h3 className="text-base font-bold text-slate-900 mb-1">
                {item.name}
              </h3>
              <div className="text-xs font-mono text-slate-400 mb-3">
                {item.version}
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Official Compatibility Disclaimer Box as required by prompt */}
        <div className="rounded-xl border border-slate-200 bg-white p-4 sm:p-5 flex items-start gap-3.5 max-w-4xl mx-auto">
          <AlertCircle className="w-5 h-5 text-slate-500 shrink-0 mt-0.5" />
          <div className="text-xs text-slate-600 leading-relaxed">
            <strong className="text-slate-800 font-semibold">Compatibility Note:</strong> EasyFunnel is built and tested against standard WordPress and WooCommerce releases. Specific third-party payment gateways (e.g., bKash, Nagad merchant accounts) require their respective active gateway plugins. EasyFunnel operates directly inside your WordPress database without sending transaction data to third-party servers.
          </div>
        </div>
      </div>
    </section>
  );
};
