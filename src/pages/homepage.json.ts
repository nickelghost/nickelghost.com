import homepage from "../content-static/homepage.json";

export async function GET() {
  return new Response(JSON.stringify(homepage), {
    headers: { "content-type": "application/json" },
  });
}
