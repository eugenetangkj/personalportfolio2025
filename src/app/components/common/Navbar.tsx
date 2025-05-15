import Link from "next/link";


/**
This component represents the navigation bar shared across pages.
*/
export default function Navbar() {
    return (
        <nav className='fixed w-full top-0 start-0 z-20 bg-white text-lg py-8 px-72 flex flex-row justify-between items-center max-w-full'>
            <div>
                <h3 className='font-semibold text-portfolioblack text-xl'>eugenetang<span className='text-portfoliopurple'>kangjie</span></h3>
            </div>

            <div className='hidden md:flex justify-center items-center space-x-8 text-gray-700'>
                <Link href='#'>About Me</Link>
                <Link href='#'>About Me</Link>
                <Link href='#'>About Me</Link>
                <Link href='#'>About Me</Link>
            </div>
        </nav>
    );
  }
  