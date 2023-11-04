/*ProjectDetail.jsx*/
import PropTypes from 'prop-types';
import Header from './Header';
import Footer from './Footer';
import style from '../styles/projectDetail.module.css';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const ProjectDetail = ({ projectData }) => {
  const carouselItems = projectData.carouselImages.map((image, index) => (
    <img key={index} src={image} alt={`Carousel Image ${index}`} />
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
        <p className={style.description}>{projectData.description}</p>
        </div>
        <AliceCarousel 
          items={carouselItems}
          responsive={{
          0: { items: 1 },
          768: { items: 2 },
          1024: { items: 3 },
          }}
          autoPlay
          autoPlayInterval={3000}
        />
        <Footer/>
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
    carouselImages: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

export default ProjectDetail;
