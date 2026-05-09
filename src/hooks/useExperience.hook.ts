import type { ContentLine } from "../@types/ContentLine.interface"

export const useExperience = () => {
  const corporations: ContentLine[] = [
    {
      about: "Developed reusable React components with TypeScript following SOLID principles and design patterns, improving maintainability and reducing code duplication in a corporate project. Built and integrated RESTful APIs using Java 17/21, Spring Boot, React, and PostgreSQL, supporting a database with over 2,000 users. Optimized SQL queries and implemented Hibernate ORM to ensure high application performance. Participated in code reviews, Git-based team collaboration, and Scrum ceremonies, while managing multi-tier applications with Docker, Docker Compose, Maven, and NPM.",
      date: "2024 - 2025",
      name: "CWI Software",
      role: "Full Stack Intern",
      skills: [
        "Spring",
        "React",
        "Posgres",
        "Docker",
        "Scrum",
        "Typescript",
      ],
    }
  ]
  
  return {
    corporations,
  }
}