// "The short version" at the top of each step page. UI summary text written from the answers below it.
// Each line links to the answer it comes from (id). Its confidence mark is read from that answer, not set here.
export type Line = { t: string; id: string };
export const SUMMARIES: Record<string, { need: Line[]; consider: Line[]; know: Line[] }> = {
  B1: {
    need: [
      { t: 'Order your FBI background check and get it apostilled. It must be issued less than 90 days before you apply.', id: 'b1-q9' },
      { t: 'Book your visa appointment at the VFS center or consulate that covers your state.', id: 'b1-q8' },
    ],
    consider: [
      { t: 'Allow plenty of time. The apostille alone can take 4 to 12 weeks by mail.', id: 'b1-q11' },
      { t: 'Shipping belongings? Check the customs rules early.', id: 'b1-q16' },
    ],
    know: [
      { t: 'The visa costs about $127 plus a VFS service fee. The legal deadline to decide is 60 days.', id: 'b1-q3' },
      { t: 'After you arrive, you must request your residence permit with AIMA within the visa’s four months.', id: 'b1-q5' },
    ],
  },
  B2: {
    need: [
      { t: 'File for your first residence permit with AIMA, by appointment or on its electronic platform.', id: 'b2-a1' },
      { t: 'Get your NIF (tax number) in person at a Finanças office or Loja do Cidadão.', id: 'b2-b1' },
    ],
    consider: [
      { t: 'Register at your local health centre to get your SNS number and a family doctor.', id: 'b2-c1' },
      { t: 'Open a bank account. If your foreign accounts pass $10,000, the US requires an FBAR.', id: 'b2-d2' },
    ],
    know: [
      { t: 'Your first permit lasts two years. Ask to renew at least 30 days before it expires.', id: 'b2-a3' },
      { t: 'For emergencies, call 112.', id: 'b2-c2' },
      { t: 'The free European Health Insurance Card covers necessary care on short trips in Europe. You probably qualify once you are registered with Portuguese Social Security (Segurança Social), but ask first.', id: 'b2-c4' },
    ],
  },
  B3: {
    need: [
      { t: 'File a US tax return every year once your gross income reaches the standard deduction. The foreign earned income exclusion does not remove the duty to file. Living abroad gives an automatic extension to June 15.', id: 'b3-a2' },
      { t: 'File an FBAR if your foreign accounts passed $10,000 at any point in the year.', id: 'b3-c1' },
    ],
    consider: [
      { t: 'Look at the foreign earned income exclusion and the foreign tax credit to limit double taxation.', id: 'b3-b1' },
      { t: 'Ask a tax professional how Portugal taxes US retirement withdrawals. This is not confirmed yet.', id: 'b3-f3' },
    ],
    know: [
      { t: 'The US-Portugal tax treaty does not stop the US taxing its citizens.', id: 'b3-g3' },
      { t: 'If you are a Portuguese tax resident, you generally file a Portuguese return too.', id: 'b3-j1' },
    ],
  },
  B4: {
    need: [
      { t: 'Ask to renew your residence permit no later than 30 days before it expires.', id: 'b4-a2' },
      { t: 'Keep absences short. A temporary permit can be cancelled after more than 6 consecutive months away.', id: 'b4-a6' },
    ],
    consider: [
      { t: 'Permanent residence is possible after 5 years on a temporary permit, with basic Portuguese.', id: 'b4-b1' },
      { t: 'Citizenship now needs 10 years of residence for US citizens.', id: 'b4-c1' },
    ],
    know: [
      { t: 'Portuguese naturalization does not require you to give up US citizenship.', id: 'b4-c8' },
      { t: 'Family of teaching permit holders can join without the usual two-year wait.', id: 'b4-e2' },
    ],
  },
};

