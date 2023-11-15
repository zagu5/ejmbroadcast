import React, { useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { Link, useLocation } from 'react-router-dom';
import { useScrollToTop } from './useScrollToTop';
import '../styles/header.css';
import logo from '../assets/logo.svg';

const Header = () => {
  useScrollToTop();
  const [language, setLanguage] = React.useState('es');
  const [prevScrollPos, setPrevScrollPos] = React.useState(0);
  const [visible, setVisible] = React.useState(true);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleLanguage = () => {
    setLanguage(language === 'es' ? 'en' : 'es');
  };

 
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      document.getElementById("services").scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);

      const scrollButton = document.querySelector('.scroll-to-top');
      if (scrollButton) {
        if (currentScrollPos > 100) {
          scrollButton.style.display = 'block';
        } else {
          scrollButton.style.display = 'none';
        }
      }
    };
  
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos, visible]);
  

  return (
    <header  className={`header ${visible ? '' : 'hidden'}`}>
      <nav>
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <ul>
          <li>
            <RouterLink to="/">
            {language === 'es' ? 'Inicio' : 'Home'}
            </RouterLink>
          </li>
          <li className="dropdown"  >
            <ScrollLink to="projects" smooth={true} duration={1000} onClick={toggleDropdown}>
            {language === 'es' ? 'Proyectos' : 'Projects'}
            </ScrollLink>
            {isDropdownOpen && (
              <ul className="dropdown-menu open">
                <li>
                  <RouterLink to="/projects/project1" >
                    Centro Familiar Cristiano
                  </RouterLink>
                </li>
                <li>
                  <RouterLink to="/projects/project2" >
                    90 Minutos
                  </RouterLink>
                </li>
                <li>
                  <RouterLink to="/projects/project3" >
                    El Lugar de su Presencia
                  </RouterLink>
                </li>
                <li>
                  <RouterLink to="/projects/project4" >
                    Mision carismática
                  </RouterLink>
                </li>
                <li>
                  <RouterLink to="/projects/project5" >
                    Comunidad Cristiana Agua Viva
                  </RouterLink>
                </li>
                <li>
                  <RouterLink to="/projects/project6" >
                    Revista Semana
                  </RouterLink>
                </li>
              </ul>
            )}
          </li>
          <li>
            <Link 
              to="/" 
              onClick={() => setTimeout(() => {
                document.getElementById("services").scrollIntoView({ behavior: "smooth" });
              }, 0)}
            >
              {language === 'es' ? 'Servicios' : 'Services'}
            </Link>
          </li>
          <li>
          <Link 
            to="/" 
            onClick={() => setTimeout(() => {
              document.getElementById("equipment").scrollIntoView({ behavior: "smooth" });
            }, 0)}
          >
            {language === 'es' ? 'Equipos' : 'Equipment'}
          </Link>
          </li>
          <li>
          <Link 
            to="/" 
            onClick={() => setTimeout(() => {
              document.getElementById("about").scrollIntoView({ behavior: "smooth" });
            }, 0)}
          >
            {language === 'es' ? 'Nosotros' : 'About'}
          </Link>
          </li>
          <li>
          <Link 
            to="/" 
            onClick={() => setTimeout(() => {
              document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
            }, 0)}
          >
            {language === 'es' ? 'Contacto' : 'Contact'}
          </Link>
          </li>
          {/* <li>
            <RouterLink to="news">
            {language === 'es' ? 'Noticias' : 'News'}
            </RouterLink>
          </li> */}
          <button onClick={toggleLanguage}>
            {language === 'es' ? 'EN' : 'ES'}
          </button>
          <button className="scroll-to-top" onClick={scrollToTop}>
            <i className="fa fa-arrow-up"></i>
          </button>
        </ul>
      </nav>
    </header>
  );
};

export default Header;