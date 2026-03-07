import type { APIContext } from "astro";
import { getCollection } from "astro:content";

export async function GET({ site }: APIContext) {
  const origin = site?.origin ?? "";
  const projects = await getCollection("projects");

  const processedProjects = projects
    .sort((a, b) => b.data.priority - a.data.priority)
    .map((p) => p.data)
    // add the site URL to the image src so it's resolvable outside the site
    .map((p) =>
      p.image
        ? {
            ...p,
            image: {
              ...p.image,
              src: origin + p.image.src,
            },
          }
        : p,
    )
    // for the project of the actual site, add a link to the website as well
    .map((p) =>
      origin && p.name === new URL(origin).hostname
        ? {
            ...p,
            links: [
              {
                name: "Website",
                url: origin,
              },
              ...p.links,
            ],
          }
        : p,
    );

  return new Response(JSON.stringify(processedProjects), {
    headers: { "content-type": "application/json" },
  });
}
