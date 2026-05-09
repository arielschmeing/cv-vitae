import type { ElementType } from "react";

export interface Project {
  name: string,
  about: string,
  techs: string[],
  Logo: ElementType,
  link: URL,
}