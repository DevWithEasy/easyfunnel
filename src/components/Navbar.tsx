import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Play, Layers } from 'lucide-react';

interface NavbarProps {
  onOpenLiveDemo: () => void;
  onOpenPricing: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenLiveDemo, onOpenPricing }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Features', href: '#features' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: '18 Widgets', href: '#widgets' },
    { name: 'Integrations', href: '#integrations' },
    { name: 'Free Download', href: '#pricing' },
    { name: 'FAQ', href: '#faq' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-200 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-xs border-b border-slate-200/80'
          : 'bg-white border-b border-slate-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 gap-8">
          {/* Zone 1: Brand wordmark (Strict Top Bar Contract: single line, no cluttered pill tags) */}
          <a
            href="#"
            className="flex items-center gap-2.5 text-slate-900 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-blue-600 rounded-md shrink-0"
          >
            <div className="w-9 h-9 rounded-lg bg-slate-900 flex items-center justify-center text-white shadow-xs">
              <Layers className="w-5 h-5 text-blue-500" />
            </div>
            <span className="font-bold text-xl tracking-tight text-slate-900 whitespace-nowrap">
              EasyFunnel
            </span>
          </a>

          {/* Zone 2: Navigation Links (4-6 single-line links with hover underlines) */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-600">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="hover:text-blue-600 transition-colors whitespace-nowrap py-1 focus:outline-hidden focus-visible:text-blue-600"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Action Cluster */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenLiveDemo}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 hover:text-slate-900 rounded-lg transition-colors whitespace-nowrap focus:outline-hidden focus-visible:ring-2 focus-visible:ring-blue-600"
            >
              <Play className="w-3.5 h-3.5 fill-blue-600 text-blue-600" />
              <span>Live Demo</span>
            </button>
            <button
              onClick={onOpenPricing}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg shadow-xs hover:shadow-sm transition-all whitespace-nowrap focus:outline-hidden focus-visible:ring-2 focus-visible:ring-blue-600"
            >
              <span>Download Free</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenLiveDemo}
              className="p-2 text-xs font-semibold text-blue-600 bg-blue-50 rounded-lg"
              title="Live Demo"
            >
              <Play className="w-4 h-4 fill-blue-600 text-blue-600" />
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg focus:outline-hidden focus-visible:ring-2 focus-visible:ring-blue-600"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-200 bg-white px-4 pt-3 pb-6 shadow-lg animate-in fade-in slide-in-from-top-2 duration-150">
          <div className="flex flex-col space-y-2 mb-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-blue-600 rounded-md transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="pt-2 border-t border-slate-100 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenLiveDemo();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg"
            >
              <Play className="w-4 h-4 fill-blue-600 text-blue-600" />
              <span>Explore Live Demo</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPricing();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg shadow-xs"
            >
              <span>Download EasyFunnel Free</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
