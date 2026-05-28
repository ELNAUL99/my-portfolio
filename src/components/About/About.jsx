import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="section about" id="about">
      <div className="section-center">
        <div className="section-title about-title">
          <h2
            className="animate"
            data-animate="tracking-in-expand 1s cubic-bezier(0.215, 0.610, 0.355, 1.000) both"
          >
            About me
          </h2>
          <div className="underline"></div>
        </div>

        <div className="about-center animate" data-animate="slideInLeft 2s">
          <div className="about-center-info">
            <h3>Luan Le</h3>
            <p>I’m a Full Stack Developer based in Helsinki with hands‑on experience building and operating production systems end‑to‑end. I work across backend, frontend, and infrastructure using Next.js, TypeScript, React, and C#/.NET, with a strong focus on reliability, performance, and maintainability. I’ve designed and delivered real‑world applications — booking systems, full‑stack platforms, and AI‑powered services — taking full ownership from architecture to deployment. I work in a DevOps‑oriented way, using CI/CD pipelines, testing, and monitoring to keep systems stable and scalable. I’m especially interested in building software that holds up under real usage, with strong attention to user experience and business impact.</p>
          </div>

          <div className="animate" data-animate="slideInRight 2s">
            <h3>Education</h3>
            <div>
              <p>2020-2023</p>
              <h4>Business Information Technology - LAB University of Applied Sciences</h4>
            </div>
            <div>
              <p>2014-2017</p>
              <h4>Le Quy Don - High school for the gifted</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
