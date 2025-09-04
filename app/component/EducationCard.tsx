import React from 'react'

const EducationCard = () => {
  return (
    <div className='max-h-xl border-1  border-white/15 w-full rounded-xl'>
                 <div>
                    <h1 className='px-5 font-semibold font-[font2] text-md pt-4 '>Education.</h1>
                </div>
                <div className='px-4 -mt-2 pb-6'>
             <div className='h-24 border-1 mt-7 border-white/15 w-full rounded-xl'>
          <div className='flex  gap-32 items-start py-5 px-7'>
                    
                    <div className='text-[16px] font-[font2]  font-semibold capitalize whitespace-nowrap'>LJ university</div>
                      <div className='text-sm  font-[font2] px-3 ml-14 py-1 whitespace-nowrap bg-[#171717] border border-white/15 rounded-full '>2023-2027</div>
   
          </div>
          <div className='px-7 -mt-6'>
                <div className='text-sm font-[font2] text-[#D4D4D4] pt-1 '>B.Tech in CSE</div>
                   </div>
         
          </div>
           <div className='h-24 border-1 mt-5 border-white/15 w-full rounded-xl'>
          <div className='flex  gap-32 items-start py-5 px-7'>
                    
                    <div className='text-[16px] font-[font2]  font-semibold capitalize whitespace-nowrap'>DIVINE LIFE SCHOOL</div>
                      <div className='text-sm  font-[font2] px-3   py-1 whitespace-nowrap bg-[#171717] border border-white/15 rounded-full '>2021-2023</div>
   
          </div>
          <div className='px-7 -mt-6'>
                <div className='text-sm font-[font2] text-[#D4D4D4] pt-1 '>Class XII (GSEB)</div>
                   </div>
         
          </div>
        </div>

    </div>
  )
}

export default EducationCard