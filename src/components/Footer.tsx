import React, { useState } from 'react';
import { Layers, ArrowUp, X, Shield, FileText, RefreshCw } from 'lucide-react';

interface FooterProps {
  onOpenLiveDemo: () => void;
  onOpenPricing: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLiveDemo, onOpenPricing }) => {
  const [legalModal, setLegalModal] = useState<'privacy' | 'terms' | 'refund' | null>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-400 text-xs border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10 pb-12 border-b border-slate-800">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5 text-white">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white shadow-xs">
                <Layers className="w-4 h-4" />
              </div>
              <span className="font-bold text-lg tracking-tight text-white">
                EasyFunnel
              </span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              The high-converting 1-page express checkout and sales funnel WordPress plugin for WooCommerce. Built for conversion-focused merchants, agencies, and digital store owners.
            </p>
            <div className="pt-1 text-[11px] text-slate-500">
              Compatible with WooCommerce 8.x/9.x, Elementor, and HPOS.
            </div>
          </div>

          {/* Product Links */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider">
              Product
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="hover:text-white transition-colors">
                  Core Features
                </a>
              </li>
              <li>
                <a href="#widgets" className="hover:text-white transition-colors">
                  18 Elementor Widgets
                </a>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenLiveDemo}
                  className="hover:text-white transition-colors text-left"
                >
                  Interactive Live Demo
                </button>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-white transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#integrations" className="hover:text-white transition-colors">
                  Integrations
                </a>
              </li>
            </ul>
          </div>

          {/* Resources & Support */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider">
              Resources & Help
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  Plugin FAQ
                </a>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenPricing}
                  className="hover:text-white transition-colors text-left"
                >
                  Free Download
                </button>
              </li>
              <li>
                <span className="text-slate-500 cursor-default">
                  Developer Documentation
                </span>
              </li>
              <li>
                <span className="text-slate-500 cursor-default">
                  Submit Support Ticket
                </span>
              </li>
              <li>
                <span className="text-slate-500 cursor-default">
                  Changelog & Updates
                </span>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider">
              Legal & Trust
            </h4>
            <ul className="space-y-2">
              <li>
                <button
                  type="button"
                  onClick={() => setLegalModal('privacy')}
                  className="hover:text-white transition-colors text-left"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => setLegalModal('terms')}
                  className="hover:text-white transition-colors text-left"
                >
                  Terms and Conditions
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => setLegalModal('refund')}
                  className="hover:text-white transition-colors text-left"
                >
                  Refund Policy
                </button>
              </li>
              <li>
                <span className="text-slate-500 cursor-default">
                  GPL Licensing Terms
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} EasyFunnel. All rights reserved. WordPress and WooCommerce are registered trademarks of their respective owners.
          </div>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors p-1"
            aria-label="Scroll back to top of page"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Legal Dialog Modals */}
      {legalModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white text-slate-800 rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-slate-200 animate-in fade-in zoom-in-95 duration-150 max-h-[85vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-4">
              <h3 className="text-base font-bold text-slate-900 capitalize">
                {legalModal === 'privacy' && 'Privacy Policy'}
                {legalModal === 'terms' && 'Terms and Conditions'}
                {legalModal === 'refund' && 'Refund Policy'}
              </h3>
              <button
                type="button"
                onClick={() => setLegalModal(null)}
                className="p-1 text-slate-400 hover:text-slate-700 rounded-md"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3 text-xs text-slate-600 leading-relaxed">
              {legalModal === 'privacy' && (
                <>
                  <p>
                    EasyFunnel is a self-hosted WordPress plugin that runs directly on your WordPress server. We do not store, intercept, or transmit your customers’ personal data, credit card information, or phone numbers to external servers.
                  </p>
                  <p>
                    All checkout inputs and incomplete order leads are stored exclusively in your own WooCommerce MySQL database. Meta Pixel tracking events are dispatched directly from the client browser to Meta according to your configured pixel settings.
                  </p>
                </>
              )}

              {legalModal === 'terms' && (
                <>
                  <p>
                    By activating and using EasyFunnel, you agree to comply with standard WordPress GPL guidelines and use valid site license keys according to your chosen plan.
                  </p>
                  <p>
                    EasyFunnel provides software for checkout optimization. Store merchants are solely responsible for compliance with local sales tax laws, customer privacy standards, and payment processing regulations.
                  </p>
                </>
              )}

              {legalModal === 'refund' && (
                <>
                  <p>
                    We want you to be completely satisfied with EasyFunnel. We offer a 14-day refund policy for verifiable technical incompatibilities that our support team cannot resolve.
                  </p>
                  <p>
                    Please consult our technical documentation and verify plugin prerequisites (WordPress 6.x and WooCommerce 7.x+) before purchasing.
                  </p>
                </>
              )}
            </div>

            <div className="mt-6 pt-3 border-t border-slate-100 flex justify-end">
              <button
                type="button"
                onClick={() => setLegalModal(null)}
                className="px-4 py-2 bg-slate-900 text-white text-xs font-semibold rounded-lg hover:bg-slate-800"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
