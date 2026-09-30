<!DOCTYPE html>

<html class="scroll-smooth" lang="id"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Alfi Permana Putra | Junior Web Developer</title>
<meta content="Portfolio Alfi Permana Putra, Junior Web Developer dari Purbalingga dengan pengalaman dalam Laravel, React.js, JavaScript, Tailwind CSS, MySQL, dan pengembangan aplikasi web." name="description"/>
<!-- Google Fonts & Material Symbols -->
<link href="https://fonts.googleapis.com" rel="preconnect"/>
<link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect"/>
<link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&amp;family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<!-- Tailwind Play CDN -->
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<script id="tailwind-config">
    tailwind.config = {
      darkMode: "class",
      theme: {
        extend: {
          "colors": {
            "on-secondary": "#ffffff",
            "tertiary-container": "#516177",
            "on-secondary-fixed": "#131b2e",
            "primary-fixed-dim": "#c3c0ff",
            "inverse-on-surface": "#eff1f3",
            "surface-variant": "#e0e3e5",
            "surface-bright": "#f7f9fb",
            "surface-container-lowest": "#ffffff",
            "primary-fixed": "#e2dfff",
            "primary": "#3525cd",
            "on-tertiary": "#ffffff",
            "on-surface-variant": "#464555",
            "inverse-primary": "#c3c0ff",
            "secondary-fixed-dim": "#bec6e0",
            "surface-container-low": "#f2f4f6",
            "outline-variant": "#c7c4d8",
            "on-tertiary-fixed": "#0b1c30",
            "surface-container": "#eceef0",
            "primary-container": "#4f46e5",
            "secondary-container": "#dae2fd",
            "error": "#ba1a1a",
            "tertiary-fixed-dim": "#b7c8e1",
            "background": "#f7f9fb",
            "on-primary": "#ffffff",
            "secondary-fixed": "#dae2fd",
            "surface-container-highest": "#e0e3e5",
            "inverse-surface": "#2d3133",
            "surface-container-high": "#e6e8ea",
            "surface-tint": "#4d44e3",
            "secondary": "#565e74",
            "on-secondary-container": "#5c647a",
            "on-secondary-fixed-variant": "#3f465c",
            "on-tertiary-container": "#ccdcf7",
            "on-primary-container": "#dad7ff",
            "tertiary-fixed": "#d3e4fe",
            "on-surface": "#191c1e",
            "outline": "#777587",
            "on-background": "#191c1e",
            "on-error-container": "#93000a",
            "on-primary-fixed-variant": "#3323cc",
            "surface-dim": "#d8dadc",
            "on-primary-fixed": "#0f0069",
            "surface": "#f7f9fb",
            "error-container": "#ffdad6",
            "tertiary": "#3a495f",
            "on-tertiary-fixed-variant": "#38485d",
            "on-error": "#ffffff"
          },
          "borderRadius": {
            "DEFAULT": "0.25rem",
            "lg": "0.5rem",
            "xl": "0.75rem",
            "full": "9999px"
          },
          "spacing": {
            "space-xl": "2.5rem",
            "gutter": "1.5rem",
            "space-md": "1rem",
            "space-lg": "1.5rem",
            "margin": "4rem",
            "space-xs": "0.25rem",
            "space-sm": "0.5rem",
            "gutter-mobile": "1rem",
            "space-2xl": "4rem",
            "margin-tablet": "2rem",
            "margin-mobile": "1.25rem",
            "space-3xl": "6rem"
          },
          "fontFamily": {
            "code-sm": ["JetBrains Mono"],
            "body-md": ["Plus Jakarta Sans"],
            "headline-lg": ["Plus Jakarta Sans"],
            "label-caps": ["JetBrains Mono"],
            "headline-lg-mobile": ["Plus Jakarta Sans"],
            "headline-md": ["Plus Jakarta Sans"],
            "body-sm": ["Plus Jakarta Sans"],
            "headline-sm": ["Plus Jakarta Sans"],
            "display-hero-mobile": ["Plus Jakarta Sans"],
            "display-hero": ["Plus Jakarta Sans"],
            "body-lg": ["Plus Jakarta Sans"],
            "code-md": ["JetBrains Mono"]
          },
          "fontSize": {
            "code-sm": ["12px", { "lineHeight": "18px", "letterSpacing": "0em", "fontWeight": "500" }],
            "body-md": ["15px", { "lineHeight": "24px", "letterSpacing": "0em", "fontWeight": "400" }],
            "headline-lg": ["32px", { "lineHeight": "40px", "letterSpacing": "-0.02em", "fontWeight": "600" }],
            "label-caps": ["11px", { "lineHeight": "16px", "letterSpacing": "0.08em", "fontWeight": "600" }],
            "headline-lg-mobile": ["26px", { "lineHeight": "34px", "letterSpacing": "-0.015em", "fontWeight": "600" }],
            "headline-md": ["22px", { "lineHeight": "30px", "letterSpacing": "-0.015em", "fontWeight": "600" }],
            "body-sm": ["13px", { "lineHeight": "20px", "letterSpacing": "0em", "fontWeight": "400" }],
            "headline-sm": ["18px", { "lineHeight": "26px", "letterSpacing": "-0.01em", "fontWeight": "600" }],
            "display-hero-mobile": ["36px", { "lineHeight": "44px", "letterSpacing": "-0.025em", "fontWeight": "700" }],
            "display-hero": ["56px", { "lineHeight": "64px", "letterSpacing": "-0.03em", "fontWeight": "700" }],
            "body-lg": ["17px", { "lineHeight": "28px", "letterSpacing": "-0.005em", "fontWeight": "400" }],
            "code-md": ["14px", { "lineHeight": "22px", "letterSpacing": "-0.01em", "fontWeight": "500" }]
          }
        },
      },
    }
  </script>
<style>
    .material-symbols-outlined {
      font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
      display: inline-block;
      vertical-align: middle;
      line-height: 1;
    }
    .elevation-card {
      box-shadow: 0 1px 3px rgba(15, 23, 42, 0.04), 0 6px 16px -4px rgba(15, 23, 42, 0.03);
      transition: transform 0.2s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.2s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.2s ease;
    }
    .elevation-card:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 6px -1px rgba(15, 23, 42, 0.05), 0 12px 24px -6px rgba(15, 23, 42, 0.06);
    }
    .custom-scrollbar::-webkit-scrollbar {
      width: 6px;
    }
    .custom-scrollbar::-webkit-scrollbar-track {
      background: rgba(0, 0, 0, 0.04);
    }
    .custom-scrollbar::-webkit-scrollbar-thumb {
      background: rgba(100, 116, 139, 0.3);
      border-radius: 9999px;
    }
  </style>
</head>
<body class="bg-surface text-on-surface dark:bg-inverse-surface dark:text-inverse-on-surface selection:bg-primary-container selection:text-on-primary-container min-h-screen flex flex-col font-body-md text-body-md antialiased transition-colors duration-300">
<!-- TopNavBar (Shared Component Anchor) -->
<header class="docked full-width top-0 z-50 sticky bg-surface/80 dark:bg-surface-container-lowest/80 backdrop-blur-md border-b border-outline-variant dark:border-outline/20 shadow-sm transition-colors duration-200">
<div class="flex justify-between items-center w-full px-gutter-mobile md:px-gutter max-w-[1200px] mx-auto h-16">
<!-- Brand Logo -->
<a class="flex items-center gap-space-xs font-headline-md text-headline-md font-bold tracking-tight text-on-surface dark:text-inverse-on-surface active:scale-95 transition-transform duration-150" href="#hero">
<span class="inline-block w-2.5 h-2.5 rounded-full bg-primary-container"></span>
<span>Alfi Permana Putra</span>
</a>
<!-- Desktop Navigation Links -->
<nav class="hidden lg:flex items-center gap-6">
<a class="nav-item text-primary dark:text-inverse-primary font-semibold border-b-2 border-primary dark:border-inverse-primary pb-1 font-body-md text-body-md hover:text-primary dark:hover:text-inverse-primary transition-all duration-200" data-nav="hero" href="#hero">Home</a>
<a class="nav-item text-on-surface-variant dark:text-surface-variant hover:text-on-surface dark:hover:text-inverse-on-surface transition-colors font-body-md text-body-md hover:text-primary dark:hover:text-inverse-primary" data-nav="about" href="#about">About</a>
<a class="nav-item text-on-surface-variant dark:text-surface-variant hover:text-on-surface dark:hover:text-inverse-on-surface transition-colors font-body-md text-body-md hover:text-primary dark:hover:text-inverse-primary" data-nav="skills" href="#skills">Skills</a>
<a class="nav-item text-on-surface-variant dark:text-surface-variant hover:text-on-surface dark:hover:text-inverse-on-surface transition-colors font-body-md text-body-md hover:text-primary dark:hover:text-inverse-primary" data-nav="projects" href="#projects">Projects</a>
<a class="nav-item text-on-surface-variant dark:text-surface-variant hover:text-on-surface dark:hover:text-inverse-on-surface transition-colors font-body-md text-body-md hover:text-primary dark:hover:text-inverse-primary" data-nav="experience" href="#experience">Experience</a>
<a class="nav-item text-on-surface-variant dark:text-surface-variant hover:text-on-surface dark:hover:text-inverse-on-surface transition-colors font-body-md text-body-md hover:text-primary dark:hover:text-inverse-primary" data-nav="education" href="#education">Education</a>
<a class="nav-item text-on-surface-variant dark:text-surface-variant hover:text-on-surface dark:hover:text-inverse-on-surface transition-colors font-body-md text-body-md hover:text-primary dark:hover:text-inverse-primary" data-nav="publications" href="#publications">Publications</a>
<a class="nav-item text-on-surface-variant dark:text-surface-variant hover:text-on-surface dark:hover:text-inverse-on-surface transition-colors font-body-md text-body-md hover:text-primary dark:hover:text-inverse-primary" data-nav="certifications" href="#certifications">Certifications</a>
<a class="nav-item text-on-surface-variant dark:text-surface-variant hover:text-on-surface dark:hover:text-inverse-on-surface transition-colors font-body-md text-body-md hover:text-primary dark:hover:text-inverse-primary" data-nav="contact" href="#contact">Contact</a>
</nav>
<!-- Trailing Action Cluster -->
<div class="flex items-center gap-space-sm">
<!-- Theme Toggle Button -->
<button aria-label="Toggle Theme" class="p-2 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container dark:text-surface-variant dark:hover:text-inverse-on-surface dark:hover:bg-inverse-surface active:scale-95 transition-all" id="themeToggleBtn">
<span class="material-symbols-outlined text-[20px]" id="themeIcon">light_mode</span>
</button>
<!-- CTA "Let's Talk" -->
<a class="hidden sm:inline-flex items-center justify-center px-4 py-2 rounded-lg font-headline-sm text-headline-sm font-semibold text-on-primary bg-primary-container hover:bg-primary transition-all duration-150 active:scale-95 shadow-sm" href="#contact">
          Let's Talk
        </a>
