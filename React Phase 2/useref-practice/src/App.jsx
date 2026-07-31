import { useEffect, useRef } from "react";
import myVideo from "./assets/vidssave.com YTB_1782052425558 480P.mp4";

function App() {
  const videoRef = useRef(null);
  const sliderRef = useRef(null);

  useEffect(()=>{

    const  video = videoRef.current;
    video.addEventListener('loadedmetadata',handleLoadedMetaData)
    video.addEventListener('timeupdate', handleTimeUpdate)
    function handleLoadedMetaData() {
      sliderRef.current.value = 0;
      sliderRef.current.max = video.duration
    }

    function handleTimeUpdate() {
      sliderRef.current.value = video.currentTime;
    }

    async function play(){
      await video.play();
    }
    play()

    return ()=>{
      video.removeEventListener('loadedmetadata', handleLoadedMetaData);
      video.removeEventListener('timeupdate', handleTimeUpdate)
    }
  },[])

  function seek(){
    videoRef.current.currentTime = sliderRef.current.value;
  }

  async function play(){
    await videoRef.current.play();
  }

  function pause(){
    videoRef.current.pause();
  }


  return (
    <>
      <div className="w-full flex">
        <div className="w-full flex flex-col items-center gap-2">
          <video className="mt-2" ref={videoRef} src={myVideo} width="50%" height="auto"></video>
          <div>
            <button onClick={play} className="mr-2 bg-blue-400 p-2 rounded">play</button>
            <button onClick={pause} className="mr-2 bg-blue-400 p-2 rounded">pause</button>
            <input className="w-190" ref={sliderRef} onInput={seek} step={0.001}  type="range" name="slider" id="slider" />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
