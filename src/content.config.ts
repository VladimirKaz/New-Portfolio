import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ 
    pattern: '**/*.md', 
    base: './src/content/projects' 
  }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    stack: z.array(z.string()),
    demoUrl: z.string().url().optional(),
    repoUrl: z.string().url().optional(),
    cover: z.string().optional(),
    status: z.enum(['done', 'wip']).default('done'),
    order: z.number().default(0),
  }),
});

export const collections = { projects };