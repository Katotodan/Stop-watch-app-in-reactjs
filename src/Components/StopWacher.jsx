import "../App.css"
export const SingleTimer = () =>{
    return(
        <>
            <div className="conter ">
                <span className="hours  time">00</span>  <span className="time"> : </span>  
                <span className="munites time"> 00</span> <span className="time"> : </span> 
                <span className="seconds time"> 00</span>
            </div>
            <div className="">
                <h2 className="small-title">Split Time</h2>
                <button className="time-controller">Start</button>
                <button className="time-controller">Split</button>
                <button className="time-controller">Resert</button>
            </div>
        </>
    )
}