import { useResume } from "../../hooks/useResume.hook"
import { useResumeActions } from "../../hooks/useResumeActions.hook"
import { Avatar, AvatarFallback, AvatarImage } from "../Avatar"
import { Button } from "../Button"
import { Motion } from "../ui/Motion"

export const Resume = () => {
  const { buttons } = useResumeActions()
  const { classes, content } = useResume()

  return (
    <Motion>
      <section className={classes.section}>
        <div className={classes.container}>
          <p className={classes.role}>{content.role}</p>
          <h1 className={classes.name.first}>
            {content.name.first}<span className={classes.name.last}>{content.name.last}</span>
          </h1>
          <h3 className={classes.about}>{content.about}</h3>
          <Avatar className={classes.avatar}>
            <AvatarImage src={content.avatar.path} alt={content.avatar.alt} />
            <AvatarFallback>AS</AvatarFallback>
          </Avatar>

          <aside className={classes.actions}>
            {buttons.map(({ text, variant, link, Logo }) => 
              <Button 
                key={link}
                className="cursor-pointer px-10 py-5" 
                variant={variant} 
                onClick={() => window.open(link, "_blank")}
              >
                {Logo && <Logo />}
                {text}
              </Button>
            )}
          </aside>
        </div>
      </section>
    </Motion>
  )
}