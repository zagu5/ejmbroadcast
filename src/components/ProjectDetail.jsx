/*ProjectDetail.jsx*/
import React from 'react';
import { Link } from 'react-router-dom';
import { useScrollToTop } from './useScrollToTop';
import { useState } from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Footer from './Footer';
import style from '../styles/projectDetail.module.css';
import WhatsAppButton from "../components/WhatsAppButton";
import Modal from './Modal';

const ProjectDetail = ({ projectData }) => {
  useScrollToTop();

  const TextWithBreaks = ({text}) => {
    return text.split('\n').map((str, index) => (
      <React.Fragment key={index}>
        {str}
        <br/>
      </React.Fragment>
    ));
  }

  const [clickedImg, setClickedImg] = useState(null);
  const [currentIndex, setcurrentIndex] = useState(null);

  const handleClick = (image,index) => {
    setcurrentIndex(index);
    setClickedImg(image)
  };

  const handleRotationRight = () => {
    if (currentIndex === projectData.carouselImages.length - 1) {
      setcurrentIndex(0);
      setClickedImg(projectData.carouselImages[0].large);
    } else {
      setcurrentIndex(currentIndex + 1);
      setClickedImg(projectData.carouselImages[currentIndex + 1].large);
    }
  }

  const handleRotationLeft = () => {
    if (currentIndex === 0) {
      setcurrentIndex(projectData.carouselImages.length - 1);
      setClickedImg(projectData.carouselImages[projectData.carouselImages.length - 1].large);
    } else {
      setcurrentIndex(currentIndex - 1);
      setClickedImg(projectData.carouselImages[currentIndex - 1].large);
    }
  }

  return ( 
    <>
        <Header/>
        <div className={style.content}>
        <h2 className={style.title}>{projectData.title}</h2>
        <img src={projectData.image} alt="cfc" />        
        <div className={style.row}>
          <div className={style.column}>
            <div className={style.location}>
              <strong>Locación</strong>
              <br />{projectData.location}
            </div>
          </div>
          <div className={style.column}>
            <div className={style.capacity}>
              <strong>Capacidad</strong>
              <br />{projectData.capacity}
            </div>
          </div>
          <div className={`${style.column} ${style.lastColumn}`}>
            <div className={style.services}>
              <strong>Servicios</strong>
              <br />{projectData.services}
            </div>
          </div>
        </div>
        <p className={style.description}><TextWithBreaks text={projectData.description} /></p>
        </div>
        <div className={style.wrapper}>
            {projectData.carouselImages.map((image, index) => (
              <div key={index} className={style.wrapperImages}>
                <img 
                  src={image.small} 
                  alt="Imagen del carrusel" 
                  onClick={() => handleClick(image.large)} />
              </div>
            ))}
            {clickedImg && <Modal 
            clickedImg={clickedImg}
            handleRotationRight={handleRotationRight}
            setClickedImg={setClickedImg}
            handleRotationLeft={handleRotationLeft}
            />}
        </div>
        <Link to='/contact-form' style={{textDecoration: 'none'}}><button  type='button' className={style.buton}>Estoy interesado</button></Link>
        <Footer/>
        <WhatsAppButton />
    </>
  );
};

ProjectDetail.propTypes = {
  projectData: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    location: PropTypes.string,
    capacity: PropTypes.string,
    services: PropTypes.string,
    carouselImages: PropTypes.arrayOf(
      PropTypes.shape({
        small: PropTypes.string,
        large: PropTypes.string,
      })
    ),
  }).isRequired,
};

export default ProjectDetail;
