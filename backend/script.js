const mainData = `
    <header>
      <img src="#" alt="logo">
      <nav>
        <ul class="nav-options">
            <li><a>Experience</a></li>
            <li><a>Skills</a></li>
            <li><a>Projects</a></li>
            <li><a>Contact Me</a></li>
      </ul>
      </nav>
    </header> 

    <main class="introduction">
        <h1>Hello welcome to my personal website</h1>
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