// Answers whose own text involves the employer or host institution (contract, invitation letter, filing, payroll).
// Shown in a separate "Your employer may help" box and marked on the card. The note says only what the answer says.
export type EmpRow = { id: string; kind: 'must' | 'varies' | 'yours'; note: string };
export const EMPLOYER: Record<string, EmpRow[]> = {
  B1: [
    { id: 'b1-q2', kind: 'must', note: 'The job contract or invitation letter has to come from your employer. You still collect the other documents yourself.' },
  ],
  B2: [
    { id: 'b2-a1', kind: 'varies', note: 'You or the host institution can make the permit request. Ask HR who does it.' },
  ],
  B3: [
    { id: 'b3-g4a', kind: 'varies', note: 'Some employers apply the Article 22 tax exemption. Whether yours does is up to them.' },
    { id: 'b3-j2', kind: 'varies', note: 'Some employers treat teacher pay as exempt under Article 22.' },
    { id: 'b3-j3', kind: 'yours', note: 'Your own tax filing is yours, whatever your employer decides.' },
    { id: 'b3-j7', kind: 'yours', note: 'Pay is taxed with withholding during the year, but you still handle your annual return.' },
  ],
  B4: [
    { id: 'b4-d1', kind: 'must', note: 'The teaching visa needs a contract or promise of one, or an invitation letter, which only the school can give you.' },
    { id: 'b4-d2', kind: 'must', note: 'The teaching permit needs a compatible contract and an invitation letter, among other items.' },
    { id: 'b4-d3', kind: 'varies', note: 'The employer can file the permit application, but the law lets you or a representative file too.' },
  ],
};
export type Extra = { title: string; note: string; src: string; srcLabel: string };
const GOVPT_ADM = { src: 'https://www2.gov.pt/en/inicio/espaco-empresa/balcao-do-empreendedor/entidade-empregadora-comunicacao-de-admissao-de-trabalhador', srcLabel: 'gov.pt: notification of employee admission' };
const EPORT = { src: 'https://eportugal.gov.pt/en/cidadaos-europeus-viajar-viver-e-fazer-negocios-em-portugal/trabalhadores-em-portugal/seguranca-social-direitos-e-obrigacoes-dos-empregadores-em-portugal', srcLabel: 'ePortugal: employers\u2019 social security duties' };
// Extra items taken from official pages, not tied to one of our answers.
export const EMPLOYER_EXTRA: Record<string, Extra[]> = {
  B2: [
    { title: 'Telling Portuguese Social Security that you have been hired', note: 'The employer notifies Portuguese Social Security (Segurança Social) of a new hire, using your Portuguese social security number (NISS). The two official pages give different timing, so ask HR when it happens.', ...GOVPT_ADM },
  ],
  B3: [
    { title: 'Paying Portuguese social security contributions', note: 'Employers must pay social security contributions, including the contributions taken from employees.', ...EPORT },
  ],
  B4: [
    { title: 'Reporting the end of a job and giving you a certificate of employment', note: 'When employment ends, the employer reports it to Portuguese Social Security and gives a certificate of employment with start and end dates and the positions held. You may need it if you change jobs.', ...EPORT },
  ],
};
export const EMPLOYER_EXTRA_NOTE = 'Some people report that their institution also booked their tax number (NIF) appointment or wrote a letter for their bank. REASONABLY TRUE-UNVERIFIED: no source, and practice varies, so ask your HR department.';
export const EMPLOYER_IDS = new Set(Object.values(EMPLOYER).flat().filter(e => e.kind !== 'yours').map(e => e.id));

