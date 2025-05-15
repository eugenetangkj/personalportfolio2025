import { ArrowRight, ArrowUpRight } from "lucide-react";


/**
This component represents the Hero section of the landing page.
*/
export default function Hero() {
    return (
        <section className='h-screen flex flex-col items-start justify-center space-y-16'>
                <div className='flex flex-col space-y-4'>
                    <h1 className='font-inter text-8xl text-portfolioblack font-extrabold leading-28'>
                        I use design and tech to craft solutions that make a <span className='text-portfoliopurple'>real impact</span>
                    </h1>
                    <div className='grid grid-cols-3 grid-rows-1 items-center gap-x-8'>
                        <div className="col-span-1 h-px bg-gray-300 w-full" />
                        <h2 className='col-span-2 text-gray-700 text-2xl'>Hello, I&apos;m Eugene Tang, a software engineer based in Singapore. I build human-centered experiences that tackle meaningful challenges.</h2>

                    </div>
                </div>

                <div className='flex flex-row justify-between items-center w-full'>
                    <div className='flex flex-row justify-start items-center space-x-8'>
                        <a className='uppercase cursor-pointer flex flex-row items-center justify-start space-x-2 text-portfolioblack hover:text-zinc-400 duration-200'
                            href='mailto:eugenetangkangjie@gmail.com'>
                            <p className='font-medium text-lg'>Email</p>
                            <ArrowUpRight />
                        </a>

                        <a className='uppercase cursor-pointer flex flex-row items-center justify-start space-x-2 text-portfolioblack hover:text-zinc-400 duration-200'
                            href='https://www.linkedin.com/in/eugenetangkj/' target='_blank'>
                            <p className='font-medium text-lg'>LinkedIn</p>
                            <ArrowUpRight />
                        </a>

                        <a className='uppercase cursor-pointer flex flex-row items-center justify-start space-x-2 text-portfolioblack hover:text-zinc-400 duration-200'
                            href='https://github.com/eugenetangkj' target='_blank'>
                            <p className='font-medium text-lg'>GitHub</p>
                            <ArrowUpRight />
                        </a>

                        <a className='uppercase cursor-pointer flex flex-row items-center justify-start space-x-2 text-portfolioblack hover:text-zinc-400 duration-200'
                            href='https://dribbble.com/eugenetangkj' target='_blank'>
                            <p className='font-medium text-lg'>Dribbble</p>
                            <ArrowUpRight />
                        </a>
              
                    </div>
                    <button className='bg-portfolioblack hover:bg-zinc-500 text-white cursor-pointer rounded-full text-2xl px-10 py-6 flex flex-row items-center space-x-4 duration-200'>
                        <p className='font-medium'>Let&apos;s Connect</p>
                        <ArrowRight className='text-white h-6 w-6' />
                    </button>
                </div>
            
                
        </section>
    );
  }
  