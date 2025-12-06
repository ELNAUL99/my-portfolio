import React from 'react';
import './Skills.css';
import skills from './skillsData';

const Skills = () => {
  return (
    <section className="section skills bg-grey" id="skills">
      <div className="section-center">
        <div className="skills-center">
          {skills && skills.length > 0 ? (
            skills.map((skill) => (
              <figure
                key={skill.id}
                className="skills-icon animate"
                data-animate="slideInLeft 1s"
                tabIndex={0}
                role="img"
                aria-label={skill.ariaLabel}
              >
                {skill.svg}
                <p>{skill.name}</p>
              </figure>
            ))
          ) : (
            <p>No skills available</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Skills;
