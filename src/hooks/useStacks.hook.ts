import { BriefcaseIcon, DatabaseIcon, MonitorCogIcon, PackageCheckIcon, PencilRulerIcon, ServerIcon } from "lucide-react"
import type { InfoCard } from "../@types/InfoCard.interface"

export const useStacks = () => {
  const infoCards: InfoCard[] = [
    {
      title: "21+ ",
      description: "Main technologies with professional proficiency across frontend, backend, databases and development tools.",
      Logo: PackageCheckIcon,
      variant: "light",
    },
    {
      title: "3+",
      description: "Featured projects using the main technologies in real-world applications.",
      Logo: BriefcaseIcon,
      variant: "dark",
    },
  ]

  const stacks = {
    frontend: {
      stack: [
        "Angular",
        "React",
        "Tailwind",
        "Next.js",
        "Typescript",
      ],
      Icon: MonitorCogIcon
    },
    backend: {
      stack: [
        "FastAPI",
        "Flask",
        "Laravel",
        "Spring",
        "NestJS",
      ],
      Icon: ServerIcon
    },
    data: {
      stack: [
        "Postgres",
        "MySQL",
        "MongoDB",
        "Oracle",
        "RabbitMQ",
      ],
      Icon: DatabaseIcon
    },
    tools: {
      stack: [
        "Git",
        "Docker",
        "GitLab",
        "Linux",
        "Vite",
        "CI/CD",
      ],
      Icon: PencilRulerIcon
    },
  }
  
  return {
    stacks,
    infoCards,
  }
}