'use client'
import React, { useEffect, useRef } from 'react'
import ProfileCard from './component/ProfileCard'


import WorkCard from './component/WorkCard';
import ProjectsCard from './component/ProjectsCard';
import SkillsCard from './component/SkillsCard'
import EducationCard from './component/EducationCard';
import FooterCard from './component/FooterCard';
import Link from 'next/link';
import gsap from 'gsap';
import {  ScrollToPlugin ,ScrollTrigger} from 'gsap/all';
import Lenis from "@studio-freight/lenis";
import StatsCard from './component/StatsCard';
import BackgroundAppCard from './component/BackgroundAppCard';

const Page = () => {
  const ref = useRef(null)
  gsap.registerPlugin(ScrollToPlugin)

  useEffect(()=>{
    const lenis = new Lenis({
      duration: 3.5,     
    lerp: 0.05,      
    wheelMultiplier: 0.6, 
    touchMultiplier: 0.6,

    })
  function raf(time:number){
lenis.raf(time)
requestAnimationFrame(raf)
  }
    requestAnimationFrame(raf);
      lenis.on("scroll", ScrollTrigger.update);
  
  })
 useEffect(()=>{
  function gsapAnimation(){
    const tl = gsap.timeline()
    tl.to('.fullscreennav',{
      display:"block"
    })
    tl.to('.stairing',{
      
      stagger:{
       amount: -0.3
      
      },
        
      height:'100%'
    })
    tl.to('.stairing',{
      y:'-100%',
      stagger:{
        amount:-0.3
      }
    })
    tl.to('.stair', {
            y: '0%',
        })
    tl.to(ref.current,{
      opacity:1,
     
      ease:'power2.out'
    })
    
  }
  gsapAnimation()
 },[])
  function handleScrollExperience(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>){
   e.preventDefault() 
    gsap.to(window,{
      duration:1,
      scrollTo:"#experience",
      
    })
  }
   function handleScrollProjects(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>){
   e.preventDefault() 
    gsap.to(window,{
      duration:1.5,
      scrollTo:"#projects"
    })
  }
  return (
    <div className='bg-black mb-4 h-screen w-full'>

 <div className='fullscreennav absolute hidden bg-black mb-4'>
      <div className='h-screen w-full fixed '>
    <div className='h-full w-full flex'>
    <div className='stairing w-1/3 sm:w-1/5  bg-white h-0'></div>
    <div className='stairing w-1/3 sm:w-1/5 bg-white h-0' ></div>
    <div className='stairing w-1/3 sm:w-1/5 bg-white h-0'></div>
    <div className='stairing hidden sm:block w-1/3 sm:w-1/5 bg-white h-0'></div>
    <div className='stairing hidden sm:block w-1/3 sm:w-1/5 bg-white h-0' ></div>
    </div>
      </div>
<div ref={ref} className='bg-black navlink opacity-0 max-h-xl w-full text-white mb-8 relative'>
      <div className='px-4 sm:px-8 md:px-16 lg:px-[31%] p-8'>
        <div className='flex justify-between items-center'>
          <div className='font-[font2] mt-0.5 font-semibold text-sm cursor-pointer'>
            Jainam 
          </div>
          
          <div className='flex gap-2 sm:gap-4 text-[#FAFAFA] font-extralight font-[font2] text-xs sm:text-sm'>
            <Link className='experience' onClick={handleScrollExperience} href='#experience'>
              <div className='cursor-pointer'>experience</div>
            </Link>
            <Link onClick={handleScrollProjects} href='#projects'>
              <div  className='cursor-pointer'>projects</div>
            </Link>
          </div>
        </div>
      </div>

     
      <div className='border-1 border-white/15 relative rounded-3xl -mt-2 h-full 
                      w-[90%] mx-[5%] 
                      sm:w-[80%] sm:mx-[10%] 
                      md:w-[70%] md:mx-[15%] 
                      lg:w-[60%] lg:mx-[20%] 
                      xl:w-[40%] xl:mx-[30%]'>
        

        <div className='px-6 py-6 sm:px-8 sm:py-8 md:px-10 md:py-9 lg:px-12 lg:py-10'>
          <ProfileCard/>
        </div>
          <div className='px-6 py-6 sm:px-8 sm:py-8 md:px-10 md:py-9 lg:px-12 lg:py-10'>
          <BackgroundAppCard/>
        </div>


    
        <div className='px-6 sm:px-8 md:px-12 lg:px-16 -mt-12 sm:-mt-20 '>
          <div className={`font-[font2] text-sm sm:text-md text-[#D4D4D4]`}>
            A 20 year-old developer from India who <span className='bg-[#FEF085] rounded px-1 sm:px-2 text-black'>loves</span> building <span className='bg-[#FEF085] rounded px-1 sm:px-2 text-black'>efficient, scalable, and intuitive</span> applications. Previously worked in freelance projects, I am currently working as a Full Stack Engineer Intern, gaining hands-on experience in building full stack applications. 
          </div>
        </div>

      
        <div id='experience' className='px-6 py-6 sm:px-8 sm:py-8 md:px-12 md:py-9 lg:px-14 lg:py-10'>
          <WorkCard/>
        </div>

     
        <div id='projects' className='px-6 py-3 sm:px-8 sm:py-3 md:px-12 md:py-4 lg:px-14 lg:py-4'>
          <ProjectsCard/>
        </div>

       
        <div className='px-6 py-3 sm:px-8 sm:py-3 md:px-12 md:py-4 lg:px-14 lg:py-4'>
          <SkillsCard/>
        </div>

      
        <div className='px-6 py-3 sm:px-8 sm:py-3 md:px-12 md:py-4 lg:px-14 lg:py-4'>
          <EducationCard/>
        </div>

        <div className='px-6 py-3 sm:px-8 sm:py-3 md:px-12 md:py-4 lg:px-14 lg:py-4'>
         <StatsCard/>
        </div>




        <div className=' px-6 py-6 sm:px-8 sm:py-6 md:px-12 md:py-7 lg:px-14 lg:py-8'>
          <FooterCard/>
        </div>
      </div>
    </div>
    </div>
    </div>
   
    
  )
}

export default Page