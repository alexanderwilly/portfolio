import './App.css';
import Navbar from './props/navbar';
import home_img from './props/img/home_pic.jpg';
import download_icon from './props/img/download_icon.png';
import email_icon from './props/img/mail_icon.png';
import linkedin_icon from './props/img/linkedin_icon.png';
import github_icon from './props/img/github_icon.png';

const App = () => {
  
  return (
    <body>
      <Navbar />

      <section id = "home" className = "home">
        <div className='home-pic justify-center'>
          <img src = {home_img} alt = "home_img" className = "rounded-2xl" />
        </div>
        
        <div className = "home-info">
          <div className = "flex-col gap-4">
            <h5 className = "p-1 text-sm">ALEXANDER WILLY JOHAN</h5>
            <h1 className = "text-6xl">WELCOME!</h1>
            <h1 className = "text-6xl text-blue-500">I'M ALEXANDER</h1>

            <p className='text-base'>
              I am a final-year international undergraduate student in Computer Science, passionate about cybersecurity and software engineering. 
              I am dedicated to entering the workforce for professional growth and providing quality products and services. I aim to contribute to the company's goals through my skills, enthusiasm, and discipline.
            </p>

            <div className='social-media gap-3'>
              <a href="mailto:alexanderwillyj@gmail.com" target ='_blank' rel="noopener noreferrer">
                <img src = {email_icon} alt='email_icon'/>
              </a>

              <a href="https://www.linkedin.com/in/alexanderwillyj/" target ='_blank' rel="noopener noreferrer">
                <img src = {linkedin_icon} alt='linkedin_icon'/>
              </a>

              <a href = "https://github.com/alexanderwilly" target ='_blank' rel="noopener noreferrer">
                <img src = {github_icon} alt='github_icon'/>
              </a>
            </div>


            <a href = "https://drive.google.com/file/d/1ZpWnjdOpl6FpXxm68Y0SMJmdSGhurhln/view?usp=sharing" target='_blank' rel="noopener noreferrer" className = "cv-btn flex flex-row gap-4 px-4 py-3 rounded-full text-white">
              <span className = 'text-sm'>DOWNLOAD RESUME</span>
              <img src={download_icon} alt='download_icon' className = 'w-5 h-5' />
            </a>

            

            
          </div>
        </div>
        
      </section>

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
