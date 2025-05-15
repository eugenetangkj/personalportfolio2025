import Image from "next/image";


/**
This component represents the About Me section of the landing page.
*/
export default function AboutMe() {
    return (
        <section className='mt-16 grid grid-cols-3 gap-x-12 items-center'>
             {/* Image */}
             <div className='col-span-1'>
                <Image src='/images/aboutMe/EugeneTang.png' alt='Eugene Tang' width={347} height={491.55} className='rounded-xl self-center' />
            </div>

            
            {/* Title and text */}
            <div className='col-span-2 flex flex-col space-y-8'>
                <h3 className='col-span-1 md:col-span-2 text-gray-700 text-xl sm:text-2xl text-center md:text-left'>About Me</h3>
                <h2 className='font-inter text-left text-6xl text-portfolioblack font-bold'>
                    Passionate about making a <span className='text-portfoliopurple'>difference</span> for others.
                </h2>

                <p className='text-gray-700 text-xl'>I&apos;m a software engineer with a passion for <span className='font-bold'>development</span> and <span className='font-bold'>design</span>. With hands-on experience across the software development and UX design life cycles, I thrive at the intersection of code and creativity.</p>
                <p className='text-gray-700 text-xl'>I'm motivated to <span className='font-bold '>create meaningful change</span>. My work includes building tech-for-good platforms such as a web tool that helps government agencies visualise social media complaints, and a learning platform designed to support older adults in acquiring basic computer skills. Currently, I&apos;m also engaged in HCI research focused on using technology to support AI literacy education among older adults.</p>
                <p className='text-gray-700 text-xl'>When I'm not designing or coding, you&apos;ll likely find me drawing, reading, volunteering or going for a run.</p>
            </div>

        </section>
    );
  }
  