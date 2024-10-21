import ProjectCard from "../components/molecules/ProjectCard";
import '@/../styles/projects.css';
import { projects } from "./projects";

export default function Projects() {

  return (
    <div>
      {projects.map(project =>
        <li key={project.id}>
          <ProjectCard project={project} />
        </li>
      )}
    </div>
  );
}
