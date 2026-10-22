import React from 'react';
import './Awards.css';

const awards = [
  {
    id: 'norrin',
    photo: '/awards/norrin/hero.jpg',
    photoAlt: 'Winning teams announcement at the Norrin Challenge',
    photoPosition: 'center',
    eyebrow: '2026 · AI for Good Hackathon',
    title: 'Winner — Norrin Challenge',
    sub: 'Shared 1st place · AaltoAI × Hive Helsinki × Microsoft × Aalto Founder School × Norrin × Verda',
    body: (
      <>
        Over 48 hours our team built <strong>Lexicon.AI</strong>, a multi-agent
        system that streamlines preliminary EU AI Act compliance — upload a
        spec, whitepaper, or plain-English intent and a council of specialized
        agents does the regulatory heavy lifting. Lexicon became the foundation
        for{' '}
        <a
          href="https://regulens-mu.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          ReguLens
        </a>
        , the SaaS platform I'm building now.
      </>
    ),
    meta: [
      {
        label: 'Team',
        value:
          'Hoang Phuoc Vu · Hariharan Dandapani · Markus Nieminen · Luan Le',
      },
      { label: 'Mentor', value: 'Edris Hakimi' },
    ],
    actions: [
      {
        label: 'see regulens',
        href: 'https://regulens-mu.vercel.app',
      },
    ],
  },
  {
    id: 'qsieve',
    photo: '/awards/ultrahack/hero.jpg',
    photoAlt: 'Luan at the Quantum × Finance Hackathon finals',
    photoPosition: 'center 20%',
    eyebrow: '2026 · Quantum × Finance Hackathon',
    title: '5th Place — Ultrahack × Hanken',
    sub: 'Solo build · Ultrahack × Hanken School of Economics · partners IQM, IBM Quantum, VTT',
    body: (
      <>
        Built <strong>Q-SIEVE</strong> solo, a quantum-classical trust layer for
        anti-money-laundering alert triage. A quantum kernel scores how similar
        two flagged account-windows are, a classical model ranks them, and a
        trust layer only auto-clears cases it is confidently sure are
        legitimate. Benchmarked on IBM's 388k-row AML dataset and ran the kernel
        on real hardware (IQM Garnet, IBM Marrakesh, VTT Q50).
      </>
    ),
    meta: [
      { label: 'Team', value: 'Solo project' },
      { label: 'Stack', value: 'Qiskit · scikit-learn · pandas · Streamlit' },
    ],
    actions: [
      {
        label: 'see demo',
        href: 'https://elnaul99.github.io/q-sieve/',
      },
      {
        label: 'source',
        href: 'https://github.com/ELNAUL99/q-sieve',
      },
    ],
  },
];

const Awards = () => {
  return (
    <section className="section awards" id="awards">
      <div className="section-center">
        <div className="section-title awards-title">
          <h2
            className="animate"
            data-animate="tracking-in-expand 1s cubic-bezier(0.215, 0.610, 0.355, 1.000) both"
          >
            Honors &amp; Awards
          </h2>
          <div className="underline"></div>
        </div>

        <div className="award-list">
          {awards.map((award, i) => (
            <div className="award-card" key={award.id}>
              <div
                className="award-photo animate"
                data-animate={i % 2 === 0 ? 'slideInLeft 2s' : 'slideInRight 2s'}
              >
                <img
                  src={award.photo}
                  alt={award.photoAlt}
                  style={{ objectPosition: award.photoPosition }}
                  loading="lazy"
                />
              </div>

              <div
                className="award-content animate"
                data-animate={i % 2 === 0 ? 'slideInRight 2s' : 'slideInLeft 2s'}
              >
                <p className="award-eyebrow">{award.eyebrow}</p>
                <h3 className="award-title">{award.title}</h3>
                <p className="award-sub">{award.sub}</p>

                <p className="award-body">{award.body}</p>

                <ul className="award-meta">
                  {award.meta.map(({ label, value }) => (
                    <li key={label}>
                      <span className="award-meta-label">{label}</span>
                      <span>{value}</span>
                    </li>
                  ))}
                </ul>

                <div className="award-actions">
                  {award.actions.map(({ label, href }) => (
                    <a
                      key={href}
                      href={href}
                      className="btn project-btn"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;