<!-- Mobile Drawer Toggle -->
<button aria-label="Open Navigation Menu" class="lg:hidden p-2 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container active:scale-95 transition-all" id="mobileMenuOpen">
<span class="material-symbols-outlined text-[24px]">menu</span>
</button>
</div>
</div>
</header>
<!-- Mobile Drawer / SideNavBar -->
<aside class="fixed inset-y-0 right-0 z-50 w-72 h-full bg-surface dark:bg-inverse-surface border-l border-outline-variant dark:border-outline/20 shadow-xl transform translate-x-full transition-transform duration-300 ease-in-out lg:hidden flex flex-col justify-between p-space-lg" id="mobileDrawer">
<div>
<div class="flex items-center justify-between pb-4 border-b border-outline-variant/60">
<div>
<div class="font-headline-sm text-headline-sm font-bold text-on-surface dark:text-inverse-on-surface">Alfi Permana Putra</div>
<div class="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider mt-0.5">Junior Web Developer</div>
</div>
<button aria-label="Close Navigation" class="p-1 rounded-lg text-on-surface-variant hover:bg-surface-container active:scale-95 transition-all" id="mobileMenuClose">
<span class="material-symbols-outlined text-[22px]">close</span>
</button>
</div>
<nav class="flex flex-col gap-1 mt-4">
<a class="mobile-nav-link flex items-center gap-space-sm bg-primary-container text-on-primary-container rounded-lg px-space-md py-space-sm font-semibold active:scale-98 transition-transform" href="#hero">
<span class="material-symbols-outlined text-[18px]">home</span>
<span>Home</span>
</a>
<a class="mobile-nav-link flex items-center gap-space-sm text-on-surface-variant dark:text-surface-variant px-space-md py-space-sm rounded-lg hover:bg-surface-container dark:hover:bg-surface-container-high transition-colors active:scale-98" href="#about">
<span class="material-symbols-outlined text-[18px]">person</span>
<span>About</span>
</a>
<a class="mobile-nav-link flex items-center gap-space-sm text-on-surface-variant dark:text-surface-variant px-space-md py-space-sm rounded-lg hover:bg-surface-container dark:hover:bg-surface-container-high transition-colors active:scale-98" href="#skills">
<span class="material-symbols-outlined text-[18px]">code</span>
<span>Skills</span>
</a>
<a class="mobile-nav-link flex items-center gap-space-sm text-on-surface-variant dark:text-surface-variant px-space-md py-space-sm rounded-lg hover:bg-surface-container dark:hover:bg-surface-container-high transition-colors active:scale-98" href="#projects">
<span class="material-symbols-outlined text-[18px]">terminal</span>
<span>Projects</span>
</a>
<a class="mobile-nav-link flex items-center gap-space-sm text-on-surface-variant dark:text-surface-variant px-space-md py-space-sm rounded-lg hover:bg-surface-container dark:hover:bg-surface-container-high transition-colors active:scale-98" href="#experience">
<span class="material-symbols-outlined text-[18px]">work</span>
<span>Experience</span>
</a>
<a class="mobile-nav-link flex items-center gap-space-sm text-on-surface-variant dark:text-surface-variant px-space-md py-space-sm rounded-lg hover:bg-surface-container dark:hover:bg-surface-container-high transition-colors active:scale-98" href="#education">
<span class="material-symbols-outlined text-[18px]">school</span>
<span>Education</span>
</a>
<a class="mobile-nav-link flex items-center gap-space-sm text-on-surface-variant dark:text-surface-variant px-space-md py-space-sm rounded-lg hover:bg-surface-container dark:hover:bg-surface-container-high transition-colors active:scale-98" href="#publications">
<span class="material-symbols-outlined text-[18px]">menu_book</span>
<span>Publications</span>
</a>
<a class="mobile-nav-link flex items-center gap-space-sm text-on-surface-variant dark:text-surface-variant px-space-md py-space-sm rounded-lg hover:bg-surface-container dark:hover:bg-surface-container-high transition-colors active:scale-98" href="#certifications">
<span class="material-symbols-outlined text-[18px]">verified</span>
<span>Certifications</span>
</a>
<a class="mobile-nav-link flex items-center gap-space-sm text-on-surface-variant dark:text-surface-variant px-space-md py-space-sm rounded-lg hover:bg-surface-container dark:hover:bg-surface-container-high transition-colors active:scale-98" href="#contact">
<span class="material-symbols-outlined text-[18px]">mail</span>
<span>Contact</span>
</a>
</nav>
</div>
<div class="pt-4 border-t border-outline-variant/60">
<a class="mobile-nav-link w-full py-2.5 px-4 rounded-lg bg-primary-container text-on-primary flex items-center justify-center gap-2 font-headline-sm text-headline-sm font-semibold shadow-sm active:scale-95 transition-transform" href="#contact">
<span>Let's Talk</span>
<span class="material-symbols-outlined text-[18px]">arrow_forward</span>
</a>
</div>
</aside>
<div class="fixed inset-0 bg-on-surface/40 backdrop-blur-sm z-40 hidden transition-opacity" id="drawerOverlay"></div>
<!-- MAIN CANVAS -->
<main class="flex-grow w-full max-w-[1200px] mx-auto px-gutter-mobile md:px-gutter">
<!-- HERO SECTION (#hero) -->
<section class="pt-12 md:pt-20 pb-space-2xl md:pb-space-3xl border-b border-outline-variant/40" id="hero">
<div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
<!-- Left Editorial Copy -->
<div class="lg:col-span-7 flex flex-col items-start space-y-6">
<!-- Status Pip & Badge -->
<div class="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-surface-container-lowest dark:bg-inverse-surface border border-outline-variant/80 shadow-sm">
<span class="relative flex h-2.5 w-2.5">
<span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
</span>
<span class="font-label-caps text-label-caps text-on-surface dark:text-inverse-on-surface">Open to Junior Web Developer Opportunities</span>
</div>
<!-- Role Label -->
<div class="inline-block px-2.5 py-1 rounded bg-secondary-container text-on-secondary-fixed font-label-caps text-label-caps tracking-widest uppercase">
            JUNIOR WEB DEVELOPER
          </div>
<!-- Editorial Headline -->
<h1 class="font-display-hero-mobile md:font-display-hero text-display-hero-mobile md:text-display-hero text-on-surface dark:text-inverse-on-surface font-extrabold tracking-tight">
            Building clean and functional web experiences.
          </h1>
<!-- Bio -->
<p class="font-body-lg text-body-lg text-on-surface-variant dark:text-surface-variant max-w-xl">
            Saya Alfi Permana Putra, lulusan Informatika yang memiliki minat pada Web Development dan pengalaman membangun aplikasi web melalui project akademik, kolaborasi, dan program MSIB.
          </p>
<!-- CTAs -->
<div class="flex flex-wrap items-center gap-4 pt-2">
<a class="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-on-surface text-on-primary hover:bg-secondary transition-all duration-200 font-headline-sm text-headline-sm font-semibold active:scale-95 shadow-sm" href="#projects">
              View My Projects
            </a>
<a class="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-outline-variant hover:border-outline bg-surface-container-lowest dark:bg-inverse-surface text-on-surface dark:text-inverse-on-surface hover:bg-surface-container dark:hover:bg-surface-container-high transition-all duration-200 font-headline-sm text-headline-sm font-semibold active:scale-95" href="#contact">
              Let's Connect
            </a>
</div>
<!-- Social Links -->
<div class="flex items-center gap-4 pt-3 text-on-surface-variant">
<span class="font-code-sm text-code-sm text-outline">connect:</span>
<a class="p-2 rounded-lg border border-outline-variant/60 bg-surface-container-lowest dark:bg-inverse-surface hover:text-primary transition-all duration-150 active:scale-95" href="https://github.com/AlfiPermana" rel="noopener noreferrer" target="_blank" title="GitHub">
<svg class="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"></path></svg>
</a>
<a class="p-2 rounded-lg border border-outline-variant/60 bg-surface-container-lowest dark:bg-inverse-surface hover:text-primary transition-all duration-150 active:scale-95" href="https://www.linkedin.com/in/alfi-permana" rel="noopener noreferrer" target="_blank" title="LinkedIn">
<svg class="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg>
</a>
<a class="p-2 rounded-lg border border-outline-variant/60 bg-surface-container-lowest dark:bg-inverse-surface hover:text-primary transition-all duration-150 active:scale-95" href="mailto:alfipermana1@gmail.com" title="Email Alfi">
<span class="material-symbols-outlined text-[20px]">mail</span>
</a>
</div>
</div>
<!-- Right Terminal Mockup -->
<div class="lg:col-span-5 w-full">
<div class="rounded-xl overflow-hidden border border-outline-variant bg-[#0F172A] text-slate-100 shadow-xl">
<!-- Window Bar -->
<div class="flex items-center justify-between px-4 py-3 bg-[#1E293B] border-b border-slate-700/60">
<div class="flex items-center gap-2">
<span class="w-3 h-3 rounded-full bg-rose-500"></span>
<span class="w-3 h-3 rounded-full bg-amber-500"></span>
<span class="w-3 h-3 rounded-full bg-emerald-500"></span>
</div>
<span class="font-code-sm text-code-sm text-slate-400">developer-profile.ts</span>
<div class="w-12"></div>
</div>
<!-- Terminal Code Body -->
<div class="p-5 font-code-sm text-code-sm leading-relaxed overflow-x-auto custom-scrollbar">
<p><span class="text-indigo-400">const</span> <span class="text-emerald-400">developerProfile</span> = {</p>
<p class="pl-4"><span class="text-slate-400">name:</span> <span class="text-amber-300">'Alfi Permana Putra'</span>,</p>
<p class="pl-4"><span class="text-slate-400">role:</span> <span class="text-amber-300">'Junior Web Developer'</span>,</p>
<p class="pl-4"><span class="text-slate-400">location:</span> <span class="text-amber-300">'Purbalingga, ID'</span>,</p>
<p class="pl-4"><span class="text-slate-400">education:</span> <span class="text-amber-300">'S1 Informatika - Amikom'</span>,</p>
<p class="pl-4"><span class="text-slate-400">skills:</span> [</p>
<p class="pl-8 text-emerald-300">'Laravel', 'React.js', 'Tailwind CSS', 'MySQL', 'API Integration'</p>
<p class="pl-4">],</p>
<p class="pl-4"><span class="text-slate-400">passion:</span> <span class="text-amber-300">'Clean architecture &amp; intuitive UX'</span>,</p>
<p class="pl-4"><span class="text-slate-400">availability:</span> <span class="text-indigo-300">true</span></p>
<p>};</p>
<div class="mt-4 pt-3 border-t border-slate-800 text-slate-400 flex items-center justify-between">
<span>// Ready to collaborate</span>
<span class="animate-pulse text-indigo-400">● Live</span>
</div>
</div>
</div>
</div>
</div>
</section>
<!-- ABOUT SECTION (#about) -->
<section class="py-space-2xl md:py-space-3xl border-b border-outline-variant/40" id="about">
<div class="max-w-3xl mb-12">
<span class="font-label-caps text-label-caps text-primary dark:text-inverse-primary uppercase tracking-widest">Background &amp; Foundation</span>
<h2 class="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface dark:text-inverse-on-surface mt-2 font-bold tracking-tight">About Me</h2>
</div>
<div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
<!-- Narrative Paragraphs -->
<div class="lg:col-span-7 space-y-5 text-on-surface-variant dark:text-surface-variant font-body-lg text-body-lg leading-relaxed">
<p>
<strong class="text-on-surface dark:text-inverse-on-surface font-semibold">Alfi Permana Putra</strong> merupakan lulusan S1 Informatika Universitas Amikom Purwokerto. Memiliki pengalaman mengikuti program Magang dan Studi Independen Bersertifikat (MSIB) pada jalur <em>'Platform and Web Developer for Financial/Banking Service'</em>. Dalam program tersebut, Alfi berpengalaman memimpin anggota kelompok dalam merancang proyek berbasis website.
          </p>
<p>
            Alfi memiliki dasar HTML, CSS, dan JavaScript serta terus mengembangkan keterampilan Laravel, React.js, Tailwind CSS, dan MySQL melalui pembelajaran mandiri dan latihan proyek nyata.
          </p>
</div>
<!-- 4 Clean Info Cards Grid -->
<div class="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
<div class="p-4 rounded-xl bg-surface-container-lowest dark:bg-inverse-surface border border-outline-variant/70 elevation-card">
<div class="flex items-center gap-2 text-primary dark:text-inverse-primary mb-2">
<span class="material-symbols-outlined text-[20px]">school</span>
<span class="font-label-caps text-label-caps text-outline uppercase tracking-wider">Education</span>
</div>
<div class="font-headline-sm text-headline-sm font-semibold text-on-surface dark:text-inverse-on-surface">S1 Informatika</div>
<div class="font-body-sm text-body-sm text-on-surface-variant dark:text-surface-variant mt-1">Universitas Amikom Purwokerto</div>
</div>
<div class="p-4 rounded-xl bg-surface-container-lowest dark:bg-inverse-surface border border-outline-variant/70 elevation-card">
<div class="flex items-center gap-2 text-primary dark:text-inverse-primary mb-2">
<span class="material-symbols-outlined text-[20px]">grade</span>
<span class="font-label-caps text-label-caps text-outline uppercase tracking-wider">GPA Status</span>
</div>
<div class="font-headline-sm text-headline-sm font-semibold text-on-surface dark:text-inverse-on-surface">3.60 / 4.00</div>
<div class="font-body-sm text-body-sm text-on-surface-variant dark:text-surface-variant mt-1">Graduated with honors</div>
</div>
<div class="p-4 rounded-xl bg-surface-container-lowest dark:bg-inverse-surface border border-outline-variant/70 elevation-card">
<div class="flex items-center gap-2 text-primary dark:text-inverse-primary mb-2">
<span class="material-symbols-outlined text-[20px]">location_on</span>
<span class="font-label-caps text-label-caps text-outline uppercase tracking-wider">Location</span>
</div>
<div class="font-headline-sm text-headline-sm font-semibold text-on-surface dark:text-inverse-on-surface">Purbalingga, ID</div>
<div class="font-body-sm text-body-sm text-on-surface-variant dark:text-surface-variant mt-1">Central Java (WIB)</div>
</div>
<div class="p-4 rounded-xl bg-surface-container-lowest dark:bg-inverse-surface border border-outline-variant/70 elevation-card">
<div class="flex items-center gap-2 text-primary dark:text-inverse-primary mb-2">
<span class="material-symbols-outlined text-[20px]">code</span>
<span class="font-label-caps text-label-caps text-outline uppercase tracking-wider">Focus</span>
</div>
<div class="font-headline-sm text-headline-sm font-semibold text-on-surface dark:text-inverse-on-surface">Web Development</div>
<div class="font-body-sm text-body-sm text-on-surface-variant dark:text-surface-variant mt-1">Frontend &amp; Backend Solutions</div>
</div>
</div>
</div>
</section>
<!-- SKILLS SECTION (#skills) -->
<section class="py-space-2xl md:py-space-3xl border-b border-outline-variant/40" id="skills">
<div class="max-w-3xl mb-12">
<span class="font-label-caps text-label-caps text-primary dark:text-inverse-primary uppercase tracking-widest">Capabilities</span>
<h2 class="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface dark:text-inverse-on-surface mt-2 font-bold tracking-tight">Tech Stack &amp; Skills</h2>
<p class="font-body-md text-body-md text-on-surface-variant dark:text-surface-variant mt-1">Teknologi dan instrumen yang digunakan dalam membangun solusi web.</p>
</div>
<!-- Bento-style Categorized Grid -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
<!-- Frontend Card -->
<div class="p-6 rounded-xl bg-surface-container-lowest dark:bg-inverse-surface border border-outline-variant/70 elevation-card">
<div class="flex items-center gap-3 mb-4">
<span class="p-2 rounded-lg bg-surface-container dark:bg-surface-container-high text-primary dark:text-inverse-primary">
<span class="material-symbols-outlined text-[22px]">devices</span>
</span>
<h3 class="font-headline-sm text-headline-sm font-semibold text-on-surface dark:text-inverse-on-surface">Frontend</h3>
</div>
<p class="font-body-sm text-body-sm text-on-surface-variant dark:text-surface-variant mb-4">Membangun user interface yang terstruktur, responsif, dan dinamis.</p>
<div class="flex flex-wrap gap-2">
<span class="px-3 py-1 rounded-full font-code-sm text-code-sm bg-surface-container-low dark:bg-surface-container-high border border-outline-variant/50 hover:border-primary transition-colors">HTML5</span>
<span class="px-3 py-1 rounded-full font-code-sm text-code-sm bg-surface-container-low dark:bg-surface-container-high border border-outline-variant/50 hover:border-primary transition-colors">CSS3</span>
<span class="px-3 py-1 rounded-full font-code-sm text-code-sm bg-surface-container-low dark:bg-surface-container-high border border-outline-variant/50 hover:border-primary transition-colors">JavaScript (ES6+)</span>
<span class="px-3 py-1 rounded-full font-code-sm text-code-sm bg-surface-container-low dark:bg-surface-container-high border border-outline-variant/50 hover:border-primary transition-colors">React.js</span>
<span class="px-3 py-1 rounded-full font-code-sm text-code-sm bg-surface-container-low dark:bg-surface-container-high border border-outline-variant/50 hover:border-primary transition-colors">Tailwind CSS</span>
</div>
</div>
<!-- Backend Card -->
<div class="p-6 rounded-xl bg-surface-container-lowest dark:bg-inverse-surface border border-outline-variant/70 elevation-card">
<div class="flex items-center gap-3 mb-4">
<span class="p-2 rounded-lg bg-surface-container dark:bg-surface-container-high text-primary dark:text-inverse-primary">
<span class="material-symbols-outlined text-[22px]">dns</span>
</span>
<h3 class="font-headline-sm text-headline-sm font-semibold text-on-surface dark:text-inverse-on-surface">Backend</h3>
</div>
<p class="font-body-sm text-body-sm text-on-surface-variant dark:text-surface-variant mb-4">Perancangan arsitektur server, integrasi API, dan penanganan logika data.</p>
<div class="flex flex-wrap gap-2">
<span class="px-3 py-1 rounded-full font-code-sm text-code-sm bg-surface-container-low dark:bg-surface-container-high border border-outline-variant/50 hover:border-primary transition-colors">Laravel</span>
<span class="px-3 py-1 rounded-full font-code-sm text-code-sm bg-surface-container-low dark:bg-surface-container-high border border-outline-variant/50 hover:border-primary transition-colors">Django</span>
<span class="px-3 py-1 rounded-full font-code-sm text-code-sm bg-surface-container-low dark:bg-surface-container-high border border-outline-variant/50 hover:border-primary transition-colors">RESTful APIs</span>
</div>
</div>
<!-- Database Card -->
<div class="p-6 rounded-xl bg-surface-container-lowest dark:bg-inverse-surface border border-outline-variant/70 elevation-card">
<div class="flex items-center gap-3 mb-4">
<span class="p-2 rounded-lg bg-surface-container dark:bg-surface-container-high text-primary dark:text-inverse-primary">
<span class="material-symbols-outlined text-[22px]">database</span>
</span>
<h3 class="font-headline-sm text-headline-sm font-semibold text-on-surface dark:text-inverse-on-surface">Database</h3>
</div>
<p class="font-body-sm text-body-sm text-on-surface-variant dark:text-surface-variant mb-4">Desain skema relasional, optimasi kueri, dan manajemen integritas data.</p>
<div class="flex flex-wrap gap-2">
<span class="px-3 py-1 rounded-full font-code-sm text-code-sm bg-surface-container-low dark:bg-surface-container-high border border-outline-variant/50 hover:border-primary transition-colors">MySQL</span>
<span class="px-3 py-1 rounded-full font-code-sm text-code-sm bg-surface-container-low dark:bg-surface-container-high border border-outline-variant/50 hover:border-primary transition-colors">Database Modeling</span>
<span class="px-3 py-1 rounded-full font-code-sm text-code-sm bg-surface-container-low dark:bg-surface-container-high border border-outline-variant/50 hover:border-primary transition-colors">CRUD Architecture</span>
</div>
</div>
<!-- Other Technical -->
<div class="p-6 rounded-xl bg-surface-container-lowest dark:bg-inverse-surface border border-outline-variant/70 elevation-card">
<div class="flex items-center gap-3 mb-4">
<span class="p-2 rounded-lg bg-surface-container dark:bg-surface-container-high text-primary dark:text-inverse-primary">
<span class="material-symbols-outlined text-[22px]">build</span>
</span>
<h3 class="font-headline-sm text-headline-sm font-semibold text-on-surface dark:text-inverse-on-surface">Other Technical</h3>
</div>
<p class="font-body-sm text-body-sm text-on-surface-variant dark:text-surface-variant mb-4">Fondasi infrastruktur jaringan dan produktivitas dokumentasi teknis.</p>
<div class="flex flex-wrap gap-2">
<span class="px-3 py-1 rounded-full font-code-sm text-code-sm bg-surface-container-low dark:bg-surface-container-high border border-outline-variant/50 hover:border-primary transition-colors">Basic Networking</span>
<span class="px-3 py-1 rounded-full font-code-sm text-code-sm bg-surface-container-low dark:bg-surface-container-high border border-outline-variant/50 hover:border-primary transition-colors">Microsoft Word</span>
<span class="px-3 py-1 rounded-full font-code-sm text-code-sm bg-surface-container-low dark:bg-surface-container-high border border-outline-variant/50 hover:border-primary transition-colors">Microsoft Excel</span>
<span class="px-3 py-1 rounded-full font-code-sm text-code-sm bg-surface-container-low dark:bg-surface-container-high border border-outline-variant/50 hover:border-primary transition-colors">Git &amp; Version Control</span>
</div>
</div>
<!-- Soft Skills -->
<div class="p-6 rounded-xl bg-surface-container-lowest dark:bg-inverse-surface border border-outline-variant/70 elevation-card md:col-span-2 lg:col-span-2">
<div class="flex items-center gap-3 mb-4">
<span class="p-2 rounded-lg bg-surface-container dark:bg-surface-container-high text-primary dark:text-inverse-primary">
<span class="material-symbols-outlined text-[22px]">groups</span>
</span>
<h3 class="font-headline-sm text-headline-sm font-semibold text-on-surface dark:text-inverse-on-surface">Soft Skills &amp; Working Style</h3>
</div>
<p class="font-body-sm text-body-sm text-on-surface-variant dark:text-surface-variant mb-4">Komitmen terhadap kolaborasi tim yang sehat, pemecahan masalah secara terstruktur, dan ketepatan waktu pengiriman.</p>
<div class="flex flex-wrap gap-2">
<span class="px-3.5 py-1.5 rounded-full font-code-sm text-code-sm bg-surface-container-low dark:bg-surface-container-high border border-outline-variant/50 hover:border-primary transition-colors">Problem Solving</span>
<span class="px-3.5 py-1.5 rounded-full font-code-sm text-code-sm bg-surface-container-low dark:bg-surface-container-high border border-outline-variant/50 hover:border-primary transition-colors">Team Collaboration</span>
<span class="px-3.5 py-1.5 rounded-full font-code-sm text-code-sm bg-surface-container-low dark:bg-surface-container-high border border-outline-variant/50 hover:border-primary transition-colors">Time Management</span>
<span class="px-3.5 py-1.5 rounded-full font-code-sm text-code-sm bg-surface-container-low dark:bg-surface-container-high border border-outline-variant/50 hover:border-primary transition-colors">Technical Leadership</span>
<span class="px-3.5 py-1.5 rounded-full font-code-sm text-code-sm bg-surface-container-low dark:bg-surface-container-high border border-outline-variant/50 hover:border-primary transition-colors">Active Communication</span>
</div>
</div>
</div>
</section>
<!-- SELECTED PROJECTS (#projects) -->
<section class="py-space-2xl md:py-space-3xl border-b border-outline-variant/40" id="projects">
<div class="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
<div>
<span class="font-label-caps text-label-caps text-primary dark:text-inverse-primary uppercase tracking-widest">Portfolio Showcase</span>
<h2 class="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface dark:text-inverse-on-surface mt-2 font-bold tracking-tight">Selected Projects</h2>
<p class="font-body-md text-body-md text-on-surface-variant dark:text-surface-variant mt-1">Karya nyata dari project akademik, kolaborasi tim, dan program industri.</p>
</div>
</div>
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
<!-- PROJECT 01: CROWDUMKM -->
<div class="flex flex-col justify-between rounded-xl bg-surface-container-lowest dark:bg-inverse-surface border border-outline-variant/70 p-6 elevation-card">
<div>
<div class="flex items-center justify-between font-label-caps text-label-caps text-on-surface-variant dark:text-surface-variant mb-3">
<span>2024 · INDUSTRY MSIB</span>
<span class="px-2 py-0.5 rounded bg-surface-container text-on-surface dark:bg-surface-container-high">Project Leader</span>
</div>
<h3 class="font-headline-md text-headline-md font-bold text-on-surface dark:text-inverse-on-surface mb-2">CROWDUMKM</h3>
<p class="font-body-md text-body-md text-on-surface-variant dark:text-surface-variant mb-6">
              Platform digital CROWDUMKM yang dikembangkan untuk mendukung akses pendanaan bagi UMKM dengan arsitektur modern.
            </p>
<div class="flex flex-wrap gap-1.5 mb-6">
<span class="px-2.5 py-1 rounded-full font-code-sm text-code-sm bg-surface-container-low dark:bg-surface-container-high border border-outline-variant/40">React.js</span>
<span class="px-2.5 py-1 rounded-full font-code-sm text-code-sm bg-surface-container-low dark:bg-surface-container-high border border-outline-variant/40">Django</span>
<span class="px-2.5 py-1 rounded-full font-code-sm text-code-sm bg-surface-container-low dark:bg-surface-container-high border border-outline-variant/40">REST API</span>
<span class="px-2.5 py-1 rounded-full font-code-sm text-code-sm bg-surface-container-low dark:bg-surface-container-high border border-outline-variant/40">Tailwind CSS</span>
</div>
</div>
<button class="w-full py-2.5 px-4 rounded-lg border border-outline-variant/80 hover:border-primary dark:hover:border-inverse-primary text-on-surface dark:text-inverse-on-surface hover:text-primary dark:hover:text-inverse-primary flex items-center justify-center gap-2 font-headline-sm text-headline-sm font-semibold transition-colors active:scale-98" onclick="openProjectModal('crowdumkm')">
<span>View Details</span>
<span class="material-symbols-outlined text-[18px]">open_in_new</span>
</button>
</div>
<!-- PROJECT 02: BATIK GIRI ALAM (Thesis Project - Special Badge) -->
<div class="relative flex flex-col justify-between rounded-xl bg-surface-container-lowest dark:bg-inverse-surface border-2 border-primary-container dark:border-inverse-primary p-6 elevation-card">
<div class="absolute -top-3 right-6 bg-primary-container text-on-primary font-label-caps text-label-caps uppercase px-3 py-1 rounded-full shadow-sm">
            Thesis Project
          </div>
<div>
<div class="flex items-center justify-between font-label-caps text-label-caps text-on-surface-variant dark:text-surface-variant mb-3">
<span>2026 · THESIS COLLABORATION</span>
<span class="px-2 py-0.5 rounded bg-secondary-container text-on-secondary-fixed">Backend Dev</span>
</div>
<h3 class="font-headline-md text-headline-md font-bold text-on-surface dark:text-inverse-on-surface mb-2">BATIK GIRI ALAM</h3>
<p class="font-body-md text-body-md text-on-surface-variant dark:text-surface-variant mb-6">
              Company profile dengan integrasi e-commerce, automated Tripay payment gateway, dan sistem workshop booking terpadu.
            </p>
<div class="flex flex-wrap gap-1.5 mb-6">
<span class="px-2.5 py-1 rounded-full font-code-sm text-code-sm bg-surface-container-low dark:bg-surface-container-high border border-outline-variant/40">Laravel</span>
<span class="px-2.5 py-1 rounded-full font-code-sm text-code-sm bg-surface-container-low dark:bg-surface-container-high border border-outline-variant/40">RajaOngkir API</span>
<span class="px-2.5 py-1 rounded-full font-code-sm text-code-sm bg-surface-container-low dark:bg-surface-container-high border border-outline-variant/40">Tripay</span>
<span class="px-2.5 py-1 rounded-full font-code-sm text-code-sm bg-surface-container-low dark:bg-surface-container-high border border-outline-variant/40">MySQL</span>
</div>
</div>
<button class="w-full py-2.5 px-4 rounded-lg bg-primary-container hover:bg-primary text-on-primary flex items-center justify-center gap-2 font-headline-sm text-headline-sm font-semibold transition-colors active:scale-98 shadow-sm" onclick="openProjectModal('batik')">
<span>View Details</span>
<span class="material-symbols-outlined text-[18px]">open_in_new</span>
</button>
</div>
<!-- PROJECT 03: PLAYSTATION RENTAL -->
<div class="flex flex-col justify-between rounded-xl bg-surface-container-lowest dark:bg-inverse-surface border border-outline-variant/70 p-6 elevation-card">
<div>
<div class="flex items-center justify-between font-label-caps text-label-caps text-on-surface-variant dark:text-surface-variant mb-3">
<span>2025 · ACADEMIC PROJECT</span>
<span class="px-2 py-0.5 rounded bg-surface-container text-on-surface dark:bg-surface-container-high">Developer</span>
</div>
<h3 class="font-headline-md text-headline-md font-bold text-on-surface dark:text-inverse-on-surface mb-2">PS RENTAL &amp; BOOKING</h3>
<p class="font-body-md text-body-md text-on-surface-variant dark:text-surface-variant mb-6">
              Web-based PlayStation rental and booking management system dengan live console inventory tracking dan dashboard admin.
            </p>
<div class="flex flex-wrap gap-1.5 mb-6">
<span class="px-2.5 py-1 rounded-full font-code-sm text-code-sm bg-surface-container-low dark:bg-surface-container-high border border-outline-variant/40">HTML / CSS</span>
<span class="px-2.5 py-1 rounded-full font-code-sm text-code-sm bg-surface-container-low dark:bg-surface-container-high border border-outline-variant/40">JavaScript</span>
<span class="px-2.5 py-1 rounded-full font-code-sm text-code-sm bg-surface-container-low dark:bg-surface-container-high border border-outline-variant/40">LocalStorage</span>
<span class="px-2.5 py-1 rounded-full font-code-sm text-code-sm bg-surface-container-low dark:bg-surface-container-high border border-outline-variant/40">Admin Dashboard</span>
</div>
</div>
<button class="w-full py-2.5 px-4 rounded-lg border border-outline-variant/80 hover:border-primary dark:hover:border-inverse-primary text-on-surface dark:text-inverse-on-surface hover:text-primary dark:hover:text-inverse-primary flex items-center justify-center gap-2 font-headline-sm text-headline-sm font-semibold transition-colors active:scale-98" onclick="openProjectModal('psrental')">
<span>View Details</span>
<span class="material-symbols-outlined text-[18px]">open_in_new</span>
</button>
</div>
</div>
</section>
<!-- EXPERIENCE SECTION (#experience) -->
<section class="py-space-2xl md:py-space-3xl border-b border-outline-variant/40" id="experience">
<div class="max-w-3xl mb-12">
<span class="font-label-caps text-label-caps text-primary dark:text-inverse-primary uppercase tracking-widest">Career Milestones</span>
<h2 class="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface dark:text-inverse-on-surface mt-2 font-bold tracking-tight">Experience</h2>
</div>
<div class="relative pl-6 sm:pl-8 border-l-2 border-outline-variant/60 space-y-12">
<!-- Timeline Item -->
<div class="relative group">
<div class="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-primary-container ring-4 ring-surface dark:ring-inverse-surface"></div>
<div class="p-6 md:p-8 rounded-xl bg-surface-container-lowest dark:bg-inverse-surface border border-outline-variant/70 elevation-card">
<div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
<div>
<h3 class="font-headline-md text-headline-md font-bold text-on-surface dark:text-inverse-on-surface">Halofina – MSIB Batch 7</h3>
<div class="font-body-md text-body-md font-semibold text-primary dark:text-inverse-primary mt-0.5">
                  Project Leader / Intern — Platform and Web Developer for Financial/Banking Service
                </div>
</div>
<span class="inline-block px-3 py-1 rounded-full font-code-sm text-code-sm bg-surface-container dark:bg-surface-container-high text-on-surface-variant dark:text-surface-variant whitespace-nowrap self-start sm:self-center">
                September 2024 – December 2024
              </span>
</div>
<p class="font-body-md text-body-md text-on-surface-variant dark:text-surface-variant mb-4">
              Terpilih dalam program Magang dan Studi Independen Bersertifikat (MSIB) Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi bekerjasama dengan Halofina (PT Akselerasi Edukasi Internasional).
            </p>
<ul class="space-y-2 text-on-surface-variant dark:text-surface-variant font-body-md text-body-md list-none">
<li class="flex items-start gap-2">
<span class="material-symbols-outlined text-[18px] text-primary dark:text-inverse-primary mt-0.5">check_circle</span>
<span>Memimpin anggota kelompok dalam merancang dan mengeksekusi proyek platform digital <strong>CROWDUMKM</strong>.</span>
</li>
<li class="flex items-start gap-2">
<span class="material-symbols-outlined text-[18px] text-primary dark:text-inverse-primary mt-0.5">check_circle</span>
<span>Menyusun strategi perancangan web menggunakan <strong>React.js</strong> untuk frontend dan <strong>Django</strong> untuk backend REST API.</span>
</li>
<li class="flex items-start gap-2">
<span class="material-symbols-outlined text-[18px] text-primary dark:text-inverse-primary mt-0.5">check_circle</span>
<span>Mengkoordinasikan analisis studi kasus, memecahkan kendala logika fungsional, dan mengawal alur pendanaan UMKM.</span>
</li>
<li class="flex items-start gap-2">
<span class="material-symbols-outlined text-[18px] text-primary dark:text-inverse-primary mt-0.5">check_circle</span>
<span>Mendapatkan apresiasi <em>Golden Ticket</em> dari Halofina atas performa kepemimpinan dan dedikasi teknis yang konsisten.</span>
</li>
</ul>
</div>
</div>
</div>
</section>
<!-- EDUCATION SECTION (#education) -->
<section class="py-space-2xl md:py-space-3xl border-b border-outline-variant/40" id="education">
<div class="max-w-3xl mb-12">
<span class="font-label-caps text-label-caps text-primary dark:text-inverse-primary uppercase tracking-widest">Academic Background</span>
<h2 class="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface dark:text-inverse-on-surface mt-2 font-bold tracking-tight">Education</h2>
</div>
<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
<!-- Universitas Amikom Purwokerto -->
<div class="p-6 md:p-8 rounded-xl bg-surface-container-lowest dark:bg-inverse-surface border border-outline-variant/70 elevation-card">
<div class="flex items-center justify-between mb-4">
<span class="p-2.5 rounded-lg bg-surface-container dark:bg-surface-container-high text-primary dark:text-inverse-primary">
<span class="material-symbols-outlined text-[24px]">school</span>
</span>
<span class="font-code-sm text-code-sm text-outline">2022 – 2026</span>
</div>
<h3 class="font-headline-sm text-headline-sm font-bold text-on-surface dark:text-inverse-on-surface">Universitas Amikom Purwokerto</h3>
<div class="font-body-md text-body-md text-primary dark:text-inverse-primary font-semibold mt-1">S1 Informatika</div>
<div class="mt-4 pt-4 border-t border-outline-variant/50 flex items-center justify-between">
<span class="font-body-sm text-body-sm text-on-surface-variant dark:text-surface-variant">Cumulative GPA:</span>
<span class="font-code-md text-code-md font-bold text-on-surface dark:text-inverse-on-surface bg-surface-container dark:bg-surface-container-high px-2.5 py-0.5 rounded">3.60 / 4.00</span>
</div>
</div>
<!-- SMK Negeri 1 Kutasari -->
<div class="p-6 md:p-8 rounded-xl bg-surface-container-lowest dark:bg-inverse-surface border border-outline-variant/70 elevation-card">
<div class="flex items-center justify-between mb-4">
<span class="p-2.5 rounded-lg bg-surface-container dark:bg-surface-container-high text-primary dark:text-inverse-primary">
<span class="material-symbols-outlined text-[24px]">router</span>
</span>
<span class="font-code-sm text-code-sm text-outline">2019 – 2022</span>
</div>
<h3 class="font-headline-sm text-headline-sm font-bold text-on-surface dark:text-inverse-on-surface">SMK Negeri 1 Kutasari</h3>
<div class="font-body-md text-body-md text-primary dark:text-inverse-primary font-semibold mt-1">Teknik Komputer dan Jaringan (TKJ)</div>
<div class="mt-4 pt-4 border-t border-outline-variant/50">
<span class="font-body-sm text-body-sm text-on-surface-variant dark:text-surface-variant">Dasar-dasar hardware komputer, perakitan, dan konfigurasi jaringan LAN/WAN.</span>
</div>
</div>
</div>
</section>
<!-- PUBLICATIONS SECTION (#publications) -->
<section class="py-space-2xl md:py-space-3xl border-b border-outline-variant/40" id="publications">
<div class="max-w-3xl mb-12">
<span class="font-label-caps text-label-caps text-primary dark:text-inverse-primary uppercase tracking-widest">Scholarly Works</span>
<h2 class="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface dark:text-inverse-on-surface mt-2 font-bold tracking-tight">Publications</h2>
<p class="font-body-md text-body-md text-on-surface-variant dark:text-surface-variant mt-1">Publikasi ilmiah dan artikel jurnal akademik terverifikasi.</p>
</div>
<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
<!-- Publication 01 -->
<div class="p-6 md:p-8 rounded-xl bg-surface-container-lowest dark:bg-inverse-surface border border-outline-variant/70 elevation-card flex flex-col justify-between">
<div>
<div class="flex items-center justify-between font-label-caps text-label-caps text-on-surface-variant dark:text-surface-variant mb-3">
<span>JURNAL ILMIAH · 2025</span>
<span class="px-2 py-0.5 rounded bg-surface-container dark:bg-surface-container-high text-on-surface dark:text-inverse-on-surface">JuMIn</span>
</div>
<h3 class="font-headline-sm text-headline-sm font-bold text-on-surface dark:text-inverse-on-surface mb-3 leading-snug">
              Perancangan Website Terintegrasi untuk Mendukung Akses Pendanaan bagi UMKM
            </h3>
<p class="font-body-sm text-body-sm text-on-surface-variant dark:text-surface-variant mb-6">
              Diterbitkan di <em>Jurnal Media Informatika (JuMIn) 2025</em>. Membahas metodologi perancangan platform pendanaan berbasis website bagi sektor usaha mikro kecil menengah.
            </p>
</div>
<a class="inline-flex items-center justify-between w-full py-2.5 px-4 rounded-lg bg-surface-container dark:bg-surface-container-high hover:bg-primary-container hover:text-on-primary transition-all duration-200 font-headline-sm text-headline-sm font-semibold text-on-surface dark:text-inverse-on-surface active:scale-98" href="https://ejournal.sisfokomtek.org/index.php/jumin/article/view/5373" rel="noopener noreferrer" target="_blank">
<span>Read Publication</span>
<span class="material-symbols-outlined text-[18px]">launch</span>
</a>
</div>
<!-- Publication 02 -->
<div class="p-6 md:p-8 rounded-xl bg-surface-container-lowest dark:bg-inverse-surface border border-outline-variant/70 elevation-card flex flex-col justify-between">
<div>
<div class="flex items-center justify-between font-label-caps text-label-caps text-on-surface-variant dark:text-surface-variant mb-3">
<span>ACADEMIC JOURNAL · 2026</span>
<span class="px-2 py-0.5 rounded bg-surface-container dark:bg-surface-container-high text-on-surface dark:text-inverse-on-surface">ACOPEN</span>
</div>
<h3 class="font-headline-sm text-headline-sm font-bold text-on-surface dark:text-inverse-on-surface mb-3 leading-snug">
              Laravel Integration Validates E-Commerce and Workshop Services
            </h3>
<p class="font-body-sm text-body-sm text-on-surface-variant dark:text-surface-variant mb-6">
              Diterbitkan di <em>Academia Open (ACOPEN) 2026</em>. Membahas validasi teknis integrasi Laravel untuk sistem e-commerce produk batik serta reservasi layanan workshop.
            </p>
</div>
<a class="inline-flex items-center justify-between w-full py-2.5 px-4 rounded-lg bg-surface-container dark:bg-surface-container-high hover:bg-primary-container hover:text-on-primary transition-all duration-200 font-headline-sm text-headline-sm font-semibold text-on-surface dark:text-inverse-on-surface active:scale-98" href="https://acopen.umsida.ac.id/index.php/acopen/article/view/14411" rel="noopener noreferrer" target="_blank">
<span>Read Publication</span>
<span class="material-symbols-outlined text-[18px]">launch</span>
</a>
</div>
</div>
</section>
<!-- CERTIFICATIONS SECTION (#certifications) -->
<section class="py-space-2xl md:py-space-3xl border-b border-outline-variant/40" id="certifications">
<div class="max-w-3xl mb-12">
<span class="font-label-caps text-label-caps text-primary dark:text-inverse-primary uppercase tracking-widest">Verified Credentials</span>
<h2 class="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface dark:text-inverse-on-surface mt-2 font-bold tracking-tight">Certifications</h2>
</div>
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
<!-- Cert 1 -->
<div class="p-5 rounded-xl bg-surface-container-lowest dark:bg-inverse-surface border border-outline-variant/70 elevation-card">
<div class="flex items-center gap-2 text-primary dark:text-inverse-primary mb-2">
<span class="material-symbols-outlined text-[20px]">verified</span>
<span class="font-label-caps text-label-caps text-outline">KEMDIKBUDRISTEK · 2024</span>
</div>
<h3 class="font-headline-sm text-headline-sm font-semibold text-on-surface dark:text-inverse-on-surface">Magang dan Studi Independen Bersertifikat (MSIB) Batch 7</h3>
<p class="font-body-sm text-body-sm text-on-surface-variant dark:text-surface-variant mt-2">Kampus Merdeka Mandiri</p>
</div>
<!-- Cert 2 -->
<div class="p-5 rounded-xl bg-surface-container-lowest dark:bg-inverse-surface border border-outline-variant/70 elevation-card">
<div class="flex items-center gap-2 text-primary dark:text-inverse-primary mb-2">
<span class="material-symbols-outlined text-[20px]">verified</span>
<span class="font-label-caps text-label-caps text-outline">HALOFINA · 2024</span>
</div>
<h3 class="font-headline-sm text-headline-sm font-semibold text-on-surface dark:text-inverse-on-surface">Platform and Web Developer for Financial/Banking Service</h3>
<p class="font-body-sm text-body-sm text-on-surface-variant dark:text-surface-variant mt-2">PT Akselerasi Edukasi Internasional</p>
</div>
<!-- Cert 3 -->
<div class="p-5 rounded-xl bg-surface-container-lowest dark:bg-inverse-surface border border-outline-variant/70 elevation-card">
<div class="flex items-center gap-2 text-primary dark:text-inverse-primary mb-2">
<span class="material-symbols-outlined text-[20px]">award_star</span>
<span class="font-label-caps text-label-caps text-outline">HONORARY · 2024</span>
</div>
<h3 class="font-headline-sm text-headline-sm font-semibold text-on-surface dark:text-inverse-on-surface">Certificate of Appreciation Golden Ticket</h3>
<p class="font-body-sm text-body-sm text-on-surface-variant dark:text-surface-variant mt-2">Halofina (Apresiasi Kinerja Terbaik)</p>
</div>
<!-- Cert 4 -->
<div class="p-5 rounded-xl bg-surface-container-lowest dark:bg-inverse-surface border border-outline-variant/70 elevation-card">
<div class="flex items-center gap-2 text-primary dark:text-inverse-primary mb-2">
<span class="material-symbols-outlined text-[20px]">smart_toy</span>
<span class="font-label-caps text-label-caps text-outline">AMIKOM</span>
</div>
<h3 class="font-headline-sm text-headline-sm font-semibold text-on-surface dark:text-inverse-on-surface">Certified Artificial Intelligence Associate (CAIA)</h3>
<p class="font-body-sm text-body-sm text-on-surface-variant dark:text-surface-variant mt-2">Universitas Amikom Purwokerto</p>
</div>
<!-- Cert 5 -->
<div class="p-5 rounded-xl bg-surface-container-lowest dark:bg-inverse-surface border border-outline-variant/70 elevation-card">
<div class="flex items-center gap-2 text-primary dark:text-inverse-primary mb-2">
<span class="material-symbols-outlined text-[20px]">translate</span>
<span class="font-label-caps text-label-caps text-outline">AMIKOM</span>
</div>
<h3 class="font-headline-sm text-headline-sm font-semibold text-on-surface dark:text-inverse-on-surface">English Certification Program</h3>
<p class="font-body-sm text-body-sm text-on-surface-variant dark:text-surface-variant mt-2">Universitas Amikom Purwokerto</p>
</div>
<!-- Cert 6 -->
<div class="p-5 rounded-xl bg-surface-container-lowest dark:bg-inverse-surface border border-outline-variant/70 elevation-card">
<div class="flex items-center gap-2 text-primary dark:text-inverse-primary mb-2">
<span class="material-symbols-outlined text-[20px]">desktop_windows</span>
<span class="font-label-caps text-label-caps text-outline">AMIKOM</span>
</div>
<h3 class="font-headline-sm text-headline-sm font-semibold text-on-surface dark:text-inverse-on-surface">Desktop Office Training (DOT)</h3>
<p class="font-body-sm text-body-sm text-on-surface-variant dark:text-surface-variant mt-2">Universitas Amikom Purwokerto</p>
</div>
</div>
</section>
<!-- CONTACT SECTION (#contact) -->
<section class="py-space-2xl md:py-space-3xl" id="contact">
<div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
<div class="lg:col-span-6 space-y-6">
<span class="font-label-caps text-label-caps text-primary dark:text-inverse-primary uppercase tracking-widest">Get In Touch</span>
<h2 class="font-headline-lg-mobile md:font-display-hero-mobile text-headline-lg-mobile md:text-display-hero-mobile text-on-surface dark:text-inverse-on-surface font-extrabold tracking-tight">
            Let's build something together.
          </h2>
<p class="font-body-lg text-body-lg text-on-surface-variant dark:text-surface-variant max-w-lg">
            Open to opportunities, collaborations, and conversations around web development. Jangan ragu untuk berdiskusi tentang peluang magang atau pekerjaan.
          </p>
<div class="pt-4 flex flex-wrap gap-4">
<a class="px-6 py-3 rounded-lg bg-primary-container hover:bg-primary text-on-primary font-headline-sm text-headline-sm font-semibold inline-flex items-center gap-2 active:scale-95 transition-all shadow-sm" href="mailto:alfipermana1@gmail.com">
<span class="material-symbols-outlined text-[20px]">mail</span>
<span>Get In Touch</span>
</a>
<a class="px-6 py-3 rounded-lg border border-outline-variant hover:border-outline bg-surface-container-lowest dark:bg-inverse-surface text-on-surface dark:text-inverse-on-surface font-headline-sm text-headline-sm font-semibold inline-flex items-center gap-2 active:scale-95 transition-all" href="https://www.linkedin.com/in/alfi-permana" rel="noopener noreferrer" target="_blank">
<span>LinkedIn</span>
<span class="material-symbols-outlined text-[18px]">open_in_new</span>
</a>
</div>
</div>
<div class="lg:col-span-6 grid grid-cols-1 gap-4">
<!-- Email Card -->
<div class="p-6 rounded-xl bg-surface-container-lowest dark:bg-inverse-surface border border-outline-variant/70 elevation-card flex items-center justify-between">
<div class="flex items-center gap-4">
<span class="p-3 rounded-xl bg-surface-container dark:bg-surface-container-high text-primary dark:text-inverse-primary">
<span class="material-symbols-outlined text-[24px]">mail</span>
</span>
<div>
<div class="font-label-caps text-label-caps text-outline uppercase tracking-wider">Email Address</div>
<a class="font-headline-sm text-headline-sm font-semibold text-on-surface dark:text-inverse-on-surface hover:text-primary transition-colors" href="mailto:alfipermana1@gmail.com">
                  alfipermana1@gmail.com
                </a>
</div>
</div>
<button class="p-2 rounded-lg hover:bg-surface-container dark:hover:bg-surface-container-high text-on-surface-variant transition-colors" onclick="copyToClipboard('alfipermana1@gmail.com', this)" title="Copy Email">
<span class="material-symbols-outlined text-[20px]">content_copy</span>
</button>
</div>
<!-- Phone Card -->
<div class="p-6 rounded-xl bg-surface-container-lowest dark:bg-inverse-surface border border-outline-variant/70 elevation-card flex items-center justify-between">
<div class="flex items-center gap-4">
<span class="p-3 rounded-xl bg-surface-container dark:bg-surface-container-high text-primary dark:text-inverse-primary">
<span class="material-symbols-outlined text-[24px]">call</span>
</span>
<div>
<div class="font-label-caps text-label-caps text-outline uppercase tracking-wider">Phone / WhatsApp</div>
<a class="font-headline-sm text-headline-sm font-semibold text-on-surface dark:text-inverse-on-surface hover:text-primary transition-colors" href="tel:+6285842964866">
                  +62 858-4296-4866
                </a>
</div>
</div>
<button class="p-2 rounded-lg hover:bg-surface-container dark:hover:bg-surface-container-high text-on-surface-variant transition-colors" onclick="copyToClipboard('+6285842964866', this)" title="Copy Phone Number">
<span class="material-symbols-outlined text-[20px]">content_copy</span>
</button>
</div>
<!-- Location Card -->
<div class="p-6 rounded-xl bg-surface-container-lowest dark:bg-inverse-surface border border-outline-variant/70 elevation-card flex items-center justify-between">
<div class="flex items-center gap-4">
<span class="p-3 rounded-xl bg-surface-container dark:bg-surface-container-high text-primary dark:text-inverse-primary">
<span class="material-symbols-outlined text-[24px]">pin_drop</span>
</span>
<div>
<div class="font-label-caps text-label-caps text-outline uppercase tracking-wider">Location</div>
<div class="font-headline-sm text-headline-sm font-semibold text-on-surface dark:text-inverse-on-surface">
                  Purbalingga, Indonesia
                </div>
</div>
</div>
<span class="font-code-sm text-code-sm text-outline">UTC+7</span>
</div>
</div>
</div>
</section>
</main>
<!-- FOOTER (Shared Component Anchor) -->
<footer class="full-width border-t border-outline-variant dark:border-outline/20 bg-surface-container-lowest dark:bg-surface-container-high transition-colors duration-200">
<div class="flex flex-col md:flex-row justify-between items-center w-full px-gutter-mobile md:px-gutter py-space-xl max-w-[1200px] mx-auto gap-space-lg">
<!-- Brand & Copyright -->
<div class="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
<span class="font-headline-sm text-headline-sm font-bold text-on-surface dark:text-inverse-on-surface">Alfi Permana Putra</span>
<span class="hidden sm:inline text-outline-variant">|</span>
<p class="font-body-sm text-body-sm text-on-surface-variant dark:text-surface-variant">
          © 2026 Alfi Permana Putra. Crafted with precision and clean architecture.
        </p>
</div>
<!-- Footer Quick Links -->
<div class="flex items-center gap-6 font-body-sm text-body-sm">
<a class="text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-inverse-primary transition-colors" href="https://github.com/AlfiPermana" rel="noopener noreferrer" target="_blank">GitHub</a>
<a class="text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-inverse-primary transition-colors" href="https://www.linkedin.com/in/alfi-permana" rel="noopener noreferrer" target="_blank">LinkedIn</a>
<a class="text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-inverse-primary transition-colors" href="mailto:alfipermana1@gmail.com">Email</a>
<a class="text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-inverse-primary transition-colors" href="https://ejournal.sisfokomtek.org/index.php/jumin/article/view/5373" rel="noopener noreferrer" target="_blank">JuMIn (2025)</a>
<a class="text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-inverse-primary transition-colors" href="https://acopen.umsida.ac.id/index.php/acopen/article/view/14411" rel="noopener noreferrer" target="_blank">ACOPEN (2026)</a>
</div>
</div>
</footer>
<!-- INTERACTIVE PROJECT DETAILS MODAL -->
<div class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-on-surface/50 backdrop-blur-sm hidden opacity-0 transition-opacity duration-200" id="projectModal">
<div class="relative w-full max-w-2xl bg-surface-container-lowest dark:bg-inverse-surface rounded-2xl border border-outline-variant shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto custom-scrollbar transform scale-95 transition-transform duration-200" id="modalBox">
<!-- Modal Close Button -->
<button class="absolute top-5 right-5 p-2 rounded-lg text-on-surface-variant hover:bg-surface-container dark:hover:bg-surface-container-high transition-colors" onclick="closeProjectModal()">
<span class="material-symbols-outlined text-[20px]">close</span>
</button>
<div id="modalContent">
<!-- Dynamically Populated Content -->
</div>
</div>
</div>
<!-- Toast Notification for Copy -->
<div class="fixed bottom-6 right-6 z-50 bg-[#0F172A] text-white px-4 py-2 rounded-lg font-code-sm text-code-sm shadow-xl flex items-center gap-2 transform translate-y-12 opacity-0 pointer-events-none transition-all duration-200" id="toastNotification">
<span class="material-symbols-outlined text-emerald-400 text-[18px]">check</span>
<span id="toastMessage">Copied to clipboard</span>
</div>
<!-- VANILLA JAVASCRIPT CONTROLLERS -->
<script>
    // 1. Theme Toggle Logic
    const themeToggleBtn = document.getElementById('themeToggleBtn');
    const themeIcon = document.getElementById('themeIcon');
    const htmlElement = document.documentElement;

    function applyTheme(isDark) {
      if (isDark) {
        htmlElement.classList.add('dark');
        themeIcon.textContent = 'dark_mode';
        localStorage.setItem('theme', 'dark');
      } else {
        htmlElement.classList.remove('dark');
        themeIcon.textContent = 'light_mode';
        localStorage.setItem('theme', 'light');
      }
    }

    // Default to Light as per Theme Configuration, but respect local storage if explicitly altered
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      applyTheme(true);
    } else {
      applyTheme(false);
    }

    themeToggleBtn.addEventListener('click', () => {
      const isDark = htmlElement.classList.contains('dark');
      applyTheme(!isDark);
    });

    // 2. Mobile Drawer Navigation Logic
    const mobileMenuOpen = document.getElementById('mobileMenuOpen');
    const mobileMenuClose = document.getElementById('mobileMenuClose');
    const mobileDrawer = document.getElementById('mobileDrawer');
    const drawerOverlay = document.getElementById('drawerOverlay');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

    function openDrawer() {
      mobileDrawer.classList.remove('translate-x-full');
      drawerOverlay.classList.remove('hidden');
    }

    function closeDrawer() {
      mobileDrawer.classList.add('translate-x-full');
      drawerOverlay.classList.add('hidden');
    }

    mobileMenuOpen.addEventListener('click', openDrawer);
    mobileMenuClose.addEventListener('click', closeDrawer);
    drawerOverlay.addEventListener('click', closeDrawer);
    mobileNavLinks.forEach(link => link.addEventListener('click', closeDrawer));

    // 3. Project Modal Data & Controller
    const projectData = {
      crowdumkm: {
        title: "CROWDUMKM",
        category: "Platform and Web Developer for Financial/Banking Service",
        role: "Project Leader",
        date: "September 2024 – December 2024",
        org: "Halofina MSIB Batch 7 (Kampus Merdeka)",
        tags: ["React.js", "Django", "REST API", "Tailwind CSS"],
        description: "Platform digital CROWDUMKM yang dirancang khusus untuk memfasilitasi dan mempercepat akses pendanaan bagi pelaku Usaha Mikro Kecil Menengah (UMKM) melalui alur yang terstandardisasi dan transparan.",
        contributions: [
          "Memimpin koordinasi tim beranggotakan multi-disiplin dalam perancangan produk web dari fase inisiasi hingga evaluasi akhir.",
          "Menyusun arsitektur frontend modular menggunakan React.js dan Tailwind CSS.",
          "Membantu perancangan struktur endpoint REST API dengan Django backend.",
          "Melakukan problem solving pada kendala integrasi data dan logika bisnis flow pendanaan UMKM.",
          "Menerima apresiasi 'Golden Ticket' dari Halofina atas pencapaian kepemimpinan proyek."
        ],
        academicPublication: {
          title: "Perancangan Website Terintegrasi untuk Mendukung Akses Pendanaan bagi UMKM",
          journal: "Jurnal Media Informatika (JuMIn) 2025",
          url: "https://ejournal.sisfokomtek.org/index.php/jumin/article/view/5373"
        }
      },
      batik: {
        title: "BATIK GIRI ALAM",
        category: "Company Profile with Integrated E-Commerce & Workshop Booking",
        role: "Backend Developer (Thesis Collaboration, 2 Person Team)",
        date: "April 2026 – July 2026",
        org: "Universitas Amikom Purwokerto",
        tags: ["Laravel", "RajaOngkir API", "Tripay Payment Gateway", "MySQL"],
        description: "Platform web terintegrasi untuk UKM Batik Giri Alam yang menggabungkan company profile interaktif, katalog belanja e-commerce dengan kalkulasi ongkir real-time, serta sistem booking workshop batik.",
        contributions: [
          "Mengembangkan sistem backend terstruktur berbasis framework Laravel.",
          "Mengintegrasikan RajaOngkir API untuk penentuan biaya pengiriman kurir domestik secara otomatis dan akurat.",
          "Mengimplementasikan payment gateway Tripay untuk transaksi perbankan dan e-wallet secara real-time.",
          "Merancang skema database MySQL untuk katalog produk, histori pesanan, dan jadwal slot reservasi workshop.",
          "Melakukan optimasi performa backend dan validasi keamanan transaksi data."
        ],
        academicPublication: {
          title: "Laravel Integration Validates E-Commerce and Workshop Services",
          journal: "Academia Open (ACOPEN) 2026",
          url: "https://acopen.umsida.ac.id/index.php/acopen/article/view/14411"
        }
      },
      psrental: {
        title: "PlayStation Rental & Booking System",
        category: "Web-based Management & Reservation System",
        role: "Developer",
        date: "June 2025 – July 2025",
        org: "Academic Project",
        tags: ["HTML", "CSS", "JavaScript", "LocalStorage", "Admin Dashboard"],
        description: "Aplikasi manajemen rental PlayStation yang dirancang untuk mengelola reservasi konsol secara online, pencatatan durasi sewa, dan laporan keuangan harian admin.",
        contributions: [
          "Merancang antarmuka booking interaktif dengan pemilihan jenis unit (PS3, PS4) dan durasi jam sewa.",
          "Mengembangkan panel admin untuk memantau status konsol yang sedang digunakan secara real-time.",
          "Menerapkan sistem kalkulasi billing otomatis berdasarkan lama pemakaian konsol.",
          "Menggunakan logika penyimpanan data lokal yang handal untuk demonstrasi fungsionalitas sistem."
        ]
      }
    };

    const projectModal = document.getElementById('projectModal');
    const modalBox = document.getElementById('modalBox');
    const modalContent = document.getElementById('modalContent');

    function openProjectModal(key) {
      const p = projectData[key];
      if (!p) return;

      let publicationHtml = '';
      if (p.academicPublication) {
        publicationHtml = `
          <div class="mt-6 p-4 rounded-xl bg-surface-container-low dark:bg-surface-container-high border border-outline-variant/60">
            <div class="flex items-center gap-2 text-primary dark:text-inverse-primary mb-1">
              <span class="material-symbols-outlined text-[18px]">menu_book</span>
              <span class="font-label-caps text-label-caps uppercase tracking-wider">Terkait Publikasi Ilmiah</span>
            </div>
            <div class="font-headline-sm text-headline-sm font-semibold text-on-surface dark:text-inverse-on-surface">${p.academicPublication.title}</div>
            <div class="font-body-sm text-body-sm text-on-surface-variant dark:text-surface-variant mt-0.5">${p.academicPublication.journal}</div>
            <a href="${p.academicPublication.url}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1.5 text-primary dark:text-inverse-primary font-headline-sm text-headline-sm font-semibold hover:underline mt-2">
              <span>Buka Dokumen Publikasi</span>
              <span class="material-symbols-outlined text-[16px]">open_in_new</span>
            </a>
          </div>
        `;
      }

      modalContent.innerHTML = `
        <div class="font-label-caps text-label-caps text-primary dark:text-inverse-primary uppercase tracking-widest mb-1">${p.category}</div>
        <h2 class="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg font-bold text-on-surface dark:text-inverse-on-surface mb-2">${p.title}</h2>
        <div class="flex flex-wrap items-center gap-2 text-on-surface-variant dark:text-surface-variant font-code-sm text-code-sm mb-4">
          <span>${p.role}</span>
          <span>•</span>
          <span>${p.org}</span>
          <span>•</span>
          <span>${p.date}</span>
        </div>

        <div class="flex flex-wrap gap-2 mb-6">
          ${p.tags.map(t => `<span class="px-2.5 py-1 rounded-full font-code-sm text-code-sm bg-surface-container dark:bg-surface-container-high border border-outline-variant/50">${t}</span>`).join('')}
        </div>

        <p class="font-body-lg text-body-lg text-on-surface-variant dark:text-surface-variant leading-relaxed mb-6">
          ${p.description}
        </p>

        <h3 class="font-headline-sm text-headline-sm font-bold text-on-surface dark:text-inverse-on-surface mb-3">Kontribusi & Implementasi Teknis</h3>
        <ul class="space-y-2.5 font-body-md text-body-md text-on-surface-variant dark:text-surface-variant">
          ${p.contributions.map(c => `
            <li class="flex items-start gap-2">
              <span class="material-symbols-outlined text-primary dark:text-inverse-primary text-[18px] mt-0.5">check_circle</span>
              <span>${c}</span>
            </li>
          `).join('')}
        </ul>

        ${publicationHtml}
      `;

      projectModal.classList.remove('hidden');
      setTimeout(() => {
        projectModal.classList.remove('opacity-0');
        modalBox.classList.remove('scale-95');
      }, 10);
      document.body.style.overflow = 'hidden';
    }

    function closeProjectModal() {
      projectModal.classList.add('opacity-0');
      modalBox.classList.add('scale-95');
      setTimeout(() => {
        projectModal.classList.add('hidden');
        document.body.style.overflow = '';
      }, 200);
    }

    projectModal.addEventListener('click', (e) => {
      if (e.target === projectModal) {
        closeProjectModal();
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !projectModal.classList.contains('hidden')) {
        closeProjectModal();
      }
    });

    // 4. Copy-to-Clipboard with Toast Notification
    const toast = document.getElementById('toastNotification');
    const toastMessage = document.getElementById('toastMessage');
    let toastTimeout;

    function copyToClipboard(text, btnElement) {
      navigator.clipboard.writeText(text).then(() => {
        toastMessage.textContent = `Tersalin: ${text}`;
        toast.classList.remove('translate-y-12', 'opacity-0');
        clearTimeout(toastTimeout);
        toastTimeout = setTimeout(() => {
          toast.classList.add('translate-y-12', 'opacity-0');
        }, 2500);

        if (btnElement) {
          const icon = btnElement.querySelector('.material-symbols-outlined');
          if (icon) {
            const originalText = icon.textContent;
            icon.textContent = 'check';
            setTimeout(() => {
              icon.textContent = originalText;
            }, 1800);
          }
        }
      }).catch(err => {
        console.error('Failed to copy', err);
      });
    }

    // 5. Active Nav Highlight on Scroll
    const sections = document.querySelectorAll('section[id]');
    const navItems = document.querySelectorAll('.nav-item');

    window.addEventListener('scroll', () => {
      let current = '';
      const scrollPos = window.pageYOffset + 120;

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
          current = section.getAttribute('id');
        }
      });

      navItems.forEach(item => {
        const dataNav = item.getAttribute('data-nav');
        if (dataNav === current) {
          item.className = "nav-item text-primary dark:text-inverse-primary font-semibold border-b-2 border-primary dark:border-inverse-primary pb-1 font-body-md text-body-md transition-all duration-200";
        } else {
          item.className = "nav-item text-on-surface-variant dark:text-surface-variant hover:text-on-surface dark:hover:text-inverse-on-surface transition-colors font-body-md text-body-md hover:text-primary dark:hover:text-inverse-primary";
        }
      });
    });
  </script>
</body></html>