import './App.css';
import Navbar from './props/navbar';

import home_img from './props/img/home_pic.png';
import pic1 from './props/img/pic1.jpg';
// Social Media
import email_icon from './props/img/social_media/mail_icon.png';
import linkedin_icon from './props/img/social_media/linkedin_icon.png';
import github_icon from './props/img/social_media/github_icon.png';
// Experience
import trees_solutions from './props/img/experience/pt__trees_solutions_logo.jpeg'
// Education
import smu_logo from './props/img/education/smu_logo.png';
import uow_logo from './props/img/education/uow_logo.png';
import simge_logo from './props/img/education/simge_logo.png';
// Certifications
import icdl_ai from './props/img/certificates/icdl_ai.png';
import icdl_iot from './props/img/certificates/icdl_iot.png';
import icdl_big_data from './props/img/certificates/icdl_big_data.png';
import cc from './props/img/certificates/cc.png';
// Projects
import petheaven from './props/img/projects/petheaven.jpg';
import activeaxis from './props/img/projects/activeaxis.jpg';
import cafe from './props/img/projects/cafe.jpg';
import portfolio from './props/img/projects/portfolio.jpg';
// Skills
import java from './props/img/skills/lang/java.png';
import python from './props/img/skills/lang/python.png';
import cpp from './props/img/skills/lang/Cpp.png';
import html from './props/img/skills/lang/html.png';
import css from './props/img/skills/lang/css.png';
import js from './props/img/skills/lang/js.png';
import php from './props/img/skills/lang/php.png';
import react_native from './props/img/skills/lang/react-native.png';
import reactjs from './props/img/skills/lang/reactjs.png';
import nodejs from './props/img/skills/lang/nodejs.png';
import expressjs from './props/img/skills/lang/expressjs.png';
import tailwind from './props/img/skills/lang/tailwind.png';
import sql from './props/img/skills/db/sql.png';
import mongodb from './props/img/skills/db/mongodb.png';
import firebase from './props/img/skills/db/firebase.png';
import waterfall from './props/img/skills/methodology/waterfall.png';
import scrum from './props/img/skills/methodology/scrum.png';
import kanban from './props/img/skills/methodology/kanban.png';
import github from './props/img/skills/methodology/github.png';
import gitlab from './props/img/skills/methodology/gitlab.png';
import taiga from './props/img/skills/methodology/taiga.png';
  


