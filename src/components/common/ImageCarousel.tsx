"use client";
import Image from "next/image";

// Image carousel for illustrations
export default function ImageCarousel() {
    const images = [
        "/images/illustrations/graphic-1.png",
        "/images/illustrations/graphic-2.png",
        "/images/illustrations/graphic-3.png",
        "/images/illustrations/graphic-4.png",
        "/images/illustrations/graphic-5.png",
        "/images/illustrations/graphic-6.png",
    ];

    return (
        <div className="relative w-full overflow-hidden bg-white">
            {/* Scrolling track wrapper */}
            <div className="flex w-max animate-marquee">
                {[...images, ...images].map((src, i) => (
                    <div key={i} className="flex-shrink-0 w-[200px] sm:w-[400px] mx-2 sm:mx-4">
                        <Image
                            src={src}
                            alt={`carousel-${i}`}
                            width={400}
                            height={300}
                            className="rounded-lg object-cover w-full h-[150px] sm:h-[300px]"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
