import { WorkExperiences } from "@/constants/ExperienceConstants";
import Link from "next/link";
import { Link as LinkIcon } from "lucide-react";


/**
This component represents the work experience section of the landing page.
*/
export default function WorkExperience() {
    return (
        <section className='flex flex-col gap-y-8' id='experience'>
            <h2 className='text-h2-heading'>Work Experience</h2>

            <div className=''>
                {
                    WorkExperiences.map((workExperience, index) => (
                        <div className='flex flex-col space-y-4' key={ index }>

                            <div className='flex flex-col space-y-2'>
                                {/* Role */}
                                <h3 className='text-h3-heading !text-zinc-500'>{ workExperience.role }</h3>

                                {/* Company and date */}
                                <div className="flex flex-row justify-between items-center">
                                    <h5 className='text-h5-heading'>{ workExperience.company }</h5>
                                    <h5 className='text-h5-heading'>{ workExperience.date }</h5>
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

                            {/* Resources */}
                            <div className='flex flex-row gap-4 items-center flex-wrap'>
                                {
                                    workExperience.resources.map((resource, index) => (
                                        <Link href={ resource.link } key={ index } className='flex flex-row items-center gap-x-2 text-small hover:text-zinc-400 duration-200'>
                                            <LinkIcon className='w-4 h-4 shrink-0' />{ resource.label }
                                        </Link>
                                    ))
                                }
                            </div>

                            {/* Tech Stack */}
                            <div className='flex flex-row gap-2 items-center flex-wrap'>
                                {
                                    workExperience.technologies.map((technology, index) => (
                                        <div className='rounded-full bg-portfolio-darkblue text-small px-4 py-0.5 !text-white' key={ index }>{ technology }</div>
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
  