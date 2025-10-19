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
        <section className='flex flex-col gap-y-8 self-start w-full scroll-mt-24 text-center mb-16' id='illustrations'>
            <h2 className='text-h2-heading'>Illustrations</h2>
            <h2 className='text-small'>Yes... I like to draw in my free time 😋</h2>
            <ImageCarousel />
        </section>
    );
  }
  