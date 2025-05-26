"use client"

import Link from "next/link";
import { Link as LinkIcon } from "lucide-react";
import { useState } from "react";
import { AwardsList } from "@/constants/AwardConstants";


/**
This component represents the Awards section of the landing page.
*/
const numberOfItemsToShow = 5

export default function Awards() {
    // Controls how many items are shown
    const [showAll, setShowAll] = useState(false);
    const visibleCount = showAll ? AwardsList.length : numberOfItemsToShow

    return (
        <section className='flex flex-col gap-y-8 self-start w-full' id='awards'>
            <h2 className='text-h2-heading'>Awards</h2>

            <div className=''>
                {
                    AwardsList.slice(0, visibleCount).map((award, index) => (
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
            <button className="button-light w-fit self-center mt-4" onClick={() => setShowAll(!showAll)}>
                { showAll ? 'Show Less' : 'Show More' }
            </button>

           

         
        </section>
    );
  }
  