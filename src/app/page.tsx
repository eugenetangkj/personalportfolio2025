import AboutMe from "@/components/AboutMe";
import CursorFollower from "@/components/common/CursorFollower";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <CursorFollower />
      <div className='flex flex-col space-y-24 justify-start items-start custom-margin'>
          <Hero />
          <AboutMe />
          <Hero />
      </div>
    </>
      
  );
}
