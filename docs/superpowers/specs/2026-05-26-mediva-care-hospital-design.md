# Mediva Care Hospital Design

## Goal

Build a production-style hospital website prototype for NexaFlow portfolio work. It must feel like a real multi-specialty hospital business website, not a thin landing page.

## Brand

Mediva Care Hospital is positioned as a premium multi-specialty hospital with calm design, fast emergency access, transparent departments, doctor discovery, appointment booking, health packages, and patient support.

## Pages

- Home: hero, emergency strip, highlights, featured departments, doctor spotlight, package teaser, trust indicators.
- Departments: full service catalog with 14 relevant departments and search/category filtering.
- Doctors: doctor directory with department and availability filters.
- Appointments: booking form with department/doctor/time selection and confirmation state.
- Emergency: emergency action panel, ambulance CTA, ER readiness, safety wording.
- Patient Info: admissions, billing, visiting hours, documents, insurance help, discharge support.
- Health Packages: 8 package catalog with compare feature.
- Insurance: insurance partner list and claim steps.
- Contact: location, timings, contact form, phone/email, quick actions.

## Signature Features

- Symptom-to-Department Guide: maps common symptom groups to likely hospital departments with safety language. It must not diagnose.
- Doctor Availability Filter: lets visitors narrow doctors by department and availability.
- Health Package Comparison: lets users select packages and compare tests, price, duration, and audience.
- Appointment Preview: prototype-safe form that confirms a local appointment request without sending medical data.
- Project Concierge Chatbot: floating assistant that can explain the prototype, pages, Shubham Goyal, NexaFlow-style delivery, and hospital flows. Live AI uses OpenRouter through a server-side function; if AI is unavailable, stored non-AI responses answer instead.

## Visual Direction

Use a clean medical palette: white, soft mint, deep navy, teal, and controlled red for emergency. Typography should feel crisp and institutional without looking cold. Layout should be multi-page, route-based, mobile-friendly, and more operational than decorative.

## Prototype Boundary

The site is a portfolio prototype. Forms and guides are simulated. Medical content is informational and should direct emergencies to urgent care.

## AI Boundary

The OpenRouter key must never be placed in front-end code. It belongs only in a Vercel environment variable named `OPENROUTER_API_KEY`. The local stored fallback is the required reliability layer and should remain useful even without AI.
