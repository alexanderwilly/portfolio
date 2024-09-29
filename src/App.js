import Typed from 'typed.js';
import { useRef, useEffect} from 'react';

import './App.css';
import Navbar from './props/navbar';
import home_img from './props/img/home_pic.jpg';
import pic1 from './props/img/pic1.jpg';
// import pic2 from './props/img/pic2.jpg';
import download_icon from './props/img/download_icon.png';
import email_icon from './props/img/mail_icon.png';
import whatsapp_icon from './props/img/whatsapp_icon.png';
import linkedin_icon from './props/img/linkedin_icon.png';
import github_icon from './props/img/github_icon.png';

const App = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Software Engineer', 'Application Developer', 'Cybersecurity'],
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 4,
      loop: true,
      loopCount: Infinity
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);
  
  return (
    <body>
      <Navbar />

      {/* Home */}
      <section id = "home" className = "home">
        {/* Home Picture */}
        <div className='home-pic justify-center'>
          <img src = {home_img} alt = "home_img" className = "rounded-2xl" />
        </div>
        
        {/* Home Info */}
        <div className = "home-info">
          <div className = "flex-col gap-4">
            {/* Name */}
            <h5 className = "p-1 text-sm">ALEXANDER WILLY JOHAN</h5>
            <h1 className = "text-6xl">WELCOME!</h1>
            <h1 className = "text-6xl text-blue-500">I'M ALEXANDER</h1>

            <div className='home-text flex flex-row gap-0.5 '>
              <span ref={el}/>
            </div>
            
            {/* Contact */}
            <div className='social-media gap-3'>
              <a href="mailto:alexanderwillyj@gmail.com" target ='_blank' rel="noopener noreferrer">
                <img src = {email_icon} alt='email_icon'/>
              </a>
              <a href="https://wa.me/86570395" target ='_blank' rel="noopener noreferrer">
                <img src = {whatsapp_icon} alt='whatsapp_icon'/>
              </a>
              <a href="https://www.linkedin.com/in/alexanderwillyj/" target ='_blank' rel="noopener noreferrer">
                <img src = {linkedin_icon} alt='linkedin_icon'/>
              </a>
              <a href = "https://github.com/alexanderwilly" target ='_blank' rel="noopener noreferrer">
                <img src = {github_icon} alt='github_icon'/>
              </a>
            </div>

            {/* Resume Download */}
            <a href = "https://drive.google.com/file/d/1ZpWnjdOpl6FpXxm68Y0SMJmdSGhurhln/view?usp=sharing" target='_blank' rel="noopener noreferrer" className = "cv-btn flex flex-row gap-4 px-4 py-3 rounded-full text-white">
              <span className = 'text-sm'>DOWNLOAD RESUME</span>
              <img src={download_icon} alt='download_icon' className = 'w-5 h-5' />
            </a>  
          </div>
        </div>
      </section>


      {/* About */}
      <section id = "about" className = "about">
        <div className = 'about-text-container flex-col pl-28 py-36 '>
          <h1 className = "text-blue-500 text-4xl font-semibold tracking-wider">ABOUT ME</h1>
          
          <span className = "about-text pt-16 flex flex-col">
            <span>My name is <strong>Alexander Willy Johan</strong>.</span><br/>
            <span>You may call me <strong>Willy</strong>!</span><br/>
            
            <span>
              I am a final-year undergraduate student in Computer Science, majoring in Cybersecurity, and I have an interest in application development and cybersecurity.
              I am ready to commence work starting from 1 December 2024, and look forward to the opportunity to contribute to your company.
            </span><br/>

            <span>
            Please take a moment to review my resume, and if you think we could create something together, feel free to <a href="#contact" className ='border-b-2'>contact</a> me!
            </span>
          </span>
        </div>

        <div className='home-pic justify-center '>
          <img src = {pic1} alt = "home_img"  />
        </div>
      </section>

      <section id = "edu">EDUCATION</section>
      <section id = "certs">CERTIFICATIONS</section>
      <section id = "projects">PROJECTS</section>
      <section id = "skills">SKILLS</section>
      <section id = "contact">CONTACT</section>
      
      
    </body>
  );
}

export default App;
