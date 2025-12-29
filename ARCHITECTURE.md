# SEO Ecommerce Sales Assistant - Architecture

## System Overview

The application follows a modern Single Page Application (SPA) architecture with cloud-native backend services on Google Cloud.

## Data Flow & Components

```mermaid
graph TD
    User[User] -->|Visits| CDN[Firebase Hosting CDN]
    CDN -->|Serves| Client[React App (Vite)]
    
    subgraph "Frontend (Client)"
        Client -->|Navigates| Router[React Router]
        Client -->|State| Store[Zustand Store]
        Client -->|Tracking| Personalization[Personalization Engine]
        Client -->|Insights| Analytics[AI Analytics Dashboard]
    end
    
    subgraph "Google Cloud Backend Services"
        Client -->|Search Query| API[Google Cloud Functions / API]
        API -->|Get Embedding| VertexAI[Google Vertex AI]
        API -->|Vector Search| Search[Vertex AI Search]
        Search -->|Results| API
        API -->|JSON| Client
    end
```

## Optimized Directory Structure

```
.agent/               # Agent rules and workflows
api/                  # Google Cloud Functions (Backend API)
public/               # Static assets (robots.txt, sitemap.xml)
src/
├── api/              # API client wrappers (Fetch/Axios)
├── assets/           # Images, fonts, global styles
├── components/       # Shared UI components
│   ├── ui/           # Atomic components (Button, Input)
│   ├── layout/       # MainLayout, Header, Footer
│   └── seo/          # Meta, StructuredData, SEO wrappers
├── config/           # App constants and configuration
├── context/          # React Contexts (Auth, Personalization)
├── features/         # Feature-based modules (Logic + UI)
│   ├── search/       # Semantic Search components & hooks
│   ├── personalization/ # Tracking & Lifecycle engine
│   ├── cro/          # Conversion optimization elements
│   ├── analytics/    # AI Analytics & Audience Insights
│   ├── catalog/      # Product listing & details
│   ├── seo/          # Advanced SEO tools (Keywords, Technical)
│   └── content/      # Content marketing generator
├── hooks/            # Shared custom hooks
├── pages/            # Routed page components (Lazy loaded)
├── store/            # Zustand state management
├── types/            # TypeScript definitions
└── utils/            # Helper functions (Analytics, Formatting)
```

## Optimization Strategy

1.  **SEO**: Use `react-helmet-async` for dynamic tags and `vite-plugin-prerender` for static generation of key pages.
2.  **Performance**: Route-based code splitting using `React.lazy` and `Suspense`.
3.  **Personalization**: Lightweight tracking via `localStorage` and rule-based engine in `features/personalization`.
4.  **Google Cloud**: API folder mapped to Google Cloud Functions for secure AI search processing.
