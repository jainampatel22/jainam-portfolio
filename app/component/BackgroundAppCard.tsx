import React ,{useEffect,useState} from 'react'
import axios from 'axios'
const BackgroundAppCard = () => {
    const [appName, setAppName] = useState('')
    const [AppIconUrl, setAppIconUrl] = useState('')
     const [startTime, setStartTime] = useState(null);
    const [elapsedSeconds, setElapsedSeconds] = useState<string>("00:00:00");
            useEffect(()=>{
            const getAPPInfo=async()=>{
                const res = await axios.get('https://background-app-tracker.onrender.com/track')
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
<div className={`${appName ? "h-auto mb-20 -mt-4 sm:-mt-12 min-h-8  sm:min-h-16 lg:h-16 w-full rounded-2xl border border-white/20 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-md shadow-lg":"hidden -mt-8"}`}>
  <div
    className={`${
      appName
        ? "flex flex-col -mt-2 ml-4"
        : "flex justify-between items-start absolute top-7 right-7 sm:top-1 sm:right-16 m-2 sm:m-3 lg:m-4"
    } 
    py-3 sm:py-4 lg:py-5 px-4 sm:px-5 lg:px-7 rounded-2xl transition-all duration-200 w-fit max-w-xs sm:max-w-sm lg:max-w-md`}
  >
    {/* Online state */}
    {appName && (
      <>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-3 w-full">
          {/* Top row: Working on + app info */}
          <div className="flex items-center gap-2 sm:gap-3 min-w-0">
            <div className="text-white/70 mt-4 sm:mt-0 font-semibold text-xs sm:text-base lg:text-lg tracking-wide">
              Working on
            </div>

            <div className="w-6 h-6 mt-3 sm:mt-0 sm:w-8 sm:h-8 lg:w-10 lg:h-10 rounded-lg overflow-hidden bg-white/10 flex items-center justify-center shadow-inner">
              <img
                src={`data:image/jpeg;base64,${AppIconUrl}`}
                alt={`${appName} icon`} 
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            <span className="font-semibold sm:-ml-2 mt-3 sm:mt-0 text-white truncate max-w-[6rem] sm:max-w-[8rem] lg:max-w-[12rem] text-sm sm:text-base lg:text-lg">
              {appName.split(" ")[0]}
            </span>
          </div>

          {/* Timer (moves below on mobile, inline on sm+) */}
          <div className="text-white/80 text-center sm:ml-6 lg:ml-9 font-medium text-sm sm:text-base lg:text-lg tracking-tight">
            ⏱ {elapsedSeconds}
          </div>
        </div>
      </>
    )}

    {/* Offline fallback */}
    {!appName && (
      <div className="flex items-center gap-2 sm:gap-3">
        <div className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 rounded-full bg-red-500/70 animate-pulse" />
        <span className="text-gray-400 text-sm sm:text-base lg:text-lg font-medium">
          Offline
        </span>
      </div>
    )}
  </div>
</div>






  )
}

export default BackgroundAppCard