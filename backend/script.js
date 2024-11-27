let mainData = `
    <header>
     
      <nav>
        <ul class="nav-options">
            <li><a id="exp"">Experience</a></li>
            <li><a id="skill">Skills</a></li>
            <li><a id="project">Projects</a></li>
            <li><a id="contact">Contact Me</a></li>
      </ul>
      </nav>
    </header> 

    <main class="introduction">
    <div class="intro-container">
    <div class="text-content">
        <h1 class="heading">Hello — </h1>
        <p class="intro-text">I am Rajshree Mehetre a Computer Science major with a Business minor at the University of Massachusetts Amherst. I am passionate about <span class="highlight">cybersecurity</span>, <span class="highlight">solving problems</span>, cameras and <span class="highlight">everything tech</span>.
    </p>
    <div class="social-links">
                <img src="/images/linkedin.png" alt="LinkedIn" class="social-icon">
                <img src="/images/git.png" alt="GitHub" class="social-icon">
                <img src="/images/insta.png" alt="Instagram" class="social-icon">
            </div>
    </div>
    </div>
    <img src="/images/my-image.jpg" alt="my image" class="my-image">
    </main>

  <section id="section1" class="section">
  <h2>Work Experiences</h2>
  <div class="timeline">
    <!-- Timeline Item 1 -->
    <div class="timeline-item">
      <div class="timeline-date">September 2023 - Present</div>
      <div class="timeline-content">
        <h3>Student Consultant</h3>
        <p>UMass IT, Amherst, MA</p>
        <p>Provided hands-on technical support to faculty and students, ensuring smooth IT infrastructure operation.</p>
      </div>
    </div>

    <!-- Timeline Item 2 -->
    <div class="timeline-item">
      <div class="timeline-date">August 2024 - Current</div>
      <div class="timeline-content">
        <h3>Resident Assistant</h3>
        <p>UMass Amherst, MA</p>
        <p>Organize community building and student learning initiatives, adeptly implementing Residential Curriculum programs.</p>
      </div>
    </div>

    <!-- Timeline Item 3 -->
    <div class="timeline-item">
      <div class="timeline-date">August 2021 - September 2021</div>
      <div class="timeline-content">
        <h3>Full Stack Intern</h3>
        <p>Serverdial Techserv, Odisha, India</p>
        <p>Developed e-commerce portals using WordPress, PHP, and MySQL.</p>
      </div>
    </div>

    <!-- Timeline Item 4 -->
    <div class="timeline-item">
      <div class="timeline-date">November 2020 - May 2022</div>
      <div class="timeline-content">
        <h3>Design Manager</h3>
        <p>Youthika, Amherst, MA</p>
        <p>Developed front-end features for a language learning web app, including flashcards and AI-driven translations.</p>
      </div>
    </div>
  </div>
</section>

    <section id="section2" class="section">
      <h2>Languages and Tools</h2>
      <div class="skill-images-container">
      <img src="/images/skills-tab/html-icon.png" class="skill-images">
      <img src="/images/skills-tab/css.png" class="skill-images">
      <img src="/images/skills-tab/js.png" class="skill-images">
      <img src="/images/skills-tab/c.png" class="skill-images">
      <img src="/images/skills-tab/java.png" class="skill-images">
      <img src="/images/skills-tab/git-logo.png" class="skill-images">
      <img src="/images/skills-tab/linux.png" class="skill-images">
      <img src="/images/skills-tab/nmap.png" class="skill-images">
      <img src="/images/skills-tab/adobe-lightroom.png" class="skill-images">
      <img src="/images/skills-tab/salesforce.png" class="skill-images">
      </div>
    </section>

    <section id="section3" class="section">
    <h2>Projects</h2>
    <div class="projects-container">
      <!-- project 1 -->
      <div class="project-item">
      <img src="/images/projects-tab/1.png" alt="Personal Website" class="project-image">
      <div class="content">
        <h3>Language Study App</h3>
        <p>
        I'm currently working in a team where we are developing a language learning web app.
        A key component that I am working on is an AI-driven translation feature that allows users to translate the entire app into their preferred language. 
        I'm also focusing on creating a responsive landing page UI.
        </p>
      </div>
      </div>

      <!-- project 2 -->
      <div class="project-item">
      <img src="/images/projects-tab/2.png" alt="Personal Website" class="project-image">
      <div class="content">
        <h3>Personal Website</h3>
        <p>
        My portfolio is a sleek, single-page website showcasing my experience and projects. 
        The intuitive navigation bar provides quick access to sections like Experience, Skills, Projects, and a Contact form. 
        For a comprehensive overview of my professional journey, visitors can download my resume directly from the site.
        </p>
      </div>
      </div>

      <!-- project 3 -->
      <div class="project-item">
      <img src="/images/projects-tab/3.png" alt="Personal Website" class="project-image">
      <div class="content">
        <h3>DNA Profiler</h3>
        <p>
        I implemented a DNA sequence identification program that analyzes a given DNA sequence and determines its origin based on functional decomposition. 
        I leveraged Python's csv and sys modules to process data and handle system arguments. By effectively converting between different data types and applying 
        efficient algorithms, I optimized the accuracy of the DNA sequence identification process. 
        </p>
      </div>
      </div>
    
    </div>
    </section>


    <div class="section" id="section4">
        <h1>This is my contact tab</h1>
    </div>

    <footer>
        <p>Made by Rajshree with lots of coffee and love</p>
    </footer>
`
document.getElementById('content').innerHTML = mainData;