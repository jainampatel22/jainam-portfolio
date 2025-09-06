'use client'

import React,{useEffect, useState} from 'react'
import axios from 'axios'
import { Button } from '@/components/ui/button'
const ProfileCard = () => {
    const [appName, setAppName] = useState('')
    const [AppIconUrl, setAppIconUrl] = useState('')
     const [startTime, setStartTime] = useState(null);
    const [elapsedSeconds, setElapsedSeconds] = useState<string>("00:00:00");
        useEffect(()=>{
        const getAPPInfo=async()=>{
            const res = await axios.get('https://ackground-app-tracker.onrender.com/track')
            console.log(res.data)
            setAppName(res.data.activeApp)
            setAppIconUrl(res.data.icon)
            setStartTime(res.data.startTime || Date.now());
        }  
        getAPPInfo()
       
        },[])

  useEffect(() => {
    function formatHHMMSS(ms: number) {
      const totalSeconds = Math.floor(ms / 1000);
      const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, "0");
      const minutes = String(
        Math.floor((totalSeconds % 3600) / 60)
      ).padStart(2, "0");
      const seconds = String(totalSeconds % 60).padStart(2, "0");
      return `${hours}:${minutes}:${seconds}`;
    }

    const interval = setInterval(() => {
     if(startTime){
         const formattedTime = formatHHMMSS(Date.now() - startTime);
      setElapsedSeconds(formattedTime);
     }
    }, 1000);

    return () => clearInterval(interval);
  }, [startTime]);
   
    return (
<div className='h-auto min-h-44 sm:min-h-48 lg:h-64 border-1 border-white/15 w-full rounded-xl'>
            <div className='text-sm font-[font2] text-[#656565] px-2 py-2 sm:px-4 sm:py-2.5 lg:px-5 lg:py-3'>
                <div className='mt-1 sm:mt-2 flex flex-col sm:flex-row justify-between items-start gap-2 sm:gap-0'>
                <h1 className='text-sm sm:text-base'>hi there 😊, I&apos;m</h1>
     
   <div className={`${
  appName 
    ? 'flex flex-col border-white/25 border bg-white/5 backdrop-blur-sm' 
    : 'flex justify-center items-center'
} py-1 sm:py-1.5 lg:py-0.5 px-2 sm:px-2 lg:px-3 rounded-lg sm:rounded-xl lg:rounded-2xl transition-all duration-200 ${
  appName 
    ? 'ml-28 sm:ml-36 -mt-2' 
    : 'absolute top-7 right-7  sm:top-10 sm:ight-10 m-2 sm:m-3 lg:m-4'
} w-auto max-w-xs sm:max-w-sm lg:max-w-md`}>
  
  {/* First line: Working on + app info */}
  <div className={`flex ${
    appName 
      ? 'justify-between items-center gap-1.5' 
      : 'justify-center items-center'
  }`}>
    {appName && (
      <div className='text-white/40 whitespace-nowrap font-medium text-xs sm:text-sm lg:text-base'>
        Working on
      </div>
    )}
    
    <div className='flex gap-1 sm:gap-1.5 lg:gap-2 items-center'>
      <div className={
        appName
          ? `w-4 h-4 sm:w-5 sm:h-5 lg:w-7 lg:h-7 rounded-sm sm:rounded-md lg:rounded-lg overflow-hidden flex-shrink-0 bg-white/10 flex items-center justify-center`
          : `w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 lg:w-5 lg:h-5 rounded-full bg-gray-500/60 flex-shrink-0`
      }>
        {appName ? (
          <img
            src={`data:image/jpeg;base64,${AppIconUrl}`}
            className='w-full h-full object-cover rounded-sm sm:rounded-md lg:rounded-lg'
            alt={`${appName} icon`}
          />
        ) : null}
      </div>
      
      <span className={`font-medium whitespace-nowrap transition-all duration-200 ${
        appName 
          ? 'text-white/40 truncate max-w-12 sm:max-w-16 lg:max-w-24 text-xs sm:text-sm lg:text-base' 
          : 'text-gray-400 text-xs sm:text-sm md:text-base lg:text-lg'
      }`}>
        {appName ? appName.split(" ")[0] : 'Offline'}
      </span>
    </div>
  </div>

  {/* Second line: Timer */}
  {appName && (
    <div className="text-white/50 text-xs sm:text-sm lg:text-base text-center mt-0.5">
      {elapsedSeconds}
    </div>
  )}
</div>



       
              
        



<div>
    
</div>
                </div>
              
            </div>
            <div className='flex justify-start gap-2 sm:gap-3 items-start px-3 sm:px-4'>
                <div className='bg-[#262626] w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 rounded-full flex-shrink-0'>
                    <div className='flex font-bold cursor-pointer justify-center items-center h-full text-sm sm:text-base lg:text-lg font-[font1]'>
                        JP
                    </div>
                </div>
                <h1 className='pt-1.5 sm:pt-2 lg:pt-4 font-[font2] text-xl sm:text-2xl lg:text-3xl font-semibold text-white'>Jainam Patel</h1>
            </div>
            <div className='flex flex-wrap gap-1.5 sm:gap-2 lg:gap-3 px-3 sm:px-4 lg:px-5 text-xs sm:text-sm font-[font2] text-white/70 pt-2 sm:pt-3'>
                <div>
                    20, he/him
                </div>
                <div className='hidden sm:block'>
                    || 
                </div>
                <div className='font-[font2]'>
                    Full Stack Developer from India.
                </div>
            </div>
            
            <div className='mt-2 sm:mt-3  sm:-mb-5 flex flex-wrap px-3 sm:px-4 lg:px-5 items-start gap-2 sm:gap-3 lg:gap-5 text-xs sm:text-sm font-[font1] pt-2 sm:pt-3 lg:pt-2 pb-3 sm:pb-4'>
                <Button className='bg-white text-[#171717] font-semibold hover:bg-white cursor-pointer px-2.5 py-1.5 sm:px-3 sm:py-2 lg:px-4 lg:py-3 rounded-lg sm:rounded-xl text-xs sm:text-sm'>
                    Resume
                </Button>
                <div className='py-1.5 sm:py-2'>
                    <a href="mailto:pateljainams122@gmail.com" aria-label="Send email" data-slot="button" className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:text-accent-foreground gap-1.5 py-3 px-3 h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 rounded-sm border border-white/25 p-0 text-white hover:bg-neutral-50 dark:border-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-900">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-mail h-2.5 w-2.5 sm:h-3 sm:w-3 lg:h-4 lg:w-4">
                            <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                        </svg>
                    </a>
                </div>
                <div className='py-1.5 sm:py-2'>
                    <a href="https://x.com/Jainam___patel/" target="_blank" rel="noreferrer" aria-label="Open Twitter" data-slot="button" className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:text-accent-foreground gap-1.5  py-3 px-3 h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 rounded-sm border border-white/25 p-0 text-white hover:bg-neutral-50 dark:border-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-900">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-twitter h-2.5 w-2.5 sm:h-3 sm:w-3 lg:h-4 lg:w-4">
                            <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                        </svg>
                    </a>
                </div>
                <div className='py-1.5 sm:py-2'>
                    <a href="https://github.com/jainampatel22" target="_blank" rel="noreferrer" aria-label="Open GitHub" data-slot="button" className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:text-accent-foreground gap-1.5  py-3 px-3 h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 rounded-sm border border-white/25 p-0 text-white hover:bg-neutral-50 dark:border-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-900">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-github h-2.5 w-2.5 sm:h-3 sm:w-3 lg:h-4 lg:w-4">
                            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                            <path d="M9 18c-4.51 2-5-2-7-2"></path>
                        </svg>
                    </a>
                </div>
                <div className='py-1.5 sm:py-2'>
                    <a
                        href="https://www.linkedin.com/in/pateljainam/"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Open LinkedIn"
                        data-slot="button"
                        className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:text-accent-foreground gap-1.5  py-3 px-3 h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 rounded-sm border border-white/25 p-0 text-white hover:bg-neutral-50 dark:border-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-900"
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
                            className="lucide lucide-linkedin h-2.5 w-2.5 sm:h-3 sm:w-3 lg:h-4 lg:w-4"
                        >
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                            <rect width="4" height="12" x="2" y="9"></rect>
                            <circle cx="4" cy="4" r="2"></circle>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ProfileCard