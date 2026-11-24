// Icons: Lucide (ISC licence), copied into src/icons and inlined at build time. Nothing loads from outside.
const raw = import.meta.glob('../icons/*.svg', { query: '?raw', import: 'default', eager: true }) as Record<string, string>;
const cache: Record<string, string> = {};
for (const [k, v] of Object.entries(raw)) {
  const name = k.split('/').pop()!.replace('.svg', '');
  cache[name] = v.replace(/<!--[\s\S]*?-->/g, '').replace(/<svg[^>]*>/, (t) => t.replace(/\s(class|width|height)="[^"]*"/g, '').replace('<svg', '<svg aria-hidden="true" focusable="false"')).replace(/\s+/g, ' ').trim();
}
export const icon = (name: string) => cache[name] ?? cache['circle-help'];

// Topic (section) -> icon and tint. First matching rule wins.
const RULES: [RegExp, string, string][] = [
  [/moving money/i, 'banknote', 'gold'],
  [/help and support/i, 'life-buoy', 'blue'],
  [/cost of living/i, 'piggy-bank', 'gold'],
  [/learning portuguese/i, 'languages', 'plum'],
  [/cascais|estoril/i, 'bus', 'teal'],
  [/fbi|apostille/i, 'fingerprint', 'blue'],
  [/health insurance|health coverage/i, 'shield-check', 'green'],
  [/health care/i, 'stethoscope', 'green'],
  [/dentist|pharmac/i, 'pill', 'green'],
  [/visa route/i, 'plane', 'blue'],
  [/passport/i, 'book-user', 'blue'],
  [/consulate/i, 'building-2', 'blue'],
  [/pets/i, 'paw-print', 'green'],
  [/shipping/i, 'package', 'gold'],
  [/phone, bank, driver/i, 'smartphone', 'blue'],
  [/residence permit/i, 'id-card', 'blue'],
  [/numbers: nif/i, 'hash', 'blue'],
  [/banking/i, 'landmark', 'gold'],
  [/digital access/i, 'key-round', 'blue'],
  [/housing/i, 'house', 'green'],
  [/driving/i, 'car', 'blue'],
  [/family and schools/i, 'graduation-cap', 'green'],
  [/everyday/i, 'sun', 'gold'],
  [/internet/i, 'wifi', 'blue'],
  [/shopping/i, 'shopping-cart', 'gold'],
  [/us tax filing/i, 'receipt-text', 'blue'],
  [/foreign earned|ftc/i, 'circle-dollar-sign', 'gold'],
  [/fbar|fatca/i, 'banknote', 'gold'],
  [/state tax/i, 'map-pin', 'blue'],
  [/social security/i, 'piggy-bank', 'green'],
  [/403|retirement accounts/i, 'piggy-bank', 'gold'],
  [/treaty/i, 'handshake', 'blue'],
  [/voting/i, 'vote', 'blue'],
  [/portuguese tax|portuguese irs/i, 'euro', 'gold'],
  [/renewal/i, 'refresh-cw', 'blue'],
  [/permanent/i, 'badge-check', 'green'],
  [/citizenship/i, 'flag', 'gold'],
  [/work routes/i, 'briefcase', 'blue'],
  [/family/i, 'users', 'green'],
  [/contract end|retirement/i, 'sunset', 'gold'],
];
export function topicIcon(section: string) {
  for (const [re, name, tint] of RULES) if (re.test(section)) return { name, tint };
  return { name: 'file-text', tint: 'blue' };
}
export const PHASE_ICON: Record<string, string> = { B1: 'plane', B2: 'house', B3: 'circle-dollar-sign', B4: 'flag', B5: 'languages', B6: 'map-pin' };
export const PHASE_TONE: Record<string, string> = { B1: 'blue', B2: 'gold', B3: 'red', B4: 'green', B5: 'plum', B6: 'teal' };
