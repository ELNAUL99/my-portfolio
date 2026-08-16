import React, { useState } from 'react';
import './Awards.css';
import DocumentModal from '../DocumentModal/DocumentModal';

const Awards = () => {
  const [cvOpen, setCvOpen] = useState(false);
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

        <div className="award-card">
          <div
            className="award-photo animate"
            data-animate="slideInLeft 2s"
          >
            <img
              src="/awards/norrin/hero.jpg"
              alt="Winning teams announcement at the Norrin Challenge"
              loading="lazy"
            />
          </div>

          <div
            className="award-content animate"
            data-animate="slideInRight 2s"
          >
            <p className="award-eyebrow">2026 · AI for Good Hackathon</p>
            <h3 className="award-title">Winner — Norrin Challenge</h3>
            <p className="award-sub">
              Shared 1st place · AaltoAI × Hive Helsinki × Microsoft × Aalto
              Founder School × Norrin × Verda
            </p>

            <p className="award-body">
              Over 48 hours our team built <strong>Lexicon.AI</strong>, a
              multi-agent system that streamlines preliminary EU AI Act
              compliance — upload a spec, whitepaper, or plain-English intent
              and a council of specialized agents does the regulatory heavy
              lifting. Lexicon became the foundation for{' '}
              <a
                href="https://regulens-mu.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                ReguLens
              </a>
              , the SaaS platform I’m building now.
            </p>

            <ul className="award-meta">
              <li>
                <span className="award-meta-label">Team</span>
                <span>
                  Hoang Phuoc Vu · Hariharan Dandapani · Markus Nieminen · Luan
                  Le
                </span>
              </li>
              <li>
                <span className="award-meta-label">Mentor</span>
                <span>Edris Hakimi</span>
              </li>
            </ul>

            <div className="award-actions">
              <a
                href="https://regulens-mu.vercel.app"
                className="btn project-btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                see regulens
              </a>
              <button
                type="button"
                className="btn project-btn"
                onClick={() => setCvOpen(true)}
              >
                view cv
              </button>
            </div>
          </div>
        </div>
      </div>

      <DocumentModal
        isOpen={cvOpen}
        onClose={() => setCvOpen(false)}
        src="/documents/Luan-Le-CV.pdf"
        title="Luan Le — CV"
        downloadName="Luan-Le-CV.pdf"
      />
    </section>
  );
};

export default Awards;
