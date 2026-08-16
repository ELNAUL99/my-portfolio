import React, { useEffect } from 'react';
import './DocumentModal.css';

const DocumentModal = ({ isOpen, onClose, src, title, downloadName }) => {
  useEffect(() => {
    if (!isOpen) return;
    const onKey = e => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="doc-modal-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={title}
    >
      <div className="doc-modal" onClick={e => e.stopPropagation()}>
        <div className="doc-modal-header">
          <h3 className="doc-modal-title">{title}</h3>
          <div className="doc-modal-actions">
            <a
              className="doc-modal-btn"
              href={src}
              download={downloadName}
            >
              Download
            </a>
            <a
              className="doc-modal-btn"
              href={src}
              target="_blank"
              rel="noopener noreferrer"
            >
              Open in tab
            </a>
            <button
              type="button"
              className="doc-modal-close"
              onClick={onClose}
              aria-label="Close"
            >
              ×
            </button>
          </div>
        </div>
        <div className="doc-modal-body">
          <iframe
            src={`${src}#view=FitH`}
            title={title}
            className="doc-modal-frame"
          />
        </div>
      </div>
    </div>
  );
};

export default DocumentModal;
