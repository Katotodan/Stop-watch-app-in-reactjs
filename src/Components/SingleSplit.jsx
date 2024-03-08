export const SingleSpit = ({index, label, currentTime, previousTime, TimeNow}) =>{
    const intervalHour = Math.floor((currentTime - previousTime) / 3600)
    const intervalMinute = Math.floor(((currentTime - previousTime) % 3600) / 60)
    const intervalSecond = (currentTime - previousTime) % 60
    
    const totalHour = Math.floor(currentTime / 3600)
    const totalMinute = Math.floor((currentTime % 3600) / 60)
    const totalSecond = currentTime % 60
    
    return(
        <main className="flex">
                <div className="w-1/12 h-8">#{index}</div>
                <div className="w-3/12 h-8">
                    {label == "split" ? (
                            <span>Split</span>
                        ) : (
                            <span>Pause</span>
                        )
                    }
                </div>
                <div className="w-2/12 h-8">
                {label == "split" ? (
                        <>_ _ _</> 
                    ) : (
                        <span>
                            {intervalHour < 10 ? <>0{intervalHour}</> : intervalHour} :
                            {intervalMinute < 10 ? <>0{intervalMinute}</> : intervalMinute} :
                            {intervalSecond < 10 ? <>0{intervalSecond}</> : intervalSecond} 
                        </span>
                    )
                }
                </div>
                <div className="w-2/12 h-8">
                {label == "split" ? (
                        <>_ _ _</> 
                    ) : (
                        <span>
                            {totalHour < 10 ? <>0{totalHour}</> : totalHour} :
                            {totalMinute < 10 ? <>0{totalMinute}</> : totalMinute} :
                            {totalSecond < 10 ? <>0{totalSecond}</> : totalSecond} 
                        </span>
                    )
                }
                </div>
                <div className="w-3/12 h-8">{TimeNow}</div>
                <div className="w-1/12 h-8 text-red-600">X</div>
            </main>
    )
}