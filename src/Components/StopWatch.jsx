import "../App.css"
import React, {useState, useRef, useEffect} from "react"
import { SplitComponent } from "./SplitComponent"
import { SingleSpit } from "./SingleSplit"
export const StopWatch = () =>{
    const [time, setTime] = useState({
        "hour" : 0,
        "minute" : 0,
        "second" : 0
    })
    const [hour, setHour] = useState(0)
    const [minute, setMinute] = useState(0)
    const [second, setSecond] = useState(0)
    
    const startBtn = useRef(null)
    const splitBtn = useRef(null)

    const [intervalId, setIntervalId] = useState(null);

    // SplitSingle time functinabilities start here
    const [currentTime, setCurrentTime] = useState(0)
    const [previousTime, setPreviouusTime] = useState(0)
    const [splitTimeArray, setSplitTimeArray] = useState([])
    const [isAscendingOrder, setIsAscendingOrder] = useState(true)
    useEffect(() =>{
        const splitMethod = splitBtn.current.disabled == true ? "pause" : "split"
        if(currentTime != 0){
            if(isAscendingOrder){
                setSplitTimeArray(prev => ([
                    ...prev,
                    {
                        "label" :splitMethod,
                        "index": prev.length,
                        "currentTime":currentTime,
                        "previousTime":previousTime, 
                        "TimeNow": new Date().toLocaleTimeString()
                    }
                ]))
            }else{
                setSplitTimeArray(prev => ([
                    {
                        "label" :splitMethod,
                        "index": prev.length,
                        "currentTime":currentTime,
                        "previousTime":previousTime, 
                        "TimeNow": new Date().toLocaleTimeString()
                    },
                    ...prev
                ]))
            }
            if(splitMethod == "pause") {
                splitBtn.current.disabled = true
            }
            
        }
    }, [currentTime])

    const splitTimeElmnt = splitTimeArray.map(el=>{
        return(
            <>
            <SingleSpit 
            index = {el.index}
            label={el.label} 
            currentTime={el.currentTime} 
            previousTime={el.previousTime} 
            TimeNow={el.TimeNow}/>
            </>
        )   
    })
    const reverseOrder = (arg) =>{
        if(arg == "desc"){
            setSplitTimeArray((prev) => [...prev].reverse())
        }else{
            setSplitTimeArray((prev) => [...prev].reverse())
        }
        setIsAscendingOrder(!isAscendingOrder)
        
    }

    const splitFtn =()=>{
       setCurrentTime(time.hour * 60 * 60 + time.minute * 60 + time.second) 
    }
    
    
    
    const startConting =()=>{
        if(startBtn.current.innerHTML == "Start"){
            startBtn.current.innerHTML = "Pause"
            splitBtn.current.disabled = false
            setPreviouusTime(time.hour * 60 * 60 + time.minute * 60 + time.second)

            let updatedSecond = 0
            let updatedMinute = 0
            let updatedHour = 0
            const interval = setInterval(() => {
                // Add second
                if(updatedSecond < 20){
                    updatedSecond += 1
                    setTime(prev =>({
                        ...prev,
                        second: prev.second + 1
                    }))
    
                }else{
                    if(updatedMinute < 60){
                        // Add minute
                        updatedMinute += 1
                        setTime(prev =>({
                            ...prev,
                            second: 0,
                            minute: prev.minute + 1
                        }))
                        updatedSecond = 0
                    }else{
                        // Add hour, the programe doesn't support days
                        if(updatedHour <=24){
                            updatedHour += 1
                            setTime(prev => ({
                                hour: prev.hour + 1,
                                minute : 0,
                                second: 0
                            })) 
                            updatedMinute = 0
                            updatedSecond = 0              
                        }
                    }
                }
                console.log(time.second)
            }, 1000);
            setIntervalId(interval);
        }else{
            startBtn.current.innerHTML = "Start"
            splitBtn.current.disabled = true
            clearInterval(intervalId)
            setCurrentTime(time.hour * 60 * 60 + time.minute * 60 + time.second)   
        }  
    }
    
    return(
        <>
            <div className="conter ">
                <span className="hours  time">
                    {time.hour >= 10 ? time.hour : "0"+ time.hour }
                </span>  <span className="time"> : </span>  
                <span className="munites time">
                    {time.minute >= 10 ? time.minute : "0"+ time.minute }
                </span> <span className="time"> : </span> 
                <span className="seconds time">
                    {time.second >= 10 ? time.second : "0" + time.second }
                </span>
            </div>
            <div className="">
                <h2 className="small-title">Split Time</h2>
                <button className="time-controller" ref={startBtn} 
                onClick={startConting}>Start</button>
                <button className="time-controller" onClick={splitFtn}
                ref={splitBtn}>Split</button>
                <button className="time-controller">Resert</button>
            </div>
            <SplitComponent reverse= {reverseOrder}/>
            {splitTimeElmnt}
        </>
    )
}


// Split btn and delete a item
