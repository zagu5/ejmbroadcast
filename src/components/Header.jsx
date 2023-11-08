import React, { useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import '../styles/header.css';
import logo from '../assets/logo.svg';

const Header = () => {
  const [language, setLanguage] = React.useState('es');
  const [prevScrollPos, setPrevScrollPos] = React.useState(0);
  const [visible, setVisible] = React.useState(true);
  const [showProjects, setShowProjects] = useState(false);

  const toggleLanguage = () => {
    setLanguage(language === 'es' ? 'en' : 'es');
  };

  const toggleProjects = () => {
    setShowProjects(!showProjects);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
  
      // Muestra u oculta el botón de flecha en función del desplazamiento
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
            <RouterLink to="/" smooth={true} duration={1000}>
            {language === 'es' ? 'Inicio' : 'Home'}
            </RouterLink>
          </li>
          <li className="dropdown" onClick={toggleProjects}>
            <ScrollLink to="projects" smooth={true} duration={1000}>
            {language === 'es' ? 'Proyectos' : 'Projects'}
            {/* <a href="#">{language === 'es' ? 'Proyectos' : 'Projects'}</a> */}
            </ScrollLink>
            {showProjects && (
              <ul className="dropdown-menu">
                <li>
                  <RouterLink to="/projects/project1" smooth={true} duration={1000}>
                    Centro Familiar Cristiano
                  </RouterLink>
                </li>
                <li>
                  <RouterLink to="/projects/project2" smooth={true} duration={1000}>
                    90 Minutos
                  </RouterLink>
                </li>
                <li>
                  <RouterLink to="/projects/project3" smooth={true} duration={1000}>
                    El Lugar de su Presencia
                  </RouterLink>
                </li>
                <li>
                  <RouterLink to="/projects/project4" smooth={true} duration={1000}>
                    Mision carismática
                  </RouterLink>
                </li>
                <li>
                  <RouterLink to="/projects/project5" smooth={true} duration={1000}>
                    Comunidad Cristiana Agua Viva
                  </RouterLink>
                </li>
                <li>
                  <RouterLink to="/projects/project6" smooth={true} duration={1000}>
                    Revista Semana
                  </RouterLink>
                </li>
              </ul>
            )}
          </li>
          <li>
            <ScrollLink to="services" smooth={true} duration={1000}>
            {language === 'es' ? 'Servicios' : 'Services'}
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="equipment" smooth={true} duration={1000}>
            {language === 'es' ? 'Equipos' : 'Equipment'}
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="about" smooth={true} duration={1000}>
            {language === 'es' ? 'Nosotros' : 'About'}
            </ScrollLink>
          </li>

          <li>
            <ScrollLink to="contact" smooth={true} duration={1000}>
            {language === 'es' ? 'Contacto' : 'Contact'}
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="news" smooth={true} duration={1000}>
            {language === 'es' ? 'Noticias' : 'News'}
            </ScrollLink>
          </li>
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