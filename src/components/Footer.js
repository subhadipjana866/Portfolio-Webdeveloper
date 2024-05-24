import React from 'react'

function Footer() {
  return (
    <div>
        <footer>
      <div class="footer-container">
        <div class="about group">
          <h2>Subhadip</h2>
          <p>AI Research Engineer | MERN Developer</p>
          <a href="#about">About Me</a>
        </div>
        <div class="hr"></div>
        <div class="info group">
          <h3>More</h3>
          <ul>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div class="hr"></div>
        <div class="follow group">
          <h3>Follow</h3>
          <ul>
            <li><a href="https://github.com/subhadipjana866"><i class="fab fa-github"></i></a></li>
            <li><a href="https://www.instagram.com/subhadip_866/"><i class="fab fa-instagram"></i></a></li>
            <li><a href="https://www.linkedin.com/in/subhadip-jana-a32192264/"><i class="fab fa-linkedin"></i></a></li>
            {/* <li><a href=""><i class="fab fa-twitter"></i></a></li> */}
          </ul>
        </div>
      </div>
      <div class="footer-copyright group">
        <p>© 2024 by Subhadip Jana. All rights reserved.</p>
      </div>
    </footer>
    </div>
  )
}

export default Footer