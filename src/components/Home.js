import React from 'react'
import myimage from '../images/main.png'

function Home() {
  return (
    <div>
        <section class="home flex-center" id="home">
      <div class="home-container">
        <div class="media-icons">
          <a href="https://github.com/subhadipjana866"><i class="fab fa-github"></i></a>
          <a href="https://www.instagram.com/subhadip_866/"><i class="fab fa-instagram"></i></a>
          <a href="https://www.linkedin.com/in/subhadip-jana-a32192264/"><i class="fab fa-linkedin"></i></a>
        </div>
        <div class="info">
          <h2>Hi, I'm Subhadip</h2>
          <h3>AI Research Engineer | MERN Developer</h3>
          <p>I am passionate about using technology to solve real-world problems. I am a highly motivated and results-oriented individual with a strong work ethic. I am confident that I can make a significant contribution to your team.</p>
          <a href="#contact" class="btn">Contact Me <i class="fas fa-arrow-circle-right"></i></a>
        </div>
        <div class="home-png">
          <img src={myimage} alt=''/>
        </div>
      </div>
      <a href="#about" class="scroll-down">Scroll Down <i class="fas fa-arrow-down"></i></a>
    </section>
    </div>
  )
}

export default Home