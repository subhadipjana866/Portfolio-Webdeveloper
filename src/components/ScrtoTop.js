import React,{useState,useRef} from 'react'

function ScrtoTop() {

  const [visible, setVisible] = useState(false) 
  const scrlTop = useRef(null)
  
  const toggleVisible = () => { 
    const scrolled = document.documentElement.scrollTop; 
    if (scrolled > 500){ 
      setVisible(true) 
    }  
    else if (scrolled <= 500){ 
      setVisible(false) 
    } 
  }; 

  const scrollToTop = () =>{ 
    window.scrollTo({ 
      top: 0,  
      behavior: 'smooth'
      /* you can also use 'auto' behaviour 
         in place of 'smooth' */
    }); 
  }; 
  
  window.addEventListener('scroll', toggleVisible); 
  
  return (
    <div >
        <div className={(visible?("scrollToTop-btn flex-center active"):("scrollToTop-btn flex-center"))} onClick={scrollToTop} ref={scrlTop}>
      <i class="fas fa-arrow-up"></i>
    </div>
    </div>
  )
}

export default ScrtoTop