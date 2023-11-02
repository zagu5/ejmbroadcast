/*ProjectSection.jsx*/ 
import '../styles/projects.css'; 
import cfc from '../assets/images/projects/cfc.png';
import noventaminutos from '../assets/images/projects/noventaminutos.png';
import elp from '../assets/images/projects/elp.png';
import mc from '../assets/images/projects/mc.png';
import ccav from '../assets/images/projects/ccav.png';
import revistasemana from '../assets/images/projects/revistasemana.png';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

const Project = ({ image, title, projectId }) => (
    <div className="grid-item" style={{ backgroundImage: `url(${image})` }}>
        <div className='content'>
            <h2 className='title'>{title}</h2>
            <Link to={`/projects/${projectId}`}> <button type="button" className="boton">Ver Proyecto</button></Link>
        </div>
    </div>
);

Project.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    projectId: PropTypes.string.isRequired,
};

const ProjectSection = () => {
  return (
    <>
    <section id={"projects"} className='section'>
    <div className='text'>
          <h3>Lo más importante es lograr que su audiencia <br /> tenga una experiencia única</h3> 
          <p>aprovechando la tecnología para promover <br /> su participación en cada evento </p>
          </div>
      <div className="grid-container">
        <Project image={cfc} title="Centro Familiar Cristiano" projectId="project1"/>
        <Project image={noventaminutos} title="90 Minutos" projectId="project2"/>
        <Project image={elp} title="El Lugar de su Presencia" projectId="project3"/>
        <Project image={mc} title="Misión Carismática" projectId="project4"/>
        <Project image={ccav} title="Comunidad Cristiana Agua Viva" projectId="project5" />
        <Project image={revistasemana} title="Revista Semana" projectId="project6"/>
      </div>
    </section>
    </>

  );
};

export default ProjectSection;
