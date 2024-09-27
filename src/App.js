import './App.css';
import Navbar from './props/navbar';
// import React, { useEffect, useState } from 'react';


const App = () => {
  // const [activeSection, setActiveSection] = useState('home');

  // useEffect(() => {
  //   const sections = document.querySelectorAll('section');

  //   const handleScroll = () => {
  //     let scrollPosition = window.scrollY;

  //     sections.forEach((section) => {
  //       const offsetTop = section.offsetTop - 150;
  //       const sectionHeight = section.offsetHeight;
  //       const sectionId = section.getAttribute('id');

  //       if (scrollPosition >= offsetTop && scrollPosition < offsetTop + sectionHeight) {
  //         setActiveSection(sectionId);
  //       }
  //     });
  //   };

  //   window.addEventListener('scroll', handleScroll);

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  // useEffect(() => {
  //   const navLinks = document.querySelectorAll('nav a');

  //   navLinks.forEach((link) => {
  //     link.classList.remove('active');
  //     if (link.getAttribute('href').includes(activeSection)) {
  //       link.classList.add('active');
  //     }
  //   });
  // }, [activeSection]);
  return (
    <body>
      <Navbar />
      <section id = "home">HOME</section>
      <section id = "about">ABOUT</section>
      <section id = "edu">EDUCATION</section>
      <section id = "certs">CERTIFICATIONS</section>
      <section id = "projects">PROJECTS</section>
      <section id = "skills">SKILLS</section>
      <section id = "contact">CONTACT</section>
      
      
    </body>
  );
}

export default App;
