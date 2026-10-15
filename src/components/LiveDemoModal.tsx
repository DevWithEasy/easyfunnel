import React, { useState } from 'react';
import {
  X,
  Zap,
  ShoppingBag,
  CreditCard,
  Truck,
  Sparkles,
  CheckCircle2,
  Phone,
  RotateCcw,
  Sliders,
  Check
} from 'lucide-react';

interface LiveDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onGetPlugin: () => void;
}

export const LiveDemoModal: React.FC<LiveDemoModalProps> = ({
  isOpen,
  onClose,
  onGetPlugin,
}) => {
  const [demoMode, setDemoMode] = useState<'checkout' | 'admin'>('checkout');
  
  // Checkout simulator state
  const [customerName, setCustomerName] = useState('Sara Ahmed');
  const [customerPhone, setCustomerPhone] = useState('01712-987654');
  const [customerAddress, setCustomerAddress] = useState('House 42, Road 11, Banani, Dhaka');
  const [deliveryZone, setDeliveryZone] = useState<'inside' | 'outside'>('inside');
  const [paymentGateway, setPaymentGateway] = useState<'cod' | 'bkash' | 'nagad'>('cod');
  const [orderBumpActive, setOrderBumpActive] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);

  // Admin Field Manager simulator state
  const [fieldCompanyEnabled, setFieldCompanyEnabled] = useState(false);
  const [fieldNotesEnabled, setFieldNotesEnabled] = useState(true);
  const [fieldCityRequired, setFieldCityRequired] = useState(true);

  if (!isOpen) return null;

  const basePrice = 1450;
  const shippingFee = deliveryZone === 'inside' ? 60 : 120;
  const bumpPrice = orderBumpActive ? 290 : 0;
  const finalTotal = basePrice + shippingFee + bumpPrice;

  const handleResetDemo = () => {
    setOrderPlaced(false);
    setOrderBumpActive(false);
    setDeliveryZone('inside');
    setPaymentGateway('cod');
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/75 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-3xl w-full shadow-2xl border border-slate-200 overflow-hidden my-auto max-h-[92vh] flex flex-col animate-in fade-in zoom-in-95 duration-150">
        {/* Modal Header */}
        <div className="bg-slate-900 px-5 py-3.5 text-white flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-blue-600 flex items-center justify-center">
              <Zap className="w-4 h-4 text-white" />
            </div>
            <div>
              <h3 className="text-sm font-bold leading-tight">
                EasyFunnel Live Interactive Experience
              </h3>
              <p className="text-[11px] text-slate-400">
                Experience the 1-Page Express Checkout directly in your browser
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="hidden sm:flex items-center gap-1 bg-slate-800 p-0.5 rounded-lg text-xs">
              <button
                type="button"
                onClick={() => setDemoMode('checkout')}
                className={`px-2.5 py-1 rounded font-medium transition-all ${
                  demoMode === 'checkout'
                    ? 'bg-blue-600 text-white font-semibold'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Checkout Experience
              </button>
              <button
                type="button"
                onClick={() => setDemoMode('admin')}
                className={`px-2.5 py-1 rounded font-medium transition-all ${
                  demoMode === 'admin'
                    ? 'bg-blue-600 text-white font-semibold'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Field Manager
              </button>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
              aria-label="Close demo modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 overflow-y-auto flex-1">
          {demoMode === 'checkout' ? (
            orderPlaced ? (
              <div className="text-center py-10 px-4 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-extrabold text-slate-900">
                  Demo Order Successfully Placed!
                </h4>
                <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
                  In an actual store, this triggers the WooCommerce <strong>EC - Thank You Page</strong> widget, synchronizes with HPOS, and dispatches customer SMS/email notifications.
                </p>

                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 max-w-sm mx-auto text-left text-xs space-y-2">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Order ID:</span>
                    <span className="font-mono font-bold text-slate-800">#EF-89421</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Recipient:</span>
                    <span className="font-medium text-slate-800">{customerName}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Payment:</span>
                    <span className="font-medium text-slate-800 uppercase">{paymentGateway}</span>
                  </div>
                  <div className="flex justify-between border-t border-slate-200 pt-1.5 font-bold">
                    <span>Total Amount:</span>
                    <span className="text-blue-600">৳{finalTotal}</span>
                  </div>
                </div>

                <div className="pt-2 flex justify-center gap-3">
                  <button
                    type="button"
                    onClick={handleResetDemo}
                    className="px-4 py-2 border border-slate-300 text-slate-700 text-xs font-semibold rounded-lg hover:bg-slate-50 flex items-center gap-1.5"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Try Another Demo Order</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      onClose();
                      onGetPlugin();
                    }}
                    className="px-4 py-2 bg-slate-900 text-white text-xs font-bold rounded-lg hover:bg-slate-800"
                  >
                    Get EasyFunnel Plugin
                  </button>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                {/* Product Summary banner */}
                <div className="p-3 bg-blue-50/70 rounded-xl border border-blue-200 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold">
                      <ShoppingBag className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-bold text-slate-900">
                        Pro Waterproof Smart Watch
                      </div>
                      <div className="text-[11px] text-slate-500">
                        Color: Space Gray · 1 Year Warranty
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-extrabold text-slate-900 text-sm">৳{basePrice}</div>
                    <div className="text-[10px] text-emerald-700 font-semibold">In Stock</div>
                  </div>
                </div>

                {/* Form fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                      Customer Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      className="w-full text-xs px-3 py-2 border border-slate-200 rounded-lg focus:outline-hidden focus:border-blue-600"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                      Phone Number (Lead Logged) <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      value={customerPhone}
                      onChange={(e) => setCustomerPhone(e.target.value)}
                      className="w-full text-xs px-3 py-2 border border-slate-200 rounded-lg font-mono focus:outline-hidden focus:border-blue-600"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                      Delivery Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={customerAddress}
                      onChange={(e) => setCustomerAddress(e.target.value)}
                      className="w-full text-xs px-3 py-2 border border-slate-200 rounded-lg focus:outline-hidden focus:border-blue-600"
                    />
                  </div>
                </div>

                {/* Delivery Zone selection */}
                <div>
                  <div className="text-[11px] font-semibold text-slate-700 mb-1.5">
                    Delivery Area:
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <button
                      type="button"
                      onClick={() => setDeliveryZone('inside')}
                      className={`p-2.5 rounded-lg border text-left transition-all ${
                        deliveryZone === 'inside'
                          ? 'border-blue-600 bg-blue-50/50 font-semibold text-blue-900'
                          : 'border-slate-200 text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      <div className="text-xs">Inside Dhaka Area</div>
                      <div className="text-[11px] text-slate-500">৳60 Delivery Charge</div>
                    </button>

                    <button
                      type="button"
                      onClick={() => setDeliveryZone('outside')}
                      className={`p-2.5 rounded-lg border text-left transition-all ${
                        deliveryZone === 'outside'
                          ? 'border-blue-600 bg-blue-50/50 font-semibold text-blue-900'
                          : 'border-slate-200 text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      <div className="text-xs">Outside Dhaka (Courier)</div>
                      <div className="text-[11px] text-slate-500">৳120 Courier Charge</div>
                    </button>
                  </div>
                </div>

                {/* Payment Selection */}
                <div>
                  <div className="text-[11px] font-semibold text-slate-700 mb-1.5">
                    Payment Gateway:
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-xs">
                    <button
                      type="button"
                      onClick={() => setPaymentGateway('cod')}
                      className={`p-2.5 rounded-lg border flex flex-col items-center justify-center gap-1 transition-all ${
                        paymentGateway === 'cod'
                          ? 'border-emerald-600 bg-emerald-50/50 text-emerald-900 font-semibold'
                          : 'border-slate-200 text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      <Truck className="w-4 h-4 text-emerald-600" />
                      <span className="text-[11px]">Cash on Delivery</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setPaymentGateway('bkash')}
                      className={`p-2.5 rounded-lg border flex flex-col items-center justify-center gap-1 transition-all ${
                        paymentGateway === 'bkash'
                          ? 'border-pink-600 bg-pink-50/50 text-pink-900 font-semibold'
                          : 'border-slate-200 text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      <div className="w-4 h-4 rounded-full bg-pink-600 text-white font-bold text-[9px] flex items-center justify-center">
                        b
                      </div>
                      <span className="text-[11px]">bKash MFS</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setPaymentGateway('nagad')}
                      className={`p-2.5 rounded-lg border flex flex-col items-center justify-center gap-1 transition-all ${
                        paymentGateway === 'nagad'
                          ? 'border-orange-600 bg-orange-50/50 text-orange-900 font-semibold'
                          : 'border-slate-200 text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      <div className="w-4 h-4 rounded-full bg-orange-600 text-white font-bold text-[9px] flex items-center justify-center">
                        N
                      </div>
                      <span className="text-[11px]">Nagad</span>
                    </button>
                  </div>
                </div>

                {/* 1-Click Order Bump Offer */}
                <div
                  onClick={() => setOrderBumpActive(!orderBumpActive)}
                  className={`p-3 rounded-xl border cursor-pointer transition-all ${
                    orderBumpActive
                      ? 'border-amber-400 bg-amber-50/70 shadow-xs'
                      : 'border-dashed border-slate-300 bg-slate-50 hover:bg-slate-100/60'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={orderBumpActive}
                      onChange={() => {}}
                      className="rounded text-blue-600 focus:ring-blue-500 w-4 h-4 cursor-pointer"
                    />
                    <div>
                      <div className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                        <span>Order Bump: Add Extra Magnetic Charging Cable for ৳290</span>
                      </div>
                      <p className="text-[11px] text-slate-500">
                        Normally ৳450. Click to include in this express checkout.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Subtotal and Action */}
                <div className="pt-3 border-t border-slate-200 flex items-center justify-between">
                  <div>
                    <div className="text-[11px] text-slate-500">Order Subtotal:</div>
                    <div className="text-xl font-extrabold text-slate-900">
                      ৳{finalTotal}
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => setOrderPlaced(true)}
                    className="px-6 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-xl shadow-md transition-all"
                  >
                    Place Express Order Now
                  </button>
                </div>
              </div>
            )
          ) : (
            /* Admin Field Manager View */
            <div className="space-y-4">
              <div className="text-xs text-slate-600 pb-2 border-b border-slate-100">
                <h4 className="font-bold text-slate-900 text-sm">
                  Checkout Field Customization Simulator
                </h4>
                <p>
                  Experience how easily you can hide unneeded WooCommerce fields or toggle requirements.
                </p>
              </div>

              <div className="space-y-3 text-xs">
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-slate-900">Company Name Field (`billing_company`)</div>
                    <div className="text-[11px] text-slate-500">Hide to eliminate friction on consumer orders</div>
                  </div>
                  <button
                    type="button"
                    onClick={() => setFieldCompanyEnabled(!fieldCompanyEnabled)}
                    className={`px-3 py-1 text-xs font-semibold rounded-md transition-all ${
                      fieldCompanyEnabled
                        ? 'bg-blue-600 text-white'
                        : 'bg-slate-200 text-slate-600'
                    }`}
                  >
                    {fieldCompanyEnabled ? 'Visible' : 'Hidden'}
                  </button>
                </div>

                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-slate-900">Order Notes Field (`order_comments`)</div>
                    <div className="text-[11px] text-slate-500">Optional special delivery notes for courier</div>
                  </div>
                  <button
                    type="button"
                    onClick={() => setFieldNotesEnabled(!fieldNotesEnabled)}
                    className={`px-3 py-1 text-xs font-semibold rounded-md transition-all ${
                      fieldNotesEnabled
                        ? 'bg-blue-600 text-white'
                        : 'bg-slate-200 text-slate-600'
                    }`}
                  >
                    {fieldNotesEnabled ? 'Enabled' : 'Disabled'}
                  </button>
                </div>

                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-slate-900">City / District Requirement</div>
                    <div className="text-[11px] text-slate-500">Enforce district selection to calculate accurate COD shipping</div>
                  </div>
                  <button
                    type="button"
                    onClick={() => setFieldCityRequired(!fieldCityRequired)}
                    className={`px-3 py-1 text-xs font-semibold rounded-md transition-all ${
                      fieldCityRequired
                        ? 'bg-emerald-600 text-white'
                        : 'bg-slate-200 text-slate-600'
                    }`}
                  >
                    {fieldCityRequired ? 'Required' : 'Optional'}
                  </button>
                </div>
              </div>

              <div className="p-3 bg-blue-50/70 rounded-xl border border-blue-200 text-xs text-blue-900 flex items-center gap-2">
                <Check className="w-4 h-4 text-blue-600 shrink-0" />
                <span>
                  All field settings save instantly into WordPress option tables with zero impact on database performance.
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="bg-slate-50 px-5 py-3 border-t border-slate-200 flex items-center justify-between text-xs shrink-0">
          <span className="text-slate-500 text-[11px]">
            EasyFunnel v2.4 · WooCommerce & HPOS Compatible
          </span>
          <button
            type="button"
            onClick={() => {
              onClose();
              onGetPlugin();
            }}
            className="px-4 py-2 bg-slate-900 text-white font-bold rounded-lg hover:bg-slate-800 transition-colors"
          >
            Get EasyFunnel
          </button>
        </div>
      </div>
    </div>
  );
};
