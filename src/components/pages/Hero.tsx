

import Link from "next/link";
import { ChevronDown, MoveDown } from "lucide-react";

/**
This component represents the Hero section of the landing page.
*/
export default function Hero() {

    return (
        <section className="relative flex flex-col h-screen items-center">

            {/* Coloured circles */}
            <div
                className="bg-[#fcd5ce] animate-sequenced coloured-circle top-[30%] left-[0%] sm:top-[40%] sm:left-[10%]"
                style={{
                transform: 'translate(20%, -50%)',
                animationDelay: '2s',
                }}
            />
            <div
                className="bg-[#CFE8FA] animate-sequenced coloured-circle top-[40%] left-[30%] sm:top-[50%] sm:left-[45%]"
                style={{
                transform: 'translate(20%, -50%)',
                animationDelay: '4s',
                }}
            />

            {/* Headers and buttons */}
            <div className="flex flex-col items-center justify-center space-y-12 flex-1">
                <h1 className="text-h1-heading text-center">Hi, I am Eugene.</h1>
                <h2 className="text-h2-heading sm:w-3/4 text-center">
                Building meaningful, human-centered digital experiences through code and design
                </h2>

                <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8">
                <button className="button-dark">
                    <Link href="#">Let&apos;s Connect</Link>
                </button>
                <button className="button-light">
                    <Link href="#">View Resume</Link>
                </button>
                </div>
            </div>


            {/* Arrow to navigate */}
            <div className="mb-6">
                <Link href='#'>
                    <ChevronDown className="animate-bounce text-zinc-500 w-8 h-8" />
                </Link>
            </div>
    </section>
    );
  }
  