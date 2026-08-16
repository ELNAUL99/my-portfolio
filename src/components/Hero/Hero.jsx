import React, { useState } from 'react';
import './Hero.css';
import myImg from '../../assets/my-img.jpg';
import SocialLinks from '../Navbar/SocialLinks/SocialLinks';
import Btn from '../Btn/Btn';
import DocumentModal from '../DocumentModal/DocumentModal';

const DOCS = {
  cv: {
    title: 'Luan Le — CV',
    src: '/documents/Luan-Le-CV.pdf',
    downloadName: 'Luan-Le-CV.pdf',
  },
  cover: {
    title: 'Luan Le — Cover Letter',
    src: '/documents/Luan-Le-Cover-Letter.pdf',
    downloadName: 'Luan-Le-Cover-Letter.pdf',
  },
};

const Hero = () => {
  const [openDoc, setOpenDoc] = useState(null);
  const doc = openDoc ? DOCS[openDoc] : null;

  return (
    <header className="section hero">
      <div className="section-center hero-center">
        <article className="hero-info animate" data-animate="slideInLeft 2s">
          <div className="underline"></div>

          <h1>Welcome to my portfolio website</h1>
          <p>A Vietnamese Tech Enthusiast based in Nordic</p>

          <div className="hero-btn-wrapper">
            <Btn href="#about" name="about me" type="hero-btn" />
            <Btn href="#projects" name="projects" type="hero-btn" />
            <button
              type="button"
              className="btn hero-btn"
              onClick={() => setOpenDoc('cv')}
            >
              view cv
            </button>
            <button
              type="button"
              className="btn hero-btn"
              onClick={() => setOpenDoc('cover')}
            >
              cover letter
            </button>
          </div>
          <SocialLinks />
        </article>

        <article className="hero-img animate" data-animate="slideInRight 2s">
          <img src={myImg} className="hero-photo" alt="me"/>
        </article>
      </div>

      <DocumentModal
        isOpen={!!doc}
        onClose={() => setOpenDoc(null)}
        src={doc?.src}
        title={doc?.title}
        downloadName={doc?.downloadName}
      />
    </header>
  );
};

export default Hero;
