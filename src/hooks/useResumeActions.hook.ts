import type { ElementType } from "react"
import GithubIcon from "../components/icons/Github.icon"
import LinkedinIcon from "../components/icons/Linkedin.icon"

interface ButtonProps {
  text: string,
  variant?: "link" | "default" | "outline" | "secondary" | "ghost" | "destructive" | null | undefined
  Logo?: ElementType,
  link: string,
}

export const useResumeActions = () => {
  const buttons:ButtonProps[] = [
    {
      text: "Contact",
      variant: "default",
      link: "mailto:ariel.schmeing@proton.me",
    },
    {
      text: "GitHub",
      variant: "outline",
      Logo: GithubIcon,
      link: "https://github.com/arielschmeing",
    },
    {
      text: "LinkedIn",
      variant: "outline",
      Logo: LinkedinIcon,
      link: "https://www.linkedin.com/in/ariel-schmeing-857029310/",
    },
  ]
  
  return {
    buttons,
  }
}