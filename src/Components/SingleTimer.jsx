import "../App.css"
import React, {useState, useEffect, useRef} from "react"
import { EditElmt } from "./Edit"
export const SingleTimer = () =>{
    let initialTime = {
        "hour": 0,
        "minute" : 1,
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
        setTotalTime(time.second + (time.minute * 60) + (time.hour * 60 * 60))
        setRemainingTime(time.second + (time.minute * 60) + (time.hour * 60 * 60))
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
            }else if(time.minute > 0){
                time.minute = time.minute - 1
                time.second = 59
            }else if(time.hour > 0){
                time.hour = time.hour - 1
                time.minute = 59
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
    const removeTimer = ()  => setIsRemove(true)

    // Edit timer
    const [isEdit, setIsEdit] = useState(false)
    const editTimer = () =>{
        
        setIsEdit(true)
    }
    const hideEditSection = () =>{
        setIsEdit(false)
    }
    const doneEditing = (currentTime)=>{
        initialTime = currentTime
        setTime({...initialTime})
        setTotalTime(currentTime)
        setTotalTime(currentTime.second + (currentTime.minute * 60) + (currentTime.hour * 60 * 60))
        setRemainingTime(currentTime.second + (currentTime.minute * 60) + (currentTime.hour * 60 * 60))
        resetTime()
        setIsEdit(false)
    }
    return(
        <>
            {
                isEdit && (<EditElmt hide={hideEditSection} editTime={doneEditing} time = {initialTime}/>)
            }
            
            {!isRemove && (
                <>
                    <div className="timer-section1 mt-5">
                        <div className="conter ">
                            <span className="hour  time">
                                {time.hour >= 10 ? time.hour : "0"+ time.hour }    
                            </span>  
                            <span className="time"> : </span>  
                            <span className="minute time">
                                {time.minute >= 10 ? time.minute : "0"+ time.minute }     
                            </span> 
                            <span className="time"> : </span> 
                            <span className="seconds time">
                                {time.second >= 10 ? time.second : "0" + time.second } 
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
                                <button onClick={editTimer}>📝 Edit</button>
                            </div>
                            <button onClick={removeTimer}>X Remove</button>
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
