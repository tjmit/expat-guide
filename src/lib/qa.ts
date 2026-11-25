import { getCollection } from 'astro:content';
import { marked } from 'marked';

marked.setOptions({ gfm: true, breaks: true });
export const md = (s: string) => marked.parse(s) as string;

export const CONF_ORDER = ['UNVERIFIED', 'PROBABLY TRUE', 'VERIFIED'] as const;
// Reader-facing plain-language labels (UI microcopy). The source labels are kept in CONF_ORIGINAL and shown inside each answer's details.
export const CONF_LABEL: Record<string, string> = {
  'VERIFIED': 'Confirmed from official sources',
  'PROBABLY TRUE': 'Likely right, double-check',
  'UNVERIFIED': 'Not confirmed yet',
};
export const CONF_ORIGINAL: Record<string, string> = {
  'VERIFIED': 'VERIFIED',
  'PROBABLY TRUE': 'PROBABLY TRUE',
  'UNVERIFIED': 'REASONABLY TRUE / UNVERIFIED',
};
export const CONF_ICON: Record<string, string> = { 'VERIFIED': 'circle-check', 'PROBABLY TRUE': 'clock', 'UNVERIFIED': 'circle-help' };
export const stripMd = (s: string) => s.replace(/\[([^\]]+)\]\([^)]*\)/g, '$1').replace(/[*_`#>]/g, '').replace(/\s+/g, ' ').trim();
export const CONF_CLASS: Record<string, string> = { 'VERIFIED': 'ok', 'PROBABLY TRUE': 'mid', 'UNVERIFIED': 'low' };

export const STALE_DAYS = 180;
export const ageDays = (d: string) => Math.floor((Date.now() - new Date(d).getTime()) / 86400000);

export const CITATIONS_HEADING = /^## Citations and legal explanation\s*$/m;
export function splitBody(body: string) {
  const parts = (body ?? '').split(CITATIONS_HEADING);
  return { brief: (parts[0] ?? '').trim(), citations: (parts[1] ?? '').trim() };
}

export async function getPhases() {
  const phases = await getCollection('phases');
  return phases.sort((a, b) => a.data.order - b.data.order).map(p => ({
    slug: p.id, key: p.data.key, title: p.data.title, url: `/phase/${p.id}`, intro: p.body ?? '',
  }));
}

export async function getQA() {
  const all = await getCollection('qa');
  return all.sort((a, b) => a.data.phase.localeCompare(b.data.phase) || a.data.order - b.data.order);
}

export const slugify = (s: string) => 's-' + s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
