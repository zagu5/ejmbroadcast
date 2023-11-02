/*ProjectDetail.jsx*/
import PropTypes from 'prop-types';
import Header from './Header';
import Footer from './Footer';

const ProjectDetail = ({ projectData }) => {
  return (
    <>
        <Header/>
        <div>
        <h2>{projectData.title}</h2>
        <p>{projectData.description}</p>
        {/* Agrega aquí el contenido y componentes comunes a todas las páginas de proyectos */}
        </div>
        <Footer/>
    </>

  );
};

ProjectDetail.propTypes = {
  projectData: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
};

export default ProjectDetail;
