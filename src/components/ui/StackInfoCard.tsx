import type { InfoCard } from "../../@types/InfoCard.interface"
import { Card, CardDescription, CardHeader, CardTitle } from "../Card"
import { motion } from "framer-motion"

export const StackInfoCard = ({ Logo, description, title, variant }: InfoCard) => {
  return (
    <motion.div
      whileHover={{ y: -3 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1], }}
    >
      <Card className={`w-full gap-6 shadow-md p-4 ${variant === "dark" && "bg-neutral-900"}`}>
        <CardHeader className="p-0">
          <Logo 
            className={`
              ${variant === "dark" ? 
              "bg-neutral-800 stroke-neutral-200" : 
              "bg-indigo-100 stroke-indigo-500 "} 
              p-2.5 w-fit h-fit rounded-md`}
          />
        </CardHeader>
        <CardTitle className={`text-4xl font-bold font-tech ${variant === "dark" && "text-neutral-200"}`}>{title}</CardTitle>
        <CardDescription className={`text-md w-2/3 ${variant === "dark" && "text-neutral-300"}`}>{description}</CardDescription>
      </Card>
    </motion.div>
  )
}