import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetail } from "@/components/site/ServiceDetail";

export const Route = createFileRoute("/services/scheduling")({
  head: () => ({
    meta: [
      { title: "Scheduling — HeisenLabs" },
      { name: "description", content: "Booking and calendar tools woven into your site." },
      { property: "og:title", content: "Scheduling — HeisenLabs" },
      { property: "og:url", content: "/services/scheduling" },
    ],
    links: [{ rel: "canonical", href: "/services/scheduling" }],
  }),
  component: () => (
    <ServiceDetail
      eyebrow="Scheduling"
      title="Let visitors book themselves in."
      subtitle="Connect your calendar, set availability, and let prospects choose a time that works — automatically."
      includes={[
        "Calendar integration and availability rules",
        "Custom branded booking pages",
        "Email and SMS reminders",
        "Payment collection at booking",
        "CRM and webhook handoffs",
      ]}
      outcomes={[
        "Fewer no-shows and back-and-forth emails",
        "More booked time, less admin",
        "A booking flow that matches the rest of your brand",
      ]}
    />
  ),
});
