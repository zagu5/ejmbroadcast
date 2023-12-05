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
  const [isProjectsDropdownOpen, setIsProjectsDropdownOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isEquipmentDropdownOpen, setIsEquipmentDropdownOpen] = useState(false);

  const toggleLanguage = () => {
    setLanguage(language === 'es' ? 'en' : 'es');
  };

 
  const toggleProjectsDropdown = () => {
    setIsProjectsDropdownOpen(!isProjectsDropdownOpen);
    setIsServicesDropdownOpen(false);
  };

  const toggleServicesDropdown = () => {
    setIsServicesDropdownOpen(!isServicesDropdownOpen);
    setIsProjectsDropdownOpen(false);
  };

  const toggleEquipmentDropdown = () => {
    setIsEquipmentDropdownOpen(!isEquipmentDropdownOpen);
    setIsProjectsDropdownOpen(false);
    setIsServicesDropdownOpen(false);
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
      document.getElementById("home").scrollIntoView({ behavior: "smooth" });
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
            <ScrollLink to="projects" smooth={true} duration={1000} onClick={toggleProjectsDropdown}>
            {language === 'es' ? 'Proyectos' : 'Projects'}
            </ScrollLink>
            {isProjectsDropdownOpen && (
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
          <li className="dropdown"  >
            <ScrollLink to="services" smooth={true} duration={1000} onClick={toggleServicesDropdown}>
            {language === 'es' ? 'Servicios' : 'services'}
            </ScrollLink>
            {isServicesDropdownOpen && (
              <ul className="dropdown-menu open">
                <li>
                  <RouterLink to="/services/asesoria" >
                    Asesoría en diseño y construcción
                  </RouterLink>
                </li>
                <li>
                  <RouterLink to="/services/venta" >
                    Venta de equipos de Broadcast
                  </RouterLink>
                </li>
                <li>
                  <RouterLink to="/services/talleres" >
                    Talleres y Seminarios
                  </RouterLink>
                </li>
              </ul>
            )}
          </li>
          <li className="dropdown"  >
          <ScrollLink to="equipment" smooth={true} duration={1000} onClick={toggleEquipmentDropdown}>
            {language === 'es' ? 'Equipos' : 'Equipment'}
          </ScrollLink>
            {isEquipmentDropdownOpen && (
              <ul className="dropdown-menu open">
                <li>
                  <RouterLink to="/equipment/fotografiayvideo" >
                    Fotografía y video
                  </RouterLink>
                </li>
                <li>
                  <RouterLink to="/equipment/accesorios" >
                    Accesorios de foto y video
                  </RouterLink>
                </li>
                <li>
                  <RouterLink to="/equipment/audio" >
                    Audio
                  </RouterLink>
                </li>
                <li>
                  <RouterLink to="/equipment/software" >
                    Software e interfaces
                  </RouterLink>
                </li>
              </ul>
            )}
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
          <ScrollLink to="footer" smooth={true} duration={1000}>
          {language === 'es' ? 'Contacto' : 'Contact'}
          </ScrollLink>
          </li>
          {/* <li>
            <RouterLink to="news">
            {language === 'es' ? 'Noticias' : 'News'}
            </RouterLink>
          </li> */}
          <button onClick={toggleLanguage} style={{fontSize: '31.2977px'}}>
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