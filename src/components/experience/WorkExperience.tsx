import { WorkExperiences } from "@/constants/experience";
import Link from "next/link";
import { Link as LinkIcon } from "lucide-react";


/**
This component represents the work experience section of the landing page. It is a subcomponent of the experience section.
*/
export default function WorkExperience() {
    return (
            <section className='flex flex-col space-y-8'>
                {/* Title */}
                <h3 className='text-3xl md:text-4xl lg:text-5xl text-portfolioblack font-semibold text-left'>My Work Experience</h3>

                {/* Work Experience */}
                <div className=''>
                    {
                        WorkExperiences.map((workExperience, index) => (
                            <div className='flex flex-col space-y-4' key={ index }>

                                <div className='flex flex-col space-y-2'>
                                    {/* Role */}
                                    <h5 className='font-semibold text-xl md:text-2xl'>{ workExperience.role }</h5>

                                    {/* Company and date */}
                                    <div className="flex flex-row justify-between items-center sm:text-base md:text-lg text-portfolio-black font-semibold">
                                        <h6>{ workExperience.company }</h6>
                                        <h6>{ workExperience.date }</h6>
                                    </div>
                                </div>

                                {/* Contributions */}
                                <ul className='text-gray-700 list-disc pl-5 space-y-2 md:text-lg'>
                                    {
                                        workExperience.contributions.map((contribution, index) => (
                                            <li key={ index }>{ contribution }</li>
                                        ))
                                    }
                                </ul>

                                {/* Resources */}
                                <div className='flex flex-row gap-4 items-center flex-wrap'>
                                    {
                                        workExperience.resources.map((resource, index) => (
                                            <Link href={ resource.link } key={ index } className='flex flex-row items-center gap-x-2 text-portfolioblack hover:text-zinc-400 duration-200'>
                                                <LinkIcon className='w-4 h-4 shrink-0' />{ resource.label }
                                            </Link>
                                        ))
                                    }
                                </div>

                                {/* Tech Stack */}
                                <div className='flex flex-row gap-2 items-center flex-wrap'>
                                    {
                                        workExperience.technologies.map((technology, index) => (
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
  