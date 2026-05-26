# Mediva Care Hospital Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a multi-page hospital website prototype with deep service content, doctor/package catalogs, safe patient flows, and unique healthcare interactions.

**Architecture:** Use a React/Vite single-page app with manual route state and Vercel rewrite fallback. Keep data in `src/data.js`, UI composition in `src/App.jsx`, and all visual styling in `src/styles.css`.

**Tech Stack:** React, Vite, CSS, lucide-react, local Unsplash assets.

---

### Task 1: Content Model

**Files:**
- Create: `src/data.js`

- [ ] Add navigation routes, departments, doctors, health packages, patient services, insurance partners, symptom mappings, stats, and image references.
- [ ] Keep every catalog relevant to a multi-specialty hospital.

### Task 2: Multi-Page UI

**Files:**
- Replace: `src/App.jsx`
- Replace: `src/main.jsx`
- Create: `src/styles.css`
- Update: `index.html`
- Create: `vercel.json`

- [ ] Implement Home, Departments, Doctors, Appointments, Emergency, Patient Info, Health Packages, Insurance, and Contact pages.
- [ ] Implement route navigation and direct path normalization.
- [ ] Implement symptom guide, doctor filters, package comparison, appointment confirmation, and contact form state.
- [ ] Add mobile-safe responsive layout and professional animation details.

### Task 3: Assets And Docs

**Files:**
- Download: `public/images/*.jpg`
- Update: `README.md`
- Update: `public/favicon.svg`

- [ ] Use local healthcare imagery and document prototype boundaries.
- [ ] Avoid medical diagnosis claims.

### Task 4: Project Concierge Chatbot

**Files:**
- Create: `src/chatKnowledge.js`
- Create: `api/chat.js`
- Update: `src/App.jsx`
- Update: `src/styles.css`
- Update: `README.md`

- [ ] Add a floating chatbot that can explain the prototype, hospital pages, Shubham Goyal, and NexaFlow-style delivery.
- [ ] Keep OpenRouter calls behind a server-side Vercel function with `OPENROUTER_API_KEY`.
- [ ] Add stored non-AI fallback responses that work when AI is missing, down, rate-limited, or returns no usable answer.
- [ ] Verify the chat widget works locally through client fallback and in production through `/api/chat`.

### Task 5: Verification And Delivery

- [ ] Run `npm run lint`.
- [ ] Run `npm run build`.
- [ ] Start local dev server and run browser QA on desktop and mobile.
- [ ] Verify all routes, filters, comparison, appointment form, emergency panel, and chatbot fallback.
- [ ] Push to GitHub, deploy to Vercel, verify public routes, and clean local project copy.
