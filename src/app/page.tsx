import AboutMe from "@/components/AboutMe";
import CursorFollower from "@/components/common/CursorFollower";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <>
      <CursorFollower />
      <div className='flex flex-col space-y-24 justify-start items-start custom-margin'>
          <Hero />
          <AboutMe />
          <Experience />
          <Projects />
      </div>
    </>
      
  );
}
