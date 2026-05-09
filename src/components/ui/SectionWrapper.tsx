import type { ReactNode } from "react"
import { Motion } from "./Motion"

interface SectionWrapperProps {
  section: number,
  name: string,
  children: ReactNode
}

export const SectionWrapper = ({ children, name, section }: SectionWrapperProps) => {
  return (
    <Motion>
      <div 
        className="w-full py-20 flex flex-col gap-6 border-b items-center" 
        id={name.toLocaleLowerCase()}
      >
        <div className="max-w-7xl w-full px-4">
          <article className="pb-18 flex items-end font-tech">
            <p className="text-neutral-400 text-sm">{section < 10 ? `0${section}` : section}</p>
            <h2 className="text-2xl ml-3 -mb-1">{name}</h2>
          </article>
          <div>
            {children}
          </div>
        </div>
      </div>
    </Motion>
  )
}