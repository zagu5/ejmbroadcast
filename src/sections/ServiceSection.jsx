import { Link } from 'react-router-dom';
import styles from '../styles/services.module.css';

const servicesData = [
  {
    bgColor: "#005c9a",
    title: "En el mundo del Broadcast, el escenario perfecto se logra combinando la asesoría idónea, los equipos adecuados y buenos precios.",
    subtitle: "SIN OLVIDAR EL FACTOR WOW",

  },
  {
    bgColor: "#a9a9a9",
    title: "ASESORIA EN DISEÑO Y CONSTRUCCIÓN",
    path: "/asesoria",
  },
  {
    bgColor: "#666666",
    title: "VENTA DE EQUIPOS BROADCAST",
    path: "/venta",
  },
  {
    bgColor: "#a9a9a9",
    title: "TALLERES Y SEMINARIOS",
    path: "/talleres",
  },
];

import PropTypes from 'prop-types';

const Service = ({ bgColor, title, subtitle, path }) => (
  <Link to={path} style={{ textDecoration: 'none', color: 'inherit' }}> 
    <div className={styles['grid-item']} style={{ backgroundColor: bgColor }}>
        <h1 className={styles.title}>{title}</h1>
        {subtitle && <h2 className={styles.subtitle}>{subtitle}</h2>}
    </div>
  </Link>  
);

Service.propTypes = {
    bgColor: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    path: PropTypes.string,
};

const ServiceSection = () => {
  return (
    <section id={"services"} className={styles.section}>
      <div className={styles['grid-container']}>
        {servicesData.map((service, index) => (
          <Service key={index} {...service} />
        ))}
      </div>
      <button type="button" className={styles.boton}>Quiero recibir asesoría</button>
    </section>
  );
};

export default ServiceSection;
