import { ArrowRight } from "lucide-react";

/**
This component represents the Hero section of the landing page.
*/
export default function Hero() {
    return (
      <div className='h-screen flex flex-col items-start justify-center space-y-16'>
            <div>
                <h2 className='font-inter text-2xl text-portfolioblack font-medium'>Hello, I&apos;m Eugene Tang!</h2>
                <h1 className='font-inter text-8xl text-portfolioblack font-extrabold leading-28'>Designing digital products with emphasis on <span className='text-portfoliopurple'>visual</span> design</h1>
            </div>
          
            <button className='bg-portfolioblack text-white cursor-pointer rounded-full text-2xl px-10 py-6 flex flex-row items-center space-x-4'>
                <p className='font-medium'>Let&apos;s Connect</p>
                <ArrowRight className='text-white h-6 w-6' />
            </button>
      
      </div>
        
    );
  }
  