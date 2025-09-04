import React from 'react'
import ProfileCard from './component/ProfileCard'

import { GeistMono } from 'geist/font/mono';
import WorkCard from './component/WorkCard';
import ProjectsCard from './component/ProjectsCard';
import SkillsCard from './component/SkillsCard'
import EducationCard from './component/EducationCard';
import FooterCard from './component/FooterCard';
import Link from 'next/link';

const page = () => {
  return (
    <div className='max-h-xl w-full text-white'>
      {/* Header - Responsive */}
      <div className='px-4 sm:px-8 md:px-16 lg:px-[31%] p-8'>
        <div className='flex justify-between items-center'>
          <div className='font-[font2] mt-0.5 font-semibold text-sm cursor-pointer'>
            Jainam 
          </div>
          
          <div className='flex gap-2 sm:gap-4 text-[#FAFAFA] font-extralight font-[font2] text-xs sm:text-sm'>
            <Link href='#experience'>
              <div className='cursor-pointer'>experience</div>
            </Link>
            <Link href='#projects'>
              <div className='cursor-pointer'>projects</div>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content Card - Responsive */}
      <div className='border-1 border-white/15 relative rounded-3xl -mt-2 h-full 
                      w-[90%] mx-[5%] 
                      sm:w-[80%] sm:mx-[10%] 
                      md:w-[70%] md:mx-[15%] 
                      lg:w-[60%] lg:mx-[20%] 
                      xl:w-[40%] xl:mx-[30%]'>
        
        {/* Profile Section - Responsive padding */}
        <div className='px-6 py-6 sm:px-8 sm:py-8 md:px-10 md:py-9 lg:px-12 lg:py-10'>
          <ProfileCard/>
        </div>

        {/* Description Section - Responsive padding and text */}
        <div className='px-6 sm:px-8 md:px-12 lg:px-16 -mt-2'>
          <div className={`font-[font2] text-sm sm:text-md text-[#D4D4D4]`}>
            A 20 year-old developer from India who <span className='bg-[#FEF085] rounded px-1 sm:px-2 text-black'>loves</span> building <span className='bg-[#FEF085] rounded px-1 sm:px-2 text-black'>efficient, scalable, and intuitive</span> applications. Previously worked in freelance projects, I am currently working as a Full Stack Engineer Intern, gaining hands-on experience in building full stack applications. 
          </div>
        </div>

        {/* Work Section - Responsive padding */}
        <div className='px-6 py-6 sm:px-8 sm:py-8 md:px-12 md:py-9 lg:px-14 lg:py-10'>
          <WorkCard/>
        </div>

        {/* Projects Section - Responsive padding */}
        <div className='px-6 py-3 sm:px-8 sm:py-3 md:px-12 md:py-4 lg:px-14 lg:py-4'>
          <ProjectsCard/>
        </div>

        {/* Skills Section - Responsive padding */}
        <div className='px-6 py-3 sm:px-8 sm:py-3 md:px-12 md:py-4 lg:px-14 lg:py-4'>
          <SkillsCard/>
        </div>

        {/* Education Section - Responsive padding */}
        <div className='px-6 py-3 sm:px-8 sm:py-3 md:px-12 md:py-4 lg:px-14 lg:py-4'>
          <EducationCard/>
        </div>

        {/* Footer Section - Responsive padding */}
        <div className='px-6 py-6 sm:px-8 sm:py-6 md:px-12 md:py-7 lg:px-14 lg:py-8'>
          <FooterCard/>
        </div>
      </div>
    </div>
  )
}

export default page