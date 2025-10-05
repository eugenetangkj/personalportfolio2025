import { WorkExperiences } from "@/constants/ExperienceConstants";
import Link from "next/link";
import { Link as LinkIcon } from "lucide-react";
import Image from "next/image";


/**
This component represents the work experience section of the landing page.
*/
export default function WorkExperience() {
    return (
        <section className='flex flex-col gap-y-8 scroll-mt-24' id='experiences'>
            <h2 className='text-h2-heading'>Work Experience</h2>

            <div className=''>
                {
                    WorkExperiences.map((workExperience, index) => (
                        <div className='flex flex-col space-y-4' key={ index }>

                            <div className="flex flex-row justify-start items-center w-full space-x-4">
                                {/* Image */}
                                <Image 
                                    src={ workExperience.imageLink } 
                                    className="rounded-md" 
                                    alt="Project" 
                                    width={55} 
                                    height={55} 
                                />

                                <div className='flex flex-col items-center justify-center flex-1 space-y-2'>

                                    {/* Row 1 text */}
                                    <div className="flex flex-row justify-between items-center w-full">
                                        <h5 className="text-h5-heading leading-5">{ workExperience.role }</h5>
                                        <h5 className="text-h5-heading leading-5">{ workExperience.date }</h5>
                                    </div>

                                    {/* Row 2 text */}
                                    <div className="flex flex-row justify-between items-center w-full">
                                        <p className="text-small !leading-5">{ workExperience.company }</p>
                                        <p className="text-small !leading-5">{ workExperience.country }</p>
                                    </div>
                            
                                </div>
                            
                            
                            
                            </div>


                            {/* Contributions */}
                            <ul className=' list-disc pl-5 space-y-2 text-subparagraph'>
                                {
                                    workExperience.contributions.map((contribution, index) => (
                                        <li key={ index }>{ contribution }</li>
                                    ))
                                }
                            </ul>


                             {/* Tech Stack */}
                            <div className='flex flex-row gap-2 items-center flex-wrap'>
                                {
                                    workExperience.technologies.map((technology, index) => (
                                        <div className='rounded-full bg-blue-100 text-small px-4 py-0.5 !text-zinc-700 ' key={ index }>{ technology }</div>
                                ))
                                }
                            </div>





                            {/* Resources */}
                            <div className='flex flex-row gap-4 items-center flex-wrap'>
                                {
                                    workExperience.resources.map((resource, index) => (
                                        <Link href={ resource.link } key={ index } className='flex flex-row items-center gap-x-2 text-small hover:text-zinc-400 duration-200' target='_blank'>
                                            <LinkIcon className='w-4 h-4 shrink-0' />{ resource.label }
                                        </Link>
                                    ))
                                }
                            </div>

                    
                          
                            {/* Horizontal line */}
                            {
                                index !== WorkExperiences.length - 1 &&
                                <div className="block col-span-1 h-px bg-gray-300 w-full my-4" />
                            }

                        </div>
                    ))
                }
            </div>
        </section>
    );
  }
  