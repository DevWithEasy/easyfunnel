import React, { useState } from 'react';
import {
  CreditCard,
  Zap,
  MousePointerClick,
  LayoutGrid,
  Package,
  ShoppingBag,
  Tags,
  Sparkles,
  SlidersHorizontal,
  Bell,
  Clock,
  RotateCw,
  CheckCircle2,
  Images,
  Ruler,
  Headphones,
  Receipt,
  ShieldCheck,
  Search,
  Check,
  X
} from 'lucide-react';
import { ELEMENTOR_WIDGETS, WidgetItem } from '../data/easyfunnelData';

export const ElementorWidgets: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeWidgetModal, setActiveWidgetModal] = useState<WidgetItem | null>(null);

  const getWidgetIcon = (iconName: string) => {
    const iconClass = "w-5 h-5 text-blue-600";
    switch (iconName) {
      case 'CreditCard': return <CreditCard className={iconClass} />;
      case 'Zap': return <Zap className={iconClass} />;
      case 'MousePointerClick': return <MousePointerClick className={iconClass} />;
      case 'LayoutGrid': return <LayoutGrid className={iconClass} />;
      case 'Package': return <Package className={iconClass} />;
      case 'ShoppingBag': return <ShoppingBag className={iconClass} />;
      case 'Tags': return <Tags className={iconClass} />;
      case 'Sparkles': return <Sparkles className={iconClass} />;
      case 'SlidersHorizontal': return <SlidersHorizontal className={iconClass} />;
      case 'Bell': return <Bell className={iconClass} />;
      case 'Clock': return <Clock className={iconClass} />;
      case 'RotateCw': return <RotateCw className={iconClass} />;
      case 'CheckCircle2': return <CheckCircle2 className={iconClass} />;
      case 'Images': return <Images className={iconClass} />;
      case 'Ruler': return <Ruler className={iconClass} />;
      case 'Headphones': return <Headphones className={iconClass} />;
      case 'Receipt': return <Receipt className={iconClass} />;
      case 'ShieldCheck': return <ShieldCheck className={iconClass} />;
      default: return <Package className={iconClass} />;
    }
  };

  const filteredWidgets = ELEMENTOR_WIDGETS.filter((widget) => {
    const matchesCategory =
      selectedCategory === 'all' || widget.category === selectedCategory;
    const matchesSearch =
      widget.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      widget.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="widgets" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 mb-3 text-xs font-bold tracking-wider text-blue-600 uppercase">
            <span>Elementor Add-on Suite</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight mb-4 text-balance">
            18 Powerful Widgets. More Ways to Build.
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            Every widget is designed from the ground up to drag-and-drop seamlessly into your Elementor canvas, fully styled and linked to WooCommerce checkout actions.
          </p>

          {/* Search & Category Filter Controls */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-2xl mx-auto">
            <div className="relative w-full sm:w-64">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search widgets..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full text-xs pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-hidden focus:border-blue-600"
              />
            </div>

            <div className="flex flex-wrap items-center justify-center gap-1 p-1 bg-slate-100 rounded-lg text-xs">
              {[
                { id: 'all', label: 'All (18)' },
                { id: 'checkout', label: 'Checkout' },
                { id: 'merchandising', label: 'Merchandising' },
                { id: 'urgency', label: 'Urgency & Offers' },
                { id: 'trust', label: 'Trust & Support' },
              ].map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3 py-1.5 font-medium rounded-md transition-all ${
                    selectedCategory === cat.id
                      ? 'bg-white text-slate-900 shadow-2xs font-semibold'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* 18 Widgets Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredWidgets.map((widget) => (
            <div
              key={widget.id}
              onClick={() => setActiveWidgetModal(widget)}
              className="group p-5 rounded-xl border border-slate-200 bg-white hover:border-blue-400 hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-9 h-9 rounded-lg bg-blue-50 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {getWidgetIcon(widget.elementorIcon)}
                  </div>
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                    Elementor
                  </span>
                </div>

                <h3 className="text-sm font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">
                  {widget.name}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {widget.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                <span className="capitalize">{widget.category}</span>
                <span className="text-blue-600 font-semibold group-hover:underline">
                  View Specs
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for Detailed Widget Inspection */}
        {activeWidgetModal && (
          <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-slate-200 animate-in fade-in zoom-in-95 duration-150">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center">
                    {getWidgetIcon(activeWidgetModal.elementorIcon)}
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slate-900">
                      {activeWidgetModal.name}
                    </h4>
                    <span className="text-xs text-slate-500 capitalize">
                      {activeWidgetModal.category} Widget
                    </span>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveWidgetModal(null)}
                  className="p-1 text-slate-400 hover:text-slate-700 rounded-lg"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-4 text-xs text-slate-700">
                <p className="text-sm text-slate-600 leading-relaxed">
                  {activeWidgetModal.description}
                </p>

                <div>
                  <h5 className="font-bold text-slate-900 mb-2">Key Widget Capabilities:</h5>
                  <div className="space-y-1.5">
                    {activeWidgetModal.features.map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 font-mono text-[11px] text-slate-600">
                  Elementor Registry ID: <span className="text-blue-700 font-semibold">easyfunnel_{activeWidgetModal.id.replace(/-/g, '_')}</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex justify-end">
                <button
                  type="button"
                  onClick={() => setActiveWidgetModal(null)}
                  className="px-4 py-2 bg-slate-900 text-white text-xs font-semibold rounded-lg hover:bg-slate-800"
                >
                  Close Details
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
