

import Link from "next/link";

/**
This component represents the Hero section of the landing page.
*/
export default function Hero() {

    return (
        <section className="flex flex-col items-center justify-center space-y-12 relative pt-48">

            {/* Coloured circles */}
            <div className="bg-[#fcd5ce] animate-sequenced coloured-circle top-[30%] left-[0%] sm:top-[40%] sm:left-[10%]"
                style={{
                    transform: 'translate(20%, -50%)',
                    animationDelay: '2s',
                }}
            />
            
            <div className="bg-[#CFE8FA] animate-sequenced coloured-circle top-[60%] left-[20%] sm:top-[70%] sm:left-[35%]"
                style={{
                    top: '70%',
                    left: '35%',
                    transform: 'translate(20%, -50%)',
                    animationDelay: '4s',
                }}
            />

            {/* Title */}
            <h1 className="text-h1-heading text-center">Hi, I am Eugene.</h1>

            {/* Subtitle */}
            <h2 className="text-h2-heading sm:w-3/4 text-center">Building meaningful, human-centered digital experiences through code and design</h2>

            {/* Contact and resume */}
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8">
                <button className="button-dark">
                    <Link href="#">Let&apos;s Connect</Link>
                </button>
                <button className="button-light">
                    <Link href="#">View Resume</Link>
                </button>
            </div>
    </section>

    );
  }
  