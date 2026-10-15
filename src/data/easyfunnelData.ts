export interface WidgetItem {
  id: string;
  name: string;
  shortCode: string;
  category: 'checkout' | 'merchandising' | 'urgency' | 'trust';
  description: string;
  elementorIcon: string;
  features: string[];
}

export const ELEMENTOR_WIDGETS: WidgetItem[] = [
  {
    id: 'ec-checkout-form',
    name: 'EC - Checkout Form',
    shortCode: 'Checkout Form',
    category: 'checkout',
    description: 'Embeds a streamlined, conversion-ready 1-page checkout form anywhere inside Elementor pages or posts.',
    elementorIcon: 'CreditCard',
    features: ['Custom field mapping', 'Inline validation', 'AJAX submission']
  },
  {
    id: 'ec-live-checkout',
    name: 'EC - Live Checkout',
    shortCode: 'Live Checkout',
    category: 'checkout',
    description: 'Real-time interactive checkout container that updates totals and shipping without full page reloads.',
    elementorIcon: 'Zap',
    features: ['Instant total refresh', 'Dynamic gateway loader', 'Frictionless layout']
  },
  {
    id: 'ec-action-button',
    name: 'EC - Action Button',
    shortCode: 'Action Button',
    category: 'checkout',
    description: 'High-converting call-to-action button with direct checkout redirect, product pre-fill, or express trigger.',
    elementorIcon: 'MousePointerClick',
    features: ['Pre-selects variation', 'Custom button states', 'Deep-link ready']
  },
  {
    id: 'ec-product-grid',
    name: 'EC - Product Grid',
    shortCode: 'Product Grid',
    category: 'merchandising',
    description: 'Display products in a responsive grid layout with 1-click select and direct checkout integration.',
    elementorIcon: 'LayoutGrid',
    features: ['Column controls', 'Add-to-cart bypass', 'Price badges']
  },
  {
    id: 'ec-product-showcase',
    name: 'EC - Product Showcase',
    shortCode: 'Product Showcase',
    category: 'merchandising',
    description: 'Focused hero product presentation with gallery zoom, key specs, and attached checkout form.',
    elementorIcon: 'Package',
    features: ['Hero presentation', 'Specification lists', 'Stock status indicator']
  },
  {
    id: 'ec-shop-grid',
    name: 'EC - Shop Grid',
    shortCode: 'Shop Grid',
    category: 'merchandising',
    description: 'Flexible catalog grid specifically designed for sales funnel landing pages and collection drops.',
    elementorIcon: 'ShoppingBag',
    features: ['Category filtering', 'Pagination / Load more', 'Sale tags']
  },
  {
    id: 'ec-pricing-table',
    name: 'EC - Pricing Table',
    shortCode: 'Pricing Table',
    category: 'merchandising',
    description: 'Tiered product pricing cards with featured plan highlight, discount badges, and direct buy links.',
    elementorIcon: 'Tags',
    features: ['Tier comparison', 'Badge callouts', 'Direct checkout trigger']
  },
  {
    id: 'ec-offer-card',
    name: 'EC - Offer Card',
    shortCode: 'Offer Card',
    category: 'urgency',
    description: 'Eye-catching discount card ideal for order bumps, cross-sells, and seasonal promotional bundles.',
    elementorIcon: 'Sparkles',
    features: ['1-click checkbox bump', 'Discount callout', 'Highlight border']
  },
  {
    id: 'ec-offer-bar',
    name: 'EC - Offer Bar',
    shortCode: 'Offer Bar',
    category: 'urgency',
    description: 'Sticky or inline promotional banner announcing free shipping thresholds or limited-time savings.',
    elementorIcon: 'SlidersHorizontal',
    features: ['Sticky top/bottom', 'Threshold meter', 'Dismissible state']
  },
  {
    id: 'ec-sales-popup',
    name: 'EC - Sales Popup',
    shortCode: 'Sales Popup',
    category: 'urgency',
    description: 'Configurable on-page offer alert triggered by scroll position or exit intent to retain departing visitors.',
    elementorIcon: 'Bell',
    features: ['Scroll depth trigger', 'Exit-intent detection', 'One-click apply']
  },
  {
    id: 'ec-countdown-timer',
    name: 'EC - Countdown Timer',
    shortCode: 'Countdown Timer',
    category: 'urgency',
    description: 'Dynamic countdown clock for flash sales, pre-orders, and urgent checkout deadline incentives.',
    elementorIcon: 'Clock',
    features: ['Evergreen / Fixed time', 'Auto-hide on expiry', 'Customizable typography']
  },
  {
    id: 'ec-flip-box',
    name: 'EC - Flip Box',
    shortCode: 'Flip Box',
    category: 'merchandising',
    description: 'Interactive dual-sided card revealing detailed product benefits, customer guarantee, or bonus specs on hover.',
    elementorIcon: 'RotateCw',
    features: ['3D flip animation', 'Dual-face content', 'Front/Back CTA']
  },
  {
    id: 'ec-feature-card',
    name: 'EC - Feature Card',
    shortCode: 'Feature Card',
    category: 'trust',
    description: 'Modular value proposition card highlighting key product advantages, shipping speeds, or warranty.',
    elementorIcon: 'CheckCircle2',
    features: ['Icon picker', 'Accent styling', 'Responsive spacing']
  },
  {
    id: 'ec-product-carousel',
    name: 'EC - Product Carousel',
    shortCode: 'Product Carousel',
    category: 'merchandising',
    description: 'Smooth touch-enabled slider displaying related products, accessories, or bundles right before checkout.',
    elementorIcon: 'Images',
    features: ['Touch swipe', 'Autoplay options', 'Direct checkout link']
  },
  {
    id: 'ec-size-guide',
    name: 'EC - Size Guide',
    shortCode: 'Size Guide',
    category: 'trust',
    description: 'Pop-up or inline sizing measurement chart to reduce sizing questions and avoid product returns.',
    elementorIcon: 'Ruler',
    features: ['Tabular metrics', 'Modal trigger', 'Unit switcher']
  },
  {
    id: 'ec-support-card',
    name: 'EC - Support Card',
    shortCode: 'Support Card',
    category: 'trust',
    description: 'Dedicated customer assistance card with direct WhatsApp, phone, or live email support details.',
    elementorIcon: 'Headphones',
    features: ['WhatsApp link', 'Call hotline', 'Business hours']
  },
  {
    id: 'ec-thank-you-page',
    name: 'EC - Thank You Page',
    shortCode: 'Thank You Page',
    category: 'checkout',
    description: 'Customizable post-purchase confirmation widget with order recap, instructions, and next steps.',
    elementorIcon: 'Receipt',
    features: ['Order summary display', 'Bank transfer details', 'Next steps guidance']
  },
  {
    id: 'ec-trust-badges',
    name: 'EC - Trust Badges',
    shortCode: 'Trust Badges',
    category: 'trust',
    description: 'Security and payment assurance badges (Cash on Delivery, SSL, Verified Merchant, Safe Payments).',
    elementorIcon: 'ShieldCheck',
    features: ['COD badge', 'Payment logos', 'Return guarantee']
  }
];

