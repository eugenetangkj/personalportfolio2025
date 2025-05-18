import AboutMe from "@/components/AboutMe";
import CursorFollower from "@/components/common/CursorFollower";
import Experience from "@/components/Experience";
import Hero from "@/components/pages/Hero";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <div className='flex flex-col space-y-24 justify-start items-center custom-margin'>
        <Hero />
        {/* <AboutMe />
        <Experience />
        <Projects /> */}
    </div>
      
  );
}
