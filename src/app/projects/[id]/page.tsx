import Project from "@/app/types/Project";
import { projects } from "@/app/projects/projects";
import Image from "next/image";

export default function Page({ params }: { params: { id: number } }) {
  const project: Project = projects.filter(project => project.id == params.id)[0]
  // TODO: Overlay the image with the title
  // TODO: Add accessible navigation between projects
  return (
    <div>
      {project.imageUrl ?
        <Image
          src={project.imageUrl}
          alt={project.imageAlt ? project.imageAlt : "Alt text not available"}
        />
        :
        null
      }
      <h1>{project.title}</h1>
      <br />
      <p>{project.description}</p>
    </div>
  );
}

export async function generateStaticParams() {

  return projects.map((project: Project) => ({
    id: project.id.toString(),
  }))
}