const App = () => {

  let languages = new Map([
    ['Java', java ],
    ['Python', python ],
    ['C++', cpp ],
    ['HTML', html ],
    ['CSS', css ],
    ['JavaScript', js ],
    ['PHP', php ],
    ['React Native', react_native ],
    ['React JS', reactjs ],
    ['Node JS', nodejs ],
    ['Express JS', expressjs ],
    ['Tailwind CSS', tailwind ],
  ]);

  let database = new Map([
    ['SQL', sql ],
    ['MongoDB', mongodb ],
    ['Firebase NoSQL', firebase ],
  ]);

  let methodology = new Map([
    ['Waterfall', waterfall ],
    ['Scrum', scrum ],
    ['Kanban', kanban ],
    ['GitHub', github ],
    ['GitLab', gitlab ],
    ['Taiga.io', taiga ],
  ]);



  
  return (
    <main>
      <Navbar />

      {/* Home */}
      <section id = "home" className = "home shadow">
        {/* Home Picture */}
        <div className='home-pic justify-center'>
          <img src = {home_img} alt = "home_img" />
        </div>
        
        {/* Home Info */}
        <div className = "home-info">
          <div className = "flex-col gap-4">
            {/* Name */}
            <h5 className = "p-1 text-sm">ALEXANDER WILLY JOHAN</h5>
            <h1 className = "text-6xl">WELCOME!</h1>
            <h1 className = "text-6xl text-blue-500">I'M ALEXANDER</h1>

            <div className='home-text'>
              
              <span>Software Engineer | Cybersecurity | Machine Learning</span>

            </div>
            
            
 
          </div>
        </div>
      </section>

      {/* Working Experience */}
      <section id = "exp" className = "exp flex flex-col items-center gap-5 py-5">
        <h1 className = "text-blue-200 text-4xl font-semibold tracking-wider pb-1 border-b-2 border-blue-200 text-center">
          &nbsp;EXPERIENCE&nbsp;
        </h1>

        <div>
          <span>
            <h1>PT. TREES SOLUTIONS</h1>
            <h6>Oct 2024 - Dec 2024</h6>
            <h3>Functional Consultant Intern</h3>
            <ul>
              <li>Conducts vulnerability assessment and penetration testing on a web application and follows the OWASP Top 10: 2021 guidelines to identify security weaknesses.</li>
            </ul>
          </span>
          <div>
            <img src = {trees_solutions} alt = "trees_solutions" />
          </div>
          
        </div>
      </section>


      
      {/* Education */}
      <section id = "edu" className = "edu flex flex-col items-center gap-5">
        <h1 className = "text-blue-200 text-4xl font-semibold tracking-wider pb-1 border-b-2 border-blue-200">
          &nbsp;EDUCATION&nbsp;
        </h1>
        <div>
          <div>
            <img src = {smu_logo} alt = "smu_logo" />
          </div>
          <span>
            <h1>SINGAPORE MANAGEMENT UNIVERSITY</h1>
            <h6>Jan 2025 - Apr 2026 <strong>(Expected)</strong></h6>
            <h3>Master of IT in Business (Artificial Intelligence Track)</h3>
            <ul>
              <li>Recipient of the SMU PG ASEAN Scholarship</li>
            </ul>
          </span>
        </div>
        <div>
          <div>
            <img src = {uow_logo} alt = "uow_logo" />
          </div>
          <span>
            <h1>UNIVERSITY OF WOLLONGONG - SIM CAMPUS</h1>
            <h6>Oct 2022 - Dec 2024</h6>
            <h3>Bachelor of Computer Science (Cyber Security)</h3>
            <ul>
              <li>WAM: 84.31/100.00 (equivalent GPA: 3.85/4.00)</li>
            </ul>
          </span>
        </div>
        <div>
          <div>
            <img src = {simge_logo} alt = "simge_logo" />
          </div>
          <span>
            <h1>SINGAPORE INSTITUTE OF MANAGEMENT</h1>
            <h6>Oct 2021 - Sep 2022</h6>
            <h3>Diploma in Information Technology</h3>
            <ul>
              <li>GPA: 3.88/4.00</li>
              <li>Recipient of the Commendation Award for excellent academic performance</li>
            </ul>
          </span>
        </div>
      </section>

      {/* Certifications */}
      <section id = "certs" className = "certs flex flex-col items-center gap-5 py-5">
        <h1 className = "text-blue-200 text-4xl font-semibold tracking-wider pb-1 border-b-2 border-blue-200">
          &nbsp;CERTIFICATIONS&nbsp;
        </h1>
        <div>
          <div>
            <img src = {cc} alt = "cc" />
            <h1>ISC2 Certified in Cybersecurity</h1>
            <h6>Issued Jun 2024</h6>
          </div>
          <div>
            <img src = {icdl_ai} alt = "icdl_ai" />
            <h1>ICDL Artificial Intelligence</h1>
            <h6>Issued Dec 2023</h6>
          </div>
          <div>
            <img src = {icdl_big_data} alt = "icdl_big_data" />
            <h1>ICDL Big Data</h1>
            <h6>Issued Dec 2023</h6>
          </div>
          <div>
            <img src = {icdl_iot} alt = "icdl_iot" />
            <h1>ICDL Internet of Things</h1>
            <h6>Issued Dec 2023</h6>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id = "projects" className="projects flex flex-col items-center gap-5 py-14">
        <h1 className = "text-blue-200 text-4xl font-semibold tracking-wider pb-1 border-b-2 border-blue-200">
          &nbsp;PROJECTS&nbsp;
        </h1>

        <div>
          <div>
            <img src = {petheaven} alt = "activeaxis" />
            <h1>PetHeaven</h1>
            <p>A website made with a React Single Page Application for pet adoption and animal welfare.</p>
            <div>
              <a href="https://github.com/alexanderwilly/PetHeaven" target ='_blank' rel="noopener noreferrer">Code Repository</a>
            </div>
          </div>
          <div>
            <img src = {activeaxis} alt = "activeaxis" />
            <h1>ActiveAxis</h1>
            <p>A mobile application for fitness and health that allows users to monitor fitness metrics, including total calories burned, steps, distance traveled, and heart rate.</p>
            <div>
              <a href="https://github.com/ajjang001/ActiveAxis" target ='_blank' rel="noopener noreferrer">Code Repository</a>
            </div>
          </div>
          <div>
            <img src = {cafe} alt = "cafe" />
            <h1>Cafe Staff Management System</h1>
            <p>A system that supports Cafe owners in viewing and managing Cafe work slots, supports cafe staff in bidding for work slots and the cafe role, and supports cafe managers in reviewing and managing cafe staff and their work slot bids.</p>
            <div>
              <button disabled>Repository Not Available</button>
            </div>
          </div>
          <div>
            <img src = {portfolio} alt = "portfolio" />
            <h1>Personal Portfolio</h1>
            <p>A personal portfolio website, using React JS and Tailwind CSS, to showcase my resume, education, certifications, and projects.</p>
            <div>
              <a href="https://github.com/alexanderwilly/portfolio" target ='_blank' rel="noopener noreferrer">Code Repository</a>
            </div>
          </div>
        </div>
      </section>

      <section id = "skills" className="skills flex flex-col items-center gap-5 py-5">
        <h1 className = "text-blue-200 text-4xl font-semibold tracking-wider pb-1 border-b-2 border-blue-200">
          &nbsp;SKILLS&nbsp;
        </h1>
        <div>
          <h1>Programming Languages and Frameworks</h1>
          <div>
            {
              Array.from(languages).map(([name, img]) =>(
                <div key = {name}>
                  <img src = {img} alt = {name} />
                  <h2>{name}</h2>
                </div>
              )) 
            }
          </div>
        </div>
        <div>
          <h1>Database</h1>
          <div>
            {
              Array.from(database).map(([name, img]) =>(
                <div key = {name}>
                  <img src = {img} alt = {name} />
                  <h2>{name}</h2>
                </div>
              )) 
            }
          </div>
        </div>
        <div>
          <h1>Project Development Methodology and Tools</h1>
          <div>
            {
              Array.from(methodology).map(([name, img]) =>(
                <div key = {name}>
                  <img src = {img} alt = {name} />
                  <h2>{name}</h2>
                </div>
              )) 
            }
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className = "contact" id = "contact">
        <h1 className = "text-blue-200 text-4xl font-semibold tracking-wider pb-1 border-b-2 border-blue-200">
          &nbsp;CONTACT ME&nbsp;
        </h1>
        
        <div className = "contact-container w-full">
          <div className='social-media'>
            <a href="mailto:alexanderwillyj@gmail.com" rel="noopener noreferrer">
              <img src = {email_icon} alt='email_icon'/>
              <span>alexanderwillyj@gmail.com</span>
            </a>
            <a href="https://www.linkedin.com/in/alexanderwillyj/" target ='_blank' rel="noopener noreferrer">
              <img src = {linkedin_icon} alt='linkedin_icon'/>
              <span>alexanderwillyj</span>
            </a>
            <a href = "https://github.com/alexanderwilly" target ='_blank' rel="noopener noreferrer">
              <img src = {github_icon} alt='github_icon'/>
              <span>alexanderwilly</span>
            </a>
          </div>
          

          <div className='home-pic'>
            <img src = {pic1} alt = "home_img"  />
          </div>
        </div>


      </section>
      
      <footer>
        <div className='footer'>
          <span>© 2025 Alexander Willy Johan</span>
        </div>
      </footer>
      
    </main>
  );
}

export default App;
