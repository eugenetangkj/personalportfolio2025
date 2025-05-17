import { Resource } from "./Resource";

export interface Employment {
    role: string,
    company: string,
    date: string,
    contributions: string[],
    resources: Resource[],
    technologies: string[]
}

export interface Research {
    role: string,
    lab: string,
    date: string,
    contributions: string,
    resources: Resource[],
    technologies: string[],
}