// "Some schools offer" items. Each carries its own label and sources. Added 2026-11-25.
export type Might = { id?: string; title: string; note: string; label: 'VERIFIED' | 'PROBABLY TRUE' | 'UNVERIFIED'; srcs: { label: string; url: string }[] };
const TH = { label: 'Teacher Horizons: what to ask before signing (HR questions list)', url: 'https://www.teacherhorizons.com/advice/what-to-ask-before-signing-your-international-teaching-contract' };
const TA = { label: 'TeachAway: what to look for in a school contract', url: 'https://www.teachaway.com/blog/what-to-look-for-international-school-contract' };
const TES = { label: 'Tes: ways to help new international staff settle (2021)', url: 'https://www.tes.com/news/5-unexpected-ways-help-international-teachers-staff-settle' };
const SJS = { label: 'Tes: St. Julian’s School job posting (2024, expired)', url: 'https://www.tes.com/jobs/vacancy/head-of-chemistry-portugal-2065180' };
const SCH = { label: 'Schrole: becoming an international teacher in Portugal (2023)', url: 'https://www.schrole.com/news/everything-you-need-to-know-about-becoming-an-international-teacher-in-portugal/' };
export const EMPLOYER_MIGHT: Record<string, Might[]> = {
  B1: [
    { id: 'b1-q1', title: 'Visa and permit support', note: 'Some schools handle the visa and work-permit paperwork and pay the fees, and some do not. Recruiter guides tell teachers to ask who does it and who pays, so ask before you accept. The visa appointment and your own documents stay yours.', label: 'PROBABLY TRUE', srcs: [TH, TA] },
    { id: 'b1-q13', title: 'Health insurance', note: 'Some schools include medical insurance in the package, others do not. One Portuguese school lists “medical and life insurance” in a posting. Ask whether any cover is included, whether it meets the visa requirement, and whether it covers family.', label: 'VERIFIED', srcs: [SJS, SCH] },
    { id: 'b1-q14', title: 'Help finding housing', note: 'Some schools help with the home search or give temporary housing on arrival. It varies, so ask whether yours does.', label: 'PROBABLY TRUE', srcs: [TES, TA] },
    { title: 'Relocation allowance and flights', note: 'Some schools pay a relocation allowance, including flights. One Portuguese school lists that in a posting. Others offer none, so only count on what your offer or contract says.', label: 'VERIFIED', srcs: [SJS, TA] },
    { title: 'Airport pickup and a welcome orientation', note: 'Some schools meet new staff at the airport or hold an induction. Many do not, so plan your own arrival unless told otherwise.', label: 'PROBABLY TRUE', srcs: [TA, TH, TES] },
  ],
  B2: [
    { id: 'b2-b3', title: 'Your NISS (Social Security number)', note: 'The employer needs your NISS to notify Social Security that you were hired (gov.pt lists it as a required item), so ask early who gets it and when. Whether your employer helps is not documented.', label: 'UNVERIFIED', srcs: [{ label: 'gov.pt: notification of employee admission', url: 'https://www2.gov.pt/en/inicio/espaco-empresa/balcao-do-empreendedor/entidade-empregadora-comunicacao-de-admissao-de-trabalhador' }] },
    { id: 'b2-b1', title: 'Your NIF (tax number)', note: 'Payroll usually needs your NIF, so ask early who gets it and whether anyone can guide you. Reasoned, not sourced.', label: 'UNVERIFIED', srcs: [] },
    { id: 'b2-d1', title: 'Opening a bank account', note: 'Some schools write a letter for the bank or send a staff member to the first visit, and many do not. You still choose the bank and sign.', label: 'PROBABLY TRUE', srcs: [TES, TH] },
    { id: 'b2-c1', title: 'Registering for healthcare', note: 'Recruiter guides list healthcare registration help as something to ask HR about. Do not assume it. You register in person with your own numbers.', label: 'PROBABLY TRUE', srcs: [TH] },
    { id: 'b2-h1', title: 'School places for your children', note: 'Some schools give places to staff children. One Portuguese school lists places for up to two children. Many offer none, so ask before you accept.', label: 'VERIFIED', srcs: [SJS, TH] },
    { title: 'Orientation and first-week help', note: 'Some schools give an induction or help with first purchases. One teacher describes this from her own schools. It varies widely.', label: 'PROBABLY TRUE', srcs: [TES, TA] },
  ],
};

