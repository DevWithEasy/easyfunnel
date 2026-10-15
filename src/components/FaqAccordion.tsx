import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Search } from 'lucide-react';
import { FAQS, FaqItem } from '../data/easyfunnelData';

export const FaqAccordion: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const filteredFaqs = FAQS.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="faq" className="py-16 lg:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-3 text-xs font-bold tracking-wider text-blue-600 uppercase">
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight mb-4 text-balance">
            Everything You Need to Know About EasyFunnel.
          </h2>
          <p className="text-slate-600 text-base leading-relaxed max-w-2xl mx-auto">
            Clear, honest answers to common technical, compatibility, and licensing questions.
          </p>

          {/* Quick FAQ Search */}
          <div className="mt-6 max-w-md mx-auto relative">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search frequently asked questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full text-xs pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-hidden focus:border-blue-600 focus:bg-white transition-all"
            />
          </div>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-xl border border-slate-200 bg-white transition-all overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => toggleItem(index)}
                  className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-blue-600"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm font-bold text-slate-900 leading-snug">
                    {faq.question}
                  </span>
                  <div
                    className={`p-1 rounded-md text-slate-400 transition-transform duration-200 shrink-0 ${
                      isOpen ? 'rotate-180 text-blue-600' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-3 animate-in fade-in duration-150">
                    <p>{faq.answer}</p>
                    <div className="mt-2 text-[10px] text-slate-400 font-mono">
                      Category: {faq.category}
                    </div>
                  </div>
                )}
              </div>
            );
          })}

          {filteredFaqs.length === 0 && (
            <div className="text-center py-8 text-xs text-slate-500">
              No questions found matching &quot;{searchQuery}&quot;. Try searching for &quot;Elementor&quot;, &quot;COD&quot;, or &quot;HPOS&quot;.
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
