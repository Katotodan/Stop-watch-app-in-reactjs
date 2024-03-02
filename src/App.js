// import logo from './logo.svg';
import './index.css';
import { Timer } from './Components/Timer';
import { StopWatch } from './Components/StopWatch';
import React, {useState, useRef, useEffect} from 'react';
function App() {
  const [displayTimer, setDisplayTimer] = useState(false)
  const stopWatchBtn = useRef(null)
  const timerBtn = useRef(null)
  useEffect(() =>{
    stopWatchBtn.current.style.backgroundColor = "blue"
  }, [])
  
  const taggle = (param) =>{
    if(param == "stopWatch"){
      setDisplayTimer(false)
      stopWatchBtn.current.style.backgroundColor = "blue"
      timerBtn.current.style.backgroundColor = "transparent"
    }else{
      setDisplayTimer(true)
      stopWatchBtn.current.style.backgroundColor = "transparent"
      timerBtn.current.style.backgroundColor = "blue"
    }
  }
  return (
    <div className="App ">
      <nav className='bg-yellow-200 flex justify-evenly h-10 text-2x'>
        <li className='inline-block h-full hover:bg-sky-700 items-center flex 
        px-4 italic text-2xl' onClick={() => taggle("timer")} ref={timerBtn}>
          Timer
        </li>
        <li className='inline-block h-full hover:bg-sky-700 items-center flex 
        px-4 italic text-2xl' onClick={() => taggle("stopWatch")} ref={stopWatchBtn}>
          Stop Watch
        </li>
      </nav>
      {displayTimer && <Timer />}
      {!displayTimer && <StopWatch/>}
      
    </div>
  );
}

export default App;
