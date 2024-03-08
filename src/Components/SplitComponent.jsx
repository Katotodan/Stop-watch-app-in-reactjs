import React,{useState} from "react"

export const SplitComponent = ({reverse}) =>{
    const [isReversed, setIsReversed] = useState(false)

    const reverseOrder = ()=>{
        if(isReversed){
            setIsReversed(!isReversed)
            reverse("desc")
        }else{
            setIsReversed(!isReversed)
            reverse("asc")
        }
        
    }

    return(
        <div className="p-3">
            <header className="flex justify-between m-3">
                <div>
                    <input type="checkbox"  id="more-details"/>
                    <label htmlFor="more-details">Show more details</label>
                </div>
                <div>
                    <input type="checkbox"  id="reverse-order" checked={isReversed} onChange={reverseOrder}/>
                    <label htmlFor="reverse-order">Reverse order</label>
                </div>
                
            </header>

            <main className="flex">
                <div className="w-1/12 h-8"></div>
                <div className="w-3/12 h-8">Label</div>
                <div className="w-2/12 h-8">Interval</div>
                <div className="w-2/12 h-8">Total</div>
                <div className="w-3/12 h-8">Time Recorder</div>
                <div className="w-1/12 h-8"></div>
            </main>
            <hr className="h-8"/>
            
        </div>
    )
}