import CursorFollower from "@/components/common/CursorFollower";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <CursorFollower />
      <div className='flex flex-col justify-start items-start custom-margin'>
          <Hero />
      </div>
    </>
      
  );
}
