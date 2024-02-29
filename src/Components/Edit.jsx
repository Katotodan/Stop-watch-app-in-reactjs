export const EditElmt = () =>{
    return(
        <div className="absolute w-7/12 translate-x-2/4 translate-y-2/4 bg-slate-400 h-60 z-10">
            <div className="flex justify-between p-5 bg-gray-400">
                <h2>Edit Timer</h2>
                <button className="text-red-600 text-4xl">X</button>
            </div>
        
        <form action="" className="flex gap-1.5 ">
            
            <div >
                <input type="number" id="hour" min={0} max={24} value="0" className="border-4 outline-2 text-end"/> 
                <br /> <label htmlFor="hour">Hour</label>
            </div>
            :
            <div>
                <input type="number" id="minute" min={0} max={60} value="0" className="border-4 outline-2 text-end"/>
                <br /> <label htmlFor="minute">Minute</label>
            </div>
            :
            <div>
                <input type="number" min={0} max={60} value="0" className="border-4 outline-2 text-end"/>
                <br /> <label htmlFor="second">Second</label>
            </div>
            
        </form>
        </div>
    )
}

// Editing time