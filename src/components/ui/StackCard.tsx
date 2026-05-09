import type { ElementType } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "../Card"

interface StackCardProps {
  title: string,
  stacks: string[],
  Icon: ElementType,
}

export const StackCard = ({ title, stacks, Icon }: StackCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -2 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1], }}
    >
      <Card className="w-full">
        <CardHeader className="p-0 flex justify-between">
          <CardTitle className="text-sm font-light text-neutral-400 ml-4">{title.toUpperCase()}</CardTitle>
          <Icon className="mr-4 size-4 stroke-indigo-400" />
        </CardHeader>
        <CardContent className="flex flex-wrap gap-2">
          {stacks.map(stack =>
            <span key={stack} className="text-neutral-700 bg-neutral-200 px-3 py-1 w-fit rounded-sm text-sm">{stack}</span>
          )}
        </CardContent>
      </Card>
    </motion.div>
  )
}