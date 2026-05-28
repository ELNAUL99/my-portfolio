import React from 'react';
import './Project.css';

const Project = ({ project }) => {
  const { img, video, title, description, tags, liveLink, ghLink, id } = project;
  const primaryLink = liveLink || ghLink || '#';

  const media = video ? (
    <video
      src={video}
      autoPlay
      loop
      muted
      playsInline
      aria-label={title}
    />
  ) : img ? (
    <img src={img} alt={title} />
  ) : (
    <div className="project-media-placeholder">
      <span>Demo coming soon</span>
    </div>
  );

  return (
    <div
      className={`project ${id % 2 === 0 ? 'even-project' : ''} animate`}
      data-animate="slideInLeft 2s"
    >
      <div className="project-image">
        <a href={primaryLink} target="_blank" rel="noopener noreferrer">
          {media}
        </a>
      </div>

      <div className="project-content">
        <h3 className="project-title">
          <a href={primaryLink} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        </h3>
        <div className="project-description">
          <p>{description}</p>
        </div>
        <ul className="project-tags">
          {tags.map((tag, index) => (
            <li className="tag" key={index}>
              {tag}
            </li>
          ))}
        </ul>
        <div className="project-links">
          {liveLink && (
            <a
              href={liveLink}
              className="btn project-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              live demo
            </a>
          )}
          {ghLink && (
            <a
              href={ghLink}
              className="btn project-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              source
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Project;