// One-page checklist: who does what. kind: employer (has to), might (some schools), you (always yours).
export type Task = { task: string; who: 'employer' | 'might' | 'you'; label?: 'VERIFIED' | 'PROBABLY TRUE' | 'UNVERIFIED'; note?: string; src?: { label: string; url: string }; id?: string };
export const CHECKLIST: { when: string; tasks: Task[] }[] = [
  { when: 'Before you arrive', tasks: [
    { task: 'Written job contract or invitation letter', who: 'employer', label: 'PROBABLY TRUE', id: 'b4-d1', note: 'Only the employer can issue it, and the visa answers on this site say it is needed.' },
    { task: 'Visa or permit paperwork support, and who pays the fees', who: 'might', label: 'PROBABLY TRUE', note: 'Ask early.', src: { label: TH.label, url: TH.url } },
    { task: 'Relocation allowance and flights', who: 'might', label: 'VERIFIED', note: 'One Portuguese school lists this. Many do not.', src: { label: SJS.label, url: SJS.url } },
    { task: 'Health insurance in the package', who: 'might', label: 'VERIFIED', src: { label: SJS.label, url: SJS.url } },
    { task: 'Temporary housing and help finding a home', who: 'might', label: 'PROBABLY TRUE', src: { label: TES.label, url: TES.url } },
    { task: 'Airport pickup', who: 'might', label: 'PROBABLY TRUE', src: { label: TA.label, url: TA.url } },
    { task: 'Order your FBI background check', who: 'you', id: 'b1-q10', note: 'It is your own record, requested by you.' },
    { task: 'Get documents apostilled', who: 'you', id: 'b1-q11a' },
    { task: 'Renew your passport if needed', who: 'you', id: 'b1-q6' },
    { task: 'Book and attend your visa appointment', who: 'you', id: 'b1-q8', note: 'You appear in person.' },
    { task: 'Ship or mail belongings', who: 'you', id: 'b1-q16', note: 'Unless your package pays for shipping.' },
    { task: 'Plan phone number and US banking', who: 'you', id: 'b1-q18' },
  ]},
  { when: 'After you arrive', tasks: [
    { task: 'Tell Portuguese Social Security you were hired (needs your NISS)', who: 'employer', label: 'VERIFIED', src: { label: 'gov.pt: notification of employee admission', url: 'https://www2.gov.pt/en/inicio/espaco-empresa/balcao-do-empreendedor/entidade-empregadora-comunicacao-de-admissao-de-trabalhador' } },
    { task: 'Pay social security contributions, including the employee share', who: 'employer', label: 'VERIFIED', src: { label: EPORT.srcLabel, url: EPORT.src } },
    { task: 'NISS and NIF: ask early who gets them (payroll needs them)', who: 'might', label: 'UNVERIFIED', note: 'Reasoned. Practice varies.', id: 'b2-b3' },
    { task: 'Bank letter or staff at the first bank visit', who: 'might', note: 'Many do not.', label: 'PROBABLY TRUE', src: { label: TES.label, url: TES.url }, id: 'b2-d1' },
    { task: 'Orientation, first-week help, furniture or supermarket trip', who: 'might', label: 'PROBABLY TRUE', src: { label: TES.label, url: TES.url } },
    { task: 'School places for your children', who: 'might', label: 'VERIFIED', note: 'One Portuguese school lists this. Many do not.', src: { label: SJS.label, url: SJS.url }, id: 'b2-h1' },
    { task: 'File the residence-permit request', who: 'might', label: 'PROBABLY TRUE', id: 'b4-d3', note: 'The law lets you or a representative file. Biometrics stay yours.' },
    { task: 'Attend your AIMA appointment and give biometrics', who: 'you', id: 'b2-a1', note: 'In person, no one can do it for you.' },
    { task: 'Register at a health centre and get your SNS number', who: 'you', id: 'b2-b5' },
    { task: 'Decide which bank, sign contracts, set up utilities', who: 'you', id: 'b2-f3' },
    { task: 'Sign your own lease', who: 'you', id: 'b2-f1' },
    { task: 'File your own Portuguese tax return', who: 'you', id: 'b3-j4', note: 'Even if the employer withholds tax.' },
    { task: 'File US taxes, FBAR and Form 8938', who: 'you', id: 'b3-a1' },
    { task: 'Track renewal dates for your permit', who: 'you', id: 'b4-a2' },
  ]},
  { when: 'When the job ends', tasks: [
    { task: 'Report the end of the job and give a certificate of employment', who: 'employer', label: 'VERIFIED', src: { label: EPORT.srcLabel, url: EPORT.src }, id: 'b4-f1' },
    { task: 'Sort out your next permit or health cover', who: 'you', id: 'b4-g3' },
  ]},
];
