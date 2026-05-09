import { ArrowUpRightIcon } from "lucide-react"
import { useProjects } from "../../hooks/useProjects.hook"
import { Card, CardContent } from "../Card"
import { SectionWrapper } from "../ui/SectionWrapper"

export const Projects = () => {
  const { projects } = useProjects()
  
  return (
    <SectionWrapper name="Projects" section={3}>
      <Card className="shadow-md p-0">
        <CardContent className="flex divide-x divide-neutral-300 p-0">
          {projects.map(({ Logo, about, link, name, techs }) =>
            <a key={name} className="cursor-pointer" href={link.toString()} target="_blank">
              <div 
                className="flex flex-col gap-4 transition-all duration-200 hover:bg-neutral-100 p-4 min-h-full relative text-transparent hover:text-neutral-400"
              >
                <ArrowUpRightIcon className="transition-all duration-300 absolute top-3 right-3 stroke-current" />
                <Logo className="bg-indigo-100 rounded-sm p-2 size-10 stroke-indigo-500"/>
                <h3 className="font-medium text-lg text-neutral-800">{name}</h3>
                <p className="text-neutral-500">{about}</p>
                <aside className="flex flex-wrap gap-2">
                  {techs.map(t =>
                    <span key={t} className="text-neutral-700 bg-neutral-200 px-3 py-1 w-fit rounded-sm text-sm">{t}</span>
                  )}
                </aside>
              </div>
            </a>
          )}
        </CardContent>
      </Card>
    </SectionWrapper>
  )
}