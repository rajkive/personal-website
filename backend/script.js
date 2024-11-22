const mainData = `
    <header>
      <img src="#" alt="logo">
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

    <div class="section" id="section1">
        <h1>This is my experience tab</h1>
    </div>
    <div class="section" id="section2">
        <h1>This is my skills tab</h1>
    </div>
    <div class="section" id="section3">
        <h1>This is my projects tab</h1>
    </div>
    <div class="section" id="section4">
        <h1>This is my contact tab</h1>
    </div>

    <footer>
        <p>Made by Rajshree with lots of coffee and love</p>
    </footer>
`
document.getElementById('content').innerHTML = mainData;