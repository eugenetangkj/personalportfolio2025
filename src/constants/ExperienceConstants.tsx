import { Employment, Research, Teaching, Volunteering } from "@/types/Experience";

export const WorkExperiences: Employment[] = [
    {
        role: 'iOS Engineer',
        company: 'Shopee',
        date: 'Jul 25 - Present',
        contributions: [
            "Collaborated on maintaining Shopee's native iOS app as part of the Mobile App & Frontend, Native Infra team.",
            "Worked on developing and maintaining native infrastructure components, including SDKs and core platform modules, to support app-wide functionality."
        ],
        resources: [
        ],
        technologies: ['Objective-C', 'Swift', 'UIKit'],
        imageLink: '/images/work/shopee.png',
        country: 'Singapore'
    },
    {
        role: 'Data and Tech Intern',
        company: 'Ministry of Social and Family Development',
        date: 'Sep 24 - Nov 24',
        contributions: [
            'Contributed to ops-tech solutions at Child Protective Service, Rehabilitation Protection Group.',
            'Led the prompt engineering process for Gen AI bots designed to reduce the administrative load of child protection officers in organising and summarising case notes.',
            'Performed feature engineering for a binary classification predictive analytics model to assess the risk of re-reporting for screened-out child abuse cases.',
            "Translated ops officers' requirements and developed a case flow simulation model, enabling stakeholders to assess the impact of various parameters on CPS's case pipeline.",
        ],
        resources: [
            {
                label: 'Testimonial',
                link: 'https://drive.google.com/file/d/1tMPGxFwSK8lV63CvYSF3Mp8Wp2MaWcDJ/view?usp=sharing'
            }
        ],
        technologies: ['Python'],
        imageLink: '/images/work/msf.png',
        country: 'Singapore'
    },
    {
        role: 'Information Technology Developer Intern',
        company: 'CPF Board',
        date: 'May 24 - Aug 24',
        contributions: [
            'Contributed to the Special Account closure build at Retirement Decumulation Systems Department.',
            'Amended 6 services for 55 Withdrawal using PayNow to accommodate changes in logic and computation.',
            'Developed 3 APIs for a new system aimed at facilitating the withdrawal of new Retirement Account inflows for eligible members.',
            "Updated the backend logic for a UI screen used in CPF Board's internal business portal.",
            'Created 3 batch jobs to verify the validity of account numbers for CPF accounts and the eligibility of members for a valid Retirement Account.',
        ],
        resources: [
            {
                label: 'Testimonial',
                link: 'https://drive.google.com/file/d/1Ig-5dhbEmFXJIj97JXCICiSPIsbkazNz/view?usp=sharing'
            }
        ],
        technologies: ['Java Spring', 'IBM DB2', 'RTC Jazz', 'Jenkins', 'SoapUI'],
        imageLink: '/images/work/cpf.png',
        country: 'Singapore'
    },
    {
        role: 'Information Technology Intern',
        company: 'CBM Pte Ltd',
        date: 'May 23 - Aug 23',
        contributions: [
            'Co-built a full-stack project management system for automation of report generation, reducing the number of platforms needed from 3 to 1.',
            'Designed hi-fidelity prototype for the mobile application with Figma and implemented it with Flutter.',
            'Created a web admin dashboard with HTML, CSS and JavaScript.',
            'Built APIs using PHP Laravel for connection with a MySQL database.',
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
        technologies: ['Flutter', 'PHP Laravel', 'Voyager', 'HTML', 'CSS', 'JavaScript', 'MySQL', 'Figma'],
        imageLink: '/images/work/cbm.png',
        country: 'Singapore'
    }
]

export const ResearchExperiences: Research[] = [
    {
        role: 'Lab Member',
        lab: 'AI For Social Good Lab (AI4SG)',
        date: 'Aug 24 - Present',
        contributions: "As a Human-Computer Interaction (HCI) researcher at the AI4SG Lab, my research focused on exploring how technology can support AI literacy education among older adults. I explored human-agent interaction paradigms and how technology can be designed to enhance educational experiences for older adults. My work is supervised under Dr. Yi-Chieh Lee and Ph.D candidate Song Tianqi.",
        resources:[
            {
                label: 'AI Literacy Education for Older Adults: Motivations, Challenges and Preferences (CHI 25 Extended Abstract)',
                link: 'https://dl.acm.org/doi/10.1145/3706599.3720033',
            },
        ],
        technologies: ['HCI Research'],
        country: 'Singapore'
    }
]

export const TeachingExperiences: Teaching[] = [
    {
        role: 'Teaching Assistant',
        course: 'NUS CS4218 Software Testing',
        date: 'Jan 25 - May 25',
        contributions: 'I assisted in grading coursework for 150 students, enhanced course materials, including tutorial questions and lecture slides, and actively supported student learning by responding to queries.',
        resources: [],
        technologies: ['Jest', 'Playwright', 'JMeter'],
        country: 'Singapore',
        school: 'NUS'
    },
    {
        role: 'Advisor',
        course: 'NUS CP2106 Orbital',
        date: 'May 23 - Aug 23',
        contributions: 'I mentored 11 teams of Year 1 undergraduates over a 3-month software engineering project. I enabled all teams to successfully complete the programme with 3 teams achieving Artemis (Extreme), the highest level of distinction. In recognition of my contributions, I was honoured with the Best Advisor Award.',
        resources: [],
        technologies: ['Unity', 'SWE Practices'],
        country: 'Singapore',
        school: 'NUS'
    }
]

export const VolunteeringExperiences: Volunteering[] = [
    {
        role: 'Befriender',
        organisation: 'The Levelled Field',
        date: 'Nov 25 - Dec 25',
        contributions: 'I supported learners with intellectual disabilities in ChatGPT lessons.',
        summary: 'Supported learners with intellectual disabilities in ChatGPT lessons.',
        resources: [],
    },
    {
        role: 'Befriender',
        organisation: 'Project RAYS with Rare Disorders Society Singapore',
        date: 'Jun 25',
        contributions: 'I befriended individuals with rare disorders for arts and game sessions.',
        summary: 'Befriended individuals with rare disorders for arts and game sessions.',
        resources: [],
    },
    {
        role: 'Volunteer',
        organisation: 'Care Corner',
        date: 'Jun 25',
        contributions: 'I taught basic Scratch programming to primary school children.',
        summary: 'Taught basic Scratch programming to primary school children.',
        resources: [],
    },
    {
        role: 'Volunteer',
        organisation: 'Paint-A-Home XXIV @ Hougang',
        date: 'Jul 24',
        contributions: 'I participated in a community initiative to repaint residential flats, contributing to efforts to improve the living conditions and well-being of residents.',
        summary: 'Repainted a residential flat for Paint-A-Home XXIV @ Hougang.',
        resources: [],
    },
    {
        role: 'Facilitator',
        organisation: 'Muscular Dystrophy Association (Singapore)',
        date: 'Jun 24, Jun 25',
        contributions: 'I served as a facilitator for an overnight camp organised for children, where I supported and encouraged their participation in activities and provided care throughout the camp.',
        summary: 'Faciliated an overnight camp organised for children.',
        resources: [],
    },
    {
        role: 'Organiser',
        organisation: 'Family Central',
        date: 'Dec 23 - Feb 24',
        contributions: 'I designed and facilitated a workshop on Google Gemini for 80 older adults, introducing the concept of generative AI and demonstrating practical ways to use Google Gemini in their daily lives.',
        summary: 'Designed and faciliated a workshop on Google Gemini for 80 older adults.',
        resources: [
            {
                label: 'Affirmation Letter',
                link: 'https://drive.google.com/file/d/13IGEfFVbVcrnagc7MOQgUgafsFGSEgLC/view?usp=sharing'
            },
            {
                label: 'Workshop Slides',
                link: 'https://www.canva.com/design/DAF4DHh6mOQ/RN-F0iLIKVB3h6P2N9cNiw/edit?utm_content=DAF4DHh6mOQ&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton'
            }
        ],
    },
    {
        role: 'Mentor',
        organisation: 'CampusImpact',
        date: 'Oct 22 - Dec 22',
        contributions: 'I planned and conducted academic and enrichment activities for a Primary 4 student, offering academic support and designing hands-on science experiments to enhance learning.',
        summary: 'Planned and conducted academic and enrichment activities for a Primary 4 student.',
        resources: []
    },
    {
        role: 'Member',
        organisation: 'Work Live Digital',
        date: 'Dec 21 - Aug 24',
        contributions: 'I curated educational booklets on basic computer usage, facilitated computer classes for older adults, and developed a website for Work Live Digital to support their digital literacy efforts.',
        summary: 'Curated educational booklets on basic computer usage, faciliated computer classes for older adults, and developed a website for Work Live Digital.',
        resources: [
            {
                label: 'Testimonial',
                link: 'https://drive.google.com/file/d/1hnbdK8j_4VImj4CtSWZ8KdhNHdRmolDc/view?usp=sharing'
            }
        ]
    },
    {
        role: 'Tutor',
        organisation: 'CDAC Singapore',
        date: 'Feb 20 - Oct 20',
        contributions: 'I provided academic support in Mathematics and Science to a Primary 6 student, helping to strengthen subject understanding and learning confidence.',
        summary: 'Provided academic support in Mathematics and Science to a Primary 6 student.',
        resources: []
    },
    {
        role: 'Organiser',
        organisation: 'Prison Fellowship Singapore',
        date: 'Mar 17 - Jun 18',
        contributions: 'I led a team of five to provide weekly tuition support and organize enrichment activities for beneficiaries. We successfully fundraised $143.90 by selling self-baked biscuits decorated by the beneficiaries.',
        summary: 'Led a team of 5 to provide weekly tuition support and organise enrichment activities.',
        resources: [
            {
                label: 'Testimonial',
                link: 'https://drive.google.com/file/d/1gxwjOfSOZyAQnCoEh3Fh7czIlcuQVuUx/view?usp=sharing'
            }
        ]
    }





]