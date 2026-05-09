import { useExperience } from "../../hooks/useExperience.hook"
import { ContentLineCard } from "../ui/ContentLineCard"
import { SectionWrapper } from "../ui/SectionWrapper"

export const Experience = () => {
  const { corporations } = useExperience()
  
  return (
    <SectionWrapper name="Experience" section={2} >
      {corporations.map(({ about, date, name, role, skills }) =>
        <ContentLineCard key={role} about={about} date={date} name={name} role={role} skills={skills} />
      )}
    </SectionWrapper>
  )
}