import ResearchExperience from "./experience/ResearchExperience";
import TeachingExperience from "./experience/TeachingExperience";
import VolunteeringExperience from "./experience/VolunteeringExperience";
import WorkExperience from "./experience/WorkExperience";


/**
This component represents the experience section of the landing page.
*/
export default function Experience() {
    return (
            <section className='lg:mt-16 flex flex-col gap-y-12'>
                {/* Title */}
                <div className='flex flex-col space-y-4'>
                    <h4 className='col-span-1 md:col-span-2 text-gray-700 text-xl sm:text-2xl text-center md:text-left'>Experience</h4>
                    <h2 className='font-inter text-4xl md:text-5xl lg:text-6xl text-portfolioblack font-bold text-center md:text-left'>
                        Journeys that <span className='text-portfoliopurple'>shape</span> me.
                    </h2>
                </div>

                {/* Work experience */}
                <WorkExperience />

                {/* Research experience */}
                <ResearchExperience />

                {/* Teaching experience */}
                <TeachingExperience />

                {/* Volunteering experience */}
                <VolunteeringExperience />

                {/* TODO: Teaching experience and volunteering experience */}
                
    
            </section>
        );
  }
  