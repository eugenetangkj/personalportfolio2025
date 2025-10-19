"use client"

import { AwardsList } from "@/constants/AwardConstants";
import Image from "next/image";
import ImageCarousel from "../common/ImageCarousel";

/**
This component represents the illustrations section of the landing page.
*/


export default function Illustrations() {
    // Controls how many items are shown
    // const [showAll, setShowAll] = useState(false);
    // const visibleCount = showAll ? AwardsList.length : numberOfItemsToShow

    return (
        <section className='flex flex-col gap-y-8 self-start w-full scroll-mt-24 sm:text-center mb-8' id='illustrations'>
            <h2 className='text-h2-heading px-8 sm:px-0'>Illustrations</h2>
            <h2 className='text-small px-8 sm:px-0'>Yes... I like to draw in my free time 😋</h2>
            <ImageCarousel />
        </section>
    );
  }
  