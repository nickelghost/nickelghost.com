import { getCollection } from "astro:content";

export async function GET() {
  const workplaces = await getCollection("workplaces");

  const processedWorkplaces = workplaces
    .sort((a, b) => b.data.priority - a.data.priority)
    .map((wp) => wp.data);

  return new Response(JSON.stringify(processedWorkplaces), {
    headers: { "content-type": "application/json" },
  });
}
