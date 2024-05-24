import React, { useRef } from 'react'
import portimg1 from '../images/port-img1.jpg'
import portimg2 from '../images/port-img2.jpg'
import portimg3 from '../images/port-img3.jpg'
import portimg4 from '../images/port-img4.jpg'
import portimg6 from '../images/cake_web2.png'
import portimg7 from '../images/gext.png'
import portimg8 from '../images/dora.png'

function Portfolio() {

  const modal1 = useRef(null);
  const modal2 = useRef(null);
  const modal3 = useRef(null);
  const modal4 = useRef(null);
  const modal6 = useRef(null);
  const modal7 = useRef(null);
  const modal8 = useRef(null);
  
  const ClickEvent1 = () =>{
      modal1.current.classList.add('active');
  }
  
  const CloseEvent1 = () =>{
      modal1.current.classList.remove('active');
  }
  const ClickEvent2 = () =>{
      modal2.current.classList.add('active');
  }
  
  const CloseEvent2 = () =>{
      modal2.current.classList.remove('active');
  }
  const ClickEvent3 = () =>{
      modal3.current.classList.add('active');
  }
  
  const CloseEvent3 = () =>{
      modal3.current.classList.remove('active');
  }
  const ClickEvent4 = () =>{
      modal4.current.classList.add('active');
  }
  
  const CloseEvent4 = () =>{
      modal4.current.classList.remove('active');
  }

  const ClickEvent6 = () =>{
      modal6.current.classList.add('active');
  }
  
  const CloseEvent6 = () =>{
      modal6.current.classList.remove('active');
  }
  const ClickEvent7 = () =>{
      modal7.current.classList.add('active');
  }
  const CloseEvent7 = () =>{
      modal7.current.classList.remove('active');
  }
  const ClickEvent8 = () =>{
      modal8.current.classList.add('active');
  }
  const CloseEvent8 = () =>{
      modal8.current.classList.remove('active');
  }

  return (
    <div>
        <section class="portfolio section" id="portfolio">
      <div class="container flex-center">
        <h1 class="section-title-01">Portfolio</h1>
        <h2 class="section-title-02">Portfolio</h2>
        <div class="content">
          <div class="portfolio-list">
            <div class="img-card-container">
              <div className="img-card" onClick={ClickEvent1}>
                <div class="overlay"></div>
                <div class="info">
                  <h3>Game website</h3>
                  <span>Github</span>
                </div>
                <img src={portimg1} alt=""/>
              </div>
              <div class="portfolio-model flex-center" ref={modal1}>
                <div class="portfolio-model-body">
                  <i class="fas fa-times portfolio-close-btn" onClick={CloseEvent1}></i>
                  <h3>Game website</h3>
                  <img src={portimg1} alt=""/>
                  <p>I created a basic responsive game website. I used a dropdown navigation bar to navigate. Refer to this link : <a href="https://subhadipjana866.github.io/Game-website/">click</a></p>
                </div>
              </div>
            </div>
            <div class="img-card-container">
              <div class="img-card" onClick={ClickEvent2}>
                <div class="overlay"></div>
                <div class="info">
                  <h3>Facebook clone</h3>
                  <span>Github</span>
                </div>
                <img src={portimg2} alt=""/>
              </div>
              <div class="portfolio-model flex-center" ref={modal2}>
                <div class="portfolio-model-body">
                  <i class="fas fa-times portfolio-close-btn" onClick={CloseEvent2}></i>
                  <h3>Facebook clone</h3>
                  <img src={portimg2} alt=""/>
                  <p>I created a Facebook clone website using basic html, css and javascript. link here : <a href="https://subhadipjana866.github.io/Facebook-Clone/">click</a></p>
                </div>
              </div>
            </div>
            <div class="img-card-container">
              <div class="img-card" onClick={ClickEvent3}>
                <div class="overlay"></div>
                <div class="info">
                  <h3>E-commerce website</h3>
                  <span>Github</span>
                </div>
                <img src={portimg3} alt=""/>
              </div>
              <div class="portfolio-model flex-center" ref={modal3}>
                <div class="portfolio-model-body">
                  <i class="fas fa-times portfolio-close-btn" onClick={CloseEvent3}></i>
                  <h3>E-commerce website</h3>
                  <img src={portimg3} alt=""/>
                  <p>I created a E-commerce website. This is a clone of blinkit website. Refer to this link : <a href="https://subhadipjana866.github.io/E-commerce-website-Blinkit-clone-/">click</a></p>
                </div>
              </div>
            </div>
            <div class="img-card-container">
              <div class="img-card" onClick={ClickEvent4}>
                <div class="overlay"></div>
                <div class="info">
                  <h3>Online Learning website</h3>
                  <span>Github</span>
                </div>
                <img src={portimg4} alt=""/>
              </div>
              <div class="portfolio-model flex-center" ref={modal4}>
                <div class="portfolio-model-body">
                  <i class="fas fa-times portfolio-close-btn" onClick={CloseEvent4}></i>
                  <h3>Online Learning website</h3>
                  <img src={portimg4} alt=""/>
                  <p>I created this Online Learning front page website with HTML5, CSS3 and JavaScript. It is basically a clone of coursera website. Refer to this link : <a href="https://subhadipjana866.github.io/Online-Learning-Website-Coursera-Clone-/">click</a></p>
                </div>
              </div>
            </div>
            <div class="img-card-container">
              <div class="img-card" onClick={ClickEvent6}>
                <div class="overlay"></div>
                <div class="info">
                  <h3>Online Cake Ordering website</h3>
                  <span>Github.com</span>
                </div>
                <img src={portimg6} alt=""/>
              </div>
              <div class="portfolio-model flex-center" ref={modal6}>
                <div class="portfolio-model-body">
                  <i class="fas fa-times portfolio-close-btn" onClick={CloseEvent6}></i>
                  <h3>Online Cake Ordering website</h3>
                  <img src={portimg6} alt=""/>
                  <p>I created this Online Cake Ordering website by using ReactJs, MongoDB, ExpressJs, NodeJs for full-stack development. I used Firebase to implement user authentication. This project is mainly focused on the backend part. Refer to this link : <a href="https://awesome-cake.onrender.com">click</a></p>
                </div>
              </div>
              
            </div>
            <div class="img-card-container">
              <div class="img-card" onClick={ClickEvent7}>
                <div class="overlay"></div>
                <div class="info">
                  <h3>GEXT: Gesture Based Text Editor</h3>
                  <span>Github.com</span>
                </div>
                <img src={portimg7} alt=""/>
              </div>
              <div class="portfolio-model flex-center" ref={modal7}>
                <div class="portfolio-model-body">
                  <i class="fas fa-times portfolio-close-btn" onClick={CloseEvent7}></i>
                  <h3>GEXT: Gesture Based Text Editor</h3>
                  <img src={portimg7} alt=""/>
                  <p>GEXT is a gesture recognition platform dedicated to help the deaf and mute people to communicate with others who may/may not know sign language, thus bridging the communication gap between. Refer to this link : <a href="https://subhadipjana866.github.io/GEXT/">click</a></p>
                </div>
              </div>
              
            </div>
            <div class="img-card-container">
              <div class="img-card" onClick={ClickEvent8}>
                <div class="overlay"></div>
                <div class="info">
                  <h3>DORA: Your Personal Document Explorer</h3>
                  <span>Github.com</span>
                </div>
                <img src={portimg8} alt=""/>
              </div>
              <div class="portfolio-model flex-center" ref={modal8}>
                <div class="portfolio-model-body">
                  <i class="fas fa-times portfolio-close-btn" onClick={CloseEvent8}></i>
                  <h3>DORA: Your Personal Document Explorer</h3>
                  <img src={portimg8} alt=""/>
                  <p>DORA is personal assistant who can explore documents and get the answers of every queries related to that document. Refer to this link : <a href="https://github.com/subhadipjana866/Dora">click</a></p>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
      <div class="get-in-touch sub-section">
        <div class="container">
          <div class="content flex-center">
            <div class="contact-card flex-center">
              <div class="title">
                <h4>Hire Me</h4>
                <h3>For Your</h3>
                <h2>Next Project</h2>
              </div>
              <div class="contact-btn">
                <a href="#contact" class="btn">Get In Touch <i class="fas fa-paper-plane"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Portfolio