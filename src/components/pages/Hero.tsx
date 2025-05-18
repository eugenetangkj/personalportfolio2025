

import Link from "next/link";

/**
This component represents the Hero section of the landing page.
*/
export default function Hero() {

    return (
        <section className="mt-64 flex flex-col items-center justify-center space-y-12 relative">

            {/* Coloured circles */}
            <div className="absolute w-[300px] h-[300px] rounded-full bg-[#fcd5ce] blur-2xl animate-sequenced pointer-events-none"
                style={{
                    top: '30%',
                    left: '10%',
                    transform: 'translate(20%, -50%)',
                    animationDelay: '2s',
                }}
            />
            
            <div className="absolute w-[300px] h-[300px] rounded-full bg-[#CFE8FA] blur-2xl animate-sequenced pointer-events-none"
                style={{
                    top: '70%',
                    left: '35%',
                    transform: 'translate(20%, -50%)',
                    animationDelay: '4s',
                }}
            />

            {/* Title */}
            <h1 className="font-playfair-display text-5xl text-zinc-900">Hi, I am Eugene.</h1>

            {/* Subtitle */}
            <h2 className="text-zinc-500 font-lato text-2xl w-1/2 text-center">Building meaningful, human-centered digital experiences through code and design</h2>

            {/* Contact and resume */}
            <div className="flex flex-row justify-center items-center font-lato space-x-8">
                <button className="bg-stone-800 hover:bg-stone-700 text-white cursor-pointer rounded-full text-lg px-6 py-3 font-lato duration-200">
                    <Link href="#">Let&apos;s Connect</Link>
                </button>
                <button className="bg-white hover:bg-stone-100 text-zinc-600 cursor-pointer rounded-full text-lg px-6 py-3 font-lato duration-200 border-2">
                    <Link href="#">View Resume</Link>
                </button>
            </div>
    </section>

    );
  }
  