import { Contact } from "./Contact"
import { Experience } from "./Experience"
import { Formation } from "./Formation"
import { Projects } from "./Projects"
import { Resume } from "./Resume"
import { Stacks } from "./Stacks"

export const Sections = () => {
  return (
    <section>
      <Resume />
      <Stacks />
      <Experience />
      <Projects />
      <Formation />
      <Contact />
    </section>
  )
}