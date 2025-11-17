import type { AcademicContent, CertificationsContent, ContactContent, ExperienceContent, LanguageContent, ProjectContent } from "../types/common.types"
import { APP } from "./app.constants"

export const HEADER = {
    img: {
        src:"https://media.licdn.com/dms/image/v2/D4E03AQEfH2i4u6VAJw/profile-displayphoto-shrink_200_200/B4EZUnsFc2GYAY-/0/1740127623874?e=2147483647&v=beta&t=p55wm-c2tDGLwK6b2bY6n5v9vqYiuWTvOzZrZ8E8mNs",
        alt:"Foto de Ariel Schmeing"
    },
    resume: "Desenvolvedor Java Junior especializado em Spring e Docker, com experiência em React e desenvolvimento fullstack. Focado em criar soluções escaláveis e aplicar boas práticas DevOps."
} as const

export const CONTACT: ContactContent[] = [
    {
        link: "mailto:ariel.schmeing@proton.me",
        name: "Email:",
        value: "ariel.schmeing@proton.me"
    },
    {
        link: "https://br.linkedin.com/in/ariel-schmeing-857029310",
        name: "LinkedIn:",
        value: "linkedin.com/in/ariel-schmeing"
    },
    {
        link: "https://github.com/arielschmeing",
        name: "GitHub:",
        value: "github.com/arielschmeing"
    }
] as const

export const TECH_SKILLS: string[] = [
    "Java",
    "Spring",
    "React",
    "Angular",
    "TypeScript",
    "JavaScript",
    "Python",
    "Rust",
    "Docker",
    "FastAPI",
    "Flask",
    "Laravel",
    "PHP",
    "C",
    "Lua",
    "HTML5",
    "CSS3",
    "Git/GitHub",
    "MySQL",
    "PostgreSQL"
] as const

export const LANGUAGES: LanguageContent[] = [
    {
        level: "native__level",
        level_type: "Nativo",
        name: "Português"
    },
    {
        level: "advanced__level",
        level_type: "Avançado",
        name: "Inglês"
    }
]

export const CERTIFICATIONS: CertificationsContent[] = [
    {
        name: "Curso em Vídeo - HTML5",
        year: "2024"
    },
    {
        name: "Curso em Vídeo - Javascript",
        year: "2024"
    },
    {
        name: "Curso em Vídeo - SQL",
        year: "2024"
    },
    {
        name: "CWI - Level 1",
        year: "2024"
    },
    {
        name: "CWI - Level 2",
        year: "2025"
    },
    {
        name: "CS50 - Harvard",
        year: "2025"
    }
]

export const EXPERIENCES: ExperienceContent[] = [
    {
        name: "CWI Software",
        role: APP.role_type,
        period: "Abril 2025 - Julho 2025",
        responsibilities: [
            "Criação de APIs RESTful com Spring Boot e Java",
            "Aplicação de práticas DevOps e CI/CD",
            "Organização com Framework ágil - Scrum",
            "Desenvolvimento de microsserviços com Docker",
            "Integração de sistemas e bancos de dado"
        ],
        techs: [
            "Java",
            "Spring Boot",
            "Docker",
            "REST API",
            "Scrum",
            "React",
            "Typescript"
        ]
    }
]

export const ACADEMICS: AcademicContent[] = [
    {
        instituation: "Unilasalle Canoas",
        name: "Bacharelado em Ciência da Computação",
        perid: "2024 - 2028",
        status: "Em Andamento"
    }
]

export const PROJECTS: ProjectContent[] = [
    {
        description: "Uma rede social de criação de personagens de RPG de acordo com o sistema Armardur.",
        github: "https://github.com/arielschmeing/armardur-system",
        techs: [
            "React",
            "Spring Boot",
            "Docker",
            "PostgreSQL",
            "REST API"
        ],
        title: "Armardur System"
    }
]