/*ProjectPage.jsx*/
import { useParams } from 'react-router-dom';
import ProjectDetail from '../components/ProjectDetail';
import { projectData } from '../components/projectData'; // Importa tus datos de proyecto

const ProjectPage = () => {
  const { projectId } = useParams();
  const project = projectData[projectId];

  return (
    <div>
      <ProjectDetail projectData={project} />
    </div>
  );
};

export default ProjectPage;
