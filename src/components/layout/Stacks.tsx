import { useStacks } from "../../hooks/useStacks.hook"
import { StackCard } from "../ui/StackCard"
import { SectionWrapper } from "../ui/SectionWrapper"
import { StackInfoCard } from "../ui/StackInfoCard"

export const Stacks = () => {
  const { stacks, infoCards } = useStacks()
  
  return (
    <SectionWrapper name="Stacks" section={1} >
      <div className="flex flex-col justify-between gap-10">
        <div className="flex gap-10 w-full">
          {infoCards.map(i =>
            <StackInfoCard key={i.title} {...i} />
          )}
        </div>
        <div className="grid grid-cols-2 gap-4 w-full">
          {Object.entries(stacks).map(([title, value]) =>
            <StackCard key={title} stacks={value.stack} title={title} Icon={value.Icon} />
          )}
        </div>
      </div>
    </SectionWrapper>
  )
}