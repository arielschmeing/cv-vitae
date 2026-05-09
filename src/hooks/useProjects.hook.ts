import { BotIcon, ClapperboardIcon, CloudIcon } from "lucide-react"
import type { Project } from "../@types/Project.interface"

export const useProjects = () => {
  const projects: Project[] = [
    {
      about: "Weather Gen Dashboard is a fullstack application for real-time weather monitoring and analytics, featuring automated data collection through a messaging architecture, interactive dashboards with data visualizations, and AI-generated insights.",
      link: new URL("https://github.com/arielschmeing/weather-gen"),
      Logo: CloudIcon,
      name: "Weather Gen",
      techs: [
        "React",
        "Typescript",
        "Vite",
        "NestJS",
        "MongoDB",
        "Docker",
      ],
    },
    {
      about: "A collaborative movie tracking platform where users can create and join 'parties' (groups) to share movie lists, mark watched movies together, and enjoy a social movie-watching experience with friends. Features include moderation system, party ownership, and shared watchlists.",
      link: new URL("https://github.com/arielschmeing/movies-select"),
      Logo: ClapperboardIcon,
      name: "Movies Select",
      techs: [
        "Next.JS",
        "Typescript",
        "Tailwind",
        "Spring",
        "Postgres",
        "Docker",
      ],
    },
    {
      about: "A neural network project focused on demonstrating core machine learning concepts such as forward propagation, backpropagation, and model training. Built as an educational and experimental application for understanding how AI systems learn and make predictions.",
      link: new URL("https://github.com/arielschmeing/neural-network"),
      Logo: BotIcon,
      name: "Neural Network",
      techs: [
        "C++",
        "ARIA",
        "MobileSim",
      ],
    },
  ]
  
  return {
    projects
  }
}