/*ProjectDetail.jsx*/
import PropTypes from 'prop-types';
import Header from './Header';
import Footer from './Footer';
import style from '../styles/projectDetail.module.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ModalImage from 'react-modal-image';
import WhatsAppButton from "../components/WhatsAppButton";
import React from 'react';

const ProjectDetail = ({ projectData }) => {
  const TextWithBreaks = ({text}) => {
    return text.split('\n').map((str, index) => (
      <React.Fragment key={index}>
        {str}
        <br/>
      </React.Fragment>
    ));
  }
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll:4,
  };

  const carouselItems = projectData.carouselImages.map((image, index) => (
    <ModalImage 
      key={index}
      small={image.small}
      large={image.large}
      alt={`Carousel Image ${index}`} 
     />
  ));

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
        <Slider {...settings} className={style.mySlider}>{carouselItems}</Slider>
        <button type='button' className={style.buton}>Estoy interesado</button>
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
