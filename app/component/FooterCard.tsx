import React from 'react'

const FooterCard = () => {
  return (
    <div className='max-h-xl border-1 border-white/15 w-full rounded-xl'>
      <div>
        <h1 className="text-center font-semibold font-[font2] text-xl sm:text-2xl lg:text-3xl pt-6 sm:pt-7 lg:pt-8 px-4">
          Let&apos;s work together..
        </h1>
      </div> 
      
      <div className='px-4 sm:px-6 lg:px-8 text-center text-[#D4D4D4] font-[font2] text-xs sm:text-sm pt-2'>
        I&apos;m always interested in new opportunities and exciting projects. Whether you have a project in mind or just want to chat about tech, I&apos;d love to hear from you.
      </div>
      
      <div className='px-4 sm:px-20 lg:px-40 py-6 sm:py-8 lg:py-10'>
        <a href="mailto:pateljainams122@gmail.com" aria-label="Get in touch via email" data-slot="button" className="inline-flex items-center justify-center whitespace-nowrap text-xs sm:text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive gap-1.5 has-[>svg]:px-2.5 h-8 sm:h-9 rounded-md bg-white px-3 sm:px-4 text-black shadow-sm dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-200 w-full">
          <span className="inline-flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-mail h-3 w-3 sm:h-4 sm:w-4">
              <rect width="20" height="16" x="2" y="4" rx="2"></rect>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
            </svg>
            <span>Get in touch</span>
          </span>
        </a>
      </div>
      
      <div className='flex gap-3 sm:gap-4 lg:gap-5 justify-center items-center -mt-3 sm:-mt-4 lg:-mt-5'>
        <div>
          <a href="https://x.com/Jainam___patel/" target="_blank" rel="noreferrer" aria-label="Open Twitter" data-slot="button" className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:text-accent-foreground gap-1.5 has-[>svg]:px-2.5 h-8 w-8 sm:h-9 sm:w-9 rounded-sm border border-white/25 p-0 text-white hover:bg-neutral-50 dark:border-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-900">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-twitter h-3 w-3 sm:h-4 sm:w-4">
              <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
            </svg>
          </a>
        </div>
        
        <div>
          <a href="https://github.com/jainampatel22" target="_blank" rel="noreferrer" aria-label="Open GitHub" data-slot="button" className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:text-accent-foreground gap-1.5 has-[>svg]:px-2.5 h-8 w-8 sm:h-9 sm:w-9 rounded-sm border border-white/25 p-0 text-white hover:bg-neutral-50 dark:border-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-900">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-github h-3 w-3 sm:h-4 sm:w-4">
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
              <path d="M9 18c-4.51 2-5-2-7-2"></path>
            </svg>
          </a>
        </div>
        
        <div>
          <a
            href="https://www.linkedin.com/in/pateljainam/"
            target="_blank"
            rel="noreferrer"
            aria-label="Open LinkedIn"
            data-slot="button"
            className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:text-accent-foreground gap-1.5 has-[>svg]:px-2.5 h-8 w-8 sm:h-9 sm:w-9 rounded-sm border border-white/25 p-0 text-white hover:bg-neutral-50 dark:border-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-900"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-linkedin h-3 w-3 sm:h-4 sm:w-4"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect width="4" height="12" x="2" y="9"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </a>
        </div>
      </div>
      
      <div className='py-4 mt-3 sm:py-9 lg:py-10 -mb-2 sm:-mb-6 px-4 sm:px-8 lg:px-12 flex flex-col  gap-2 sm:gap-4 justify-center items-center -mt-3 sm:-mt-4 lg:-mt-5 '>
        <div className='text-center text-[#D4D4D4] font-extralight font-[font2] text-xs sm:text-[14px]'>
          Currently available for freelance work and full‑time opportunities
        </div>
        <div className='text-center text-[#D4D4D4] font-extralight font-[font2] text-xs sm:text-[14px]'>
          Response time: Usually within 24 hours
        </div>
      </div>
    </div>
  )
}

export default FooterCard