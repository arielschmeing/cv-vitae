import type { ContentLine } from "../@types/ContentLine.interface"

export const useFormation = () => {
  const formations: ContentLine[] = [
  {
    about: "Unilasalle University Bechelor's Degree",
    date: "2024 - 2028",
    role: "Bechelor's Degree - Computer Science",
  },
  {
    about: "Harvard University Computer Science Course",
    date: "2025",
    role: "CS50 - Harvard",
  },
  {
    about: "CWI Software Specialist Course",
    date: "2025",
    role: "CWI Level 2",
  },
  {
    about: "CWI Software Advanced Specialist Course",
    date: "2024",
    role: "CWI Level 1",
  },
]
  
  return {
    formations
  }
}