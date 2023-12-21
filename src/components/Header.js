import React,{useRef} from 'react'

function Header() {

    const navigation  = useRef(null);

    const smallNavOpen = () => {
        navigation.current.classList.add('active');
    }
    const smallNavClose = () => {
        navigation.current.classList.remove('active');
    }
    const navLinkClick = () => {
        navigation.current.classList.remove('active');
    }


    return (
        <div>
            <header>
                <div class="nav-bar">
                    <a href="#" class="logo">Subhadip</a>
                    <div class="navigation" ref={navigation}>
                        <div class="nav-items">
                            <div class="nav-close-btn" onClick={smallNavClose}></div>
                            <a href="#home" onClick={navLinkClick}>Home</a>
                            <a href="#about" onClick={navLinkClick}>About</a>
                            <a href="#skills" onClick={navLinkClick}>Skills</a>
                            <a href="#portfolio" onClick={navLinkClick}>Portfolio</a>
                            <a href="#contact" onClick={navLinkClick}>Contact</a>
                        </div>
                    </div>
                    <div class="nav-menu-btn" onClick={smallNavOpen}></div>
                </div>
            </header>
        </div>
    )
}

export default Header