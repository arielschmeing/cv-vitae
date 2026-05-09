export const useResume = () => {
  const classes = {
    section: "w-full border-b flex justify-center",
    container: "w-full max-w-7xl px-4 py-20 flex flex-col gap-8 relative",
    role: "before:content-['—'] before:mr-2 text-sm tracking-widest text-indigo-600",
    name: {
      first: "text-4xl",
      last: "before:mr-2 font-semibold",
    },
    about: "text-neutral-500 w-xl",
    avatar: "absolute top-1/2 right-4 size-40 -translate-y-1/2 shadow-lg",
    actions: "flex gap-5",
  }
  
  const content = {
    role: "FULL STACK DEVELOPER",
    name: {
      first: "ARIEL",
      last: "SCHMEING",
    },
    about: "Full stack developer focused on creating fast, scalable and well-thought-out digital products - from database to interface.",
    avatar: {
      path: "images/profile.jpg",
      alt: "@arielschmeing",
    },
  }

  return {
    content,
    classes,
  }
}