import { GlobeIcon, MailIcon } from "lucide-react"
import GithubIcon from "../components/icons/Github.icon"
import LinkedinIcon from "../components/icons/Linkedin.icon"

export const useContact = () => {
  const contacts = [
    {
      name: "EMAIL",
      content: "ariel.schmeing@proton.me",
      link: "mailto:ariel.schmeing@proton.me",
      Logo: MailIcon,
    },
    {
      name: "GITHUB",
      content: "github.com/arielschmeing",
      link: "https://github.com/arielschmeing",
      Logo: GithubIcon,
    },
    {
      name: "LINKEDIN",
      content: "linkedin.com/in/ariel-schmeing",
      link: "https://www.linkedin.com/in/ariel-schmeing-857029310/",
      Logo: LinkedinIcon,
    },
    {
      name: "SITE",
      content: "arielschmeing.github.io/cv-vitae/",
      link: "https://arielschmeing.github.io/cv-vitae/",
      Logo: GlobeIcon
    },
  ] as const
  
  return {
    contacts
  }
}