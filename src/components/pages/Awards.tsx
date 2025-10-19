"use client"

// import { useState } from "react";
import { AwardsList } from "@/constants/AwardConstants";
import Image from "next/image";

/**
This component represents the Awards section of the landing page.
*/
// const numberOfItemsToShow = 5

export default function Awards() {
    // Controls how many items are shown
    // const [showAll, setShowAll] = useState(false);
    // const visibleCount = showAll ? AwardsList.length : numberOfItemsToShow

    return (
        <section className='flex flex-col gap-y-8 self-start w-full scroll-mt-24' id='awards'>
            <h2 className='text-h2-heading'>Awards</h2>

            <div className=''>
                {
                    AwardsList.map((award, index) => (
                        <div className='flex flex-col space-y-4' key={ index }>

                            {/* Name of award */}
                            
                            <h5 className='text-h5-heading'>{ award.name }</h5>
                          
                            {/* Affliation and date */}
                            <div className="flex flex-row justify-between items-center">
                                <h5 className='text-subparagraph'>{ award.affliation }</h5>
                                <h5 className='text-subparagraph'>{ award.date }</h5>
                            </div>

                     

                        {/* Horizontal line */}
                        {
                            index !== AwardsList.length - 1 &&
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

            <div className='flex flex-col sm:flex-row items-start justify-center space-y-4 sm:space-y-0 sm:space-x-4 w-3/4 self-center sm:w-auto'>
                <div className='flex flex-col items-center justify-start space-y-2'>
                    <Image src='/images/awards/bfg-2024.png' className='rounded-md' alt="Presenting our project at Build for Good 24" width={ 1260 } height={ 716 } />
                    <h6 className='text-extra-small !leading-5'>Presenting our project at Build for Good 24 📝</h6>
                </div>
                
                <div className="flex flex-col items-center justify-start space-y-2">
                    <Image src='/images/awards/lifehack-2025.png' className='rounded-md' alt="Third prize at LifeHack 25!" width={ 1260 } height={ 716 } />
                    <h6 className='text-extra-small !leading-5'>Third prize at LifeHack 25! 🥉</h6>
                </div>
                
                <div className='flex flex-col items-center justify-start space-y-2'>
                    <Image src='/images/awards/orbital-2022.png' className='rounded-md' alt="Judge's Choice Award at Orbital 2022" width={ 1260 } height={ 716 } />
                    <h6 className='text-extra-small !leading-5'>Judge's Choice Award at Orbital 22 🏅</h6>
                </div>
            </div>
        </section>
    );
  }
  