import { useHeader } from "../../hooks/useHeader.hook"

export const Header = () => {
  const { sections, classes } = useHeader()

  return (
    <header className="flex justify-center border px-14 py-4 text-sm text-neutral-600 sticky top-0 z-1 bg-white">
      <div className="flex justify-between max-w-7xl w-full">
        <p className={classes.dev_badge}>/<span className={classes.dev_badge_med}>dev_ariel</span></p>
        <div className="flex">
          {sections.map(({ name, id }) => 
            <p className="px-4" key={id}>
              <a className={classes.section} href={id}>{name}</a>
            </p>
          )}
        </div>
      </div>
    </header>
  )
}