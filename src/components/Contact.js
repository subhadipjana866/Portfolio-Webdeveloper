import React from 'react'

function Contact() {
  return (
    <div>
        <section class="contact section" id="contact">
      <div class="container flex-center">
        <h1 class="section-title-01">Contact Me</h1>
        <h2 class="section-title-02">Contact Me</h2>
        <div class="content">
          <div class="contact-left">
            <h2>Let's discuss your project</h2>
            <ul class="contact-list">
              <li>
                <h3 class="item-title"><i class="fas fa-phone"></i> Phone</h3>
                <span>+91 8597819416</span>
              </li>
              <li>
                <h3 class="item-title"><i class="fas fa-envelope"></i> Email Address</h3>
                <span>subhadipjana866@gmail.com</span>
              </li>
              <li>
                <h3 class="item-title"><i class="fas fa-map-marker-alt"></i> Official Address</h3>
                <span>6/H/12 - Raicharan Pal Lane, Kokata-700046</span>
              </li>
            </ul>
          </div>
          <div class="contact-right">
            <p>I'm always open to discussing product<br/><span>design work or partnerships.</span></p>
            <form class="contact-form" action="https://formsubmit.co/subhadipjana866@gmail.com" method="POST">
              <input type="hidden" name="_captcha" value="false"/>
              <div class="first-row">
                <input type="text" placeholder="Name"/>
              </div>
              <div class="second-row">
                <input type="email" placeholder="Email" name="email" required/>
                <input type="text" placeholder="Subject"/>
              </div>
              <div class="third-row">
                <textarea name="message" id="" rows="7" placeholder="Message" required></textarea>
              </div>
              <button class="btn" type="submit">Send Message <i class="fas fa-paper-plane"></i></button>
            </form>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Contact