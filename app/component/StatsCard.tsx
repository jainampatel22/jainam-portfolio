import React from 'react'

const StatsCard = () => {
  return (
    <div className='max-h-xl border-1 border-white/15 w-full rounded-xl'>
        <div>
        <h1 className="px-4 sm:px-6 font-semibold font-[font2] text-base sm:text-lg md:text-xl pt-4 text-white">
          Stats.
        </h1>
<div className="px-3 py-6 flex flex-col items-center justify-center">
  <h1 className="mb-4 font-semibold font-[font2] text-base sm:text-lg md:text-xl text-white/50">
    Monthly
  </h1>
  <img
    className="object-contain w-full max-w-4xl "
    src="https://github-readme-activity-graph.vercel.app/graph?username=jainampatel22&theme=merko"
    alt="GitHub contribution chart"
  />
</div>


        </div>
    </div>
  )
}

export default StatsCard