import CursorFollower from "./components/CursorFollower";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <>
      <CursorFollower />
      <div className='flex flex-col justify-start items-start px-72'>
          <Hero />
      </div>
    </>
      
  );
}
