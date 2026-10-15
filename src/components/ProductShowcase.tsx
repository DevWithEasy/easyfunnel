import React, { useState } from 'react';
import {
  Zap,
  GitFork,
  Layers,
  PhoneCall,
  ShieldCheck,
  Check,
  ArrowRight,
  Sparkles,
  ShoppingBag,
  CreditCard,
  Truck,
  RotateCw,
  Sliders,
  Phone,
  Search,
  ExternalLink
} from 'lucide-react';

interface ProductShowcaseProps {
  onOpenLiveDemo: () => void;
  onOpenPricing: () => void;
}

export const ProductShowcase: React.FC<ProductShowcaseProps> = ({
  onOpenLiveDemo,
  onOpenPricing,
}) => {
  const [activeTab, setActiveTab] = useState<
    'checkout' | 'funnels' | 'widgets' | 'orders' | 'tracking'
  >('checkout');

  // Interactive states for Express Checkout showcase
  const [checkoutName, setCheckoutName] = useState('Kamal Hossain');
  const [checkoutPhone, setCheckoutPhone] = useState('01712-345678');
  const [shippingZone, setShippingZone] = useState<'inside' | 'outside'>('inside');
  const [paymentMethod, setPaymentMethod] = useState<'cod' | 'bkash'>('cod');
  const [includeBump, setIncludeBump] = useState(false);

  // Interactive states for Product Widgets showcase
  const [selectedBundleTier, setSelectedBundleTier] = useState<1 | 2 | 3>(2);
  const [selectedSize, setSelectedSize] = useState<'M' | 'L' | 'XL'>('L');

  // Interactive states for Tracking tab
  const [pixelInitiate, setPixelInitiate] = useState(true);
  const [pixelPurchase, setPixelPurchase] = useState(true);
  const [fraudRateLimit, setFraudRateLimit] = useState(true);
  const [phoneValidation, setPhoneValidation] = useState(true);

  // Totals calculation
  const basePrice = selectedBundleTier === 1 ? 1200 : selectedBundleTier === 2 ? 2200 : 3100;
  const shippingFee = shippingZone === 'inside' ? 60 : 120;
  const bumpPrice = includeBump ? 250 : 0;
  const totalAmount = basePrice + shippingFee + bumpPrice;

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 mb-3 text-xs font-bold tracking-wider text-blue-600 uppercase">
            <span>Interactive Product Tour</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight mb-4 text-balance">
            See How EasyFunnel Transforms Your WooCommerce Workflow.
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            Click through the core modules below to explore real interface layouts, configuration settings, and checkout behaviors.
          </p>
        </div>

        {/* Tab Navigation Controls */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-2 mb-8 gap-2 no-scrollbar">
          <div className="p-1.5 bg-slate-100 rounded-xl flex gap-1 shrink-0">
            {[
              { id: 'checkout', label: 'Express Checkout', icon: Zap },
              { id: 'funnels', label: 'Sales Funnels', icon: GitFork },
              { id: 'widgets', label: 'Product Widgets', icon: Layers },
              { id: 'orders', label: 'Order Management', icon: PhoneCall },
              { id: 'tracking', label: 'Tracking & Protection', icon: ShieldCheck },
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex items-center gap-2 px-4 py-2.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap focus:outline-hidden focus-visible:ring-2 focus-visible:ring-blue-600 ${
                    isActive
                      ? 'bg-white text-slate-900 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <Icon
                    className={`w-4 h-4 ${
                      isActive ? 'text-blue-600' : 'text-slate-400'
                    }`}
                  />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab Content Canvas */}
        <div className="rounded-2xl border border-slate-200/90 bg-slate-50/40 p-5 sm:p-8 lg:p-10 shadow-sm">
          {/* TAB 1: EXPRESS CHECKOUT */}
          {activeTab === 'checkout' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Explainer Column */}
              <div className="lg:col-span-5 space-y-5">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                    Module 01
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1 mb-2">
                    1-Page Express Checkout
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Combine your product summary, shipping selection, customer information, and payment options into a single conversion-focused container.
                  </p>
                </div>

                <div className="space-y-3 text-xs text-slate-700">
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>
                      <strong>Skip standard cart page:</strong> Direct link to buy now with no reload delays.
                    </span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>
                      <strong>Dynamic shipping calculation:</strong> Automatically adds inside city (৳60) or outside city (৳120) rates.
                    </span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>
                      <strong>1-Click Order Bumps:</strong> Present relevant accessories right above the place order button.
                    </span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>
                      <strong>Native COD & bKash workflows:</strong> Perfect for high-demand local eCommerce stores.
                    </span>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={onOpenLiveDemo}
                    className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg shadow-xs"
                  >
                    <span>Launch Full Checkout Sandbox</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Right Interactive Mockup Column */}
              <div className="lg:col-span-7 bg-white rounded-xl border border-slate-200 p-5 sm:p-6 shadow-sm">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-4">
                  <span className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                    <Zap className="w-4 h-4 text-blue-600" />
                    Live 1-Page Checkout Preview
                  </span>
                  <span className="text-[11px] text-emerald-600 font-medium bg-emerald-50 px-2 py-0.5 rounded">
                    AJAX Cart Synced
                  </span>
                </div>

                <div className="space-y-4">
                  {/* Order Summary Line */}
                  <div className="p-3 bg-slate-50 rounded-lg border border-slate-100 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded bg-slate-200 flex items-center justify-center font-bold text-slate-600 text-xs">
                        P
                      </div>
                      <div>
                        <div className="font-semibold text-slate-900">Premium Leather Backpack</div>
                        <div className="text-[11px] text-slate-500">Selected Size: {selectedSize}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-slate-900">৳{basePrice}</div>
                      <div className="text-[10px] text-slate-400">Qty: 1</div>
                    </div>
                  </div>

                  {/* Customer Information Form */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={checkoutName}
                        onChange={(e) => setCheckoutName(e.target.value)}
                        className="w-full text-xs px-3 py-2 border border-slate-200 rounded-lg focus:outline-hidden focus:border-blue-600"
                        placeholder="Your Name"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                        Mobile Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        value={checkoutPhone}
                        onChange={(e) => setCheckoutPhone(e.target.value)}
                        className="w-full text-xs px-3 py-2 border border-slate-200 rounded-lg font-mono focus:outline-hidden focus:border-blue-600"
                        placeholder="01712XXXXXX"
                      />
                    </div>
                  </div>

                  {/* Shipping Zone Selector */}
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                      Delivery Location (COD Rate)
                    </label>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <button
                        type="button"
                        onClick={() => setShippingZone('inside')}
                        className={`p-2.5 rounded-lg border text-left transition-all ${
                          shippingZone === 'inside'
                            ? 'border-blue-600 bg-blue-50/50 text-blue-900 font-semibold'
                            : 'border-slate-200 text-slate-700 hover:bg-slate-50'
                        }`}
                      >
                        <div className="text-xs">Inside Dhaka</div>
                        <div className="text-[11px] text-slate-500">৳60 Delivery</div>
                      </button>

                      <button
                        type="button"
                        onClick={() => setShippingZone('outside')}
                        className={`p-2.5 rounded-lg border text-left transition-all ${
                          shippingZone === 'outside'
                            ? 'border-blue-600 bg-blue-50/50 text-blue-900 font-semibold'
                            : 'border-slate-200 text-slate-700 hover:bg-slate-50'
                        }`}
                      >
                        <div className="text-xs">Outside Dhaka</div>
                        <div className="text-[11px] text-slate-500">৳120 Courier Delivery</div>
                      </button>
                    </div>
                  </div>

                  {/* Payment Method Selector */}
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                      Select Payment Method
                    </label>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <button
                        type="button"
                        onClick={() => setPaymentMethod('cod')}
                        className={`p-2.5 rounded-lg border flex items-center gap-2 transition-all ${
                          paymentMethod === 'cod'
                            ? 'border-emerald-600 bg-emerald-50/40 text-emerald-900 font-semibold'
                            : 'border-slate-200 text-slate-700 hover:bg-slate-50'
                        }`}
                      >
                        <Truck className="w-4 h-4 text-emerald-600" />
                        <span>Cash on Delivery (COD)</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setPaymentMethod('bkash')}
                        className={`p-2.5 rounded-lg border flex items-center gap-2 transition-all ${
                          paymentMethod === 'bkash'
                            ? 'border-pink-600 bg-pink-50/40 text-pink-900 font-semibold'
                            : 'border-slate-200 text-slate-700 hover:bg-slate-50'
                        }`}
                      >
                        <div className="w-4 h-4 rounded-full bg-pink-600 text-white font-bold text-[9px] flex items-center justify-center">
                          b
                        </div>
                        <span>bKash / Nagad</span>
                      </button>
                    </div>
                  </div>

                  {/* 1-Click Order Bump Offer Box */}
                  <div
                    onClick={() => setIncludeBump(!includeBump)}
                    className={`p-3 rounded-lg border cursor-pointer transition-all ${
                      includeBump
                        ? 'border-amber-400 bg-amber-50/50 shadow-xs'
                        : 'border-dashed border-slate-300 bg-slate-50 hover:bg-slate-100/60'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        checked={includeBump}
                        onChange={() => {}}
                        className="rounded text-blue-600 focus:ring-blue-500 w-4 h-4 cursor-pointer"
                      />
                      <div className="min-w-0">
                        <div className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                          <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                          <span>Special Offer: Add Waterproof Rain Cover for only ৳250</span>
                        </div>
                        <p className="text-[11px] text-slate-500">
                          One-time offer. Click to add to your order.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Total and Submit Button */}
                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <span className="text-xs text-slate-500">Total Payable:</span>
                      <div className="text-lg font-extrabold text-slate-900">
                        ৳{totalAmount}
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => alert(`Demo Order Submitted for ${checkoutName} (৳${totalAmount}) via ${paymentMethod.toUpperCase()}!`)}
                      className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-lg shadow-sm transition-all"
                    >
                      Complete Order Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: SALES FUNNELS */}
          {activeTab === 'funnels' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-5 space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                  Module 02
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                  Sales Funnel Management
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Design sequential sales funnels with custom checkout landing pages, targeted order bumps, and custom thank you pages without touching any PHP code.
                </p>

                <div className="space-y-3 text-xs text-slate-700 pt-1">
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>
                      <strong>Custom Checkout URLs:</strong> Build unique checkout pages for Facebook ads and influencer campaigns.
                    </span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>
                      <strong>Order Bump Integration:</strong> Trigger contextual cross-sells directly in the checkout flow.
                    </span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>
                      <strong>Custom Thank You Pages:</strong> Display order status, COD instructions, and delivery expectations.
                    </span>
                  </div>
                </div>
              </div>

              {/* Visual Funnel Steps Architecture */}
              <div className="lg:col-span-7 bg-white rounded-xl border border-slate-200 p-5 sm:p-6 shadow-sm">
                <div className="text-xs font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100 flex items-center justify-between">
                  <span>Visual Funnel Pipeline Architecture</span>
                  <span className="text-[11px] text-blue-600 font-medium">Auto-route enabled</span>
                </div>

                <div className="space-y-3">
                  {/* Step 1 */}
                  <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-7 h-7 rounded-md bg-blue-100 text-blue-700 font-bold text-xs flex items-center justify-center">
                        1
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-900">Product Landing Page</div>
                        <div className="text-[11px] text-slate-500">Elementor template with Action Button widget</div>
                      </div>
                    </div>
                    <span className="text-[10px] bg-white border border-slate-200 px-2 py-0.5 rounded font-mono text-slate-600">
                      /special-offer
                    </span>
                  </div>

                  {/* Flow Arrow */}
                  <div className="flex justify-center -my-1 text-slate-300">
                    <div className="w-0.5 h-4 bg-slate-200"></div>
                  </div>

                  {/* Step 2 */}
                  <div className="p-3 bg-blue-50/70 rounded-lg border border-blue-200 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-7 h-7 rounded-md bg-blue-600 text-white font-bold text-xs flex items-center justify-center">
                        2
                      </div>
                      <div>
                        <div className="text-xs font-bold text-blue-950">1-Page Express Checkout</div>
                        <div className="text-[11px] text-blue-700">Custom fields, instant COD shipping & Order Bump</div>
                      </div>
                    </div>
                    <span className="text-[10px] bg-white border border-blue-200 px-2 py-0.5 rounded font-mono text-blue-700 font-bold">
                      HIGH CONVERSION
                    </span>
                  </div>

                  {/* Flow Arrow */}
                  <div className="flex justify-center -my-1 text-slate-300">
                    <div className="w-0.5 h-4 bg-slate-200"></div>
                  </div>

                  {/* Step 3 */}
                  <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-7 h-7 rounded-md bg-emerald-100 text-emerald-700 font-bold text-xs flex items-center justify-center">
                        3
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-900">EC - Thank You Page</div>
                        <div className="text-[11px] text-slate-500">Invoice summary, COD verification note & WhatsApp help</div>
                      </div>
                    </div>
                    <span className="text-[10px] bg-white border border-slate-200 px-2 py-0.5 rounded font-mono text-slate-600">
                      /order-confirmed
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: PRODUCT WIDGETS */}
          {activeTab === 'widgets' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-5 space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                  Module 03
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                  Multiple Product Selection Modes
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Offer single items, multi-pack bundles, and variation selectors right on the checkout page so buyers never have to navigate away to change options.
                </p>

                <div className="space-y-2.5 text-xs text-slate-700 pt-1">
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>
                      <strong>Tiered Bundle Cards:</strong> Encourage multi-unit purchases with highlighted volume savings.
                    </span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>
                      <strong>Inline Variations:</strong> Size, color, and option swatches update cart state via AJAX.
                    </span>
                  </div>
                </div>
              </div>

              {/* Interactive Widget Selector Simulator */}
              <div className="lg:col-span-7 bg-white rounded-xl border border-slate-200 p-5 sm:p-6 shadow-sm">
                <div className="text-xs font-bold text-slate-900 mb-3 pb-2 border-b border-slate-100">
                  Product Selection Widget Preview (Tiered Bundles)
                </div>

                <div className="space-y-2.5">
                  {[
                    { tier: 1, label: 'Buy 1 Item', price: '৳1,200', note: 'Standard Single Pack' },
                    { tier: 2, label: 'Buy 2 Items (Most Popular)', price: '৳2,200', note: 'Save ৳200 · Free Shipping Included', popular: true },
                    { tier: 3, label: 'Buy 3 Items (Best Value)', price: '৳3,100', note: 'Save ৳500 · VIP Express Courier' },
                  ].map((item) => (
                    <div
                      key={item.tier}
                      onClick={() => setSelectedBundleTier(item.tier as any)}
                      className={`p-3 rounded-xl border cursor-pointer transition-all flex items-center justify-between ${
                        selectedBundleTier === item.tier
                          ? 'border-blue-600 bg-blue-50/50 shadow-xs'
                          : 'border-slate-200 hover:bg-slate-50'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <input
                          type="radio"
                          name="bundleTier"
                          checked={selectedBundleTier === item.tier}
                          onChange={() => {}}
                          className="w-4 h-4 text-blue-600 focus:ring-blue-500 cursor-pointer"
                        />
                        <div>
                          <div className="text-xs font-bold text-slate-900 flex items-center gap-2">
                            <span>{item.label}</span>
                            {item.popular && (
                              <span className="text-[10px] bg-blue-600 text-white font-semibold px-2 py-0.5 rounded">
                                Recommended
                              </span>
                            )}
                          </div>
                          <div className="text-[11px] text-slate-500">{item.note}</div>
                        </div>
                      </div>
                      <div className="text-sm font-extrabold text-slate-900">
                        {item.price}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Inline Variation Swatches */}
                <div className="mt-4 pt-3 border-t border-slate-100">
                  <div className="text-[11px] font-semibold text-slate-700 mb-2">
                    Select Size Variation:
                  </div>
                  <div className="flex gap-2 text-xs">
                    {(['M', 'L', 'XL'] as const).map((size) => (
                      <button
                        key={size}
                        type="button"
                        onClick={() => setSelectedSize(size)}
                        className={`px-3 py-1.5 rounded-lg border font-medium transition-all ${
                          selectedSize === size
                            ? 'bg-slate-900 text-white border-slate-900'
                            : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                        }`}
                      >
                        Size {size}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: ORDER MANAGEMENT */}
          {activeTab === 'orders' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-5 space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                  Module 04
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                  Incomplete Order Tracking
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Capture lost sales by logging customer names and phone numbers the moment they enter them into the checkout form—even if they abandon before placing the order.
                </p>

                <div className="space-y-2.5 text-xs text-slate-700 pt-1">
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>
                      <strong>Instant Lead Capture:</strong> Real-time AJAX persistence captures phone numbers as keystrokes happen.
                    </span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>
                      <strong>Direct Phone & WhatsApp Follow-Up:</strong> Contact hesitant buyers while interest is highest.
                    </span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>
                      <strong>HPOS Synchronized:</strong> Seamlessly logs into WooCommerce order tables without data loss.
                    </span>
                  </div>
                </div>
              </div>

              {/* Order Log Table */}
              <div className="lg:col-span-7 bg-white rounded-xl border border-slate-200 p-5 sm:p-6 shadow-sm">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-3">
                  <span className="text-xs font-bold text-slate-900">
                    Recoverable Incomplete Orders
                  </span>
                  <div className="flex items-center gap-1.5 text-[11px] text-slate-500">
                    <Search className="w-3.5 h-3.5" />
                    <span>Filter: Uncontacted Leads</span>
                  </div>
                </div>

                <div className="space-y-2.5 text-xs">
                  {[
                    { name: 'Naimur Rahman', phone: '01819-445566', cart: 'Leather Backpack (x1)', time: '8 mins ago', total: '৳1,260' },
                    { name: 'Fatima Zohra', phone: '01711-998877', cart: 'Wireless Earbuds Bundle (x2)', time: '24 mins ago', total: '৳2,450' },
                    { name: 'Mahmudul Hasan', phone: '01923-112233', cart: 'Oxford Shoes - Black (x1)', time: '1 hour ago', total: '৳1,890' },
                  ].map((lead, i) => (
                    <div
                      key={i}
                      className="p-3 bg-slate-50/70 rounded-lg border border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                    >
                      <div>
                        <div className="font-semibold text-slate-900 flex items-center gap-2">
                          <span>{lead.name}</span>
                          <span className="font-mono text-blue-600 text-[11px]">{lead.phone}</span>
                        </div>
                        <div className="text-[11px] text-slate-500">
                          {lead.cart} · {lead.time}
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-slate-800 text-xs">{lead.total}</span>
                        <button
                          type="button"
                          onClick={() => alert(`Calling or sending WhatsApp recovery message to ${lead.phone}`)}
                          className="px-2.5 py-1 bg-emerald-600 hover:bg-emerald-700 text-white rounded text-[11px] font-semibold flex items-center gap-1"
                        >
                          <Phone className="w-3 h-3" />
                          <span>Recover</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 5: TRACKING & PROTECTION */}
          {activeTab === 'tracking' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-5 space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                  Module 05
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                  Tracking & Fraud Protection
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Protect your store from fake Cash on Delivery orders while feeding accurate conversion event data to your Facebook / Meta Pixel.
                </p>

                <div className="space-y-2.5 text-xs text-slate-700 pt-1">
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>
                      <strong>Standard Event Sync:</strong> PageView, AddToCart, InitiateCheckout, and Purchase events.
                    </span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>
                      <strong>IP Rate Limits:</strong> Prevent bots from submitting hundreds of bogus COD deliveries.
                    </span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>
                      <strong>Operator Prefix Check:</strong> Validates real mobile formats before order placement.
                    </span>
                  </div>
                </div>
              </div>

              {/* Settings Preview */}
              <div className="lg:col-span-7 bg-white rounded-xl border border-slate-200 p-5 sm:p-6 shadow-sm">
                <div className="text-xs font-bold text-slate-900 mb-3 pb-2 border-b border-slate-100">
                  Tracking & Security Control Matrix
                </div>

                <div className="space-y-3 text-xs">
                  {/* Pixel Settings */}
                  <div className="p-3 bg-slate-50 rounded-lg border border-slate-100 flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-slate-900">Facebook Pixel: InitiateCheckout Event</div>
                      <div className="text-[11px] text-slate-500">Triggers as soon as customer opens express checkout</div>
                    </div>
                    <button
                      type="button"
                      onClick={() => setPixelInitiate(!pixelInitiate)}
                      className={`w-10 h-6 flex items-center rounded-full p-1 cursor-pointer transition-colors ${
                        pixelInitiate ? 'bg-blue-600' : 'bg-slate-300'
                      }`}
                      aria-label="Toggle initiate checkout event"
                    >
                      <div
                        className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform ${
                          pixelInitiate ? 'translate-x-4' : 'translate-x-0'
                        }`}
                      />
                    </button>
                  </div>

                  <div className="p-3 bg-slate-50 rounded-lg border border-slate-100 flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-slate-900">Facebook Pixel: Purchase Event with Actual Value</div>
                      <div className="text-[11px] text-slate-500">Fires accurately on order receipt with real product total</div>
                    </div>
                    <button
                      type="button"
                      onClick={() => setPixelPurchase(!pixelPurchase)}
                      className={`w-10 h-6 flex items-center rounded-full p-1 cursor-pointer transition-colors ${
                        pixelPurchase ? 'bg-blue-600' : 'bg-slate-300'
                      }`}
                      aria-label="Toggle purchase event"
                    >
                      <div
                        className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform ${
                          pixelPurchase ? 'translate-x-4' : 'translate-x-0'
                        }`}
                      />
                    </button>
                  </div>

                  {/* Fraud Rules */}
                  <div className="p-3 bg-slate-50 rounded-lg border border-slate-100 flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-slate-900">IP Velocity Limit (Max 2 COD / Hour)</div>
                      <div className="text-[11px] text-slate-500">Temporarily throttles repeat submissions from single IP</div>
                    </div>
                    <button
                      type="button"
                      onClick={() => setFraudRateLimit(!fraudRateLimit)}
                      className={`w-10 h-6 flex items-center rounded-full p-1 cursor-pointer transition-colors ${
                        fraudRateLimit ? 'bg-blue-600' : 'bg-slate-300'
                      }`}
                      aria-label="Toggle IP rate limiting"
                    >
                      <div
                        className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform ${
                          fraudRateLimit ? 'translate-x-4' : 'translate-x-0'
                        }`}
                      />
                    </button>
                  </div>

                  <div className="p-3 bg-slate-50 rounded-lg border border-slate-100 flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-slate-900">Enforce Valid 11-Digit Mobile Number</div>
                      <div className="text-[11px] text-slate-500">Blocks fake 123456 or incomplete phone submissions</div>
                    </div>
                    <button
                      type="button"
                      onClick={() => setPhoneValidation(!phoneValidation)}
                      className={`w-10 h-6 flex items-center rounded-full p-1 cursor-pointer transition-colors ${
                        phoneValidation ? 'bg-blue-600' : 'bg-slate-300'
                      }`}
                      aria-label="Toggle phone validation"
                    >
                      <div
                        className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform ${
                          phoneValidation ? 'translate-x-4' : 'translate-x-0'
                        }`}
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
