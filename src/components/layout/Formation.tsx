import { useFormation } from "../../hooks/useFormation.hook"
import { SectionWrapper } from "../ui/SectionWrapper"

export const Formation = () => {
  const { formations } = useFormation()
  
  return (
    <SectionWrapper name="Formation" section={4}>
      <div className="flex flex-col divide-y divide-neutral-200 gap-6">
        {formations.map(({ about, date, role }) =>
          <section key={role} className="flex gap-16 pb-6">
            <aside className="font-tech w-full">
              <p className="text-sm text-neutral-400">{date}</p>
            </aside>
            <aside className="flex flex-col gap-2 w-full">
              <h3 className="text-md font-semibold">{role}</h3>
              <p className="text-sm text-neutral-500 text-justify">{about}</p>
            </aside>
          </section>
        )}
      </div>
    </SectionWrapper>
  )
}