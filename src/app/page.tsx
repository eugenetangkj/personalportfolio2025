import AboutMe from "@/components/pages/AboutMe";
import CursorFollower from "@/components/common/CursorFollower";
import Experience from "@/components/Experience";
import Hero from "@/components/pages/Hero";
import Projects from "@/components/Projects";
import WorkExperience from "@/components/pages/WorkExperience";

export default function Home() {
  return (
    <div className='flex flex-col space-y-24 justify-center items-center custom-margin'>
        <Hero />
        <AboutMe />
        <WorkExperience />
        {/* <AboutMe />
        <Experience />
        <Projects /> */}
    </div>
      
  );
}
