import { NavbarDesktopLink } from "@/types/Navigation";
import { SocialMediaLink } from "@/types/SocialMediaLink";

export const NAVBAR_DESKTOP_LINKS: NavbarDesktopLink[] = [
    {
        label: 'About Me',
        path: '#aboutMe'
    },
    {
        label: 'My Experiences',
        path: '#myExperiences'
    },
    {
        label: 'My Projects',
        path: '#myProjects'
    },
]

export const SOCIAL_MEDIA_LINKS: SocialMediaLink[] = [
    {
        label: 'LinkedIn',
        path:'https://www.linkedin.com/in/eugenetangkj/'
    },
    {
        label: 'GitHub',
        path:'https://github.com/eugenetangkj'
    },
    {
        label: 'Dribbble',
        path:'https://dribbble.com/eugenetangkj'
    },
]