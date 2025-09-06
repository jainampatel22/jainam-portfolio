import React from 'react'

const WorkCard = () => {
  return (
    <div  className='max-h-xl border-1 border-white/15 w-full rounded-xl'>
      <div>
        <h1 className='px-3 sm:px-4 lg:px-5 font-semibold font-[font2] text-sm sm:text-md pt-3 sm:pt-4'>Work Experience.</h1>
      </div>
      
      <div className='px-3 sm:px-4 -mt-2 pb-4 sm:pb-6'>
        <div className='h-auto min-h-44 lg:h-44 border-1 mt-5 sm:mt-6 lg:mt-7 border-white/15 w-full rounded-xl'>
          
          {/* Header section with company info and date */}
          <div className='flex flex-col sm:flex-row gap-2 sm:gap-4 items-start py-3 sm:py-4 px-3 sm:px-4'>
            <div className='flex gap-3 sm:gap-4 items-center'>
              <div className='bg-[#0A0A0A] w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-white/15 flex-shrink-0'></div>
              <div className='text-sm sm:text-[16px] font-[font2] -mt-1 font-semibold capitalize'>Freelancing</div>
            </div>
            
            <div className='text-xs sm:text-sm  mb-2  sm:mb-0 sm:mt-0 font-[font2] px-2 sm:px-3 ml-0 sm:ml-14 py-1 bg-[#171717] border border-white/15 rounded-full self-start'>
              March 2025 – May 2025
            </div>
          </div>
          
          {/* Content section */}
          <div className='px-3 sm:px-6 md:px-12 lg:px-18 -mt-4 sm:-mt-6 pb-3 sm:pb-4'>
            <div className='text-xs sm:text-sm font-[font2] text-[#D4D4D4] sm:-ml-1 mb-2 sm:mb-0 pt-1'>Founding Engineer</div>
            <div className='text-[#D4D4D4] text-xs sm:text-[14px] font-extralight font-[font2] pt-1 sm:pt-2 leading-relaxed'>
              Worked as a Founding Engineer for a US based client, responsible for developing the frontend from scratch and delivering a user-friendly, production-ready platform.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WorkCard