import type { ContentLine } from "../../@types/ContentLine.interface"


export const ContentLineCard = ({ date, name, role, about, skills }: ContentLine) => {
  return (
    <section className="flex gap-16">
      <aside className="font-tech w-full">
        <p className="text-sm text-neutral-400">{date}</p>
        <h4 className="text-md text-neutral-600">{name}</h4>
      </aside>
      <aside className="flex flex-col gap-6 w-full">
        <h3 className="text-xl font-semibold">{role}</h3>
        <p className="text-sm text-neutral-500 text-justify">{about}</p>
        <footer className="flex gap-2">
          {skills?.map(skill =>
            <span key={skill} className="text-neutral-700 bg-neutral-200 px-3 py-1 w-fit rounded-sm text-sm">{skill}</span>
          )}
        </footer>
      </aside>
    </section>
  )
}