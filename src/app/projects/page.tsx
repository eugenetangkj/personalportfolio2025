import { FullProjectsList } from "@/constants/ProjectConstants";
import Image from "next/image";
import Link from "next/link";
import { LinkIcon, ArrowLeft } from "lucide-react";

// Page for all projects page
export default function ProjectsPage() {
  return (
    <div className='flex flex-col space-y-24 justify-center items-center custom-margin'>
        <section className='flex flex-col gap-y-8 self-start mt-28 sm:mt-36'>

       
                <Link href='/' className='flex flex-row items-center space-x-4'>
                    <ArrowLeft className='text-zinc-500' />
                    <h6 className='text-small'>Go Back</h6>
                </Link>

    
            <h2 className='text-h2-heading'>All Projects</h2>

          
            {/* Additional projects */}
            <div className=''>
                {
                    FullProjectsList.map((project, index) => (
                        <div className='flex flex-col space-y-4' key={ index }>
                            <div className='flex flex-col-reverse gap-y-8 md:flex-row items-center md:space-x-12'>
                                {/* Image */}
                                <Image src={ project.image } className='rounded-lg md:rounded-xl w-2/3 md:w-1/3' alt={ project.title } width={ 700 } height={ 350 } />

                                {/* Content */}
                                <div className='text-subparagraph flex flex-col space-y-4'>
                                    <div className='flex flex-col space-y-2'>
                                        {/* Date and title */}
                                        <h6 className='text-small'>{ project.date }</h6>
                                        <h3 className='text-h3-heading !text-zinc-500'>{ project.title }</h3>
                                    </div>

                                    {/* Description */}
                                    <p className='text-subparagraph'>{ project.description }</p>


                                    {/* Resources */}
                                    <div className='flex flex-row gap-4 items-center flex-wrap'>
                                        {
                                            project.resources.map((resource, index) => (
                                                <Link href={ resource.link } key={ index } target='_blank' className='flex flex-row items-center gap-x-2 text-small hover:text-zinc-400 duration-200'>
                                                    <LinkIcon className='w-4 h-4 shrink-0' />{ resource.label }
                                                </Link>
                                            ))
                                        }
                                    </div>

                                    {/* Tech Stack */}
                                    <div className='flex flex-row gap-2 items-center flex-wrap'>
                                        {
                                            project.technologies.map((technology, index) => (
                                                <div className='rounded-full bg-portfolio-darkblue text-small px-4 py-0.5 !text-white' key={ index }>{ technology }</div>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>

                            {/* Horizontal line */}
                            { index !== FullProjectsList.length - 1 &&
                                <div className="block col-span-1 h-px bg-gray-300 w-full my-4" />
                            }
                        </div>
                    ))
                }
            </div>
           
        </section>
      
        
    </div>
      
  );
}
