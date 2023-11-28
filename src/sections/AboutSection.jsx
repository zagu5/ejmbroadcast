import styles from '../styles/about.module.css'; 
import { Link } from 'react-router-dom';

const AboutSection = () => {
  return (
    <section id={"about"} className={styles.imageSection}>
      <div className={styles.content}>
        <h2 className={styles.title}>CONÓCENOS:</h2>
        <p className={styles.description}>Detrás de cada proyecto está el esfuerzo de nuestro <br/> equipo de expertos que trabajan para alcanzar <br/> la solución perfecta para cada cliente.</p>
        <Link to="about" style={{ textDecoration: 'none', color: 'inherit' }}>
        <button className={styles.button}>Ver más</button>
        </Link>

      </div>
    </section>
  );
}

export default AboutSection;