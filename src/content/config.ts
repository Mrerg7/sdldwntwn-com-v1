import { defineCollection, z } from 'astro:content';

const valuePropsCollection = defineCollection({
  type: 'data',
  schema: z.object({
    label: z.string(),
    title: z.string(),
    description: z.string(),
    order: z.number().default(1),
  }),
});

const useCasesCollection = defineCollection({
  type: 'data',
  schema: z.object({
    icon: z.string(),
    title: z.string(),
    description: z.string(),
    tagline: z.string(),
    order: z.number().default(1),
  }),
});

const factsCollection = defineCollection({
  type: 'data',
  schema: z.object({
    label: z.string(),
    title: z.string(),
    description: z.string(),
    order: z.number().default(1),
  }),
});

export const collections = {
  'value-props': valuePropsCollection,
  'use-cases': useCasesCollection,
  facts: factsCollection,
};
