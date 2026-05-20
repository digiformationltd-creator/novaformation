import { createFileRoute, notFound } from "@tanstack/react-router";
import { findService } from "@/lib/catalog";
import { ServiceDetail } from "@/components/site/ServiceDetail";

export const Route = createFileRoute("/usa-services/$slug")({
  loader: ({ params }) => {
    const service = findService("usa-services", params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.service.short} — Nova Formation Ltd` },
          { name: "description", content: loaderData.service.intro },
          { property: "og:title", content: `${loaderData.service.short} — Nova Formation Ltd` },
          { property: "og:description", content: loaderData.service.intro },
        ]
      : [],
  }),
  notFoundComponent: () => <div className="p-20 text-center">Service not found</div>,
  errorComponent: ({ error }) => <div className="p-20 text-center">Error: {error.message}</div>,
  component: () => <ServiceDetail service={Route.useLoaderData().service} />,
});
