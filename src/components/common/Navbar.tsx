import Link from "next/link";
import { NAVBAR_DESKTOP_LINKS, SOCIAL_MEDIA_LINKS } from "@/constants/NavigationConstants";
import { Menu, ArrowUpRight } from "lucide-react";
import { Sheet, SheetHeader, SheetTitle, SheetTrigger, SheetContent } from "@/components/ui/sheet";

/**
This component represents the navigation bar shared across pages.
*/
export default function Navbar() {
    return (
        <nav className='bg-white text-lg py-8 flex flex-row justify-between items-center max-w-full custom-margin'>
            {/* Logo */}
            <div>
                <h3 className='font-semibold text-portfolioblack text-2xl'>eugenetang<span className='text-portfoliopurple'>kangjie</span></h3>
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
            <div className='block md:hidden'>
                <Sheet>
                <SheetTrigger asChild>
                    <Menu className='text-portfolioblack hover:text-zinc-500 duration-200 cursor-pointer' />
                </SheetTrigger>
                <SheetContent className="w-screen bg-gray-950 text-white p-8">
                    <SheetHeader>
                        <SheetTitle>
                            <p className='font-semibold text-white text-2xl'>eugenetang<span className='text-portfoliopurple'>kangjie</span></p>
                        </SheetTitle>
                    </SheetHeader>

                    <div className="h-px bg-gray-800 w-full" />
                    <div className="flex flex-col justify-start items-start space-y-12 py-8">
                        {
                            NAVBAR_DESKTOP_LINKS.map((navbarDesktopLink, index) => (
                                <Link key={ index } href={ navbarDesktopLink.path } className='hover:text-zinc-500 duration-200 text-4xl font-bold'>{ navbarDesktopLink.label }</Link>
                            ))
                        }
                    </div>
                    <div className="h-px bg-gray-800 w-full" />
                    <p className='font-semibold text-gray-600 text-2xl'>Connect with me.</p>
                    <div className='flex flex-row justify-start items-center gap-4 lg:gap-8 flex-wrap mt-4'>
                        <Link className='uppercase cursor-pointer flex flex-row items-center justify-start space-x-2 text-white hover:text-zinc-400 duration-200'
                            href='mailto:eugenetangkangjie@gmail.com'>
                            <p className='font-medium lg:text-lg'>Email</p>
                            <ArrowUpRight />
                        </Link>

                        {
                            SOCIAL_MEDIA_LINKS.map((socialMediaLink, index) => (
                                <Link key={ index } className='uppercase cursor-pointer flex flex-row items-center justify-start space-x-2 text-white hover:text-zinc-400 duration-200'
                                href={ socialMediaLink.path } target='_blank'>
                                <p className='font-medium lg:text-lg'>{ socialMediaLink.label }</p>
                                <ArrowUpRight />
                            </Link>
                            ))
                        }
                    </div>




                    
                </SheetContent>
                </Sheet>












            </div>

            
        </nav>
    );
  }
  