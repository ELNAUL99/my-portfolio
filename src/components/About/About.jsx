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
            <p>
              I'm a full-stack web developer from Viet Nam and currently studying and working in Finland.
              I have developed few projects, most of them are for the study in the university.
              I enjoy coding and the challenge of learning something new
              everyday.
              <br />When not online, I love hanging out with my friend, or traveling and photographing the landscape. I also enjoy reading books when I'm free.
            </p>
          </div>

          <div className="animate" data-animate="slideInRight 2s">
            <h3>Education</h3>
            <div>
              <p>2020-Present</p>
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
