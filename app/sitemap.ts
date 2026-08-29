import type { MetadataRoute } from "next";

const routes = [
  "",
  "/societe",
  "/nos-produits",
  "/distribution",
  "/nos-clients",
  "/developpement-durable",
  "/contact",
  "/devis",
  "/recrutement"
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `https://mafibramaroc.com${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8
  }));
}
