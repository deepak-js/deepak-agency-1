import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { TopBanner } from "@/components/site/TopBanner";
import { ScrollProgress } from "@/components/site/ScrollProgress";
import { SmoothScroll } from "@/components/site/SmoothScroll";
import { PageTransition } from "@/components/site/PageTransition";
import { AmbientAudio } from "@/components/site/AmbientAudio";
import { Toaster } from "@/components/ui/sonner";

function NotFoundComponent() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-hero px-4">
      <div aria-hidden className="absolute inset-0 bg-grid opacity-50" />
      <div className="relative max-w-lg text-center">
        <p className="text-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Error 404</p>
        <h1 className="mt-4 fluid-display text-serif text-gradient">Off the map.</h1>
        <p className="mt-4 text-muted-foreground">
          This page doesn't exist — or it has been retired. Let's get you back to a system that does.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link to="/" className="rounded-full bg-primary px-5 py-3 text-sm text-primary-foreground shadow-glow">Back home</Link>
          <Link to="/services" className="rounded-full border border-border/60 px-5 py-3 text-sm">See services</Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();
  console.error(error);
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-3xl text-serif">Something broke.</h1>
        <p className="mt-2 text-sm text-muted-foreground">{error.message}</p>
        <button
          onClick={() => { router.invalidate(); reset(); }}
          className="mt-6 rounded-full bg-primary px-5 py-2.5 text-sm text-primary-foreground"
        >
          Try again
        </button>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Heisen Labs — AI & automation studio" },
      { name: "description", content: "Heisen Labs is a boutique AI and automation studio. We build websites that rank, workflows that run overnight, and AI integrations that actually work." },
      { name: "theme-color", content: "#fafbff" },
      { property: "og:title", content: "Heisen Labs — AI & automation studio" },
      { property: "og:description", content: "Heisen Labs is a boutique AI and automation studio. We build websites that rank, workflows that run overnight, and AI integrations that actually work." },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Heisen Labs" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Heisen Labs — AI & automation studio" },
      { name: "twitter:description", content: "Heisen Labs is a boutique AI and automation studio. We build websites that rank, workflows that run overnight, and AI integrations that actually work." },
      { property: "og:image", content: "/og-image.png" },
      { name: "twitter:image", content: "/og-image.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&family=Instrument+Serif:ital@0;1&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500;600&display=swap" },
      { rel: "icon", href: "/favicon.ico" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png", sizes: "180x180" },
      { rel: "icon", href: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { rel: "icon", href: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
      { rel: "manifest", href: "/site.webmanifest" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              "@id": "#org",
              name: "Heisen Labs",
              description: "Boutique AI and automation studio building the systems behind business growth.",
              slogan: "The systems behind business growth.",
              email: "hello@heisenlabs.studio",
              foundingDate: "2023",
              areaServed: "Global",
              knowsAbout: [
                "AI integration",
                "Workflow automation",
                "Retrieval-augmented generation",
                "SEO engineering",
                "Web systems",
                "Data pipelines",
              ],
              sameAs: [
                "https://www.linkedin.com/company/heisenlabs",
                "https://github.com/heisenlabs",
                "https://x.com/heisenlabs",
              ],
            },
            {
              "@type": "WebSite",
              "@id": "#site",
              name: "Heisen Labs",
              inLanguage: "en",
              publisher: { "@id": "#org" },
              potentialAction: {
                "@type": "SearchAction",
                target: "/blog?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            },
          ],
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('hl_theme') || 'system';
                  if (theme === 'dark' || (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            `
          }}
        />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[70] focus:rounded-md focus:bg-primary focus:px-3 focus:py-2 focus:text-sm focus:text-primary-foreground">Skip to content</a>
      <ScrollProgress />
      <SmoothScroll />
      <div className="min-h-screen flex flex-col">
        <TopBanner />
        <SiteHeader />
        <main id="main" className="flex-1">
          <PageTransition>
            <Outlet />
          </PageTransition>
        </main>
        <SiteFooter />
        <AmbientAudio />
        <Toaster theme="light" position="bottom-center" richColors />
      </div>
    </QueryClientProvider>
  );
}
