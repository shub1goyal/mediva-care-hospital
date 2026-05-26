# Mediva Care Hospital

Mediva Care Hospital is a production-style, multi-page hospital website prototype built for NexaFlow portfolio/client work.

## What It Shows

- Multi-page hospital website with direct routes
- 14-department hospital service catalog
- Doctor directory with department and availability filters
- Appointment request preview flow
- Emergency quick action panel
- Symptom-to-department guide with safety wording
- Health package catalog with package comparison
- Patient info, insurance, and contact pages
- Responsive desktop and mobile layout
- Floating AI concierge with stored non-AI fallback answers

## Pages

- `/`
- `/departments`
- `/doctors`
- `/appointments`
- `/emergency`
- `/patient-info`
- `/health-packages`
- `/insurance`
- `/contact`

## Tech

- React
- Vite
- CSS
- lucide-react icons
- Vercel Serverless Function for `/api/chat`
- OpenRouter-compatible chat completion endpoint

## Run Locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

The production output is generated in `dist/`.

## Deployment Settings

- Framework: Vite
- Build command: `npm run build`
- Output directory: `dist`
- Environment variables: `OPENROUTER_API_KEY` for live AI responses
- Vercel rewrite: all page routes serve the React app through `vercel.json`

## Chatbot Behavior

The chat widget explains the Mediva Care prototype, Shubham Goyal, NexaFlow-style delivery, hospital pages, departments, doctors, bookings, emergency guidance, health packages, and insurance flow.

`/api/chat` keeps the OpenRouter key on the server. If the key is missing, OpenRouter is unavailable, a free model is rate-limited, or the API returns an empty answer, the app returns stored fallback responses from `src/chatKnowledge.js`.

## Prototype Boundary

This is a portfolio-ready front-end prototype. Forms and health guidance are simulated. The symptom guide does not diagnose and emergency symptoms should always be handled by urgent medical care.
