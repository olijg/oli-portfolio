import Project from "@/app/types/Project"
import Image from 'next/image'

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div
      className="
          flex
          bg-gray-700 
          mx-5
          mb-5
          p-5
          rounded">

      <div className="flex-col">
        <h1 className="title">{project.title}</h1>
        <p>{project.description}</p>
      </div>
      {project.imageUrl || project.imageAlt ?
        <div className="flex-col">
          <Image
            className="rounded-3xl"
            src={project.imageUrl}
            alt={project.imageAlt}
            placeholder="blur"
          />
        </div>
        :
        null}
    </div>
  );
}

