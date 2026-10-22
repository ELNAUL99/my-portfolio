import React, { useState } from 'react';
import './Documents.css';
import DocumentModal from '../DocumentModal/DocumentModal';

const CV = {
  title: 'Luan Le — CV',
  src: '/documents/Luan-Le-CV.pdf',
  downloadName: 'Luan-Le-CV.pdf',
};

const Documents = () => {
  const [cvOpen, setCvOpen] = useState(false);

  return (
    <section className="section documents" id="documents">
      <div className="section-center">
        <div className="section-title documents-title">
          <h2
            className="animate"
            data-animate="tracking-in-expand 1s cubic-bezier(0.215, 0.610, 0.355, 1.000) both"
          >
            Resume
          </h2>
          <div className="underline"></div>
        </div>

        <div
          className="documents-actions animate"
          data-animate="slideInLeft 2s"
        >
          <button
            type="button"
            className="btn documents-btn"
            onClick={() => setCvOpen(true)}
          >
            view cv
          </button>
        </div>
      </div>

      <DocumentModal
        isOpen={cvOpen}
        onClose={() => setCvOpen(false)}
        src={CV.src}
        title={CV.title}
        downloadName={CV.downloadName}
      />
    </section>
  );
};

export default Documents;
