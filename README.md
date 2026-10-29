# HackPack - Cybersecurity Learning Platform

HackPack is a business-focused web application for a cybersecurity learning platform. It provides users with structured career roadmaps, video-based tool courses, curated free resources, and a searchable tool directory. 

This is the Version 2 frontend codebase, designed to be lightweight and easily integratable with a future backend.

## Features

- **Vertical Career Roadmaps**: Node-by-node progression for Cybersecurity Basics, SOC Analyst, Penetration Tester, Cloud Security, DFIR, and GRC.
- **Tool Courses**: Dedicated pages for 12 industry-standard security tools with video placeholder slots ready for backend integration.
- **Resource Library**: 46 curated, open-access external resources with live search, level filtering, and topic categorization.
- **Tools Directory**: Interactive directory with detailed modal popups explaining tool use cases and features.
- **Theme Switching**: Full Dark and Light mode support with dynamic logo swapping.
- **Responsive Design**: Mobile-optimized layouts, including a functional hamburger menu and a floating Assistant UI.
- **Interactive Assistant**: A guided demo assistant to help users navigate the platform.

## Project Structure

```text
cyberm/
├── index.html                  (Landing page — was project1/index.html)
├── login.html                  (Login page — was project1/login.html)
├── signup.html                 (Signup page — was project1/signup.html)
├── dashboard.html              (Learning platform — was project2/index.html)
│
├── css/
│   ├── landing.css             (was project1/style.css)
│   └── dashboard.css           (was project2/css/style.css)
│
├── js/
│   ├── users.js                (NEW — dummy user data store)
│   ├── auth.js                 (NEW — dummy authentication system)
│   ├── landing.js              (was project1/script.js — updated)
│   ├── motion.js               (was project1/motion.js — unchanged)
│   ├── login.js                (was project1/login.js — updated)
│   ├── signup.js               (was project1/signup.js — updated)
│   ├── data.js                 (was project2/js/data.js — unchanged)
│   └── dashboard.js            (was project2/js/script.js — updated)
│
└── assets/
    ├── cyberm-logo-light.png
    ├── cyberm-logo-dark.png
    ├── logo-light-theme.png
    └── logo-dark-theme.png