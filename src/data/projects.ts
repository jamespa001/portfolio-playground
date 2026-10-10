import { Project } from '@/types/project';

export const projectsData: Project[] = [
  {
    id: 'skinstric-ai',
    title: 'Skinstric AI Skincare Application',
    category: 'Next.js & React',
    description:
      'A multi-step Skinstric AI skincare web clone featuring custom SVG rotating graphics and multi-phase form state management.',
    longDescription:
      'Engineered with Next.js App Router, this application delivers a sophisticated AI skincare consultation experience featuring custom SVG visualizations, multi-step diagnostic forms, and fully responsive styling deployed on Vercel.',
    techStack: [
      'Next.js App Router',
      'React',
      'Tailwind CSS',
      'SVG Animations',
      'Vercel',
    ],
    liveUrl: 'https://project-skinstric.vercel.app/',
    githubUrl: 'https://github.com/jamespa001/project-skinstric.git',
    imageUrl: '/images/projects/skinstric/skinstric-home.png',
    views: [
      {
        image: '/images/projects/skinstric/skinstric-home.png',
        label: '01 / Interactive Landing',
        desc: 'Dynamic intro with custom SVG rotating graphics and immersive branding.',
      },
      {
        image: '/images/projects/skinstric/skinstric-form.name.png',
        label: '02 / Diagnostic Multi-Step Form',
        desc: 'Complex multi-phase form state management for personalized skin analysis.',
      },
      {
        image: '/images/projects/skinstric/skinstric-form.city.png',
        label: '03 / Diagnostic Multi-Step Form',
        desc: 'Location input step capturing regional environmental skin factors.',
      },
      {
        image: '/images/projects/skinstric/skinstric-results.png',
        label: '04 / AI Consultation Results',
        desc: 'Tailored skincare insights and dynamic recommendation dashboard.',
      },
      {
        image: '/images/projects/skinstric/skinstric-results.camera.png',
        label: '05 / AI Consultation Results Using Camera',
        desc: 'Live camera integration prompt for biometric facial skin scanning.',
      },
      {
        image: '/images/projects/skinstric/skinstric-analysis.png',
        label: '06 / Deep Skin Analysis',
        desc: 'Detailed biometric breakdown of skin condition parameters and diagnostic metrics.',
      },
      {
        image: '/images/projects/skinstric/skinstric-summary.png',
        label: '07 / Custom Regimen Summary',
        desc: 'Comprehensive overview of the personalized skincare routine and recommended active formulations.',
      },
      {
        image: '/images/projects/skinstric/skinstric-home.responsive.png',
        label: '08 / Mobile Landing View',
        desc: 'Mobile-optimized landing page rendering custom SVG graphics on smaller screens.',
      },
      {
        image: '/images/projects/skinstric/skinstric-results.responsive.png',
        label: '09 / Mobile Results View',
        desc: 'Compact mobile viewport layout for the AI skincare consultation dashboard.',
      },
    ],
    featured: true,
  },
  {
    id: 'ticketmaster-clone',
    title: 'Ticketmaster Platform Clone',
    category: 'Full-Stack Next.js',
    description:
      'A full-stack Ticketmaster platform clone featuring live event discovery, location-based filtering, Firebase auth, and Stripe Checkout.',
    longDescription:
      'A feature-rich ticket marketplace application integrating the Ticketmaster Discovery API for real-time event browsing and search, secured with Firebase user authentication and backed by live Stripe payment checkout sessions.',
    techStack: [
      'Next.js App Router',
      'Ticketmaster Discovery API',
      'Firebase Auth',
      'Stripe',
      'Tailwind CSS',
      'Vercel',
    ],
    liveUrl: 'https://project-ticketmaster-59ml.vercel.app/',
    githubUrl: 'https://github.com/jamespa001/project-ticketmaster.git',
    imageUrl: '/images/projects/ticketmaster/tm-home.png',
    views: [
      {
        image: '/images/projects/ticketmaster/ticketmaster-home.dark.png',
        label: '01 / Event Discovery & Search (dark)',
        desc: 'Real-time event catalog powered by the Ticketmaster Discovery API in dark mode.',
      },
      {
        image: '/images/projects/ticketmaster/ticketmaster-home.light.png',
        label: '02 / Event Discovery & Search (light)',
        desc: 'Clean light mode theme displaying trending concerts and sports events.',
      },
      {
        image: '/images/projects/ticketmaster/ticketmaster-events.png',
        label: '03 / Location & Category Filters',
        desc: 'Advanced search filtering by category, location, and date range.',
      },
      {
        image: '/images/projects/ticketmaster/ticketmaster-checkout.png',
        label: '04 / Auth & Stripe Checkout',
        desc: 'Protected checkout routes with Firebase authentication and Stripe sessions.',
      },
      {
        image: '/images/projects/ticketmaster/ticketmaster-location.png',
        label: '05 / Location-Based Discovery',
        desc: 'Geographic filtering and radius-based search to find live events happening nearby.',
      },
      {
        image: '/images/projects/ticketmaster/ticketmaster-payment.png',
        label: '06 / Secure Payment Processing',
        desc: 'Integrated Stripe Checkout session for secure, seamless ticket purchasing.',
      },
      {
        image: '/images/projects/ticketmaster/ticketmaster-confirmation.png',
        label: '07 / Order Confirmation',
        desc: 'Post-purchase confirmation screen displaying order summary, receipt, and ticket details.',
      },
      {
        image:
          '/images/projects/ticketmaster/ticketmaster-confirmation.light.png',
        label: '08 / Order Confirmation (light)',
        desc: 'Light theme receipt view confirming digital ticket delivery and secure token generation.',
      },
      {
        image: '/images/projects/ticketmaster/ticketmaster-profile.png',
        label: '09 / User Dashboard & Profile',
        desc: 'Personalized user account management tracking past bookings and saved favorites.',
      },
      {
        image:
          '/images/projects/ticketmaster/ticketmaster-home.dark.responsive.png',
        label: '10 / Mobile Event Catalog',
        desc: 'Stacked mobile-responsive event discovery feed optimized for touchscreens.',
      },
      {
        image:
          '/images/projects/ticketmaster/ticketmaster-confirmation.responsive.png',
        label: '11 / Mobile Ticket Pass',
        desc: 'Mobile confirmation ticket card layout with scannable digital barcode view.',
      },
    ],
    featured: true,
  },
  {
    id: 'movie-browser',
    title: 'Movie Browser Application',
    category: 'React & Redux',
    description:
      'A dynamic movie search and browsing app built with React, Redux Toolkit, and the OMDb API.',
    longDescription:
      'Allows users to search through a vast movie database, view detailed information, and manage state efficiently using Redux Toolkit. Fully responsive and deployed on Vercel.',
    techStack: ['React', 'Redux Toolkit', 'OMDb API', 'Tailwind CSS', 'Vercel'],
    liveUrl: 'https://project-movie-browser-react.vercel.app/',
    githubUrl: 'https://github.com/jamespa001/project-movie-browser-react',
    imageUrl: '/images/projects/movie/movie-home.png',
    views: [
      {
        image: '/images/projects/movie/movie-home.png',
        label: '01 / Discover & Browse',
        desc: 'Browse trending titles and featured cinematic recommendations.',
      },
      {
        image: '/images/projects/movie/movie-search.rating.png',
        label: '02 / Search & Filter (Rating)',
        desc: 'Dynamic filtering by IMDb score via OMDb API and Redux Toolkit state.',
      },
      {
        image: '/images/projects/movie/movie-search.genre.png',
        label: '03 / Search & Filter (Genre)',
        desc: 'Category filtering to explore action, drama, sci-fi, and comedy titles.',
      },
      {
        image: '/images/projects/movie/movie-search.year.png',
        label: '04 / Search & Filter (Year)',
        desc: 'Release year sorting and chronological movie catalog exploration.',
      },
      {
        image: '/images/projects/movie/movie-detail.png',
        label: '05 / Detail View',
        desc: 'Comprehensive movie metadata, cast overview, and state tracking.',
      },
      {
        image: '/images/projects/movie/movie-memberexclusive.png',
        label: '06 / Member Exclusive',
        desc: 'Gated content access and protected member-only media tracks.',
      },
      {
        image: '/images/projects/movie/movie-home.responsive.png',
        label: '07 / Mobile Movie Grid',
        desc: 'Stacked mobile-adapted movie card grid scaled smoothly across phone viewports.',
      },
      {
        image: '/images/projects/movie/movie-detail.responsive.png',
        label: '08 / Mobile Detail View',
        desc: 'Responsive movie detail page layout formatted for compact mobile screens.',
      },
      {
        image: '/images/projects/movie/movie-memberexclusive.responsive.png',
        label: '09 / Mobile Member Access',
        desc: 'Optimized mobile layout for gated member content and media tracks.',
      },
      {
        image: '/images/projects/movie/movie-search.rating.responsive.png',
        label: '10 / Mobile Filter Panel',
        desc: 'Collapsed mobile search and filter drawer for streamlined browsing.',
      },
    ],
    featured: true,
  },
  {
    id: 'nft-marketplace-internship',
    title: 'NFT Marketplace & Virtual Internship Project',
    category: 'Frontend Architecture',
    description:
      'Advanced frontend virtual internship project featuring NFT marketplace components and AOS animations.',
    longDescription:
      'Completed virtual internship project featuring custom NFT marketplace components, skeleton loading states, AOS entrance animations, and dynamic filters, fully deployed on Vercel.',
    techStack: ['React', 'Tailwind CSS', 'AOS Animations', 'Vercel'],
    liveUrl: 'https://nft-marketplace-internship.vercel.app/',
    githubUrl: 'https://github.com/jamespa001/james-internship',
    imageUrl: '/images/projects/nft/nft-home.png',
    views: [
      {
        image: '/images/projects/nft/nft-home.png',
        label: '01 / Explore Marketplace',
        desc: 'Featured digital collectibles showcased with smooth AOS entrance animations.',
      },
      {
        image: '/images/projects/nft/nft-explore.png',
        label: '02 / Filter & Browse',
        desc: 'Dynamic category filtering and search capabilities for digital assets.',
      },
      {
        image: '/images/projects/nft/nft-explore.loadingstate.png',
        label: '03 / Loading States',
        desc: 'Skeleton loading states for asynchronous item grids and smooth UI transitions.',
      },
      {
        image: '/images/projects/nft/nft-detail.png',
        label: '04 / Asset Details',
        desc: 'Interactive bidding views, price history, and item specifications.',
      },
      {
        image: '/images/projects/nft/nft-author.png',
        label: '05 / Creator Profile',
        desc: 'User profile overview showcasing minted collections and creator stats.',
      },
      {
        image: '/images/projects/nft/nft-home.responsive.png',
        label: '06 / Mobile Marketplace Grid',
        desc: 'Mobile-adapted marketplace landing grid with fluid collectible card wrapping.',
      },
      {
        image: '/images/projects/nft/nft-author.responsive.png',
        label: '07 / Mobile Creator Profile',
        desc: 'Stacked creator profile layout optimized for mobile screens and tablets.',
      },
      {
        image: '/images/projects/nft/nft-detail.responsive.png',
        label: '08 / Mobile Bidding View',
        desc: 'Responsive item bidding and specification view formatted for compact viewports.',
      },
      {
        image: '/images/projects/nft/nft-explore.responsive.png',
        label: '09 / Mobile Catalog Filters',
        desc: 'Clean mobile filter drawer and asset category navigation layout.',
      },
    ],
    featured: true,
  },
  {
    id: 'summarist-reader',
    title: 'Summarist Reader App',
    category: 'Dashboard & UI',
    description:
      'Enables users to explore curated book summaries, search libraries, and manage reading lists.',
    longDescription:
      'A sleek, minimalist dashboard interface and responsive web application designed for exploring curated book summaries, searching libraries, and managing personalized reading lists.',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'React'],
    liveUrl: 'https://james-internship-2.vercel.app/',
    githubUrl: 'https://github.com/jamespa001/james-internship-2',
    imageUrl: '/images/projects/summarist/summarist-home.png',
    views: [
      {
        image: '/images/projects/summarist/summarist-home.png',
        label: '01 / Landing & Overview',
        desc: 'Sleek marketing landing page and platform feature highlights.',
      },
      {
        image: '/images/projects/summarist/summarist-home.1.png',
        label: '02 / Core Benefits',
        desc: 'Detailed breakdown of key value propositions and reading stats.',
      },
      {
        image: '/images/projects/summarist/summarist-home.2.png',
        label: '03 / Platform Preview',
        desc: 'Interactive preview showcasing curated book summary collections.',
      },
      {
        image: '/images/projects/summarist/summarist-login.png',
        label: '04 / Authentication',
        desc: 'Secure user sign-in and guest login integration.',
      },
      {
        image: '/images/projects/summarist/summarist-foryou.png',
        label: '05 / For You Feed',
        desc: 'Personalized book recommendations and dynamic category feeds.',
      },
      {
        image: '/images/projects/summarist/summarist-detail.png',
        label: '06 / Book Detail View',
        desc: 'Comprehensive book metadata, author info, and summary overviews.',
      },
      {
        image: '/images/projects/summarist/summarist-listen.png',
        label: '07 / Audio Player',
        desc: 'Interactive audio player interface for listening to book summaries.',
      },
      {
        image: '/images/projects/summarist/summarist-mylibrary.png',
        label: '08 / My Library',
        desc: 'Saved titles, bookmarks, and personal reading lists management.',
      },
      {
        image: '/images/projects/summarist/summarist-plan.png',
        label: '09 / Subscription Plans',
        desc: 'Tiered membership options and premium feature selections.',
      },
      {
        image: '/images/projects/summarist/summarist-checkout.png',
        label: '10 / Secure Checkout',
        desc: 'Stripe-powered payment integration for subscription processing.',
      },
      {
        image: '/images/projects/summarist/summarist-settings.png',
        label: '11 / Account Settings',
        desc: 'User profile preferences, membership status, and configuration.',
      },
      {
        image: '/images/projects/summarist/summarist-foryou.responsive.png',
        label: '12 / Mobile Feed View',
        desc: 'Mobile dashboard recommendation feed optimized for quick reading on the go.',
      },
      {
        image: '/images/projects/summarist/summarist-settings.responsive.png',
        label: '13 / Mobile Settings View',
        desc: 'Responsive account settings and user preference view configured for mobile screens.',
      },
    ],
    featured: true,
  },
];
