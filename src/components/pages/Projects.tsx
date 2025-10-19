import Link from "next/link";
import { Link as LinkIcon } from "lucide-react";
import { ProjectsList } from "@/constants/ProjectConstants";
import Image from "next/image";


/**
This component represents the projects section of the landing page.
*/
export default function Projects() {
    return (
        <section className='flex flex-col gap-y-8 self-start scroll-mt-24' id='projects'>
            <h2 className='text-h2-heading text-center'>Projects</h2>

            {/* Featured projects */}
            <div className='flex flex-col space-y-24 items-center'>
                {
                    ProjectsList.map((project, index) => (  
                        
                            <div className='flex flex-col gap-y-8 items-center w-full lg:w-4/5' key={index}>
                                {/* Image */}
                                <Image src={ project.image } className='rounded-lg md:rounded-xl w-full' alt={ project.title } width={ 1920 } height={ 1080 } />


                                {/* Content */}
                                <div className='text-subparagraph flex flex-col space-y-4'>
                                    <div className='flex flex-col space-y-2'>
                                        {/* Title */}
                                        <h5 className='text-xl md:text-2xl'>{ project.title }</h5>
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
                                                <div className='rounded-full bg-blue-100 text-extra-small px-4 py-0.5 !text-zinc-700' key={ index }>{ technology }</div>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>

                      
                    ))
                }
            </div>

            {/* View all projects button */}
            <button className="button-light w-fit self-center mt-12">
                    <Link href="/projects">View All Projects</Link>
            </button>
        </section>
    );
  }
  