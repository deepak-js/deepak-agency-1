import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

// Emerging convention: /llms.txt summarises the site in markdown for LLM crawlers.
// See https://llmstxt.org/
const body = `# Heisen Labs

> Boutique AI and automation studio. We build the systems behind business growth — websites that rank, workflows that run overnight, and AI integrations that actually work.

Named after the Heisenberg principle: the right system doesn't just observe your business, it changes it.

## What we do

- **AI Integrations** — LLMs and AI APIs plugged into the tools you already use.
- **Automation** — Event-driven workflows that quietly run the work while you sleep.
- **Web Systems** — Fast, accessible websites built to rank and convert.
- **SEO** — Technical and content SEO grounded in real intent.
- **Data Pipelines** — Ingest, transform, and report on one source of truth.
- **AI Agents** — Internal copilots and assistants grounded in your private data.

## How to engage

- **Starter** — from $4.5k. A focused web system, shipped in 3–6 weeks.
- **Systems** — from $12k. Web system plus your first automation or AI integration.
- **Studio** — ongoing partnership for teams shipping continuously.

We don't do throwaway prototypes. Every system we ship has structured logging, retries, alerts, and a named metric it must move.

## Pages

- / — Overview and featured case studies
- /about — Studio, team, principles
- /services — All six service pillars
- /services/ai-integrations
- /services/automation
- /services/web-systems
- /services/seo
- /services/data-pipelines
- /services/ai-agents
- /portfolio — Case studies with measured outcomes
- /pricing — Plans, what's included, comparison matrix
- /blog — Field notes on systems, RAG, automation, SEO
- /faq — Common questions about working with us
- /contact — Direct enquiries
- /book-a-call — 30-minute fit call

## Contact

- Email: hello@heisenlabs.studio
- Reply window: one business day
`;

export const Route = createFileRoute("/llms.txt")({
  server: {
    handlers: {
      GET: async () =>
        new Response(body, {
          headers: {
            "Content-Type": "text/markdown; charset=utf-8",
            "Cache-Control": "public, max-age=3600",
          },
        }),
    },
  },
});