export interface FeatureItem {
  id: string;
  title: string;
  category: string;
  description: string;
  tag: string;
  icon: string;
}

export const CORE_FEATURES: FeatureItem[] = [
  {
    id: 'express-checkout',
    title: '1-Page Express Checkout',
    category: 'Checkout Experience',
    description: 'Replace standard multi-step WooCommerce cart and checkout with an all-in-one express page that lets shoppers order in seconds.',
    tag: 'Core Conversion',
    icon: 'Zap'
  },
  {
    id: 'fields-manager',
    title: 'Checkout Field Manager',
    category: 'Customization',
    description: 'Enable, disable, rename, or reorder any default WooCommerce billing and shipping fields with simple toggles.',
    tag: 'Field Control',
    icon: 'Sliders'
  },
  {
    id: 'drag-drop-builder',
    title: 'Drag-and-Drop Custom Fields Builder',
    category: 'Customization',
    description: 'Easily add custom text fields, select dropdowns, radio options, notes, or date pickers directly to your checkout.',
    tag: 'Visual Builder',
    icon: 'Move'
  },
  {
    id: 'sales-funnel',
    title: 'Sales Funnel Management',
    category: 'Funnel Architecture',
    description: 'Create tailored funnel pathways for specific campaign products, custom checkout landing pages, and post-purchase flows.',
    tag: 'Revenue Optimization',
    icon: 'GitFork'
  },
  {
    id: 'product-selection',
    title: 'Multiple Product Selection Modes',
    category: 'Merchandising',
    description: 'Let customers choose single items, select product variations, switch quantities, or pick bundled packages right on the checkout page.',
    tag: 'Flexible Selection',
    icon: 'Layers'
  },
  {
    id: 'incomplete-orders',
    title: 'Incomplete Order Tracking',
    category: 'Recovery',
    description: 'Automatically captures customer name and phone number as they type, enabling follow-up even if the order was not finalized.',
    tag: 'Abandoned Order Recovery',
    icon: 'PhoneCall'
  },
  {
    id: 'fraud-protection',
    title: 'Built-in Fraud Protection',
    category: 'Security',
    description: 'Mitigate fake and repetitive spam orders using IP rate limiting, phone number validation, and order frequency rules.',
    tag: 'Loss Prevention',
    icon: 'ShieldAlert'
  },
  {
    id: 'pixel-tracking',
    title: 'Facebook Pixel & Conversion Tracking',
    category: 'Analytics',
    description: 'Accurately fire standard events (PageView, ViewContent, AddToCart, InitiateCheckout, and Purchase) for Meta campaigns.',
    tag: 'Accurate Attribution',
    icon: 'Activity'
  },
  {
    id: 'elementor-widgets',
    title: 'Elementor Integration (18 Widgets)',
    category: 'Page Builder',
    description: 'Design beautiful, branded checkout pages with 18 specialized widgets crafted specifically for WooCommerce conversion.',
    tag: '18 Widgets Included',
    icon: 'Boxes'
  },
  {
    id: 'bd-gateways',
    title: 'Bangladesh Payment Gateway Support',
    category: 'Payment Support',
    description: 'Built-in readiness for popular local payment workflows including bKash, Nagad, Rocket, and manual transfer instructions.',
    tag: 'bKash & Nagad Ready',
    icon: 'CreditCard'
  },
  {
    id: 'cod-support',
    title: 'WooCommerce COD Support',
    category: 'Payment Support',
    description: 'Deep Cash on Delivery optimization, including custom delivery charge calculations for inside/outside city areas.',
    tag: 'Optimized COD',
    icon: 'Truck'
  },
  {
    id: 'hpos-ajax-cart',
    title: 'HPOS & AJAX Cart Synchronization',
    category: 'Architecture',
    description: 'Fully compatible with WooCommerce High-Performance Order Storage (HPOS) and fast AJAX updates with zero page flickering.',
    tag: 'WooCommerce 9.x Ready',
    icon: 'Cpu'
  }
];

export interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

export const FAQS: FaqItem[] = [
  {
    question: 'What is EasyFunnel?',
    answer: 'EasyFunnel is a commercial WordPress plugin built for WooCommerce that transforms standard multi-step checkout processes into high-converting 1-page express checkout funnels. It includes custom checkout field management, drag-and-drop fields builder, product selection widgets, incomplete order capture, fraud protection, and 18 custom Elementor widgets.',
    category: 'General'
  },
  {
    question: 'Does EasyFunnel work with WooCommerce?',
    answer: 'Yes, EasyFunnel is built specifically for WooCommerce (version 7.x through the latest 9.x+). It seamlessly works with your existing WooCommerce products, shipping zones, tax settings, coupons, order emails, and payment gateways without modifying WooCommerce core tables.',
    category: 'Compatibility'
  },
  {
    question: 'Does it support Elementor?',
    answer: 'Yes. EasyFunnel includes 18 custom Elementor widgets designed specifically for funnel building, including the Checkout Form, Live Checkout, Action Buttons, Product Showcases, Pricing Tables, Flip Boxes, Countdown Timers, and Trust Badges. It works with both Elementor Free and Elementor Pro.',
    category: 'Builder'
  },
  {
    question: 'Can I customize checkout fields?',
    answer: 'Absolutely. EasyFunnel provides both a Checkout Field Manager (to hide, show, rename, or reorder default WooCommerce fields like company, address line 2, or postal code) and a Drag-and-Drop Custom Fields Builder to create new fields (text, textarea, radio, select, date picker, notes) required for your store.',
    category: 'Customization'
  },
  {
    question: 'Does it support cash on delivery?',
    answer: 'Yes, EasyFunnel includes specialized support for Cash on Delivery (COD) workflows. You can configure conditional delivery fees (such as inside city vs. outside city), display custom COD instructions, and enforce telephone confirmation.',
    category: 'Payments'
  },
  {
    question: 'Which payment gateways are supported?',
    answer: 'EasyFunnel supports standard WooCommerce payment gateways including Cash on Delivery (COD), Direct Bank Transfer (BACS), and popular international and regional gateways. For Bangladesh merchants, it offers dedicated support for bKash, Nagad, and local mobile banking workflows where supported.',
    category: 'Payments'
  },
  {
    question: 'Is HPOS supported?',
    answer: 'Yes, EasyFunnel is fully compatible with WooCommerce High-Performance Order Storage (HPOS). It works flawlessly with both the legacy post-based order tables and modern custom order tables, ensuring future-proof scalability for high-volume stores.',
    category: 'Technical'
  },
  {
    question: 'How do I get started?',
    answer: 'Getting started takes three simple steps: 1) Install and activate the EasyFunnel plugin on your WordPress website. 2) Configure your checkout fields, shipping rates, and desired widgets in the EasyFunnel dashboard. 3) Select your funnel template or embed the checkout widget into your Elementor landing page and start taking orders.',
    category: 'Setup'
  },
  {
    question: 'Is EasyFunnel really free to use?',
    answer: 'Yes! EasyFunnel is currently 100% free with all features fully unlocked. You get unlimited access to the 1-Page Express Checkout, Drag-and-Drop Field Builder, Incomplete Order Tracker, Fraud Protection rules, Facebook Pixel integration, and all 18 Elementor custom widgets with zero cost and no credit card required.',
    category: 'Pricing'
  },
  {
    question: 'How can I get technical support?',
    answer: 'Community support, thorough technical documentation, and video tutorials are provided completely free for all users. You can also report issues or request features through our community channels and GitHub repository.',
    category: 'Support'
  }
];

export interface FreeEditionDetail {
  id: string;
  name: string;
  badge: string;
  description: string;
  price: string;
  licenseText: string;
  features: string[];
}

export const FREE_EDITION: FreeEditionDetail = {
  id: 'free-edition',
  name: 'EasyFunnel 100% Free Edition',
  badge: 'Complete Free Access',
  description: 'Full-featured WooCommerce funnel & 1-page express checkout plugin. All 18 widgets and capabilities included at zero cost.',
  price: '$0',
  licenseText: 'Unlimited Websites · Free Forever',
  features: [
    '1-Page Express Checkout Engine',
    'Checkout Field Manager & Drag-Drop Custom Fields',
    'All 18 Elementor Custom Widgets (Unrestricted)',
    'Real-Time Incomplete Order Tracking & Lead Log',
    'Built-in Fraud Protection & IP Velocity Rules',
    'Facebook / Meta Pixel Event Tracking',
    'WooCommerce Cash on Delivery (COD) Optimization',
    'Bangladesh Gateways: bKash, Nagad & Rocket Support',
    'HPOS (High-Performance Order Storage) & AJAX Synced',
    'Use on Personal, Client, or Commercial Stores',
    'Regular Plugin Updates & Community Documentation'
  ]
};

