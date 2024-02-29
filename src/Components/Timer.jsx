import { SingleTimer } from "./SingleTimer"
import React, {useEffect, useState} from "react"
export const Timer = () =>{
    const [domElement, setDomElement] = useState([<SingleTimer/>])
    const addNewTime = () =>{
        const newEl = [...domElement, <SingleTimer/>];
        // Update the state with the new array
        setDomElement(newEl);
    }
    
    return(
        <div>
            <div>
                {domElement}
            </div>
            <button className="add-btn" onClick={addNewTime}>Add another Timer</button>
            

        </div>
    )
}