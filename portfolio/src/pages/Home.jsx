import Navbar from "../components/Navbar";
import "../styles/home.scss";
import Reveal from "../components/Reveal";
  const projects = [
    {
      number: "01",
      featured: true,
      title: "Customer Support AI Agent",
      category: "AI / BACKEND",

      description:
        "An AI-powered customer support system that uses hybrid RAG and LLM orchestration to generate grounded, context-aware responses from a company's knowledge base.",

      problem:
        "Traditional support systems struggle to answer questions accurately when information is spread across different documents and sources.",

      solution:
        "Built a retrieval-augmented support pipeline that retrieves relevant information, generates an answer with an LLM, and uses a self-correction layer to improve response quality.",

      technologies: [
        "Python",
        "FastAPI",
        "LangChain",
        "Chroma",
        "Sentence Transformers",
        "Ollama",
      ],

      features: [
        "Hybrid RAG pipeline",
        "Vector-based retrieval",
        "LLM response generation",
        "Self-correction",
        "FastAPI backend",
      ],

      github:
        "https://github.com/harshhh312/Customer-support-aiagent",
    },

    {
      number: "02",
      featured: true,
      title: "Renewal Risk Intelligence Engine",
      category: "AI / DATA",

      description:
        "An AI-augmented system that combines structured customer data, usage patterns, support information and unstructured CSM notes to identify accounts at risk of renewal.",

      problem:
        "Customer success teams often have information spread across multiple data sources, making it difficult to identify renewal risks early.",

      solution:
        "Built a unified risk-analysis pipeline that reconciles multiple data sources, calculates a weighted risk score and generates plain-English explanations for why an account may be at risk.",

      technologies: [
        "Python",
        "Pandas",
        "Machine Learning",
        "RAG",
        "NLP",
      ],

      features: [
        "Multi-source data reconciliation",
        "Risk scoring",
        "Customer segmentation",
        "AI-generated explanations",
        "Actionable insights",
      ],

      github: "#",
    },

    {
      number: "03",
      featured: false,
      title: "Credit Card Fraud Detection",
      category: "MACHINE LEARNING",

      description:
        "A machine learning system designed to identify potentially fraudulent credit card transactions while handling the challenges of imbalanced financial data.",

      problem:
        "Fraud detection datasets are highly imbalanced, making accuracy alone a poor indicator of model performance.",

      solution:
        "Built and evaluated a classification pipeline with a focus on metrics such as precision, recall and F1-score to better evaluate fraudulent transaction detection.",

      technologies: [
        "Python",
        "Pandas",
        "Scikit-learn",
        "Machine Learning",
      ],

      features: [
        "Data preprocessing",
        "Classification",
        "Imbalanced data analysis",
        "Model evaluation",
      ],

      github:
        "https://github.com/harshhh312/CDFD",
    },

    {
      number: "04",
      featured: false,
      title: "Real-Time Chat Application",
      category: "FULL STACK",

      description:
        "A real-time messaging application built with React and Firebase, supporting user discovery, messaging and image sharing.",

      problem:
        "Wanted to build a practical full-stack application that handled real-time communication and user interactions.",

      solution:
        "Built a responsive React application backed by Firebase for authentication, real-time data and messaging functionality.",

      technologies: [
        "React",
        "JavaScript",
        "Firebase",
      ],

      features: [
        "Real-time messaging",
        "User search",
        "Image sharing",
        "Firebase backend",
      ],

      github:
        "https://github.com/harshhh312/chatproject",
    },
  ];
  function Home() {
    return (
      <main className="home">

        <Navbar />

        {/* =========================
            HERO
        ========================= */}

        <section className="hero" id="home">

          <div className="hero-grid"></div>

          <div className="hero-glow"></div>

          <div className="hero-content">

            <div className="availability">
              <span className="availability-dot"></span>
              Open to opportunities
            </div>

            <p className="hero-intro">
              Hi, I'm Harsh 👋
            </p>

            <h1>
                I turn data
                <span> into decisions.</span>
            </h1>

            <p className="hero-description">
              Artificial Intelligence & Data Science graduate focused on
              building practical AI applications, backend systems and
              modern web experiences.
            </p>

            <div className="hero-buttons">

              <a
                href="#projects"
                className="primary-btn"
              >
                View my work
                <span>↗</span>
              </a>

              <a
                href="#contact"
                className="secondary-btn"
              >
                Let's talk
              </a>

            </div>

            <div className="hero-links">

              <a
                href="https://github.com/harshhh312"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>

              <span>•</span>

              <a
                href="https://www.linkedin.com/in/harsh-chaudhari312"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>

              <span>•</span>

              <a
                href="/harsh-chaudhari.pdf"
                target="_blank"
                rel="noreferrer"
              >
                Resume ↗
              </a>

            </div>

          </div>

          <div className="scroll-indicator">

            <span>
              Scroll to explore
            </span>

            <div className="scroll-line"></div>

          </div>

        </section>


        {/* =========================
      PROJECTS
  ========================= */}

  <section
    className="projects section"
    id="projects"
  >

    <div className="section-container">

      {/* Section heading */}

      <div className="projects-heading">

        <div>

          <p className="eyebrow">
            SELECTED WORK
          </p>

          <h2>
            Things I've
            <span> built.</span>
          </h2>

        </div>

        <p className="heading-description">
          Projects where I've explored AI, machine learning,
          backend development and full-stack applications.
        </p>

      </div>


      {/* =========================
          FEATURED PROJECTS
      ========================= */}

      <div className="featured-projects">

        {projects
          .filter((project) => project.featured)
          .map((project, index) => (

            <Reveal
              key={project.number}
              delay={index * 0.1}
            >

              <article className="featured-project">

                {/* Top */}

                <div className="project-top">

                  <div className="project-meta">

                    <span className="project-number">
                      {project.number}
                    </span>

                    <span className="project-category">
                      {project.category}
                    </span>

                  </div>

                  {project.github !== "#" && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="project-link"
                    >
                      View GitHub ↗
                    </a>
                  )}

                </div>


                {/* Main */}

                <div className="featured-project-content">

                  <h3>
                    {project.title}
                  </h3>

                  <p className="featured-description">
                    {project.description}
                  </p>


                  {/* Problem / Solution */}

                  <div className="project-details">

                    <div className="project-detail">

                      <span>
                        THE PROBLEM
                      </span>

                      <p>
                        {project.problem}
                      </p>

                    </div>


                    <div className="project-detail">

                      <span>
                        THE APPROACH
                      </span>

                      <p>
                        {project.solution}
                      </p>

                    </div>

                  </div>


                  {/* Features */}

                  <div className="project-features">

                    <span className="detail-label">
                      KEY FEATURES
                    </span>

                    <div className="feature-list">

                      {project.features.map((feature) => (

                        <span key={feature}>
                          {feature}
                        </span>

                      ))}

                    </div>

                  </div>


                  {/* Technologies */}

                  <div className="project-technologies">

                    {project.technologies.map((technology) => (

                      <span key={technology}>
                        {technology}
                      </span>

                    ))}

                  </div>

                </div>

              </article>

            </Reveal>

          ))}

      </div>


      {/* =========================
          OTHER PROJECTS
      ========================= */}

      <div className="other-projects-heading">

        <p className="eyebrow">
          MORE PROJECTS
        </p>

      </div>


      <div className="other-projects">

        {projects
          .filter((project) => !project.featured)
          .map((project, index) => (

            <Reveal
              key={project.number}
              delay={index * 0.08}
            >

              <article className="other-project">

                <div className="other-project-top">

                  <span className="project-number">
                    {project.number}
                  </span>

                  <span className="project-category">
                    {project.category}
                  </span>

                </div>


                <div className="other-project-content">

                  <h3>
                    {project.title}
                  </h3>

                  <p>
                    {project.description}
                  </p>

                </div>


                <div className="other-project-bottom">

                  <div className="project-technologies">

                    {project.technologies.map((technology) => (

                      <span key={technology}>
                        {technology}
                      </span>

                    ))}

                  </div>

                  {project.github !== "#" && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="project-link"
                    >
                      GitHub ↗
                    </a>
                  )}

                </div>

              </article>

            </Reveal>

          ))}

      </div>

    </div>

  </section>
              {/* =========================
      ABOUT
  ========================= */}

  <section className="about section" id="about">
    <div className="section-container">

  <Reveal>

    <div className="about-grid">

      <div className="about-number">
        01
      </div>

      <div className="about-text">

        <p className="about-lead">
          I'm an Artificial Intelligence & Data Science
          graduate who enjoys turning ideas into working
          software.
        </p>

        <p>
          My interests sit at the intersection of software
          engineering, artificial intelligence and data.
          I've built applications involving RAG pipelines,
          machine learning, APIs and full-stack web
          development.
        </p>

        <p>
          I'm currently focused on strengthening my
          problem-solving, backend engineering and
          AI application development skills while looking
          for opportunities where I can learn, contribute
          and grow as a developer.
        </p>

      </div>

    </div>

  </Reveal>

      {/* =========================
          SKILLS
      ========================= */}

      <div className="skills">

        <div className="skills-heading">

          <p className="eyebrow">
            TECHNICAL SKILLS
          </p>

          <p>
            Tools and technologies I use to build things.
          </p>

        </div>

        <Reveal> 
        <div className="skills-grid">


          {/* Languages */}

          <div className="skill-group">

            <span className="skill-number">
              01
            </span>

            <h3>
              Languages
            </h3>

            <div className="skill-items">

              <span>C++</span>
              <span>Python</span>
              <span>JavaScript</span>

            </div>

          </div>


          {/* AI / ML */}

          <div className="skill-group">

            <span className="skill-number">
              02
            </span>

            <h3>
              AI / ML
            </h3>

            <div className="skill-items">

              <span>Machine Learning</span>
              <span>RAG</span>
              <span>LangChain</span>
              <span>Sentence Transformers</span>
              <span>FAISS</span>
              <span>Chroma</span>

            </div>

          </div>


          {/* Development */}

          <div className="skill-group">

            <span className="skill-number">
              03
            </span>

            <h3>
              Development
            </h3>

            <div className="skill-items">

              <span>React</span>
              <span>FastAPI</span>
              <span>Node.js</span>
              <span>HTML</span>
              <span>SCSS</span>

            </div>

          </div>


          {/* Data / Tools */}

          <div className="skill-group">

            <span className="skill-number">
              04
            </span>

            <h3>
              Data & Tools
            </h3>

            <div className="skill-items">

              <span>PostgreSQL</span>
              <span>Firebase</span>
              <span>Git</span>
              <span>GitHub</span>
              <span>Pandas</span>
              <span>NumPy</span>

            </div>

          </div>

        </div>
      </Reveal>
    </div>
    </div>
  </section>

  {/* =========================
      EDUCATION
  ========================= */}

  <section
    className="education section"
    id="education"
  >

    <div className="section-container">

      <div className="section-heading">

        <p className="eyebrow">
          EDUCATION
        </p>

        <h2>
          Where I learned
          <span> the fundamentals.</span>
        </h2>

      </div>


      <div className="education-card">

        <div className="education-year">
          2022 — 2026
        </div>


        <div className="education-info">

          <h3>
            B.E. Artificial Intelligence & Data Science
          </h3>

          <p>
            Datta Meghe College of Engineering
          </p>

          <span>
            Mumbai University
          </span>

        </div>


        <div className="education-grade">

          <span>
            CGPA
          </span>

          <strong>
            7.57
          </strong>

        </div>

      </div>

    </div>

  </section>


  {/* =========================
      CONTACT
  ========================= */}

  <section
    className="contact section"
    id="contact"
  >

    <div className="section-container">

      <div className="contact-box">

        <p className="eyebrow">
          GET IN TOUCH
        </p>

        <h2>
          Let's build something
          <span> useful.</span>
        </h2>

        <p className="contact-description">
          I'm currently looking for opportunities where I can
          contribute, learn from experienced developers and
          build meaningful software.
        </p>

        <a
          href="https://mail.google.com/mail/?view=cm&to=chaudhariharsh312@gmail.com"
          target="_blank"
          rel="noreferrer"
          className="primary-btn"
        >
          Say hello
          <span>↗</span>
        </a>

        <div className="contact-socials">

          <a
            href="https://github.com/harshhh312"
            target="_blank"
            rel="noreferrer"
            className="contact-social-link"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            GitHub
          </a>

          <span className="contact-social-divider">·</span>

          <a
            href="https://www.linkedin.com/in/harsh-chaudhari312"
            target="_blank"
            rel="noreferrer"
            className="contact-social-link"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            LinkedIn
          </a>

          <span className="contact-social-divider">·</span>

          <a
            href="/harsh-chaudhari.pdf"
            target="_blank"
            rel="noreferrer"
            className="contact-social-link"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
              <polyline points="14 2 14 8 20 8"/>
              <line x1="16" y1="13" x2="8" y2="13"/>
              <line x1="16" y1="17" x2="8" y2="17"/>
              <polyline points="10 9 9 9 8 9"/>
            </svg>
            Resume
          </a>

        </div>

      </div>

    </div>

  </section>


  {/* =========================
      FOOTER
  ========================= */}

  <footer>

    <div className="section-container footer-inner">

      <span>
        © 2026 Harsh
      </span>

      <span>
        Built with React & SCSS
      </span>

      <div className="footer-links">

        <a
          href="https://github.com/harshhh312"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/harsh-chaudhari312"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>

      </div>

    </div>

  </footer>

      </main>
    );
  }

  export default Home;