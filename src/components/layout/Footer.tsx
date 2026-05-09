import { Motion } from "../ui/Motion"

export const Footer = () => {
  return (
    <Motion>
      <footer className="w-full flex justify-center p-4">
        <p className="font-tech text-sm text-neutral-400">
          <span className="font-sans mr-2">&copy;</span> 
          Copyright 2026 · Ariel Schmeing
        </p>
      </footer>
    </Motion>
  )
}