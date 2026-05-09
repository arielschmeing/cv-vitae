import { ArrowUpRightIcon } from "lucide-react"
import { useContact } from "../../hooks/useContact.hook"
import { Card } from "../Card"
import { SectionWrapper } from "../ui/SectionWrapper"

export const Contact = () => {
  const { contacts } = useContact()
  
  return (
    <SectionWrapper name="Contact" section={5}>
      <Card className="grid grid-cols-2 p-0 divide-x divide-y gap-0 divide-neutral-300 shadow-md">
        {contacts.map(({ name, link, content, Logo }) => 
          <a 
            key={link}
            href={link} 
            target="_blank" 
            className="hover:bg-neutral-100 px-10 py-6 transition-all duration-300 relative text-white hover:text-neutral-400"
          >
            <div className="flex gap-4">
              <ArrowUpRightIcon className="transition-all duration-300 absolute top-5 right-5 stroke-current" />
              <Logo className="bg-indigo-100 rounded-sm p-2 size-10 text-indigo-500 stroke-indigo-500"/>
              <aside className="flex flex-col gap-1">
                <p className="text-neutral-400 text-[0.85em] font-tech">{name}</p>
                <p className="text-neutral-800">{content}</p>
              </aside>
            </div>
          </a>
        )}
      </Card>
    </SectionWrapper>
  )
}