import styles from '../styles/equipment.module.css';
import videocamara from '../assets/images/equipment/videocamara.svg';
import tripode from '../assets/images/equipment/tripode.svg';
import audio from '../assets/images/equipment/audio.svg';
import software from '../assets/images/equipment/software.svg';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

const IconLink = ({ link, image, alt, text }) => {
    return (
        <Link to={link}>
            <div className={styles.iconContainer}>
                <img src={image} alt={alt} />
                <p>{text}</p>
            </div>
        </Link>
    );
}

IconLink.propTypes = {
    link: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
};


const EquipmentSection = () => {
  return (
    <>
      <section id={"equipment"} className={styles.section}>
        <div className={styles.text}>
          <h2 className={styles.title}>Herramientas de alta precisión</h2>
          <p className={styles.subtitle}>
            Productos capaces de ofrecer soluciones eficaces a las necesidades actuales <br /> de los profesionales de la creación audiovisual
          </p>
          <div className={styles.icons}>
            <IconLink link="/equipment/fotografiayvideo" image={videocamara} alt="Videocámara" text="Fotografía y video" />
            <IconLink link="/equipment/accesorios" image={tripode} alt="Trípode" text="Accesorios de foto y video" />
            <IconLink link="/equipment/audio" image={audio} alt="Audio" text="Audio" />
            <IconLink link="/equipment/software" image={software} alt="Software" text="Software e interfaces" />
          </div>
        </div>
        <p className={styles.text2}>Impulsamos su mensaje, analizando las necesidades de su proyecto y seleccionando soluciones innovadoras entre <br/>los fabricantes más prestigiosos en todo el mundo.</p>
        <button type="button" className={styles.boton}>Estoy interesado</button>
      </section>
    </>
  );
}


export default EquipmentSection;
