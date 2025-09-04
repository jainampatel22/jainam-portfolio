import React from 'react'
import { MoveLeftIcon, MoveUpRightIcon } from 'lucide-react'
import Link from 'next/link';
const ProjectsCard = () => {
  const projects = [
  {
    name: "Podler",
    date: "June 2025",
    tech: ["React", "TypeScript", "WebSockets", "FFmpeg", "PostgreSQL", "Prisma", "TensorFlow"],
    description: [
      "Developed a full-stack video calling application with functionalities such as Live Recording, Video Editing, AI-powered captions generator, and Virtual Backgrounds using TensorFlow.",
      "Implemented real-time communication with WebSockets and lightweight editor using FFmpeg.",
      "Integrated Razorpay payment gateway to enable subscription-based access for premium features."
    ],
    live_link:'https://podler.space/',
    github:'github.com/jainampatel22/podly'
  },
  {
    name: "OpenLang",
    date: "April 2025",
    tech: ["React", "TypeScript", "REST APIs", "GSAP"],
    description: [
      "Developed a platform to discover beginner-friendly open-source issues using GitHub’s REST API.",
      "Handled API pagination, caching, and client-server interactions.",
      "Received feedback from real users and acquired 250+ users within the first few days after launch."
    ],
    live_link:'openlang.vercel.app',
    github:'http://github.com/jainampatel22/OpenLang-frontend'

  },
  {
    name: "Webseer",
    date: "March 2025",
    tech: ["React", "PineconeDB", "Cheerio", "Redis"],
    description: [
      "Built a system to interact with websites via chat by scraping and embedding their content into a vector database.",
      "Used Cheerio for web scraping and PineconeDB for semantic search.",
      "Implemented caching with Redis to significantly reduce API response times."
    ],
    live_link:'https://webseer.vercel.app/',
    github:'https://github.com/jainampatel22/AskWeb'
  },
  {
    name: "Call.io",
    date: "Dec 2024",
    tech: ["React", "TypeScript", "WebSockets", "Peer.js"],
    description: [
      "Built a real-time video calling platform using WebSocket-based signaling and peer-to-peer connections.",
      "Added backend support for screen sharing and meeting recordings."
    ],
    live_link:'https://call-io-frontend.vercel.app/',
    github:'https://github.com/jainampatel22/Call.io-frontend'
  }
];


    
  return (
    <div id='projects' className='max-h-xl border-1  border-white/15 w-full rounded-xl'>
<div>
            <h1 className='px-5 font-semibold font-[font2] text-md pt-4 '>Projects</h1>
        </div>
           <div className="px-4 -mt-2 pb-6">
      {projects.map((project, index) => (
        <div
          key={index}
          className="max-h-xl border-1 mt-7 border-white/15 w-full rounded-xl"
        >
          {/* Header */}
          <div className="flex font-[font2] text-md gap-12 items-start justify-between py-3 px-6">
            <div className="text-[#FAFAFA] uppercase text-md py-1 font-semibold font-[font2]">
              {project.name}
            </div>
            <div className="flex gap-2">
              <div className="text-[#858585] border border-white/15 font-[font2] rounded-md py-0.5 px-3 flex">
                <Link target='_blank' href={project.live_link}>live preview</Link >
                <MoveUpRightIcon className="h-4 mt-1 -mr-2" />
              </div>

              <div className="text-[#858585] border border-white/15 font-[font2] rounded-md py-0.5 px-3 flex">
            <Link target='_blank' href={project.github}>github</Link >
                <MoveUpRightIcon className="h-4 mt-1 -mr-2" />
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="py-3 px-6 font-[font2] text-sm">
            {project.description.map((point, i) => (
              <div
                key={i}
                className="flex mt-3 first:mt-0 gap-3 justify-between items-start"
              >
                <div className="bg-white mt-1.5 h-1 w-1 pt-2 pr-2 rounded-full"></div>
                <div className="text-[14px] font-extralight text-[#D2D2D2]">
                  {point}
                </div>
              </div>
            ))}
          </div>

          {/* Tech stack */}
          <div className="py-2 mb-4 px-5 font-[font2] text-sm">
            <div className="flex gap-3 items-start flex-wrap">
              {project.tech.map((t, idx) => (
                <div
                  key={idx}
                  className="text-[#D2D2D2] bg-[#121212] rounded-full px-3 py-0.5"
                >
                  {t}
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>
  )
}

export default ProjectsCard