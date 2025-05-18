import Image from "next/image";
import Link from "next/link";
import { LinkIcon } from "lucide-react";

/**
This component represents the Projects section of the landing page.
*/
export default function Projects() {
    return (
        <section className='lg:mt-16 flex flex-col space-y-8'>
          
            {/* Title and text */}
            <div className='flex flex-col space-y-4'>
                <h4 className='col-span-1 md:col-span-2 text-gray-700 text-xl sm:text-2xl text-center md:text-left'>My Projects</h4>
                <h2 className='font-inter text-4xl md:text-5xl lg:text-6xl text-portfolioblack font-bold text-center md:text-left'>
                    Where ideas come to <span className='text-portfoliopurple'>life.</span>
                </h2>
            </div>


            {/* Projects */}
            <div className='grid grid-cols-3 gap-8'>
                <div className='border-1 shadow-lg flex flex-col rounded-xl col-span-1 space-y-4'>
                    <Image src='/images/projects/shooting-portals.png' alt='Shooting Portals' className='w-full rounded-t-xl' height={100} width={400} />
                    <h6 className='text-portfolioblack font-semibold text-3xl px-4'>Shooting Portals</h6>
                    <p className='text-base text-gray-700 px-4'>Shooting Portals is a PC 2D puzzle-based platformer. The game revolves around Pulse, an inventor residing in the Portal Galaxy. His dog, Orbit, accidentally entered into an unknown galaxy. Hence, it is up to you to rescue Orbit.</p>
                
                


                      <div className='flex flex-row gap-4 items-center flex-wrap px-4'>
                                    
                                <Link href='' className='flex flex-row items-center gap-x-2 text-portfolioblack hover:text-zinc-400 duration-200'>
                                    <LinkIcon className='w-4 h-4 shrink-0' />Link 1
                                </Link>
                                   
                              
                        </div>
                    <div className='flex flex-row gap-2 items-center flex-wrap px-4'>
                       
                        <div className='rounded-full bg-purple-100 text-portfoliopurple px-4 py-0.5 font-semibold'>Unity</div>
                        <div className='rounded-full bg-purple-100 text-portfoliopurple px-4 py-0.5 font-semibold'>Microsoft Playfab</div>
                    </div>
                
                
                </div>



                <div className='border-1 shadow-lg flex flex-col rounded-xl col-span-1 space-y-4'>
                    <Image src='/images/projects/shooting-portals.png' alt='Shooting Portals' className='w-full rounded-t-xl' height={100} width={400} />
                    <h6 className='text-portfolioblack font-semibold text-3xl px-4'>Shooting Portals</h6>
                    <p className='text-base text-gray-700 px-4'>Shooting Portals is a PC 2D puzzle-based platformer. The game revolves around Pulse, an inventor residing in the Portal Galaxy. His dog, Orbit, accidentally entered into an unknown galaxy. Hence, it is up to you to rescue Orbit.</p>
                
                


                      <div className='flex flex-row gap-4 items-center flex-wrap px-4'>
                                    
                                <Link href='' className='flex flex-row items-center gap-x-2 text-portfolioblack hover:text-zinc-400 duration-200'>
                                    <LinkIcon className='w-4 h-4 shrink-0' />Link 1
                                </Link>
                                   
                              
                        </div>
                    <div className='flex flex-row gap-2 items-center flex-wrap px-4'>
                       
                        <div className='rounded-full bg-purple-100 text-portfoliopurple px-4 py-0.5 font-semibold'>Unity</div>
                        <div className='rounded-full bg-purple-100 text-portfoliopurple px-4 py-0.5 font-semibold'>Microsoft Playfab</div>
                    </div>
                
                
                </div>


<div className='border-1 shadow-lg flex flex-col rounded-xl col-span-1 space-y-4'>
                    <Image src='/images/projects/shooting-portals.png' alt='Shooting Portals' className='w-full rounded-t-xl' height={100} width={400} />
                    <h6 className='text-portfolioblack font-semibold text-3xl px-4'>Shooting Portals</h6>
                    <p className='text-base text-gray-700 px-4'>Shooting Portals is a PC 2D puzzle-based platformer. The game revolves around Pulse, an inventor residing in the Portal Galaxy. His dog, Orbit, accidentally entered into an unknown galaxy. Hence, it is up to you to rescue Orbit.</p>
                
                


                      <div className='flex flex-row gap-4 items-center flex-wrap px-4'>
                                    
                                <Link href='' className='flex flex-row items-center gap-x-2 text-portfolioblack hover:text-zinc-400 duration-200'>
                                    <LinkIcon className='w-4 h-4 shrink-0' />Link 1
                                </Link>
                                   
                              
                        </div>
                    <div className='flex flex-row gap-2 items-center flex-wrap px-4'>
                       
                        <div className='rounded-full bg-purple-100 text-portfoliopurple px-4 py-0.5 font-semibold'>Unity</div>
                        <div className='rounded-full bg-purple-100 text-portfoliopurple px-4 py-0.5 font-semibold'>Microsoft Playfab</div>
                    </div>
                
                
                </div>



                
            </div>
               

              
        </section>
    );
  }
  