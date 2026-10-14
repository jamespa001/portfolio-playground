![Playground CI](https://github.com/jamespa001/playground/actions/workflows/ci.yml/badge.svg)

# 🚀 Personal Portfolio & Engineering Playground Hub

A high-performance, modern developer portfolio and multi-project showcase hub engineered with **Next.js App Router**, **TypeScript**, and **Tailwind CSS**. Designed to highlight production-grade web applications, interactive UI components, and verified Core Web Vitals optimization.

---

## 🌟 Key Features

- **Interactive Project Rotator**: Dynamic visual previews showcasing key full-stack engineering projects and applications.
- **Modern UI & Responsive Design**: Crafted with clean aesthetic design patterns, dark mode optimizations, and fluid CSS animations.
- **Production Engineering Practices**: Fully optimized image delivery pipeline, strict TypeScript typing, modular component architecture, and zero-layout-shift layouts.
- **Direct Showcase Links**: Integrated live demo links and GitHub repository access across all flagship applications.

---

## 🛠️ Tech Stack & Tools

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Deployment & Hosting**: [Vercel Edge Platform](https://vercel.com/)
- **Performance Tooling**: Google Lighthouse, Core Web Vitals Audit Suite

---

## 🚀 Getting Started

First, clone the repository and install dependencies:

```bash
git clone [https://github.com/your-username/portfolio-playground.git](https://github.com/your-username/portfolio-playground.git)
cd portfolio-playground
npm install
```

### 🚀 Core Web Vitals & Performance Optimization

By auditing our Vercel production edge deployment, identifying a legacy `<img>` tag within the project preview rotator (`previewrotator.tsx`), and refactoring it to Next.js's optimized `<Image />` component with proper sizing and priority delivery, we successfully improved our core web metrics.

| Metric                             | Before Optimization (Vercel) | After Optimization (Vercel) | Improvement              |
| :--------------------------------- | :--------------------------- | :-------------------------- | :----------------------- |
| **Lighthouse Score**               | **94**[cite: 6]              | **96**[cite: 6]             | **+2 Points** 🚀         |
| **Largest Contentful Paint (LCP)** | **1.2 s**[cite: 6]           | **0.5 s**[cite: 6]          | **2.4x Faster** ⚡       |
| **Cumulative Layout Shift (CLS)**  | **0**[cite: 6]               | **0**[cite: 6]              | **Perfect Stability** ✨ |

#### Performance Audits (Vercel Deployment)

- **Before Optimization (Score: 94):**
  ![Performance Portfolio Before](./public/screenshots/Performance.Portfolio.vercel.before.png)
- **After Optimization (Score: 96):**
  ![Performance Portfolio After](./public/screenshots/Performance.Portfolio.vercel.after.png)

```

```
