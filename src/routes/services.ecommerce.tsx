import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetail } from "@/components/site/ServiceDetail";

export const Route = createFileRoute("/services/ecommerce")({
  head: () => ({
    meta: [
      { title: "E-commerce — HeisenLabs" },
      { name: "description", content: "Online stores designed to load fast and convert visitors into customers." },
      { property: "og:title", content: "E-commerce — HeisenLabs" },
      { property: "og:url", content: "/services/ecommerce" },
    ],
    links: [{ rel: "canonical", href: "/services/ecommerce" }],
  }),
  component: () => (
    <ServiceDetail
      eyebrow="E-commerce"
      title="Stores that sell, not just exist."
      subtitle="From a tight catalogue to thousands of SKUs, we design checkout flows that don't get in the way."
      includes={[
        "Catalogue architecture and merchandising",
        "Custom product page templates",
        "Optimised checkout and cart UX",
        "Payments, shipping, and tax integration",
        "Inventory and fulfilment workflow setup",
      ]}
      outcomes={[
        "Higher add-to-cart and checkout completion rates",
        "Easy day-to-day store management",
        "A storefront that matches your brand",
      ]}
    />
  ),
});
