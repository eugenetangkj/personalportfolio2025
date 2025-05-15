import Link from "next/link";
import { NAVBAR_DESKTOP_LINKS } from "@/constants/navigation";
import { Menu } from "lucide-react";


/**
This component represents the navigation bar shared across pages.
*/
export default function Navbar() {
    return (
        <nav className='bg-white text-lg py-8 flex flex-row justify-between items-center max-w-full custom-margin'>
            {/* Logo */}
            <div>
                <h3 className='font-semibold text-portfolioblack text-xl'>eugenetang<span className='text-portfoliopurple'>kangjie</span></h3>
            </div>


            {/* Desktop menu links */}
            <div className='hidden md:flex justify-center items-center space-x-16 text-gray-700'>
                {
                    NAVBAR_DESKTOP_LINKS.map((navbarDesktopLink, index) => (
                        <Link key={ index } href={ navbarDesktopLink.path } className='hover:text-zinc-500 duration-200'>{ navbarDesktopLink.label }</Link>
                    ))
                }
            </div>

            {/* Hamburger menu icon */}
            
            
        </nav>
    );
  }
  