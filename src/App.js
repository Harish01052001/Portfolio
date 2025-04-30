import React, { useState } from 'react';
import './App.css';
import { FaHome, FaUser, FaCode, FaGraduationCap, FaEnvelope, FaGithub, FaLinkedin, FaLightbulb, FaRocket, FaUsers, FaCogs, FaHtml5, FaCss3Alt, FaJs, FaLaravel, FaDatabase, FaBootstrap, FaRobot, FaReact, FaProjectDiagram, FaClock, FaFontAwesome, FaPlug } from 'react-icons/fa';
import { SiPhp, SiJquery, SiPostgresql, SiXampp, SiPhpmyadmin, SiMysql } from 'react-icons/si';
import 'bootstrap/dist/css/bootstrap.min.css';

const skillList = [
  { name: 'HTML5', icon: <FaHtml5 className="pro-skill-icon" /> },
  { name: 'CSS3', icon: <FaCss3Alt className="pro-skill-icon" /> },
  { name: 'Bootstrap', icon: <FaBootstrap className="pro-skill-icon" /> },
  { name: 'JavaScript', icon: <FaJs className="pro-skill-icon" /> },
  { name: 'JQuery', icon: <SiJquery className="pro-skill-icon" /> },
  { name: 'Ajax', icon: <FaCode className="pro-skill-icon" /> },
  { name: 'API', icon: <FaCode className="pro-skill-icon" /> },
  { name: 'React', icon: <FaReact className="pro-skill-icon" /> },
  { name: 'PHP', icon: <SiPhp className="pro-skill-icon" /> },
  { name: 'Laravel', icon: <FaLaravel className="pro-skill-icon" /> },
  { name: 'SQL', icon: <FaDatabase className="pro-skill-icon" /> },
  { name: 'MySQL', icon: <SiMysql className="pro-skill-icon" /> },
  { name: 'phpMyAdmin', icon: <SiPhpmyadmin className="pro-skill-icon" /> },
  { name: 'PostgreSQL', icon: <SiPostgresql className="pro-skill-icon" /> },
  { name: 'AI', icon: <FaRobot className="pro-skill-icon" /> },
];

const projectTechStack = [
  { name: 'HTML5', icon: <FaHtml5 /> },
  { name: 'CSS3', icon: <FaCss3Alt /> },
  { name: 'Bootstrap', icon: <FaBootstrap /> },
  { name: 'JavaScript', icon: <FaJs /> },
  { name: 'jQuery', icon: <SiJquery /> },
  { name: 'AJAX', icon: <FaCode /> },
  { name: 'API', icon: <FaPlug /> },
  { name: 'React', icon: <FaReact /> },
  { name: 'PHP', icon: <SiPhp /> },
  { name: 'Laravel', icon: <FaLaravel /> },
  { name: 'MySQL', icon: <SiMysql /> },
  { name: 'phpMyAdmin', icon: <SiPhpmyadmin /> },
  { name: 'PostgreSQL', icon: <SiPostgresql /> },
  { name: 'Font Awesome', icon: <FaFontAwesome /> },
  { name: 'Cron Job', icon: <FaClock /> },
  { name: 'SAP API', icon: <FaPlug /> },
];

