import { defineCollection, z } from "astro:content";

const monthRegex = /^(0[1-9]|1[0-2])\.\d{4}$/;

const projects = defineCollection({
  type: "data",
  schema: ({ image }) =>
    z.object({
      priority: z.number(),
      name: z.string(),
      image: image().optional(),
      imageAlt: z.string().optional(),
      description: z.string(),
      technologies: z.array(z.string()),
      links: z.array(z.object({ name: z.string(), url: z.string() })),
    }),
});

const workplaces = defineCollection({
  type: "data",
  schema: z.object({
    priority: z.number(),
    companyName: z.string(),
    title: z.string(),
    description: z.string(),
    technologies: z.array(z.string()),
    startDate: z.string().regex(monthRegex),
    endDate: z.string().regex(new RegExp(`(${monthRegex.source}|currently)`)),
  }),
});

export const collections = {
  projects,
  workplaces,
};
