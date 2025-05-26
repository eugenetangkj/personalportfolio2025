import { VolunteeringExperiences } from "@/constants/ExperienceConstants";
import Link from "next/link";
import { Link as LinkIcon } from "lucide-react";


/**
This component represents the volunteering experience section of the landing page. It is a subcomponent of the experience section.
*/
export default function VolunteeringExperience() {
    return (
            <section className='flex flex-col space-y-8'>
                {/* Title */}
                <h3 className='col-span-1 text-3xl md:text-4xl lg:text-5xl text-portfolioblack font-semibold text-left'>My Volunteering Experience</h3>

                {/* Volunteering Experience */}
                <div className='col-span-2 lg:col-span-1 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-y-4 gap-x-4 sm:gap-x-12'>
                    {
                        VolunteeringExperiences.map((volunteeringExperience, index) => (
                            <div className='flex flex-col space-y-4' key={ index }>

                                <div className='flex flex-col space-y-2'>
                                    {/* Role */}
                                    <h5 className='font-semibold text-xl md:text-2xl'>{ volunteeringExperience.role }</h5>

                                    {/* Organisation and date */}
                                    <div className="flex flex-row justify-between items-center sm:text-base md:text-lg text-portfolio-black font-semibold">
                                        <h6>{ volunteeringExperience.organisation }</h6>
                                        <h6>{ volunteeringExperience.date }</h6>
                                    </div>
                                </div>

                                {/* Contributions */}
                                <p className='text-gray-700 md:text-lg'>
                                    { volunteeringExperience.contributions }
                                </p>

                                {/* Resources */}
                                {
                                    volunteeringExperience.resources.length !== 0 &&
                                    <div className='flex flex-row gap-x-4 gap-y-2 items-center flex-wrap'>
                                        {
                                            volunteeringExperience.resources.map((resource, index) => (
                                                <Link href={ resource.link } key={ index } className='flex flex-row items-center gap-x-2 text-portfolioblack hover:text-zinc-400 duration-200'>
                                                    <LinkIcon className='w-4 h-4 shrink-0' />{ resource.label }
                                                </Link>
                                            ))
                                        }
                                    </div>
                                }

                                {/* Horizontal Line */}
                                <div className="block sm:hidden col-span-1 h-px bg-gray-300 w-full my-2" />

                             
                            </div>
                        ))
                    }
                </div>
            
                
    
            </section>
        );
  }
  