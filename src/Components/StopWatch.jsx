import "../App.css"
import React, {useState, useRef, useEffect} from "react"
import { SplitComponent } from "./SplitComponent"
import { SingleSpit } from "./SingleSplit"
export const StopWatch = () =>{
    const [hour, setHour] = useState(0)
    const [minute, setMinute] = useState(0)
    const [second, setSecond] = useState(0)
    
    const [intervalId, setIntervalId] = useState(null);

    // SplitSingle time functinabilities start here
    const [currentTime, setCurrentTime] = useState(0)
    const [previousTime, setPreviouusTime] = useState(0)
    const [splitTimeArray, setSplitTimeArray] = useState([])
    const [isAscendingOrder, setIsAscendingOrder] = useState(true)
    useEffect(() =>{
        if(currentTime != 0){
            if(isAscendingOrder){
                setSplitTimeArray(prev => ([
                    ...prev,
                    {
                        "label" :"Pause",
                        "index": prev.length,
                        "currentTime":currentTime,
                        "previousTime":previousTime, 
                        "TimeNow": new Date().toLocaleTimeString()
                    }
                ]))
            }else{
                setSplitTimeArray(prev => ([
                    {
                        "label" :"Pause",
                        "index": prev.length,
                        "currentTime":currentTime,
                        "previousTime":previousTime, 
                        "TimeNow": new Date().toLocaleTimeString()
                    },
                    ...prev
                ]))
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
    
    
    const startBtn = useRef(null)
    const startConting =()=>{
        if(startBtn.current.innerHTML == "Start"){
            startBtn.current.innerHTML = "Pause"
            setPreviouusTime(hour * 60 * 60 + minute * 60 + second)
            const interval = setInterval(() => {
                if(second >= 60){
                    if(minute >= 60){
                        // Add hour, the programe doesn't support days
                        if(hour <=24){
                            setHour((prev) => prev + 1)
                            setMinute(0)
                            setSecond(0)               
                        }
                    }else{
                        // Add minute
                        setMinute(prev => prev + 1)
                        setSecond(0)  
                    }
    
                }else{
                    // Add second
                    setSecond(prev => prev + 1)
                }
            }, 1000);
            setIntervalId(interval);
        }else{
            startBtn.current.innerHTML = "Start"
            clearInterval(intervalId)
            setCurrentTime(hour * 60 * 60 + minute * 60 + second)
            
            
        }  
    }
    
    return(
        <>
            <div className="conter ">
                <span className="hours  time">
                    {hour >= 10 ? hour : "0"+ hour }
                </span>  <span className="time"> : </span>  
                <span className="munites time">
                    {minute >= 10 ? minute : "0"+ minute }
                </span> <span className="time"> : </span> 
                <span className="seconds time">
                    {second >= 10 ? second : "0" + second }
                </span>
            </div>
            <div className="">
                <h2 className="small-title">Split Time</h2>
                <button className="time-controller" ref={startBtn} 
                onClick={startConting}>Start</button>
                <button className="time-controller">Split</button>
                <button className="time-controller">Resert</button>
            </div>
            <SplitComponent reverse= {reverseOrder}/>
            {splitTimeElmnt}
        </>
    )
}


// Split btn and delete a item