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
            <p>I’m a Junior Software/Game Developer and tech enthusiast based in Helsinki. I have a solid foundation in full‑stack web development with hands‑on experience across both frontend and backend projects. Skilled in React, C#/.NET, SQL, and REST APIs, I’ve built booking widgets, chatbots, and responsive websites that address real business needs. My background also includes game development with Unity and PyGame, which sharpened my problem‑solving and adaptability. Curious, resourceful, and motivated, I’m eager to contribute to impactful solutions and grow within a collaborative developer team.</p>
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
