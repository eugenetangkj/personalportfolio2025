

import Link from "next/link";
import { ChevronDown } from "lucide-react";

/**
This component represents the Hero section of the landing page.
*/
export default function Hero() {

    return (
        <section className="relative flex flex-col h-screen items-center justify-center space-y-16 mt-16 mb-0">
            
            {/* Headers and buttons */}
            <div className="flex flex-col items-center justify-center space-y-12">
                {/* Insert here */}

                
                <h1 className="text-h1-heading text-center">Eugene is a software engineer passionate about <span className='font-semibold'>community impact</span>. He <span className='text-blue-400 inline-block transition-transform duration-300 hover:scale-125 hover:rotate-12'>✿</span> crafts intuitive products, <span className='text-purple-500 inline-block transition-transform duration-300 hover:scale-125 hover:-rotate-12'>✱</span> designs with empathy, and <span className='text-pink-400 inline-block transition-transform duration-300 hover:scale-125'>❤</span> builds tools that create meaningful change.</h1>
                
            
            </div>


            {/* Arrow to navigate */}
            <div className="mb-6">
                <Link href='#about-me'>
                    <ChevronDown className="animate-bounce text-zinc-800 w-8 h-8" />
                </Link>
            </div>
    </section>
    );
  }
  