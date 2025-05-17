import { Employment } from "@/types/Employment";

export const WorkExperiences: Employment[] = [
    {
        role: 'Data and Tech Intern',
        company: 'Ministry of Social and Family Development',
        date: 'Sep 2024 - Nov 2024',
        contributions: [
            'Contributed to ops-tech solutions at Child Protective Service, Rehabilitation Protection Group',
            'Led the prompt engineering process for Gen AI bots designed to reduce the administrative load of child protection officers in organising and summarising case notes',
            'Performed feature engineering for a binary classification predictive analytics model to assess the risk of re-reporting for screened-out child abuse cases',
            "Translated ops officers' requirements and developed a case flow simulation model, enabling stakeholders to assess the impact of various parameters on CPS's case pipeline",
        ],
        resources: [
            {
                label: 'Testimonial',
                link: 'https://drive.google.com/file/d/1tMPGxFwSK8lV63CvYSF3Mp8Wp2MaWcDJ/view?usp=sharing'
            }
        ],
        technologies: ['Python']
    },
    {
        role: 'Information Technology Developer Intern',
        company: 'CPF Board',
        date: 'May 2024 - Aug 2024',
        contributions: [
            'Contributed to the Special Account closure build at Retirement Decumulation Systems Department',
            'Amended 6 services for 55 Withdrawal using PayNow to accommodate changes in logic and computation',
            'Developed 3 APIs for a new system aimed at facilitating the withdrawal of new Retirement Account inflows for eligible members',
            "Updated the backend logic for a UI screen used in CPF Board's internal business portal",
            'Created 3 batch jobs to verify the validity of account numbers for CPF accounts and the eligibility of members for a valid Retirement Account',
        ],
        resources: [
            {
                label: 'Testimonial',
                link: 'https://drive.google.com/file/d/1Ig-5dhbEmFXJIj97JXCICiSPIsbkazNz/view?usp=sharing'
            }
        ],
        technologies: ['Java Spring', 'IBM DB2', 'RTC Jazz', 'Jenkins', 'SoapUI']
    },
    {
        role: 'Information Technology Intern',
        company: 'CBM Pte Ltd',
        date: 'May 2023 - Aug 2023',
        contributions: [
            'Co-built a full-stack project management system for automation of report generation, reducing the number of platforms needed from 3 to 1',
            'Designed hi-fidelity prototype for the mobile application with Figma and implemented it with Flutter',
            'Created a web admin dashboard with HTML, CSS and JavaScript',
            'Built APIs using PHP Laravel for connection with a MySQL database',
        ],
        resources: [
            {
                label: 'Testimonial',
                link: 'https://drive.google.com/file/d/1JErUjBbBnqrAHjo04Hc_KzrbOioeU0GU/view?usp=sharing'
            },
            {
                label: 'Report',
                link: 'https://drive.google.com/file/d/1OVaX2yEKCLlXgbeOe2o8GBRRkmyf6O1T/view?usp=sharing'
            }
        ],
        technologies: ['Flutter', 'PHP Laravel', 'Voyager', 'HTML', 'CSS', 'JavaScript', 'MySQL', 'Figma']
    }
]