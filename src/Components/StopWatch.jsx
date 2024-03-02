import "../App.css"
import React, {useState} from "react"
export const StopWatch = () =>{
    const [time, setTime] = useState({
        "hour": 0,
        "minute": 0,
        "second": 0
    })
    const [intervalId, setIntervalId] = useState(null);
    
    const startConting =()=>{
        const interval = setInterval(() => {
            if(time.second >= 60){
                if(time.minute >= 60){
                    // Add hour, the programe doesn't support days
                    if(time.hour <=24){
                        const newTime = {
                            "hour": time.hour + 1,
                            "minute": 0,
                            "second": 0
                        }
                        setTime(newTime)
                    }
                }else{
                    // Add minute
                    const newTime = {
                        "hour": time.hour,
                        "minute": time.minute + 1,
                        "second": 0
                    }
                    setTime(newTime)
                }

            }else{
                // Add second
                const newTime = {
                    "hour": time.hour,
                    "minute": time.minute,
                    "second": time.second + 1
                }
                setTime(newTime)
            }
        }, 1000);
        setIntervalId(interval);

    }
    return(
        <>
            <div className="conter ">
                <span className="hours  time">{time.hour}</span>  <span className="time"> : </span>  
                <span className="munites time"> {time.minute}</span> <span className="time"> : </span> 
                <span className="seconds time"> {time.second}</span>
            </div>
            <div className="">
                <h2 className="small-title">Split Time</h2>
                <button className="time-controller" onClick={startConting}>Start</button>
                <button className="time-controller">Split</button>
                <button className="time-controller">Resert</button>
            </div>
        </>
    )
}
// Working on time interval in stopwatch