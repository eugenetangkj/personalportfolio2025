import { SOCIAL_MEDIA_LINKS } from "@/constants/navigation";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";


/**
This component represents the Hero section of the landing page.
*/
export default function Hero() {
    return (
        <section className='mt-16 flex flex-col items-start justify-center space-y-12 lg:space-y-24'>
            
            {/* Title */}
            <div className='flex flex-col space-y-8'>
                <h1 className='font-inter text-5xl sm:text-6xl text-center md:text-left md:text-7xl lg:text-8xl text-portfolioblack font-extrabold leading-14 md:leading-20 lg:leading-24 xl:leading-24'>
                    I design and develop solutions that make a <span className='text-portfoliopurple'>real impact</span>
                </h1>
                <div className='grid grid-cols-1 md:grid-cols-3 grid-rows-1 items-center gap-x-8'>
                    <div className="hidden md:block col-span-1 h-px bg-gray-300 w-full" />
                    <h2 className='col-span-1 md:col-span-2 text-gray-700 text-xl sm:text-2xl text-center md:text-left'>Hello, I&apos;m Eugene Tang, a software engineer based in Singapore. I build human-centered experiences that tackle meaningful challenges.</h2>

                </div>
            </div>


            {/* Contact Links */}

            <div className='flex flex-col items-center space-y-8 md:space-y-0 md:flex-row md:justify-between md:items-center w-full'>
                {/* Social Media Links */}
                <div className='flex flex-row justify-center md:justify-start items-center gap-4 lg:gap-8 flex-wrap'>
                    <Link className='uppercase cursor-pointer flex flex-row items-center justify-start space-x-2 text-portfolioblack hover:text-zinc-400 duration-200'
                        href='mailto:eugenetangkangjie@gmail.com'>
                        <p className='font-medium lg:text-lg'>Email</p>
                        <ArrowUpRight />
                    </Link>

                    {
                        SOCIAL_MEDIA_LINKS.map((socialMediaLink, index) => (
                            <Link key={ index } className='uppercase cursor-pointer flex flex-row items-center justify-start space-x-2 text-portfolioblack hover:text-zinc-400 duration-200'
                            href={ socialMediaLink.path } target='_blank'>
                            <p className='font-medium lg:text-lg'>{ socialMediaLink.label }</p>
                            <ArrowUpRight />
                        </Link>
                        ))
                    }
                </div>
                
                {/* Connect */}
                <button className='bg-portfolioblack hover:bg-zinc-500 text-white cursor-pointer rounded-full text-xl lg:text-2xl px-6 lg:px-10 py-6 flex flex-row justify-center items-center space-x-4 duration-200 w-full md:w-fit'>
                    <p className='font-medium'>Let&apos;s Connect</p>
                    <ArrowRight className='text-white h-6 w-6' />
                </button>
            </div>
            
                
        </section>
    );
  }
  