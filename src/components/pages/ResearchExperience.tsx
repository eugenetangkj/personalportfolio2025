import { ResearchExperiences } from "@/constants/ExperienceConstants";
import Link from "next/link";
import { Link as LinkIcon } from "lucide-react";


/**
This component represents the research experience section of the landing page.
*/
export default function ResearchExperience() {
    return (
            <section className='flex flex-col gap-y-8 md:space-y-0 md:grid md:grid-cols-2'>
                <h2 className='text-h2-heading'>Research Experience</h2>

                {/* Research Experience */}
                <div className=''>
                    {
                        ResearchExperiences.map((researchExperience, index) => (
                            <div className='flex flex-col space-y-4' key={ index }>

                                <div className='flex flex-col space-y-2'>
                                    {/* Row 1 text */}
                                    <div className="flex flex-row justify-between items-center w-full">
                                        <h5 className="text-h5-heading leading-5">{ researchExperience.role }</h5>
                                        <h5 className="text-h5-heading leading-5">{ researchExperience.date }</h5>
                                    </div>

                                    {/* Row 2 text */}
                                    <div className="flex flex-row justify-between items-center w-full">
                                        <p className="text-small !leading-5">{ researchExperience.lab }</p>
                                        <p className="text-small !leading-5">{ researchExperience.country }</p>
                                    </div>
                                </div>

                                {/* Contributions */}
                                <p className='text-subparagraph'>
                                    { researchExperience.contributions }
                                </p>

                                {/* Resources */}
                                <div className='flex flex-row gap-4 items-center flex-wrap'>
                                    {
                                        researchExperience.resources.map((resource, index) => (
                                            <Link href={ resource.link } key={ index } className='flex flex-row items-center gap-x-2 text-small hover:text-zinc-400 duration-200' target='_blank'>
                                                <LinkIcon className='w-4 h-4 shrink-0' />{ resource.label }
                                            </Link>
                                        ))
                                    }
                                </div>

                                {/* Tech Stack */}
                                {/* <div className='flex flex-row gap-2 items-center flex-wrap'>
                                    {
                                        researchExperience.technologies.map((technology, index) => (
                                            <div className='rounded-full bg-portfolio-darkblue text-small px-4 py-0.5 !text-white' key={ index }>{ technology }</div>
                                        ))
                                    }
                                </div> */}

                                {/* Horizontal line */}
                                {
                                    index !== ResearchExperiences.length - 1 &&
                                    <div className="block col-span-1 h-px bg-gray-300 w-full my-4" />
                                }
                               
                            
                            </div>
                        ))
                    }
                </div>
            
                
    
            </section>
        );
  }
  