import React from 'react'
import aboutimage from '../images/20221218_102336.jpg'
import resume from '../File/Resume.rar'

function About() {
  return (
    <div>
        <section class="about section" id="about">
      <div class="container flex-center">
        <h1 class="section-title-01">About Me</h1>
        <h2 class="section-title-02">About Me</h2>
        <div class="content flex-center">
          <div class="about-img">
            <img src={aboutimage} alt=""/>
          </div>
          <div class="about-info">
            <div class="description">
              <h3>I'm Subhadip</h3>
              <h4>An <span>AI Research Engineer & MERN Stack Developer</span></h4>
              <p>As an AI Reseacher Engineer I research, develop and implement AI models and technologies to address specific usecases.
              As a MERN Stack Developer I design and develop services for customers specializing creating stylish, modern websites. My passion is to design digital user experiences through meaningful interactions. Check out my Portfolio
              </p>
            </div>
            <a href={resume} class="btn" download="Resume.rar">Download Resume <i class="fas fa-download"></i></a>
          </div>
        </div>
        
      </div>
    </section>
    </div>
  )
}

export default About