const sections = [
  {
    key: 'home',
    label: 'Home',
    icon: <FaHome />,
    content: (
      <div className="pro-tab-content pro-home-content">
        <div className="pro-home-visual">
          <img className="pro-avatar-large" src="https://ui-avatars.com/api/?name=Harish+S&background=232946&color=fff&size=180" alt="Harish S" />
          <div className="pro-home-glow" />
        </div>
        <h1>Harish S</h1>
        <div className="pro-home-tagline">Full Stack Web Engineer.</div>
        <p className="pro-hero-summary">
          Passionate about modern web development, clean code, and delivering high-quality digital solutions. Always learning, always building.
        </p>
        <div className="pro-hero-social">
          <a href="#" title="GitHub"><FaGithub /></a>
          <a href="#" title="LinkedIn"><FaLinkedin /></a>
        </div>
      </div>
    )
  },
  {
    key: 'about',
    label: 'About',
    icon: <FaUser />,
    content: (
      <div className="pro-tab-content pro-about-cards">
        <h2>About Me</h2>
        <div className="pro-about-grid">
          <div className="pro-about-card">
            <FaLightbulb className="pro-about-icon" />
            <h3>Growth Mindset</h3>
            <p>I thrive in environments of growth and excellence, always seeking new challenges and opportunities to learn.</p>
          </div>
          <div className="pro-about-card">
            <FaRocket className="pro-about-icon" />
            <h3>Driven by Results</h3>
            <p>I am motivated by achieving both personal and organizational goals, and I take pride in delivering high-quality work.</p>
          </div>
          <div className="pro-about-card">
            <FaUsers className="pro-about-icon" />
            <h3>Team Player</h3>
            <p>I collaborate effectively, communicate clearly, and enjoy working with diverse teams to solve complex problems.</p>
          </div>
          <div className="pro-about-card">
            <FaCogs className="pro-about-icon" />
            <h3>Problem Solver</h3>
            <p>I love tackling new challenges and finding creative, efficient solutions in software and web development.</p>
          </div>
        </div>
      </div>
    )
  },
  {
    key: 'skills',
    label: 'Skills',
    icon: <FaCode />,
    content: (
      <div className="pro-tab-content">
        <h2>Technical Skills</h2>
        <div className="pro-skills-icon-grid">
          {skillList.map(skill => (
            <div className="pro-skill-icon-card" key={skill.name}>
              {skill.icon}
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
        <h2>Skills Summary</h2>
        <ul className="pro-skills-summary-list">
          <li>Expertise in front-end and back-end web development using modern technologies.</li>
          <li>Strong experience building responsive, scalable, and user-friendly web applications.</li>
          <li>Proficient in integrating APIs and working with databases (MySQL, PostgreSQL, phpMyAdmin).</li>
          <li>Skilled in using frameworks and libraries such as React, Laravel, Bootstrap, and JQuery.</li>
          <li>Hands-on knowledge of AI concepts and implementation in web projects.</li>
          <li>Effective problem solver with a focus on clean code and best practices.</li>
        </ul>
      </div>
    )
  },
  {
    key: 'projects',
    label: 'Projects',
    icon: <FaProjectDiagram />,
    content: (
      <div className="pro-tab-content pro-projects-content">
        <h2>Project: HR Workflow Management System</h2>
        <div className="pro-project-details mb-5">
          <div className="mb-3">
            <span className="fw-bold">🛠️ Tech Stack</span>
            <ul className="pro-project-tech-list">
              <li><b>Frontend:</b> HTML, CSS, Bootstrap, JavaScript, jQuery, AJAX</li>
              <li><b>Backend:</b> PHP (Laravel Framework)</li>
              <li><b>Database:</b> MySQL (phpMyAdmin)</li>
              <li><b>Icons:</b> Font Awesome</li>
              <li><b>Mail & Automation:</b> Cron Job for scheduled email notifications</li>
            </ul>
          </div>
          <div className="mb-3">
            <span className="fw-bold">🧩 Core Features</span>
            <ul className="pro-project-features">
              <li><b>User Roles & Access</b>
                <ul>
                  <li><b>Super Admin:</b> Full system control; can create and manage Admin users.</li>
                  <li><b>Admin:</b> Manages HR operations; cannot create or manage Super Admins.</li>
                </ul>
              </li>
              <li><b>Authentication System</b>
                <ul>
                  <li>Secure user registration and login using Laravel's built-in authentication.</li>
                </ul>
              </li>
              <li><b>Multi-Level Employee Onboarding Workflow</b>
                <ul>
                  <li>HR (Admin) initiates onboarding by filling out a form with employee details (name, contact, ID, designation, branch, business unit, etc.).</li>
                  <li>The form is automatically routed through three levels of managerial approval:</li>
                  <ul>
                    <li><b>Level 1 Manager:</b> Reviews pre-filled data, adds remarks, submits or returns for revision. HR receives feedback via email.</li>
                    <li><b>Level 2 Manager:</b> Receives form via email, reviews, adds remarks, and submits.</li>
                    <li><b>Level 3 Manager:</b> Reviews and submits. If not submitted within 24 hours, an automated reminder is sent to HR, who can then manually approve and complete the process.</li>
                  </ul>
                </ul>
              </li>
              <li><b>Automated Email Notifications</b>
                <ul>
                  <li>At every stage (submission, approval, remarks, delays), automated emails are triggered with relevant details and secure action links.</li>
                </ul>
              </li>
              <li><b>Email Automation</b>
                <ul>
                  <li>Cron jobs are used to send form links, updates, and reminders for pending approvals.</li>
                </ul>
              </li>
              <li><b>SAP API Integration</b>
                <ul>
                  <li>The system integrates with SAP API to ensure all required employee data fields are captured and synchronized with the organization's SAP system, supporting seamless HR operations and compliance.</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <h2>Project: GSTR-1 Filing Platform</h2>
        <div className="pro-project-details">
          <div className="mb-3">
            <span className="fw-bold">🛠️ Tech Stack</span>
            <ul className="pro-project-tech-list">
              <li><b>Frontend:</b> HTML, CSS, Bootstrap, JavaScript, Metronic Theme, Handsontable, AJAX</li>
              <li><b>Backend:</b> Government GST API integration</li>
              <li><b>UI/UX:</b> Handsontable for spreadsheet-like data entry, multi-modal dialogs for user actions</li>
            </ul>
          </div>
          <div className="mb-3">
            <span className="fw-bold">🧩 Core Features</span>
            <ul className="pro-project-features">
              <li><b>GSTR-1 Filing Workflow</b>
                <ul>
                  <li><b>Prepare Return:</b> Auto-drafts return using latest data (invoices, credit notes, debit notes) from LEDGERS. Allows manual data entry and editing via interactive tables (e.g., B2B, B2C).</li>
                  <li><b>Upload Return & File Return:</b> Both actions trigger OTPs sent to the client via secure government API for authentication and confirmation.</li>
                  <li><b>Connect to GSTIN:</b> Secure OTP-based connection and authentication, fully integrated with government API.</li>
                  <li><b>Data Mismatch Handling:</b> If there is a mismatch between government portal data and LEDGERS, a modal is displayed to the user, with details fetched via government API.</li>
                  <li><b>Validation:</b> All data entered in Handsontable is validated for accuracy and completeness before submission.</li>
                  <li><b>Error Handling:</b> After filing, any errors returned by the government portal are received and displayed to the user, leveraging the government API for real-time feedback.</li>
                  <li><b>File Return:</b> Secure OTP-based filing; user receives OTP on registered mobile/email, enters it to confirm and complete filing.</li>
                </ul>
              </li>
              <li><b>Platform Features</b>
                <ul>
                  <li><b>Options Menu:</b> Save to Cloud, Export JSON/Excel, Reset Data for fresh start.</li>
                  <li><b>Dashboard:</b> Displays filing status, total taxable amount, tax liability, and invoice value.</li>
                  <li><b>Section-wise Summaries:</b> HSN-wise summary, e-commerce sales, advances, and amendments.</li>
                  <li><b>Credit & Debit Notes:</b> Manage returns, discounts, and additional tax liabilities.</li>
                </ul>
              </li>
              <li><b>GSTIN Connection & Validation</b>
                <ul>
                  <li>Secure OTP-based connection to GSTIN for direct filing. Real-time status updates and error handling.</li>
                  <li>Validation for data formatting, GSTIN correctness, and tax reconciliation. User guidance for resolving common errors and re-uploading returns.</li>
                </ul>
              </li>
              <li><b>Cloud-Based Return Preparation</b>
                <ul>
                  <li>Returns are always prepared with the latest saved data, minimizing manual work and ensuring consistency.</li>
                </ul>
              </li>
              <li><b>UI/UX Enhancements</b>
                <ul>
                  <li><b>Handsontable:</b> Spreadsheet-style data entry for efficient invoice management.</li>
                  <li><b>Multi-modal Dialogs:</b> Streamlined user actions and confirmations.</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  },
  {
    key: 'education',
    label: 'Education',
    icon: <FaGraduationCap />,
    content: (
      <div className="pro-tab-content">
        <h2>Education</h2>
        <div className="pro-education-timeline">
          <div className="pro-edu-item">
            <h3>BCA</h3>
            <p>Affiliated Thiruvalluvar University<br />2018-2021<br />75%</p>
          </div>
          <div className="pro-edu-item">
            <h3>HSC</h3>
            <p>State Board of Tamil Nadu<br />2018<br />60%</p>
          </div>
          <div className="pro-edu-item">
            <h3>SSLC</h3>
            <p>SSLC Board of Tamil Nadu<br />2016<br />70%</p>
          </div>
        </div>
      </div>
    )
  },
  {
    key: 'contact',
    label: 'Contact',
    icon: <FaEnvelope />,
    content: (
      <div className="pro-tab-content">
        <h2>Contact & Personal Details</h2>
        <ul className="pro-personal-list">
          <li><b>Date of Birth:</b> 01.05.2001</li>
          <li><b>Nationality:</b> Indian</li>
          <li><b>Marital Status:</b> Single</li>
          <li><b>Languages Known:</b> English and Tamil</li>
          <li><b>Address:</b> No:49/A, Palla Street, Kolakkaravadi, Devigapuram Post, Chetpet Taluk, Tiruvannamalai, 606902</li>
        </ul>
        <div className="pro-declaration">
          <b>Declaration:</b>
          <p>I confirm that the information provided by me is true to the best of my knowledge and belief.</p>
        </div>
        <div className="pro-hero-social">
          <a href="#" title="GitHub"><FaGithub /></a>
          <a href="#" title="LinkedIn"><FaLinkedin /></a>
        </div>
      </div>
    )
  }
];

function App() {
  const [activeTab, setActiveTab] = useState('home');

  const currentSection = sections.find(s => s.key === activeTab);

  return (
    <div className="pro-fullwindow-root">
      <header className="pro-header">
        <div className="pro-header-brand">Harish S</div>
        <nav className="pro-header-nav">
          {sections.map(section => (
            <button
              key={section.key}
              className={`pro-nav-btn${activeTab === section.key ? ' active' : ''}`}
              onClick={() => setActiveTab(section.key)}
              title={section.label}
            >
              {section.icon}
              <span>{section.label}</span>
            </button>
          ))}
        </nav>
        <a href="/resume.pdf" download className="pro-header-resume">Download Resume</a>
      </header>
      <main className="pro-main-content">
        {currentSection && currentSection.content}
      </main>
      <footer className="pro-footer">
        <span>&copy; {new Date().getFullYear()} Harish S. All rights reserved.</span>
      </footer>
    </div>
  );
}

export default App;
