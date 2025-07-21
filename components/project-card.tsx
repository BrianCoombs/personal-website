import Image from "next/image"
import { ExternalLink } from "lucide-react"
import { Project } from "@/types"

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group block h-full"
    >
      <div className="relative overflow-hidden rounded-lg border bg-card transition-all hover:border-primary/50 hover:shadow-lg h-full flex flex-col">
        <div className="aspect-video w-full overflow-hidden bg-muted">
          <Image
            src={project.screenshot}
            alt={`Screenshot of ${project.title}`}
            width={600}
            height={400}
            className="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
          <p className="text-muted-foreground mb-4 flex-grow">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 bg-secondary text-secondary-foreground rounded text-xs"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="inline-flex items-center gap-2 text-sm font-medium text-primary">
            View Project
            <ExternalLink className="h-3 w-3" />
          </div>
        </div>
      </div>
    </a>
  )
}