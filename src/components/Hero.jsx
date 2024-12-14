import { useRef, useState } from "react";
import { FaPlay, FaPause } from "react-icons/fa"; 
function Hero() {
    let videoRef = useRef(null)
    let [play, setPlay] = useState(true)
    

    function handlePlay() {
        if (play) videoRef.current.pause()
        else videoRef.current.play()
        
        setPlay((prevPlay)=>!prevPlay)
    }

    return (
        <div className="relative h-screen flex justify-center px-7 items-center ">
          {/* Curved Frame Container */}
          <div className="relative w-full max-w-full h-[70vh] overflow-hidden rounded-b-[20%] border-4 border-gray-900 shadow-lg">
            {/* Video */}
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
            >
              <source src="/video/hero_vdo2.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
    
            {/* Play/Pause Button */}
            <button
              className="absolute bottom-10 right-32 z-10 bg-gray-800 bg-opacity-70 text-white px-4 py-2 rounded-md shadow-lg hover:bg-opacity-90 transition"
              onClick={handlePlay}
            >
              {play ? <FaPause/>:<FaPlay/> }
            </button>
    
            {/* Overlay Text */}
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white">
              <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
                Unlimited Movies, TV Shows, and More
              </h1>
              <p className="text-lg md:text-xl font-light">
                Watch anywhere. Cancel anytime.
              </p>
            </div>
          </div>
        </div>
      );
};

export default Hero