import { ABOUT_ME_VALUES } from "@/constants/AboutMeConstants";
import AboutMeCard from "../about-me/AboutMeCard";

/**
This component represents the About Me section of the landing page.
*/
export default function AboutMe() {
    return (
        <section className='flex flex-col gap-y-12' id='about-me'>

            {/* About me text */}
            <div className='flex flex-col space-y-4'>
                    <h2 className='text-h2-heading'>About Me</h2>
                    <p className='text-subparagraph'>
                        I&apos;m a software engineer with a passion for <span className='font-bold'>development</span> and <span className='font-bold'>design</span>. I graduated with a Bachelor of Computing from the National University of Singapore (NUS). With hands-on experience across the software development and UX design life cycles, I thrive at the intersection of code and creativity.
                    </p>
                    <p className='text-subparagraph'>
                        I&apos;m motivated to <span className='font-bold '>create meaningful change</span>. My work includes building tech-for-good platforms such as a web tool that helps government agencies visualise social media complaints, and a learning platform designed to support older adults in acquiring basic computer skills. Currently, I&apos;m also engaged in Human-Computer Interaction (HCI) research focused on using technology to support AI literacy education among older adults.
                    </p>
                    <p className='text-subparagraph'>
                        When I&apos;m not designing or coding, you&apos;ll likely find me drawing, reading, volunteering or going for a run.
                    </p>
            </div>

            {/* Core values */}
            <div className='grid grid-rows-2 grid-cols-1 md:grid-cols-2 gap-4'>
                {
                    ABOUT_ME_VALUES.map((card, index) => (
                        <AboutMeCard key={ index } title={ card.title } paragraphText={ card.paragraphText } colour={ card.colour } value= { card.value } />
                    ))
                }
            </div> 


        </section>
    );
  }
  