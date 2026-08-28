import type { MetadataRoute } from "next";

const baseUrl = "https://tuscanyhorsetrekking.it";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: baseUrl },
    { url: `${baseUrl}/experiences/horseback-riding` },
    { url: `${baseUrl}/experiences/walk-with-goats-or-donkeys` },
    { url: `${baseUrl}/terms` },
    { url: `${baseUrl}/privacy` },
  ];
}
