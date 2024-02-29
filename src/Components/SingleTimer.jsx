import "../App.css"
import React, {useState, useEffect, useRef} from "react"
import { EditElmt } from "./Edit"
export const SingleTimer = () =>{
    let initialTime = {
        "hours": 0,
        "munites" : 1,
        "second": 30
    }
    const [time, setTime] = useState({...initialTime})
    const [totalTime, setTotalTime] = useState(0)
    const [remainingTime, setRemainingTime] = useState(0)

    const startbtn = useRef(null)
    const pausebtn = useRef(null)

    const barTime = useRef(null)
    const [newWidth, setNewWith] = useState(100)
    const [isRemove, setIsRemove] = useState(false)
    useEffect(()=>{
        setTotalTime(time.second + (time.munites * 60) + (time.hours * 60 * 60))
        setRemainingTime(time.second + (time.munites * 60) + (time.hours * 60 * 60))
        pausebtn.current.style.display = "none"
    }, [])

    const [intervalId, setIntervalId] = useState(null);

    useEffect(() =>{
        // Calculating percentage 
        setNewWith(((remainingTime / totalTime) * 100))
    }, [remainingTime])

    useEffect(() =>{
        barTime.current.style.width = `${newWidth}%`;
    }, [newWidth])


    const start = (e)=>{
        const timerInterval = setInterval(() => {
            setRemainingTime( (prev) => prev - 1)
            
            if(time.second > 0){
                time.second = time.second - 1
            }else if(time.munites > 0){
                time.munites = time.munites - 1
                time.second = 59
            }else if(time.hours > 0){
                time.hours = time.hours - 1
                time.munites = 59
            }
        }, 1000);
        setIntervalId(timerInterval);
        pausebtn.current.style.display = "inline-block"
        startbtn.current.style.display = "none"
    }
    const pause = ()=>{
        pausebtn.current.style.display = "none"
        startbtn.current.style.display = "inline-block"
        clearInterval(intervalId);
    }
    const resetTime = () =>{
        setRemainingTime(totalTime)
        pause()
        setTime(initialTime)
        console.log(initialTime)
    }
    const remove = ()  => setIsRemove(true)
    // const addAnotherTimer = addNewTimer
    return(
        <>
            <EditElmt/>
            {!isRemove && (
                <>
                    <div className="timer-section1">
                        <div className="conter ">
                            <span className="hours  time">
                                {time.hours > 10 ? time.hours : "0"+ time.hours }    
                            </span>  
                            <span className="time"> : </span>  
                            <span className="munites time">
                                {time.munites > 10 ? time.munites : "0"+ time.munites }     
                            </span> 
                            <span className="time"> : </span> 
                            <span className="seconds time">
                                {time.second > 10 ? time.second : "0" + time.second } 
                            </span>
                        </div>
                        <div className="">
                            <button className="time-controller" onClick={start} ref={startbtn}>Start</button>
                            <button className="time-controller" onClick={pause} ref={pausebtn}>Pause</button>
                            <button className="time-controller" onClick={resetTime}>Resert</button>
                        </div>
                    </div>
                    <div className="timer-section2">
                        <div className="timer-info">
                            <div>
                                <span>Timer 1 (00:00:00)</span>
                                <button>📝 Edit</button>
                            </div>
                            <button onClick={remove}>X Remove</button>
                        </div>
                        <div className="bars">
                            <div className="remaining-time" ref={barTime}></div>
                            <div className="bar-time"></div>
                        </div>
                        <br />
                        
                    </div>
                </>
            )}
        </>
        
    )
}

// Working on add another time
