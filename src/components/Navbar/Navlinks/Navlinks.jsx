import React from 'react';

const Navlinks = ({ setToggleMenu }) => {
  return (
    <>
      <li onClick={() => setToggleMenu(false)}>
        <a href="#home">home</a>
      </li>
      <li onClick={() => setToggleMenu(false)}>
        <a href="#about">about</a>
      </li>
      <li onClick={() => setToggleMenu(false)}>
        <a href="#skills">skills</a>
      </li>
      <li onClick={() => setToggleMenu(false)}>
        <a href="#projects">projects</a>
      </li>
      <li onClick={() => setToggleMenu(false)}>
        <a href="#contact">contact</a>
      </li>
    </>
  );
};

export default Navlinks;
