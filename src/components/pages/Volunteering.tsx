"use client"

import Link from "next/link";
import { Link as LinkIcon } from "lucide-react";
import { VolunteeringExperiences } from "@/constants/ExperienceConstants";
import Image from "next/image";


/**
This component represents the volunteering section of the landing page.
*/
// const numberOfItemsToShow = 5

export default function Volunteering() {
    // Controls how many items are shown
    // const [showAll, setShowAll] = useState(false);
    // const visibleCount = showAll ? VolunteeringExperiences.length : numberOfItemsToShow

    return (
        <section className='flex flex-col gap-y-8 self-start scroll-mt-24 w-full' id='volunteering'>
            <h2 className='text-h2-heading'>Volunteering</h2>

            <div className=''>
                {
                    VolunteeringExperiences.map((volunteeringExperience, index) => (
                        <div className='flex flex-col space-y-4' key={ index }>
                            {/* Organisation and date */}
                            <div className="flex flex-row justify-between items-center w-full">
                                        <h5 className="text-h5-heading leading-5">{ volunteeringExperience.organisation }</h5>
                                        <h5 className="text-h5-heading leading-5">{ volunteeringExperience.date }</h5>
                            </div>
                   
                            {/* Summary of contributions */}
                            <p className='text-subparagraph'>{ volunteeringExperience.summary }</p>

                            {/* Resources */}
                            { volunteeringExperience.resources.length !== 0 &&
                                <div className='flex flex-row gap-4 items-center flex-wrap'>
                                    {
                                        volunteeringExperience.resources.map((resource, index) => (
                                            <Link href={ resource.link } key={ index } className='flex flex-row items-center gap-x-2 text-small hover:text-zinc-400 duration-200' target='_blank'>
                                                <LinkIcon className='w-4 h-4 shrink-0' />{ resource.label }
                                            </Link>
                                        ))
                                    }
                                </div>
                            }

                        {/* Horizontal line */}
                        {
                            index !== VolunteeringExperiences.length - 1 &&
                            <div className="block col-span-1 h-px bg-gray-300 w-full mb-4" />
                        }
                    </div>
                    ))
                }
            </div>

            {/* Show more or show less button */}
            {/* <button className="button-light w-fit self-center mt-4" onClick={() => setShowAll(!showAll)}>
                { showAll ? 'Show Less' : 'Show More' }
            </button> */}

            {/* Images */}
            <div className='flex flex-col sm:flex-row items-start justify-center space-y-4 sm:space-y-0 sm:space-x-4 w-3/4 self-center sm:w-auto'>
                <div className='flex flex-col items-center justify-start space-y-2'>
                    <Image src='/images/volunteering/mdas-camp-2025.png' className='rounded-md' alt="Fun and games at MDAS COMPASS Camp" width={ 1260 } height={ 716 } />
                    <h6 className='text-extra-small !leading-5'>Fun and games at MDAS COMPASS Camp 🌞</h6>
                </div>
                
                <div className="flex flex-col items-center justify-start space-y-2">
                    <Image src='/images/volunteering/rays-2025.png' className='rounded-md' alt="Project Rays - Love is not rare!" width={ 1260 } height={ 716 } />
                    <h6 className='text-extra-small !leading-5'>Project Rays - Love is not rare! 💕</h6>
                </div>
                
                <div className='flex flex-col items-center justify-start space-y-2'>
                    <Image src='/images/volunteering/wld-2023.png' className='rounded-md' alt="Volunteer kickoff by Work Live Digital" width={ 1260 } height={ 716 } />
                    <h6 className='text-extra-small !leading-5'>Volunteer kickoff by Work Live Digital 😊</h6>
                </div>
            </div>


           

         
        </section>
    );
  }
  