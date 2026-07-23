import { useState } from "react";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  BookOpen,
  Download,
  GraduationCap,
  Mail,
  Menu,
  Workflow,
  X,
} from "lucide-react";
import {
  caseStudies,
  competencies,
  metrics,
  navigation,
  roleFit,
} from "./data/portfolio";
import { BASE_PATH } from "./site";

const assetUrl = (path) => `${BASE_PATH}${path.replace(/^\//, "")}`;

function GitHubIcon({ size = 19 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 .7a11.5 11.5 0 0 0-3.64 22.42c.58.1.79-.25.79-.56v-2.02c-3.22.7-3.9-1.36-3.9-1.36-.52-1.34-1.28-1.7-1.28-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.57-.29-5.27-1.28-5.27-5.69 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.16 1.18A10.9 10.9 0 0 1 12 6.3c.98 0 1.95.13 2.87.39 2.19-1.49 3.15-1.18 3.15-1.18.64 1.59.24 2.76.12 3.05.74.8 1.19 1.83 1.19 3.09 0 4.42-2.71 5.39-5.29 5.68.42.36.79 1.07.79 2.16v3.07c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .7Z" />
    </svg>
  );
}

function LinkedInIcon({ size = 19 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V8.98h3.42v1.57h.05c.47-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.29ZM5.32 7.41a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13Zm1.78 13.04H3.54V8.98H7.1v11.47Z" />
    </svg>
  );
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="header-inner shell">
        <a className="brand" href="#top" aria-label="Sandeep Satheesh, back to top">
          <span className="brand-mark" aria-hidden="true">SS</span>
          <span>Sandeep Satheesh</span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setMenuOpen((current) => !current)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        <nav
          id="primary-navigation"
          className={`primary-nav ${menuOpen ? "is-open" : ""}`}
          aria-label="Primary navigation"
        >
          {navigation.map((item) => (
            <a
              href={item.href}
              key={item.href}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a className="nav-contact" href="mailto:ss348@illinois.edu">
            Email me
            <ArrowUpRight size={15} aria-hidden="true" />
          </a>
        </nav>
      </div>
    </header>
  );
}

function SectionHeading({ eyebrow, title, text, light = false }) {
  return (
    <div className={`section-heading ${light ? "is-light" : ""}`}>
      <p className="eyebrow">
        <span aria-hidden="true" />
        {eyebrow}
      </p>
      <h2>{title}</h2>
      {text && <p className="section-intro">{text}</p>}
    </div>
  );
}

function Hero() {
  return (
    <>
      <section className="hero shell" id="top" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="hero-kicker">SMMC Support Specialist portfolio · UIUC</p>
          <h1 id="hero-title">
            Student Education
            {" "}
            <span>&amp; Data Support</span>
          </h1>
          <p className="hero-lede">
            I’m Sandeep, an incoming MCS student at UIUC. I bring experience
            teaching large student groups, improving educational workflows,
            analyzing data, and coordinating student teams.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#experience">
              View my work
              <ArrowDownRight size={18} aria-hidden="true" />
            </a>
            <a
              className="button button-secondary"
              href={`${BASE_PATH}Sandeep_Satheesh_Resume.pdf`}
              download
            >
              <Download size={18} aria-hidden="true" />
              Download resume
            </a>
            <a
              className="button button-secondary"
              href={`${BASE_PATH}Sandeep_Satheesh_SMMC_Portfolio.pdf`}
              download
            >
              <Download size={18} aria-hidden="true" />
              Download portfolio PDF
            </a>
          </div>
          <div className="hero-note">
            <span className="status-dot" aria-hidden="true" />
            <p>
              Prepared for the Student Money Management Center’s mix of
              financial education, program analysis, and dependable operations.
            </p>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-grid" aria-hidden="true" />
          <div className="evidence-panel">
            <div className="evidence-heading">
              <span>How I work</span>
              <strong>Three strengths, working together</strong>
            </div>
            <div className="evidence-rows">
              <div>
                <BookOpen size={21} aria-hidden="true" />
                <p><strong>Education</strong><span>Explain ideas clearly</span></p>
                <b>01</b>
              </div>
              <div>
                <BarChart3 size={21} aria-hidden="true" />
                <p><strong>Data</strong><span>Find the useful signal</span></p>
                <b>02</b>
              </div>
              <div>
                <Workflow size={21} aria-hidden="true" />
                <p><strong>Program support</strong><span>Keep the work moving</span></p>
                <b>03</b>
              </div>
            </div>
            <div className="evidence-chart" aria-hidden="true">
              <span>Listen</span>
              <i />
              <span>Measure</span>
              <i />
              <span>Improve</span>
            </div>
          </div>
        </div>
      </section>

      <MetricStrip />
    </>
  );
}

function MetricStrip() {
  return (
    <section className="metrics-section" aria-labelledby="metrics-title">
      <div className="shell">
        <div className="metrics-topline">
          <p id="metrics-title">A few numbers behind the work</p>
          <BarChart3 size={19} aria-hidden="true" />
        </div>
        <dl className="metrics-grid">
          {metrics.map((metric) => (
            <div className="metric" key={`${metric.value}-${metric.unit}`}>
              <dt>
                <strong>{metric.value}</strong>
                <span>{metric.unit}</span>
              </dt>
              <dd>{metric.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="section about-section" id="about">
      <div className="shell about-grid">
        <SectionHeading
          eyebrow="About me"
          title="I like the point where numbers become useful to people."
        />
        <div className="about-copy">
          <p className="lead-paragraph">
            Good programs need more than good intentions. They need clear
            information, sensible workflows, and people who notice when
            something is not working.
          </p>
          <p>
            My studies in programming, data science, and engineering taught me
            how to examine a problem carefully. Teaching at IIT Madras and
            leading Paradox taught me the other half: listen to people, explain
            things plainly, and follow through on the operational details.
          </p>
          <p>
            As I begin the Master of Computer Science program at UIUC, I want to
            bring those habits to work that supports students—especially work
            involving educational resources, data-informed decisions, and
            financial well-being.
          </p>
          <div className="education-line">
            <div>
              <GraduationCap size={20} aria-hidden="true" />
              <span>University of Illinois Urbana-Champaign</span>
            </div>
            <strong>Master of Computer Science · 2026–2028</strong>
          </div>
        </div>
      </div>
    </section>
  );
}

function RoleFit() {
  const roleIcons = [BookOpen, ArrowRight, BarChart3, Workflow, GraduationCap];

  return (
    <section className="section role-section" id="role-fit">
      <div className="shell">
        <SectionHeading
          eyebrow="What I bring"
          title="How my experience fits the SMMC role"
          text="Each part of the position connects to work I have already done in student education, course administration, analysis, or team leadership."
          light
        />

        <ol className="role-path">
          {roleFit.map((item, index) => {
            const Icon = roleIcons[index];
            return (
              <li className="role-step" key={item.number}>
                <div className="role-node" aria-hidden="true">
                  <Icon size={20} />
                </div>
                <span className="role-number">{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

function FactList({ facts }) {
  return (
    <dl className="fact-list">
      {facts.map((fact) => (
        <div key={`${fact.value}-${fact.label}`}>
          <dt>{fact.value}</dt>
          <dd>{fact.label}</dd>
        </div>
      ))}
    </dl>
  );
}

function CaseStudyText({ study }) {
  return (
    <div className="case-copy">
      <p className="case-eyebrow">
        <span>{study.index}</span>
        {study.eyebrow}
      </p>
      <h3>{study.title}</h3>
      <p className="case-intro">{study.intro}</p>
      <FactList facts={study.facts} />
      <div className="case-details">
        {study.sections.map((section) => (
          <div key={section.title}>
            <h4>{section.title}</h4>
            <p>{section.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function Experience() {
  const [bdm, paradox] = caseStudies;

  return (
    <section className="section experience-section" id="experience">
      <div className="shell">
        <SectionHeading
          eyebrow="Relevant experience"
          title="Evidence for the work SMMC needs"
          text="These two roles show how I teach, improve educational processes, manage details, and support people at scale."
        />

        <div className="case-study-grid">
          <article className="case-study" aria-labelledby="bdm-title">
            <div id="bdm-title">
              <CaseStudyText study={bdm} />
            </div>
          </article>
          <article className="case-study" aria-labelledby="paradox-title">
            <div id="paradox-title">
              <CaseStudyText study={paradox} />
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

function PhotoGallery() {
  const photos = [
    {
      src: "assets/bdm-team-wide.jpg",
      alt: "Sandeep with members of the Business Data Management course team",
      width: 1200,
      height: 900,
    },
    {
      src: "assets/bdm-team-portrait.jpg",
      alt: "Sandeep and colleagues from the Business Data Management course",
      width: 640,
      height: 642,
    },
    {
      src: "assets/paradox-stage.jpg",
      alt: "Paradox 2026 steering committee members receiving certificates at the closing ceremony",
      width: 2200,
      height: 1466,
    },
  ];

  return (
    <section className="photo-section" id="media" aria-labelledby="media-title">
      <div className="shell photo-section-inner">
        <h2 id="media-title">Media</h2>
        <div className="photo-grid">
          {photos.map((photo) => (
            <img
              key={photo.src}
              src={assetUrl(photo.src)}
              alt={photo.alt}
              width={photo.width}
              height={photo.height}
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function Competencies() {
  return (
    <section className="section skills-section" id="skills">
      <div className="shell">
        <SectionHeading
          eyebrow="SMMC role fit"
          title="The skills I would bring to the center"
          text="A focused mix of student education, communication analysis, digital program support, and team coordination."
        />
        <div className="competency-grid">
          {competencies.map((group) => (
            <article className="competency-card" key={group.number}>
              <div className="competency-topline">
                <span>{group.number}</span>
                <ArrowUpRight size={20} aria-hidden="true" />
              </div>
              <h3>{group.title}</h3>
              <p>{group.description}</p>
              <ul>
                {group.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <article className="additional-work">
          <div className="additional-icon" aria-hidden="true">
            <BarChart3 size={26} />
          </div>
          <div>
            <p className="mini-eyebrow">Evidence of applied analysis</p>
            <h3>Turning a large dataset into useful findings</h3>
            <p>
              For the Karnataka State Police Datathon, I helped build a
              geospatial and time-series analysis tool that turned complex data
              into findings people could use. It is the same practical approach
              I would bring to SMMC’s communication and education data.
            </p>
            <div className="tool-tags" aria-label="Project tools">
              <span>Python</span>
              <span>Time series</span>
              <span>Tableau</span>
              <span>Geospatial analysis</span>
            </div>
          </div>
          <a
            className="text-link"
            href="https://github.com/sandeepstele/KSP-final"
            target="_blank"
            rel="noreferrer"
            aria-label="View the Karnataka State Police Datathon project on GitHub"
          >
            View project
            <ArrowUpRight size={17} aria-hidden="true" />
          </a>
        </article>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="shell contact-grid">
        <div>
          <p className="eyebrow contact-eyebrow">
            <span aria-hidden="true" />
            Let’s connect
          </p>
          <h2>Good student support starts with a clear conversation.</h2>
        </div>
        <div className="contact-copy">
          <p>
            I’m applying specifically for the SMMC Support Specialist position.
            I would be glad to help the center create useful financial education,
            understand what is reaching students, support the Digital Badges
            Program, and guide student interns.
          </p>
          <div className="contact-links">
            <a href="mailto:ss348@illinois.edu">
              <Mail size={19} aria-hidden="true" />
              ss348@illinois.edu
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
            <a
              href="https://www.linkedin.com/in/sandeepstele/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon />
              LinkedIn
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
            <a
              href="https://github.com/sandeepstele"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon />
              GitHub
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-inner">
        <div>
          <span className="brand-mark footer-mark" aria-hidden="true">SS</span>
        </div>
        <div className="footer-meta">
          <p>© {new Date().getFullYear()} Sandeep Satheesh</p>
          <a href="#top">
            Back to top
            <ArrowUpRight size={15} aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <Header />
      <main id="main-content">
        <Hero />
        <About />
        <RoleFit />
        <Experience />
        <PhotoGallery />
        <Competencies />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
