# EasyFunnel — Cloudflare Pages Deployment Guide (বাংলা ও English)

প্রজেক্টটি **Cloudflare Pages**-এ ডিপ্লয় করার জন্য সম্পূর্ণ প্রস্তুত করা হয়েছে।

---

## প্রজেক্টের কনফিগারেশন সামারি (Cloudflare Settings)

- **Framework Preset**: `Vite`
- **Build command**: `npm run build`
- **Build output directory**: `dist`
- **Root directory**: `/` (ডিফল্ট)
- **Node.js Version**: `20` (`.nvmrc` ফাইলে কনফিগার করা আছে)
- **SPA Fallback Routing**: `public/_redirects` ফাইলে `/* /index.html 200` সেট করা আছে (যাতে কোনো 404 এরর না আসে)।
- **Security & Cache Headers**: `public/_headers` ফাইলে অপ্টিমাইজ করা হয়েছে।

---

## ডিপ্লয় করার ৩টি সহজ পদ্ধতি (3 Deployment Methods)

### পদ্ধতি ১: GitHub / Git কানেক্ট করে (সবচেয়ে রিকমেন্ডেড ও অটোমেটিক)

এটি সবচেয়ে সহজ পদ্ধতি, একবার সেট করলে পরবর্তীতে গিটে পুশ করলেই অটোমেটিক ডিপ্লয় হয়ে যাবে:

1. আপনার কোডটি আপনার **GitHub** বা **GitLab** রিপোজিটরিতে পুশ করুন।
2. [Cloudflare Dashboard](https://dash.cloudflare.com/)-এ লগইন করুন।
3. বাম পাশের মেনু থেকে **Workers & Pages** &gt; **Create application** &gt; **Pages** ট্যাবে যান।
4. **Connect to Git** নির্বাচন করুন এবং আপনার রিপোজিটরি সিলেক্ট করুন।
5. **Set up builds and deployments** পেইজে নিচের সেটিংস দিন:
   - **Project name**: `easyfunnel-landing` (বা আপনার পছন্দের নাম)
   - **Production branch**: `main`
   - **Framework preset**: `Vite`
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
6. **Save and Deploy** বাটনে ক্লিক করুন।
7. ১-২ মিনিটের মধ্যে আপনার সাইট লাইভ হয়ে যাবে (যেমন: `easyfunnel-landing.pages.dev`)!

---

### পদ্ধতি ২: Wrangler CLI কমান্ড দিয়ে ডিপ্লয় (Terminal / Command Line)

যদি সরাসরি টার্মিনাল থেকে ডিপ্লয় করতে চান:

1. প্রোডাকশন বিল্ড তৈরি করুন:
   ```bash
   npm run build
   ```

2. Cloudflare-এ লগইন করুন (যদি আগে না করা থাকে):
   ```bash
   npx wrangler login
   ```

3. ডিপ্লয় কমান্ড রান করুন:
   ```bash
   npm run deploy:cf
   ```
   *বা ম্যানুয়াল কমান্ড:*
   ```bash
   npx wrangler pages deploy dist --project-name=easyfunnel-landing
   ```

---

### পদ্ধতি ৩: Direct Upload (ড্যাশবোর্ড থেকে ড্র্যাগ অ্যান্ড ড্রপ)

যদি গিট বা টার্মিনাল ছাড়া ডিপ্লয় করতে চান:

1. আপনার কম্পিউটারে `npm run build` কমান্ড চালান। এতে `dist` ফোল্ডার তৈরি হবে।
2. Cloudflare ড্যাশবোর্ডে যান: **Workers & Pages** &gt; **Create application** &gt; **Pages** &gt; **Upload assets**।
3. প্রোজেক্টের নাম দিন (যেমন: `easyfunnel-landing`)।
4. আপনার কম্পিউটারের তৈরি হওয়া `dist` ফোল্ডারটি ড্র্যাগ অ্যান্ড ড্রপ করে আপলোড করে দিন।
5. **Deploy site** বাটনে ক্লিক করলেই লাইভ হয়ে যাবে।

---

## কাস্টম ডোমেইন যুক্ত করার নিয়ম (Custom Domain)

সাইট ডিপ্লয় হওয়ার পর Cloudflare Pages ড্যাশবোর্ডে:
1. আপনার প্রোজেক্টে ঢুকুন &gt; **Custom domains** ট্যাবে যান।
2. **Set up a custom domain**-এ ক্লিক করে আপনার ডোমেইন (যেমন: `easyfunnel.com` বা `funnel.yourdomain.com`) লিখুন।
3. Cloudflare অটোমেটিক ফ্রি SSL সার্টিফিকেট এবং CDN সক্রিয় করে দিবে।
