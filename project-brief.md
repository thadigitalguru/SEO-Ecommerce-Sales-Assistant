# SEO Ecommerce Sales Assistant - Project Brief

## Project Overview
The **SEO Ecommerce Sales Assistant** is a high-performance, production-ready React application designed to maximize conversion and revenue. It integrates technical SEO, real-time sales lifecycle personalization, and AI-powered semantic search.

## Key Objectives
- **Drive Traffic**: Built-in technical SEO (SSR-ready, Metadata, Structured Data).
- **Personalize Experience**: Adapt content based on user intent and lifecycle stage (Awareness, Consideration, Decision).
- **Intelligent Discovery**: Semantic search using Azure OpenAI embeddings and Azure AI Search.
- **Maximize Conversion**: CRO-focused UI patterns (Sticky CTAs, Exit Intent, Trust Signals).

## Technical Core
- **Frontend**: React 19, Vite, TypeScript.
- **Styling**: Tailwind CSS v4 (using the @tailwindcss/vite plugin).
- **State**: Zustand for global state management.
- **Backend API**: Azure Functions (mapped to `/api`).
- **AI Infrastructure**: Azure OpenAI (Embeddings) + Azure AI Search (Vector Search).

## Build & Development Guidelines
- **Component Strategy**: Follow the atomic design pattern in `src/components`.
- **Feature Modules**: Business logic, hooks, and services reside in `src/features/[feature_name]`.
- **SEO Rules**: Every page must utilize the `SEO` components to manage dynamic meta tags and structured data.
- **Personalization**: Use the shared `Personalization` context to track user stage and drive dynamic component rendering.

## Deployment Profile
- **Target**: Azure Static Web Apps.
- **CI/CD**: GitHub Actions integrated for continuous delivery.
