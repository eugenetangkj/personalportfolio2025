import Image from "next/image";


/**
This component represents the About Me section of the landing page.
*/
export default function AboutMe() {
    return (
        <section className='lg:mt-16 flex flex-col-reverse gap-y-12 lg:grid lg:grid-cols-3 lg:gap-x-12 lg:items-center'>
             {/* Image */}
             <div className='lg:col-span-1 self-center'>
                <Image src='/images/aboutMe/EugeneTang.png' alt='Eugene Tang' width={858} height={836} className='rounded-xl self-center w-[293px] h-[286px] sm:w-[337px] sm:h-[328px] lg:w-auto lg:h-auto' />
            </div>

            
            {/* Title and text */}
            <div className='lg:col-span-2 flex flex-col space-y-8'>
                <div className='flex flex-col space-y-4'>
                    <h4 className='col-span-1 md:col-span-2 text-gray-700 text-xl sm:text-2xl text-center md:text-left'>About Me</h4>
                    <h2 className='font-inter text-4xl md:text-5xl lg:text-6xl text-portfolioblack font-bold text-center md:text-left'>
                        Passionate about making a <span className='text-portfoliopurple'>difference</span> for others.
                    </h2>
                </div>
               

                <p className='text-gray-700 text-lg sm:text-xl text-center md:text-left'>I&apos;m a software engineer with a passion for <span className='font-bold'>development</span> and <span className='font-bold'>design</span>. With hands-on experience across the software development and UX design life cycles, I thrive at the intersection of code and creativity.</p>
                <p className='text-gray-700 text-lg sm:text-xl text-center md:text-left'>I'm motivated to <span className='font-bold '>create meaningful change</span>. My work includes building tech-for-good platforms such as a web tool that helps government agencies visualise social media complaints, and a learning platform designed to support older adults in acquiring basic computer skills. Currently, I&apos;m also engaged in Human-Computer Interaction (HCI) research focused on using technology to support AI literacy education among older adults.</p>
                <p className='text-gray-700 text-lg sm:text-xl text-center md:text-left'>When I'm not designing or coding, you&apos;ll likely find me drawing, reading, volunteering or going for a run.</p>
            </div>

        </section>
    );
  }
  