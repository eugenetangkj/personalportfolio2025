/**
This component represents the About Me section of the landing page.
*/
export default function AboutMe() {
    return (
        <section className='flex flex-col gap-y-12 scroll-mt-24' id='about-me'>
             

            

            {/* About me text */}
            <div className='flex flex-col space-y-4'>
                    <h2 className='text-h2-heading'>I build meaningful, human-centered digital experiences.</h2>
                    <p className='text-subparagraph'>
                        I&apos;m Eugene, a software engineer with a passion for <span className='font-bold'>development</span> and <span className='font-bold'>design</span>. I graduated with a Bachelor of Computing from the National University of Singapore (NUS). With hands-on experience across the software development and UX design life cycles, I thrive at the intersection of code and creativity. I hope to use my skills to <span className='font-bold '>create positive impact on others</span>.
                    </p>
                   
                    <p className='text-subparagraph'>
                        <span className='font-semibold text-blue-400'>✿ I code</span>. I specialise in software engineering, with experience in web, app, and game development. I enjoy tinkering with new technologies to bring ideas to life.
                    </p>

                    <p className='text-subparagraph'>
                        <span className='font-semibold text-purple-400'>✱ I design</span>. I prioritise user experience in my products, with an understanding of the UX design lifecycle and strong prototyping skills. My goal is to create solutions that genuinely address users&apos; needs.
                    </p>

                     <p className='text-subparagraph'>
                        <span className='font-semibold text-pink-400'>❤ I contribute</span>. I contribute to my community by applying my knowledge to solve problems and support those in need. I&apos;m driven to create products that benefit the people around me.
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
  