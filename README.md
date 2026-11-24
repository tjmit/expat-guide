# Expat Guide site (Astro)

Claude-generated draft content, 23 Nov 2026. All content needs professional review before anyone relies on it.

## Run locally (Node 18+)

    npm install
    npm run dev       # http://localhost:4321
    npm run build     # static output in dist/
    npm run preview   # serve dist/

## Where things are

- `src/content/qa/`      one Markdown file per question (122 so far). **To add content, add a file here.**
- `src/content/phases/`  one file per phase page (title, order, intro notes). The file name is the URL.
- `src/content/notes/`   gap lists, checklists and change logs shown at the bottom of a phase page.
- `src/pages/phase/[slug].astro`  the phase page (search, filters, collapsible citations).
- `src/pages/all.astro`  search across every phase. `src/pages/review.astro` lists questions oldest "checked on" first.
- `src/pages/index.astro` is the home page (owned by the home page design work; not generated here).

Stable URLs: `/phase/before-leaving`, `/phase/first-90-days`, `/phase/us-obligations`, `/phase/renewals-citizenship`.
Each question has an anchor, e.g. `/phase/before-leaving#b1-q7a`.

## Add a question

Copy any file in `src/content/qa/` and edit it. Front matter fields:

| field | meaning |
|---|---|
| `id` | unique, also the page anchor (`b1-q20`) |
| `phase` | `B1` before leaving, `B2` first 90 days, `B3` US obligations, `B4` renewals and citizenship |
| `label`, `order` | number shown, and sort position inside the phase |
| `question`, `section`, `tags` | question text, sub-heading, topic tags |
| `visas`, `visa_note` | filter tags (`D3`, `All`, ...) and the applicability text as written |
| `confidence` | `VERIFIED`, `PROBABLY TRUE` or `UNVERIFIED` (shown as "REASONABLY TRUE / UNVERIFIED") |
| `confidence_note` | the reason for the label |
| `checked_on` | `YYYY-MM-DD`; drives the review queue (older than 180 days = due) |
| `review` | professional-review flag text, empty if none |
| `sources` | list of `{label, url}` |

The body is the brief answer, then a line `## Citations and legal explanation`, then the sources and explanation (shown only when the reader opens it).
A new phase is a new file in `src/content/phases/` (and add its key to the enums in `src/content.config.ts`).

`src/content/topics/` and `src/pages/topics/` are the old scaffold, kept only because the home page still reads that collection.
