
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Header from './components/Header';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import Footer from './components/Footer';
import ScrtoTop from './components/ScrtoTop';
import { useRef, useState } from 'react';

function App() {

  const mainApp = useRef(null);
  const themeBtn = useRef(null);
  const [theme, setTheme] = useState("light");

  const toggleTheme = async () => {
    if (theme === "light") {
      setTheme("dark");
      await mainApp.current.classList.add('dark-theme');
      await themeBtn.current.classList.add("sun");
    } else {
      setTheme("light");
      await mainApp.current.classList.remove('dark-theme');
      await themeBtn.current.classList.remove("sun");
    }
  }


  return (
    <div className="App" ref={mainApp}>
      <Header />
      <ScrtoTop />
      <div class="theme-btn flex-center" onClick={toggleTheme} ref={themeBtn}>
        <i class="fas fa-moon"></i>
        <i class="fas fa-sun"></i>
      </div>
      <Home />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
