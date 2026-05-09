export const useHeader = () => {
  const classes = {
    header: "flex justify-center border px-14 py-4 text-sm text-neutral-600 sticky top-0",
    dev_badge: "tracking-widest pl-4",
    dev_badge_med: "text-indigo-600",
    section: "transition-all border-neutral-800 hover:text-neutral-800",
  } as const
  
  const sections = [
    {
      name: "Stacks",
      id: "#stacks",
    },
    {
      name: "Experience",
      id: "#experience",
    },
    {
      name: "Projects",
      id: "#projects",
    },
    {
      name: "Contact",
      id: "#contact",
    },
  ] as const
  
  return {
    sections,
    classes
  }
}