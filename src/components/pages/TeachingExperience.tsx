import { TeachingExperiences } from "@/constants/ExperienceConstants";

/**
This component represents the research experience section of the landing page.
*/
export default function TeachingExperience() {
    return (
            <section className='flex flex-col gap-y-8 md:space-y-0 md:grid md:grid-cols-2'>
                <h2 className='text-h2-heading'>Teaching Experience</h2>

                {/* Teaching Experience */}
                <div className=''>
                    {
                        TeachingExperiences.map((teachingExperience, index) => (
                            <div className='flex flex-col space-y-4' key={ index }>

                                <div className='flex flex-col space-y-2'>
                                    {/* Role */}
                                    <h3 className='text-h3-heading !text-zinc-500'>{ teachingExperience.role }</h3>

                                    {/* Course and date */}
                                    <div className="flex flex-row justify-between items-center">
                                        <h5 className='text-h5-heading'>{ teachingExperience.course }</h5>
                                        <h6 className='text-h5-heading'>{ teachingExperience.date }</h6>
                                    </div>
                                </div>

                                {/* Contributions */}
                                <p className='text-subparagraph'>
                                    { teachingExperience.contributions }
                                </p>

                                {/* Resources */}
                                {/* <div className='flex flex-row gap-4 items-center flex-wrap'>
                                    {
                                        teachingExperience.resources.map((resource, index) => (
                                            <Link href={ resource.link } key={ index } className='flex flex-row items-center gap-x-2 text-small hover:text-zinc-400 duration-200' target='_blank'>
                                                <LinkIcon className='w-4 h-4 shrink-0' />{ resource.label }
                                            </Link>
                                        ))
                                    }
                                </div> */}

                                {/* Tech Stack */}
                                <div className='flex flex-row gap-2 items-center flex-wrap'>
                                    {
                                        teachingExperience.technologies.map((technology, index) => (
                                            <div className='rounded-full bg-portfolio-darkblue text-small px-4 py-0.5 !text-white' key={ index }>{ technology }</div>
                                        ))
                                    }
                                </div>

                                {/* Horizontal line */}
                                {
                                    index !== TeachingExperiences.length - 1 &&
                                    <div className="block col-span-1 h-px bg-gray-300 w-full my-4" />
                                }
                                
                            
                            </div>
                        ))
                    }
                </div>
            
                
    
            </section>
        );
  }
  