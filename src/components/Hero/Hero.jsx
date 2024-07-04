import React from 'react';
import './Hero.css';
import myImg from '../../assets/my-img.jpg';
import SocialLinks from '../Navbar/SocialLinks/SocialLinks';
import Btn from '../Btn/Btn';

const Hero = () => {
  return (
    <header className="section hero">
      <div className="section-center hero-center">
        <article className="hero-info animate" data-animate="slideInLeft 2s">
          <div className="underline"></div>

          <h1>Welcome to my portfolio website</h1>
          <p>Hello, I'm a full-stack developer based in Finland!</p>

          <div className="hero-btn-wrapper">
            <Btn href="#about" name="about me" type="hero-btn" />
            <Btn href="#projects" name="projects" type="hero-btn" />
          </div>
          <SocialLinks />
        </article>

        <article className="hero-img animate" data-animate="slideInRight 2s">
          <img src={myImg} className="hero-photo" alt="me"/>
        </article>
      </div>
    </header>
  );
};

export default Hero;
