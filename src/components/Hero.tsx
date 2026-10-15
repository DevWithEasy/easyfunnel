import React, { useState } from 'react';
import {
  ArrowRight,
  Play,
  CheckCircle2,
  Sliders,
  ShieldCheck,
  Activity,
  Layers,
  PhoneCall,
  Truck,
  CreditCard,
  Sparkles,
  GripVertical,
  Check,
  Eye,
  AlertCircle
} from 'lucide-react';

interface HeroProps {
  onOpenLiveDemo: () => void;
  onOpenPricing: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenLiveDemo, onOpenPricing }) => {
  const [activeAdminTab, setActiveAdminTab] = useState<'checkout' | 'fields' | 'incomplete' | 'fraud'>('checkout');
  const [demoCodInsideCity, setDemoCodInsideCity] = useState(true);
  const [demoSkipCart, setDemoSkipCart] = useState(true);
  const [demoCaptureLeads, setDemoCaptureLeads] = useState(true);

  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 bg-gradient-to-b from-slate-50/70 via-white to-white">
      {/* Background subtle grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage:
            'radial-gradient(#0f172a 1px, transparent 1px), radial-gradient(#0f172a 1px, #ffffff 1px)',
          backgroundSize: '32px 32px',
          backgroundPosition: '0 0, 16px 16px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Hero Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 mb-4 text-xs font-bold tracking-wider text-blue-600 uppercase">
            <span>THE SMARTER WAY TO SELL WITH WOOCOMMERCE</span>
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15] mb-5 text-balance">
            Turn More WooCommerce Visitors Into Paying Customers.
          </h1>

          {/* Supporting description */}
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto mb-8">
            Build streamlined checkout experiences, create high-converting sales funnels, and manage your WooCommerce orders with EasyFunnel—all from one powerful WordPress plugin.
          </p>

          {/* Call to actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-6">
            <button
              onClick={onOpenPricing}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-xl shadow-md hover:shadow-lg transition-all focus:outline-hidden focus-visible:ring-2 focus-visible:ring-blue-600"
            >
              <span>Download EasyFunnel Free</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={onOpenLiveDemo}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-800 bg-white hover:bg-slate-50 border border-slate-200/90 rounded-xl shadow-xs transition-all focus:outline-hidden focus-visible:ring-2 focus-visible:ring-blue-600"
            >
              <Play className="w-4 h-4 fill-blue-600 text-blue-600" />
              <span>Explore Live Demo</span>
            </button>
          </div>

          {/* Trust statement beneath buttons */}
          <div className="text-xs text-slate-500 font-medium flex items-center justify-center gap-2 flex-wrap">
            <span className="text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded">100% Free Forever</span>
            <span aria-hidden="true">·</span>
            <span>All 18 Elementor Widgets Unlocked</span>
            <span aria-hidden="true">·</span>
            <span>No Credit Card Required</span>
          </div>
        </div>

        {/* Hero Visual: Admin Dashboard Mockup with Floating UI Cards */}
        <div className="relative max-w-5xl mx-auto">
          {/* Main Dashboard Frame */}
          <div className="rounded-2xl border border-slate-200/90 bg-white shadow-xl shadow-slate-200/50 overflow-hidden">
            {/* WordPress Admin Bar Top */}
            <div className="bg-slate-900 px-4 py-2 flex items-center justify-between text-xs text-slate-300 border-b border-slate-800 select-none">
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-slate-700 flex items-center justify-center text-[10px] font-bold text-white">
                  W
                </div>
                <span className="font-semibold text-white">EasyFunnel</span>
                <span className="hidden sm:inline text-slate-400">·</span>
                <span className="hidden sm:inline text-slate-400">WooCommerce Express Checkout</span>
              </div>
              <div className="flex items-center gap-3 text-[11px]">
                <span className="text-emerald-400 font-medium flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block"></span>
                  Active on WooCommerce 9.x
                </span>
                <span className="hidden md:inline text-slate-400">HPOS Enabled</span>
              </div>
            </div>

            {/* Plugin Workspace Header */}
            <div className="border-b border-slate-200 bg-slate-50/70 px-4 sm:px-6 py-3 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <div className="p-1.5 bg-blue-50 text-blue-600 rounded-lg">
                  <Sliders className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900 leading-tight">
                    EasyFunnel Management Dashboard
                  </h3>
                  <p className="text-[11px] text-slate-500">
                    Live Plugin Configuration · Express Funnel Settings
                  </p>
                </div>
              </div>

              {/* Sub-navigation tabs within the mockup */}
              <div className="flex items-center gap-1 bg-slate-200/70 p-1 rounded-lg text-xs">
                <button
                  type="button"
                  onClick={() => setActiveAdminTab('checkout')}
                  className={`px-3 py-1 font-medium rounded-md transition-all ${
                    activeAdminTab === 'checkout'
                      ? 'bg-white text-slate-900 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Checkout Form
                </button>
                <button
                  type="button"
                  onClick={() => setActiveAdminTab('fields')}
                  className={`px-3 py-1 font-medium rounded-md transition-all ${
                    activeAdminTab === 'fields'
                      ? 'bg-white text-slate-900 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Custom Fields
                </button>
                <button
                  type="button"
                  onClick={() => setActiveAdminTab('incomplete')}
                  className={`px-3 py-1 font-medium rounded-md transition-all ${
                    activeAdminTab === 'incomplete'
                      ? 'bg-white text-slate-900 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Incomplete Orders
                </button>
                <button
                  type="button"
                  onClick={() => setActiveAdminTab('fraud')}
                  className={`px-3 py-1 font-medium rounded-md transition-all ${
                    activeAdminTab === 'fraud'
                      ? 'bg-white text-slate-900 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Fraud Protection
                </button>
              </div>
            </div>

            {/* Mockup Workspace Body */}
            <div className="p-4 sm:p-6 bg-white min-h-[340px]">
              {activeAdminTab === 'checkout' && (
                <div className="space-y-5">
                  {/* Quick Toggles Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="p-3.5 rounded-xl border border-slate-100 bg-slate-50/60 flex items-center justify-between">
                      <div>
                        <div className="text-xs font-semibold text-slate-900">Direct Express Checkout</div>
                        <div className="text-[11px] text-slate-500">Bypass multi-step cart page</div>
                      </div>
                      <button
                        type="button"
                        onClick={() => setDemoSkipCart(!demoSkipCart)}
                        className={`w-10 h-6 flex items-center rounded-full p-1 cursor-pointer transition-colors ${
                          demoSkipCart ? 'bg-blue-600' : 'bg-slate-300'
                        }`}
                        aria-label="Toggle direct express checkout"
                      >
                        <div
                          className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform ${
                            demoSkipCart ? 'translate-x-4' : 'translate-x-0'
                          }`}
                        />
                      </button>
                    </div>

                    <div className="p-3.5 rounded-xl border border-slate-100 bg-slate-50/60 flex items-center justify-between">
                      <div>
                        <div className="text-xs font-semibold text-slate-900">Lead Capture</div>
                        <div className="text-[11px] text-slate-500">Log phone numbers in real time</div>
                      </div>
                      <button
                        type="button"
                        onClick={() => setDemoCaptureLeads(!demoCaptureLeads)}
                        className={`w-10 h-6 flex items-center rounded-full p-1 cursor-pointer transition-colors ${
                          demoCaptureLeads ? 'bg-blue-600' : 'bg-slate-300'
                        }`}
                        aria-label="Toggle lead capture"
                      >
                        <div
                          className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform ${
                            demoCaptureLeads ? 'translate-x-4' : 'translate-x-0'
                          }`}
                        />
                      </button>
                    </div>

                    <div className="p-3.5 rounded-xl border border-slate-100 bg-slate-50/60 flex items-center justify-between">
                      <div>
                        <div className="text-xs font-semibold text-slate-900">COD Shipping Tier</div>
                        <div className="text-[11px] text-slate-500">Inside / Outside city rates</div>
                      </div>
                      <button
                        type="button"
                        onClick={() => setDemoCodInsideCity(!demoCodInsideCity)}
                        className={`w-10 h-6 flex items-center rounded-full p-1 cursor-pointer transition-colors ${
                          demoCodInsideCity ? 'bg-blue-600' : 'bg-slate-300'
                        }`}
                        aria-label="Toggle COD rates"
                      >
                        <div
                          className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform ${
                            demoCodInsideCity ? 'translate-x-4' : 'translate-x-0'
                          }`}
                        />
                      </button>
                    </div>
                  </div>

                  {/* Active Layout Preview Bar */}
                  <div className="border border-slate-200 rounded-xl p-4 bg-slate-50/30">
                    <div className="flex items-center justify-between mb-3 text-xs">
                      <span className="font-bold text-slate-800">1-Page Checkout Field Sequence</span>
                      <span className="text-slate-500 text-[11px]">Drag handles enabled · Live preview</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      <div className="p-2.5 bg-white rounded-lg border border-slate-200 flex items-center justify-between text-xs shadow-xs">
                        <div className="flex items-center gap-2">
                          <GripVertical className="w-3.5 h-3.5 text-slate-400" />
                          <span className="font-medium text-slate-800">Customer Full Name</span>
                        </div>
                        <span className="text-[10px] text-blue-700 font-semibold bg-blue-50 px-2 py-0.5 rounded">
                          Required
                        </span>
                      </div>

                      <div className="p-2.5 bg-white rounded-lg border border-slate-200 flex items-center justify-between text-xs shadow-xs">
                        <div className="flex items-center gap-2">
                          <GripVertical className="w-3.5 h-3.5 text-slate-400" />
                          <span className="font-medium text-slate-800">Mobile Phone Number</span>
                        </div>
                        <span className="text-[10px] text-blue-700 font-semibold bg-blue-50 px-2 py-0.5 rounded">
                          Required · Lead Log
                        </span>
                      </div>

                      <div className="p-2.5 bg-white rounded-lg border border-slate-200 flex items-center justify-between text-xs shadow-xs">
                        <div className="flex items-center gap-2">
                          <GripVertical className="w-3.5 h-3.5 text-slate-400" />
                          <span className="font-medium text-slate-800">Delivery Address</span>
                        </div>
                        <span className="text-[10px] text-blue-700 font-semibold bg-blue-50 px-2 py-0.5 rounded">
                          Required
                        </span>
                      </div>

                      <div className="p-2.5 bg-white rounded-lg border border-slate-200 flex items-center justify-between text-xs shadow-xs">
                        <div className="flex items-center gap-2">
                          <GripVertical className="w-3.5 h-3.5 text-slate-400" />
                          <span className="font-medium text-slate-800">Payment Option (COD / bKash)</span>
                        </div>
                        <span className="text-[10px] text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded">
                          Active Gateway
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeAdminTab === 'fields' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs pb-2 border-b border-slate-100">
                    <div>
                      <div className="font-bold text-slate-800">Checkout Field Manager</div>
                      <div className="text-[11px] text-slate-500">Show, hide, or rename standard WooCommerce billing fields</div>
                    </div>
                    <button className="px-2.5 py-1 text-xs font-semibold bg-slate-900 text-white rounded-md">
                      + Add Custom Field
                    </button>
                  </div>
                  <div className="space-y-2 text-xs">
                    {[
                      { field: 'billing_first_name', label: 'Full Name', type: 'text', req: true, show: true },
                      { field: 'billing_phone', label: 'Mobile Number', type: 'tel', req: true, show: true },
                      { field: 'billing_address_1', label: 'Full Delivery Address', type: 'text', req: true, show: true },
                      { field: 'billing_city', label: 'City / District', type: 'select', req: true, show: true },
                      { field: 'billing_company', label: 'Company Name', type: 'text', req: false, show: false },
                      { field: 'order_comments', label: 'Delivery Instructions', type: 'textarea', req: false, show: true },
                    ].map((item) => (
                      <div
                        key={item.field}
                        className={`flex items-center justify-between p-2.5 rounded-lg border ${
                          item.show ? 'bg-white border-slate-200' : 'bg-slate-50/70 border-dashed border-slate-200 opacity-60'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <GripVertical className="w-3.5 h-3.5 text-slate-400" />
                          <span className="font-medium text-slate-800">{item.label}</span>
                          <span className="text-[10px] text-slate-400 font-mono">({item.field})</span>
                        </div>
                        <div className="flex items-center gap-2 text-[11px]">
                          <span className={item.req ? 'text-blue-600 font-medium' : 'text-slate-400'}>
                            {item.req ? 'Required' : 'Optional'}
                          </span>
                          <span className="text-slate-300">|</span>
                          <span className={item.show ? 'text-emerald-600 font-semibold' : 'text-slate-400'}>
                            {item.show ? 'Enabled' : 'Hidden'}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeAdminTab === 'incomplete' && (
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs pb-2 border-b border-slate-100">
                    <div>
                      <div className="font-bold text-slate-800">Real-Time Incomplete Orders Log</div>
                      <div className="text-[11px] text-slate-500">Captures buyer contact details when visitors type into checkout</div>
                    </div>
                    <span className="text-[11px] text-blue-600 font-semibold bg-blue-50 px-2 py-0.5 rounded">
                      Autosync Active
                    </span>
                  </div>
                  <div className="overflow-x-auto text-xs">
                    <table className="w-full text-left">
                      <thead>
                        <tr className="text-slate-400 border-b border-slate-100 pb-1 text-[11px]">
                          <th className="pb-2 font-medium">Customer</th>
                          <th className="pb-2 font-medium">Phone</th>
                          <th className="pb-2 font-medium">Items in Cart</th>
                          <th className="pb-2 font-medium">Status</th>
                          <th className="pb-2 font-medium text-right">Action</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        <tr>
                          <td className="py-2.5 font-medium text-slate-900">Arif Rahman</td>
                          <td className="py-2.5 text-slate-600 font-mono text-[11px]">01712-XXXXXX</td>
                          <td className="py-2.5 text-slate-600">Smart Watch Pro (x1)</td>
                          <td className="py-2.5">
                            <span className="text-amber-700 bg-amber-50 px-2 py-0.5 rounded text-[10px] font-medium">
                              Incomplete
                            </span>
                          </td>
                          <td className="py-2.5 text-right">
                            <span className="text-blue-600 font-medium hover:underline cursor-pointer">
                              Follow Up
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td className="py-2.5 font-medium text-slate-900">Sadia Islam</td>
                          <td className="py-2.5 text-slate-600 font-mono text-[11px]">01844-XXXXXX</td>
                          <td className="py-2.5 text-slate-600">Winter Jacket bundle (x2)</td>
                          <td className="py-2.5">
                            <span className="text-amber-700 bg-amber-50 px-2 py-0.5 rounded text-[10px] font-medium">
                              Incomplete
                            </span>
                          </td>
                          <td className="py-2.5 text-right">
                            <span className="text-blue-600 font-medium hover:underline cursor-pointer">
                              Follow Up
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {activeAdminTab === 'fraud' && (
                <div className="space-y-4">
                  <div className="text-xs pb-2 border-b border-slate-100">
                    <div className="font-bold text-slate-800">Fraud Prevention & Rate Rules</div>
                    <div className="text-[11px] text-slate-500">Prevent fake Cash on Delivery orders and repetitive spam submissions</div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                      <div className="font-semibold text-slate-900 mb-1 flex items-center gap-1.5">
                        <ShieldCheck className="w-4 h-4 text-emerald-600" />
                        <span>IP Rate Limiting</span>
                      </div>
                      <p className="text-[11px] text-slate-500 mb-2">Block duplicate orders from the same IP address within a short window.</p>
                      <span className="text-[10px] bg-white border border-slate-200 px-2 py-0.5 rounded font-mono">
                        Max 2 orders / 60 minutes
                      </span>
                    </div>

                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                      <div className="font-semibold text-slate-900 mb-1 flex items-center gap-1.5">
                        <PhoneCall className="w-4 h-4 text-blue-600" />
                        <span>Phone Format Validation</span>
                      </div>
                      <p className="text-[11px] text-slate-500 mb-2">Enforce real 11-digit mobile prefixes before allowing COD checkout.</p>
                      <span className="text-[10px] bg-white border border-slate-200 px-2 py-0.5 rounded font-mono">
                        Operator Prefix Checked
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Admin Footer Bar */}
            <div className="bg-slate-50 px-4 py-2.5 border-t border-slate-200 flex items-center justify-between text-[11px] text-slate-500">
              <span>EasyFunnel for WooCommerce · Ready for Elementor</span>
              <button
                onClick={onOpenLiveDemo}
                className="text-blue-600 font-semibold hover:underline inline-flex items-center gap-1"
              >
                <span>Launch Interactive Demo Modal</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>

          {/* Surrounding Floating UI Cards illustrating specific features */}
          {/* 1. Simplified Checkout Form Card (Top Right / Asymmetric) */}
          <div className="hidden lg:block absolute -top-8 -right-8 w-72 bg-white rounded-xl border border-slate-200 shadow-xl p-3.5 z-20 animate-in fade-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600">
                1-Page Checkout
              </span>
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            </div>
            <div className="space-y-1.5 text-xs">
              <div className="h-6 bg-slate-100 rounded px-2 flex items-center text-[11px] text-slate-700 font-medium">
                Tanvir Ahmed
              </div>
              <div className="h-6 bg-slate-100 rounded px-2 flex items-center text-[11px] text-slate-700 font-mono">
                01712-345678
              </div>
              <div className="flex items-center justify-between text-[11px] pt-1">
                <span className="text-slate-500">Delivery:</span>
                <span className="font-semibold text-slate-800">Inside Dhaka (৳60)</span>
              </div>
              <div className="w-full py-1.5 bg-slate-900 text-white text-[11px] font-semibold rounded text-center">
                Confirm Order (৳1,260)
              </div>
            </div>
          </div>

          {/* 2. Sales Funnel Overview Card (Bottom Left) */}
          <div className="hidden lg:block absolute -bottom-7 -left-7 w-72 bg-white rounded-xl border border-slate-200 shadow-xl p-3.5 z-20">
            <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2">
              Sales Funnel Pipeline
            </div>
            <div className="space-y-1.5 text-xs">
              <div className="flex items-center justify-between p-1.5 bg-slate-50 rounded border border-slate-100">
                <span className="font-medium text-slate-800 text-[11px]">1. Product Landing</span>
                <Check className="w-3 h-3 text-emerald-600" />
              </div>
              <div className="flex items-center justify-between p-1.5 bg-blue-50/80 rounded border border-blue-200">
                <span className="font-semibold text-blue-900 text-[11px]">2. 1-Page Express Checkout</span>
                <span className="text-[10px] text-blue-600 font-bold">ACTIVE</span>
              </div>
              <div className="flex items-center justify-between p-1.5 bg-slate-50 rounded border border-slate-100">
                <span className="font-medium text-slate-700 text-[11px]">3. 1-Click Order Bump (+$10)</span>
                <Sparkles className="w-3 h-3 text-amber-500" />
              </div>
            </div>
          </div>

          {/* 3. Incomplete Order Alert Card (Bottom Right) */}
          <div className="hidden lg:flex absolute -bottom-6 -right-6 w-64 bg-white rounded-xl border border-slate-200 shadow-xl p-3 z-20 items-center gap-2.5">
            <div className="p-2 bg-amber-50 text-amber-700 rounded-lg shrink-0">
              <PhoneCall className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <div className="text-[11px] font-bold text-slate-900 leading-tight">
                Incomplete Order Captured
              </div>
              <div className="text-[10px] text-slate-500 truncate">
                Customer entered phone · ready for call
              </div>
            </div>
          </div>

          {/* 4. Conversion Tracking Status (Top Left) */}
          <div className="hidden lg:flex absolute -top-6 -left-6 bg-white rounded-xl border border-slate-200 shadow-xl px-3 py-2 z-20 items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
            <span className="text-[11px] font-semibold text-slate-800">Meta Pixel Events:</span>
            <span className="text-[11px] font-mono text-emerald-600 font-medium">Synced</span>
          </div>
        </div>
      </div>
    </section>
  );
};
