import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetail } from "@/components/site/ServiceDetail";

export const Route = createFileRoute("/services/hosting")({
  head: () => ({
    meta: [
      { title: "Hosting & Maintenance — HeisenLabs" },
      { name: "description", content: "Monthly care so your site stays fast, secure, and up to date." },
      { property: "og:title", content: "Hosting & Maintenance — HeisenLabs" },
      { property: "og:url", content: "/services/hosting" },
    ],
    links: [{ rel: "canonical", href: "/services/hosting" }],
  }),
  component: () => (
    <ServiceDetail
      eyebrow="Hosting & Care"
      title="A team on call, every month."
      subtitle="Updates, backups, monitoring, and a real person to message when something breaks."
      includes={[
        "Daily off-site backups",
        "Uptime and performance monitoring",
        "Quarterly content and SEO refresh",
        "Priority response within 1 business day",
        "Monthly hours for tweaks and improvements",
      ]}
      outcomes={[
        "Peace of mind — we watch the site so you don't have to",
        "Consistent performance, even under load",
        "A site that keeps improving long after launch",
      ]}
    />
  ),
});
