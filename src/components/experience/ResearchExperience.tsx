import { ResearchExperiences } from "@/constants/experience";
import Link from "next/link";
import { Link as LinkIcon } from "lucide-react";


/**
This component represents the research experience section of the landing page. It is a subcomponent of the experience section.
*/
export default function ResearchExperience() {
    return (
            <section className='flex flex-col space-y-8 md:space-y-0 md:grid md:grid-cols-3 lg:grid-cols-2'>
                {/* Title */}
                <h3 className='col-span-1 text-3xl md:text-4xl lg:text-5xl text-portfolioblack font-semibold text-left'>My Research Experience</h3>

                {/* Research Experience */}
                <div className='col-span-2 lg:col-span-1'>
                    {
                        ResearchExperiences.map((researchExperience, index) => (
                            <div className='flex flex-col space-y-4' key={ index }>

                                <div className='flex flex-col space-y-2'>
                                    {/* Role */}
                                    <h5 className='font-semibold text-xl md:text-2xl'>{ researchExperience.role }</h5>

                                    {/* Lab and date */}
                                    <div className="flex flex-row justify-between items-center sm:text-base md:text-lg text-portfolio-black font-semibold">
                                        <h6>{ researchExperience.lab }</h6>
                                        <h6>{ researchExperience.date }</h6>
                                    </div>
                                </div>

                                {/* Contributions */}
                                <p className='text-gray-700 md:text-lg'>
                                    { researchExperience.contributions }
                                </p>

                                {/* Resources */}
                                <div className='flex flex-row gap-4 items-center flex-wrap'>
                                    {
                                        researchExperience.resources.map((resource, index) => (
                                            <Link href={ resource.link } key={ index } className='flex flex-row items-center gap-x-2 text-portfolioblack hover:text-zinc-400 duration-200'>
                                                <LinkIcon className='w-4 h-4 shrink-0' />{ resource.label }
                                            </Link>
                                        ))
                                    }
                                </div>

                                {/* Tech Stack */}
                                <div className='flex flex-row gap-2 items-center flex-wrap'>
                                    {
                                        researchExperience.technologies.map((technology, index) => (
                                            <div className='rounded-full bg-purple-100 text-portfoliopurple px-4 py-0.5 font-semibold' key={ index }>{ technology }</div>
                                        ))
                                    }
                                </div>

                                {/* Horizontal line */}
                                <div className="block col-span-1 h-px bg-gray-300 w-full my-4" />
                            
                            </div>
                        ))
                    }
                </div>
            
                
    
            </section>
        );
  }
  