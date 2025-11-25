import { ArrowUpRight } from "lucide-react"

import { TextAnimate } from "@/components/ui/TextAnimate"
import { ProjectCard } from "@/components/ui/ProjectCard"

export const ProjectsSection = ({ projects }) => {
  return (
    <section id="projects" className="space-y-10">
      <div className="max-w-3xl">
        <TextAnimate
          as="h2"
          animation="slideUp"
          className="text-3xl font-semibold text-foreground md:text-4xl"
        >
          Projetos em Destaque
        </TextAnimate>
        <p className="mt-4 text-base text-muted-foreground md:text-lg">
          Seleção de projetos recentes liderados do briefing à entrega, sempre equilibrando estratégia, narrativa e tecnologia emergente.
        </p>
      </div>

      <div className="grid gap-x-4 gap-y-4 md:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.slug ?? `${project.title}-${index}`}
            project={project}
            index={index}
          />
        ))}
      </div>
    </section>
  )
}
