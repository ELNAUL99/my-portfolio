import React, { useState } from 'react';
import './Documents.css';
import DocumentModal from '../DocumentModal/DocumentModal';

const DOCS = {
  cv: {
    label: 'View CV',
    title: 'Luan Le — CV',
    src: '/documents/Luan-Le-CV.pdf',
    downloadName: 'Luan-Le-CV.pdf',
  },
  cover: {
    label: 'View Cover Letter',
    title: 'Luan Le — Cover Letter',
    src: '/documents/Luan-Le-Cover-Letter.pdf',
    downloadName: 'Luan-Le-Cover-Letter.pdf',
  },
};

const Documents = () => {
  const [openDoc, setOpenDoc] = useState(null);
  const doc = openDoc ? DOCS[openDoc] : null;

  return (
    <section className="section documents" id="documents">
      <div className="section-center">
        <div className="section-title documents-title">
          <h2
            className="animate"
            data-animate="tracking-in-expand 1s cubic-bezier(0.215, 0.610, 0.355, 1.000) both"
          >
            Resume &amp; Cover Letter
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
            onClick={() => setOpenDoc('cv')}
          >
            view cv
          </button>
          <button
            type="button"
            className="btn documents-btn"
            onClick={() => setOpenDoc('cover')}
          >
            view cover letter
          </button>
        </div>
      </div>

      <DocumentModal
        isOpen={!!doc}
        onClose={() => setOpenDoc(null)}
        src={doc?.src}
        title={doc?.title}
        downloadName={doc?.downloadName}
      />
    </section>
  );
};

export default Documents;
