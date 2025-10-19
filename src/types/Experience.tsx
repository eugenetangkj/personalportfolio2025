import { Resource } from "./Resource";

export interface Employment {
    role: string,
    company: string,
    date: string,
    contributions: string[],
    resources: Resource[],
    technologies: string[],
    imageLink: string,
    country: string
}

export interface Research {
    role: string,
    lab: string,
    date: string,
    contributions: string,
    resources: Resource[],
    technologies: string[],
    country: string
}

export interface Teaching {
    role: string,
    course: string,
    date: string,
    contributions: string,
    resources: Resource[],
    technologies: string[],
    country: string,
    school: string
}

export interface Volunteering {
    role: string,
    organisation: string,
    date: string,
    contributions: string,
    summary: string,
    resources: Resource[],
}