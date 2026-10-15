import React, { useState } from 'react';
import { X, Check, Download, Layers, ShieldCheck, Sparkles, Terminal, FileCode } from 'lucide-react';
import { FREE_EDITION } from '../data/easyfunnelData';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [downloadStarted, setDownloadStarted] = useState(false);
  const [emailInput, setEmailInput] = useState('');

  if (!isOpen) return null;

  const handleDownload = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setDownloadStarted(true);

    // Create a mock easyfunnel.zip dummy file download for the user
    const element = document.createElement('a');
    const file = new Blob(
      [
        '/* EasyFunnel WordPress Plugin Package v2.4 (100% Free Edition) */\n/* Visit https://easyfunnel.com for documentation */\n'
      ],
      { type: 'application/zip' }
    );
    element.href = URL.createObjectURL(file);
    element.download = 'easyfunnel-plugin-v2.4.zip';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const handleClose = () => {
    setDownloadStarted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/75 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-lg w-full shadow-2xl border border-slate-200 overflow-hidden my-auto animate-in fade-in zoom-in-95 duration-150">
        {/* Header */}
        <div className="bg-slate-900 px-6 py-4 text-white flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white">
              <Download className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold leading-tight">
                Download EasyFunnel Free
              </h3>
              <p className="text-xs text-slate-400">
                Version 2.4 · 100% Free for WooCommerce
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={handleClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg transition-colors"
            aria-label="Close download modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {downloadStarted ? (
            <div className="space-y-4">
              <div className="text-center">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-3">
                  <Check className="w-7 h-7" />
                </div>
                <h4 className="text-lg font-bold text-slate-900">
                  Download Started!
                </h4>
                <p className="text-xs text-slate-600 mt-1">
                  Your <code className="bg-slate-100 px-1.5 py-0.5 rounded font-mono text-slate-800">easyfunnel-plugin-v2.4.zip</code> file is downloading.
                </p>
              </div>

              {/* 3 Step Installation Guide */}
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs space-y-3">
                <div className="font-bold text-slate-800 uppercase tracking-wider text-[11px]">
                  3-Step Installation on WordPress:
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-blue-600 text-white font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5">
                    1
                  </span>
                  <span className="text-slate-600">
                    Log in to your WordPress Admin and navigate to <strong>Plugins &gt; Add New &gt; Upload Plugin</strong>.
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-blue-600 text-white font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5">
                    2
                  </span>
                  <span className="text-slate-600">
                    Select the downloaded <strong>easyfunnel-plugin-v2.4.zip</strong> file and click <strong>Install Now</strong>.
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-blue-600 text-white font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5">
                    3
                  </span>
                  <span className="text-slate-600">
                    Click <strong>Activate Plugin</strong>. All 18 Elementor widgets and the 1-Page Express Checkout will be ready!
                  </span>
                </div>
              </div>

              <div className="pt-2 flex gap-3">
                <button
                  type="button"
                  onClick={() => handleDownload()}
                  className="flex-1 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold rounded-xl transition-colors"
                >
                  Download Again
                </button>
                <button
                  type="button"
                  onClick={handleClose}
                  className="flex-1 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-xl transition-colors"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              {/* Free Edition Summary */}
              <div className="p-4 bg-emerald-50/60 rounded-xl border border-emerald-200 text-xs">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold text-emerald-950 flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-emerald-600" />
                    Complete Free Access
                  </span>
                  <span className="font-extrabold text-emerald-800 text-sm">
                    $0 / Free
                  </span>
                </div>
                <p className="text-emerald-800 text-[11px] leading-relaxed">
                  Includes all 18 Elementor custom widgets, 1-page express checkout, incomplete order tracking, and fraud protection for unlimited WooCommerce stores.
                </p>
              </div>

              {/* Quick Check Highlights */}
              <div className="space-y-2 text-xs text-slate-700">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>No credit card or license key required</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Works with WooCommerce 7.x through 9.x+ and HPOS</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Use on unlimited personal and client eCommerce stores</span>
                </div>
              </div>

              {/* Direct Download Button */}
              <div className="pt-3">
                <button
                  type="button"
                  onClick={() => handleDownload()}
                  className="w-full py-3.5 bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-bold rounded-xl shadow-md transition-all flex items-center justify-center gap-2 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-blue-600"
                >
                  <Download className="w-4 h-4" />
                  <span>Download EasyFunnel Free (.zip)</span>
                </button>
              </div>

              <div className="text-center text-[11px] text-slate-400">
                Direct ZIP archive package · Open GPL v2/v3 compatible
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
