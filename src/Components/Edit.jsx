import React, {useState} from "react"
export const EditElmt = ({hide, editTime, time}) =>{
    const [timeManager, setTimeManager] = useState({
        "hour": time.hour,
        "minute": time.minute,
        "second": time.second
    })
    const setTime = (e) =>{
        setTimeManager({...timeManager, [e.target.name]: e.target.value})
    }
    const cancel = () => hide()
    const done = () =>{
        editTime(timeManager)
    }
    return(
        <div className="absolute left-0 w-full h-full z-10 edit-container">
        <div className="absolute w-7/12 top-0 left-0 translate-x-2/4 translate-y-2/4
            bg-slate-400 h-60 z-10 edit">
                <div className="flex justify-between p-5 bg-gray-400">
                    <h2 className="text-4xl">Edit Timer</h2>
                    <button className="text-red-600 text-4xl" onClick={cancel}>X</button>
                </div>
            
            <form className="px-4 ">
                <section className="flex gap-1.5 py-4">
                    <div >
                        <input type="number" id="hour" min={0} max={24} name="hour" 
                        value={timeManager.hour} onChange={setTime} className="border-4 outline-2 text-end"/> 
                        <br /> <label htmlFor="hour">Hour</label>
                    </div>
                    :
                    <div>
                        <input type="number" id="minute" min={0} max={60} name="minute"
                        value={timeManager.minute} onChange={setTime} className="border-4 outline-2 text-end"/>
                        <br /> <label htmlFor="minute">Minute</label>
                    </div>
                    :
                    <div>
                        <input type="number" min={0} max={60} name="second"
                        value={timeManager.second} onChange={setTime} className="border-4 outline-2 text-end"/>
                        <br /> <label htmlFor="second">Second</label>
                    </div>
                </section>
                
                <section className="flex justify-between">
                    <button type="button" 
                    className="block p-2 outline-2 border-solid border-black bg-red-500" onClick={cancel}>
                        Cancel
                    </button>
                    <button type="button"
                    className="block py-2 px-4 outline-2 border-solid border-black bg-zinc-200" onClick={done}>
                        Done
                    </button>
                </section>
                
            </form>
            </div>
        </div>
        
    )
}

// Editing time 