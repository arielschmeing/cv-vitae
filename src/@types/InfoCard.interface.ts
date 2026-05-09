import type { ElementType } from "react";

export interface InfoCard {
  title: string,
  description: string,
  Logo: ElementType,
  variant: "light" | "dark"
}