

import Link from "next/link";
import { ChevronDown } from "lucide-react";

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
                animationDelay: '1s',
                }}
            />
            <div
                className="bg-[#CFE8FA] animate-sequenced coloured-circle top-[40%] left-[25%] sm:top-[45%] sm:left-[35%]"
                style={{
                transform: 'translate(20%, -50%)',
                animationDelay: '3s',
                }}
            />

            {/* Headers and buttons */}
            <div className="flex flex-col items-center justify-center space-y-12 flex-1">
                <h1 className="text-h1-heading text-center">Hi, I am Eugene.</h1>
                <h4 className="text-h4-heading sm:w-3/4 text-center">
                Building meaningful, human-centered digital experiences through code and design
                </h4>

                <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8">
                <button className="button-dark">
                    <Link href="https://www.linkedin.com/in/eugenetangkj" target='_blank'>Let&apos;s Connect</Link>
                </button>
                <button className="button-light">
                    <Link href="https://drive.google.com/file/d/1cDopHQswK7BOeT1P0NAZaosv57P2A5FX/view?usp=sharing" target='_blank'>View Resume</Link>
                </button>
                </div>
            </div>


            {/* Arrow to navigate */}
            <div className="mb-6">
                <Link href='#about-me'>
                    <ChevronDown className="animate-bounce text-zinc-500 w-8 h-8" />
                </Link>
            </div>
    </section>
    );
  }
  