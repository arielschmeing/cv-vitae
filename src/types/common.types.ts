import type { TECH_SKILLS } from "../constants/content.constants"

export interface ContactContent {
    link: string
    name: string
    value: string
}

export interface LanguageContent {
    name: string
    level: "inter__level" | "advanced__level" | "native__level"
    level_type: string
}

export interface CertificationsContent {
    name: string
    year: `20${number}${number}`
}

export interface ExperienceContent {
    role: string
    name: string
    period: string
    responsibilities: string[]
    techs: typeof TECH_SKILLS[number][]
}

export interface AcademicContent {
    name: string
    instituation: string
    perid: string
    status: string
}

export interface ProjectContent {
    title: string
    description: string
    techs: string[]
    github: string
}