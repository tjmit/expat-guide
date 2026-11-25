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
