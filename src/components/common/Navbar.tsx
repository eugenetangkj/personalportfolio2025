"use client"

import Link from "next/link";
import { NAVBAR_DESKTOP_LINKS } from "@/constants/NavigationConstants";
import { Menu } from "lucide-react";
import { Sheet, SheetHeader, SheetTitle, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { House } from "lucide-react";
import { useState } from "react";

/**
This component represents the navigation bar shared across pages.
*/
export default function Navbar() {
    const [open, setOpen] = useState(false)

    return (
        <nav className="fixed md:top-4 left-1/2 transform -translate-x-1/2 z-50 bg-white/90 md:bg-white/90 text-lg py-8 md:py-4 px-8 sm:px-16 md:px-6 flex flex-row justify-between items-center md:rounded-xl md:border-1 w-full md:w-fit">

            {/* Home */}
            <Link href='/'>
                <House className='text-gray-500 w-6 h-6 md:w-5 md:h-5 hover:text-gray-400 cursor-pointer duration-200' />
            </Link>
            

            {/* Vertical bar */}
            <div className="hidden md:block col-span-1 w-px bg-gray-300 h-[20px] mx-4" />



            {/* Menu links */}
            <div className='hidden md:flex justify-center items-center space-x-8 lg:space-x-12 xl:space-x-16'>
                {
                    NAVBAR_DESKTOP_LINKS.map((navbarDesktopLink, index) => (
                        <Link key={ index } href={ navbarDesktopLink.path } className='text-small hover:text-zinc-400 duration-200 whitespace-nowrap shrink-0'>{ navbarDesktopLink.label }</Link>
                    ))
                }
            </div>

            {/* Hamburger menu icon */}
            <div className='block md:hidden'>
                <Sheet open={open} onOpenChange={setOpen}>
                <SheetTrigger asChild>
                    <Menu className='text-gray-500 w-6 h-6 hover:text-gray-400 cursor-pointer duration-200' />
                </SheetTrigger>
                <SheetContent className="w-screen bg-white text-white p-8">
                    <SheetHeader>
                        <SheetTitle>
                        </SheetTitle>
                    </SheetHeader>

                    <div className="flex flex-col justify-start items-center space-y-16 py-8 text-paragraph mt-16">
                        {
                            NAVBAR_DESKTOP_LINKS.map((navbarDesktopLink, index) => (
                                <Link key={ index } href={ navbarDesktopLink.path }
                                    className='text-h5-heading hover:text-zinc-400 duration-200'
                                    onClick={() => setOpen(false)}
                                >{ navbarDesktopLink.label }</Link>
                            ))
                        }
                    </div>
                </SheetContent>
                </Sheet>
            </div>

            
        </nav>
    );
  }
  