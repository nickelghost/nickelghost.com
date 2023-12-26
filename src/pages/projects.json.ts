import { getCollection } from "astro:content";

export async function GET() {
  const projects = await getCollection("projects");

  return new Response(JSON.stringify(projects.map((p) => p.data)), {
    headers: { "content-type": "application/json" },
  });
}
