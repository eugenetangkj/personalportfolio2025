import { Resource } from "./Resource";

export interface Project {
    title: string,
    date: string,
    description: string,
    resources: Resource[],
    technologies: string[],
    image: string,
}