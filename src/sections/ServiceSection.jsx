import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from '../styles/services.module.css';
import fondoazul from '../assets/images/services/fondo_azul.png';
import fondoclaro from '../assets/images/services/fondo_claro.png';
import fondooscuro from '../assets/images/services/fondo_oscuro.png';


const servicesData = [
  {
    image: fondoazul,
    title: (
      <div style={{ textAlign:'left', fontSize:'29px', marginBottom:'10px', marginLeft:'8px'}}>
        En el mundo del Broadcast, el escenario perfecto se logra combinando la asesoría idónea, los equipos adecuados y buenos precios.
      </div>
    ),
    subtitle: (
      <div style={{justifyContent: 'center', marginTop:'10px', marginBottom:'100px', alignItems: 'flex-start', fontSize:'65px', lineHeight:'1', }}>
        SIN OLVIDAR EL FACTOR WOW
      </div>
    ),
  },
  {
    image: fondoclaro,
    title: "ASESORIA EN DISEÑO Y CONSTRUCCIÓN",
    serviceId: "/asesoria",
  },
  {
    image: fondooscuro,
    title: "VENTA DE EQUIPOS BROADCAST",
    serviceId: "/venta",
  },
  {
    image: fondoclaro,
    title: "TALLERES Y SEMINARIOS",
    serviceId: "/talleres",
  },
];



const Service = ({ image, title, subtitle, serviceId }) => (
  <Link to={`services${serviceId}`} style={{ textDecoration: 'none', color: 'inherit' }}> 
    <div className={styles['grid-item']} style={{ backgroundImage: `url(${image})` }}>
        <h1 className={styles.title}>{title}</h1>
        {subtitle && <h2 className={styles.subtitle}>{subtitle}</h2>}
    </div>
  </Link>  
);

Service.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  subtitle: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  serviceId: PropTypes.string,
};

const ServiceSection = () => {
  return (
    <section id={"services"} className={styles.section}>
      <div className={styles['grid-container']}>
        {servicesData.map((service, index) => (
          <Service key={index} {...service} />
        ))}
      </div>
      <Link to="contact-form" style={{ textDecoration: 'none', color: 'inherit' }}>
      <button type="button" className={styles.boton}>Quiero recibir asesoría</button>
      </Link>
    </section>
  );
};

export default ServiceSection;
