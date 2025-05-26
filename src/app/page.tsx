import AboutMe from "@/components/pages/AboutMe";
import Hero from "@/components/pages/Hero";
import Projects from "@/components/pages/Projects";
import WorkExperience from "@/components/pages/WorkExperience";
import ResearchExperience from "@/components/pages/ResearchExperience";
import TeachingExperience from "@/components/pages/TeachingExperience";
import Volunteering from "@/components/pages/Volunteering";
import Awards from "@/components/pages/Awards";

export default function Home() {
  return (
    <div className='flex flex-col space-y-24 justify-center items-center custom-margin mb-24'>
        <Hero />
        <AboutMe />
        <WorkExperience />
        <ResearchExperience />
        <TeachingExperience />
        <Projects />
        <Volunteering />
        <Awards />
    </div>
  );
}
