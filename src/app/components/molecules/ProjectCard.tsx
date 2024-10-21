import Project from "@/app/types/Project"
import Image from 'next/image'
import Link from "next/link"

export default function ProjectCard({ project }: { project: Project }) {
  // TODO: Add links to specific project pages
  return (
    <Link href={`/projects/${project.id}`}>
      <div
        className="
          flex
          bg-gray-700 
          mx-5
          mb-5
          hover:bg-gray-800
          p-5
          rounded-xl">
        <div className="flex-col">
          <h1 className="title">{project.title}</h1>
          <p>{project.description}</p>
        </div>
        {project.imageUrl ?
          <div className="flex-col">
            <Image
              className="rounded-3xl"
              src={project.imageUrl}
              alt={project.imageAlt ? project.imageAlt : "Alt text not available"}
            />
          </div>
          :
          null}
      </div>
    </Link>
  );
}

