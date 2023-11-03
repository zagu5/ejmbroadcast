/*ProjectDetail.jsx*/
import PropTypes from 'prop-types';
import Header from './Header';
import Footer from './Footer';
import style from '../styles/projectDetail.module.css';

const ProjectDetail = ({ projectData }) => {
  return (
    <>
        <Header/>
        <div className={style.content}>
        <h2 className={style.title}>{projectData.title}</h2>
        <img src={projectData.image} alt="cfc" />
 
        
        <p className={style.description}>{projectData.description}</p>
        </div>
        <Footer/>
    </>

  );
};

ProjectDetail.propTypes = {
  projectData: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
  }).isRequired,
};

export default ProjectDetail;
