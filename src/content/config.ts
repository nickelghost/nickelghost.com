import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  type: "data",
  schema: z.object({
    name: z.string(),
    description: z.string(),
    technologies: z.array(z.string()),
    links: z.array(z.object({ name: z.string(), url: z.string() })),
  }),
});

const workplaces = defineCollection({
  type: "data",
  schema: z.object({
    companyName: z.string(),
    title: z.string(),
    description: z.string(),
    technologies: z.array(z.string()),
    startDate: z.string().regex(/\d{4}-\d{2}/),
    endDate: z.string().regex(/\d{4}-\d{2}/),
  }),
});

export const collections = {
  projects,
  workplaces,
};
