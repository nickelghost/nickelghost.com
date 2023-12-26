import { getCollection } from "astro:content";

export async function GET() {
  const workplaces = await getCollection("workplaces");

  return new Response(JSON.stringify(workplaces.map((p) => p.data)), {
    headers: { "content-type": "application/json" },
  });
}
