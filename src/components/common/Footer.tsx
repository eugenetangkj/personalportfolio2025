import Link from "next/link";

/**
This component represents the footer shared across pages
*/
export default function Footer() {
    return (
        <footer className='py-16'>
            <div className='custom-margin flex flex-col items-start space-y-16'>
                {/* Get in touch */}
                 <div className='flex flex-col space-y-4 md:space-y-8 items-start'>
                    <h1 className='text-h2-heading text-start font-semibold'>Thanks for stopping by! •ᴗ•</h1>
                    <h3 className='text-paragraph text-start font-semibold'>Want to work together? Let&apos;s get in touch.</h3>
                </div>

                {/* Social Links */}
                <div className='flex flex-col space-y-4 lg:space-y-0 lg:flex-row items-start lg:items-center justify-between w-full'>
                    <p className='text-small text-start'>Copyright © 2025 Eugene Tang. All rights reserved.</p>
                    <div className='flex flex-row items-center text-small space-x-8 underline'>
                        <Link href="mailto:eugenetangkangjie@gmail.com">Mail</Link>
                        <Link href="https://www.linkedin.com/in/eugenetangkj" target='_blank'>LinkedIn</Link>
                        <Link href="https://github.com/eugenetangkj" target='_blank'>GitHub</Link>
                        <Link href="https://scholar.google.com/citations?view_op=list_works&hl=en&hl=en&user=xbZ1RmAAAAAJ" target='_blank'>Google Scholar</Link>
                        <Link href="https://dribbble.com/eugenetangkj" target='_blank'>Dribbble</Link>
                    </div>
                </div>





            </div>
           
            

        </footer>
    );
  }
  