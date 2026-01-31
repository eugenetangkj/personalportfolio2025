/**
This component represents the About Me section of the landing page.
*/
export default function AboutMe() {
    return (
        <section className='flex flex-col gap-y-12 scroll-mt-24' id='about-me'>
            {/* About me text */}
            <div className='flex flex-col space-y-4'>
                    <h2 className='text-h2-heading'>I explore human-centered problems with thoughtful tech design.</h2>
                    <p className='text-subparagraph'>
                        I&apos;m Eugene, an aspiring Human-Computer Interaction (HCI) researcher with a background in software engineering and UX design. I see technology as a tool for improving people's lives, and I'm particularly interested in how it can be thoughtfully designed to address real-world needs and challenges. In my approach to HCI research:
                    </p>
                   
                    <p className='text-subparagraph'>
                        <span className='font-semibold text-blue-400'>✿ I understand</span>. I identify social problems grounded in my own experiences and observations of the world around me. I then validate these problems by understanding the perspectives of relevant stakeholders and examining whether important aspects remain underexplored in existing research.
                    </p>

                    <p className='text-subparagraph'>
                        <span className='font-semibold text-purple-400'>✱ I design</span>. I design by translating insights from stakeholders and the research landscape into meaningful interaction paradigms, exploring design opportunities that are both valuable and theoretically interesting.
                    </p>

                     <p className='text-subparagraph'>
                        <span className='font-semibold text-pink-400'>‪‪❤︎‬ I evaluate</span>. I evaluate using a combination of quantitative and qualitative methods to assess the value of the technology with end users, linking findings back to the research questions and the problems the design aims to address.
                    </p>
            </div>

            {/* Venn diagram circles*/}
            {/* <div className="flex items-center">
                <div className="rounded-full w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-blue-400 opacity-50 mix-blend-multiply"></div>
                <div className="-ml-3 md:-ml-4 lg:-ml-4 rounded-full w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-purple-400 opacity-50 mix-blend-multiply"></div>
                <div className="-ml-3 md:-ml-4 lg:-ml-4 rounded-full w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-pink-400 opacity-50 mix-blend-multiply"></div>
            </div> */}


        </section>
    );
  }
  