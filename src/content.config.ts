import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// One Markdown file per question. To add content, add a file to src/content/qa/.
// The body has two parts: the brief answer, then a "## Citations and legal explanation" heading
// followed by the sources and explanation (shown only when the reader opens it).
const qa = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/qa' }),
  schema: z.object({
    id: z.string(),                                   // e.g. b1-q7a, used as the page anchor
    phase: z.enum(['B1', 'B2', 'B3', 'B4', 'B5', 'B6']),          // which phase page it appears on
    label: z.string(),                                // number as in the source Q&A (Q7a, A1 ...)
    order: z.number(),                                // position within the phase
    question: z.string(),
    section: z.string(),                              // sub-heading inside the phase
    tags: z.array(z.string()).default([]),            // topic tags (currently the section name; add more freely)
    visas: z.array(z.string()).default([]),           // filterable visa tags; empty = not stated in source
    visa_note: z.string().default(''),                // applicability text exactly as in the source
    confidence: z.enum(['VERIFIED', 'PROBABLY TRUE', 'UNVERIFIED']), // UNVERIFIED = "REASONABLY TRUE / UNVERIFIED"
    confidence_note: z.string().default(''),          // the source's reason for the label
    checked_on: z.coerce.date().transform(d => d.toISOString().slice(0, 10)),
    review: z.string().default(''),                   // professional-review flag text, empty if none in source
    badge: z.string().default(''),                    // optional short indicator shown on the card, e.g. "For EU travel"
    sources: z.array(z.object({ label: z.string(), url: z.string().url() })).default([]),
  }),
});

// One file per phase page: title, order and the source file's intro notes (body).
const phases = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/phases' }),
  schema: z.object({
    key: z.enum(['B1', 'B2', 'B3', 'B4', 'B5', 'B6']),
    title: z.string(),
    order: z.number(),
  }),
});

// Gap lists, change logs, checklists attached to a phase.
const notes = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/notes' }),
  schema: z.object({
    phase: z.enum(['B1', 'B2', 'B3', 'B4', 'B5', 'B6']),
    kind: z.enum(['gaps', 'changelog', 'checklist']),
    title: z.string(),
  }),
});

// LEGACY scaffold collection. The home page still reads it; remove it (and src/pages/topics, src/content/topics)
// once the home page lists the phase pages from the qa collection instead.
const topics = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/topics' }),
  schema: z.object({
    title: z.string(),
    phase: z.enum(['B1', 'B2', 'B3', 'B4', 'B5']),
    visas: z.array(z.string()).default([]),
    summary: z.string(),
    draft: z.boolean().default(false),
    details: z.array(z.object({
      text: z.string(),
      checked_on: z.coerce.date().transform(d => d.toISOString().slice(0, 10)),
      source: z.string().url().optional(),
      source_label: z.string().optional(),
    })).default([]),
  }),
});

export const collections = { qa, phases, notes, topics };
