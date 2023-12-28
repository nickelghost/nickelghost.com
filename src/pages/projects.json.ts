import { getCollection } from "astro:content";

export async function GET() {
  const projects = await getCollection("projects");

  const processedProjects = projects
    .sort((a, b) => b.data.priority - a.data.priority)
    .map((p) => p.data)
    .map((p) =>
      p.image
        ? {
            ...p,
            image: {
              ...p.image,
              src: "https://nickelghost.com" + p.image.src,
            },
          }
        : p
    )
    .map((p) =>
      p.name === "nickelghost.com"
        ? {
            ...p,
            links: [
              {
                name: "Website",
                url: "https://nickelghost.com",
              },
              ...p.links,
            ],
          }
        : p
    );

  return new Response(JSON.stringify(processedProjects), {
    headers: { "content-type": "application/json" },
  });
}
