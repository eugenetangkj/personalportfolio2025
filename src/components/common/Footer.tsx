import Link from "next/link";

/**
This component represents the footer shared across pages
*/
export default function Footer() {
    return (
        <footer className='bg-gradient-to-b from-[#000000] to-[#3A354B] py-16'>
            <div className='custom-margin flex flex-col items-center md:items-start space-y-16 md:space-y-28'>
                {/* Get in touch */}
                 <div className='flex flex-col space-y-8 items-center md:items-start'>
                    <h1 className='text-h1-heading !text-white text-center md:text-start'>Want to Work Together?</h1>
                    <h3 className='text-h3-heading !text-white !font-playfair-display text-center md:text-start'>Let&apos;s get in touch.</h3>
                </div>

                {/* Social Links */}
                <div className='flex flex-col space-y-4 md:space-y-0 md:flex-row items-center justify-between w-full'>
                    <p className='text-small !text-[#DED7EF] text-center md:text-start'>Copyright © 2025 Eugene Tang. All rights reserved.</p>
                    <div className='flex flex-row items-center text-small space-x-8 !text-white'>
                        <Link href="mailto:eugenetangkangjie@gmail.com">Mail</Link>
                        <Link href="https://www.linkedin.com/in/eugenetangkj" target='_blank'>LinkedIn</Link>
                        <Link href="https://github.com/eugenetangkj" target='_blank'>GitHub</Link>
                        <Link href="https://dribbble.com/eugenetangkj" target='_blank'>Dribbble</Link>
                    </div>
                </div>





            </div>
           
            

        </footer>
    );
  }
  