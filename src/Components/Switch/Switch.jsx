import "./Switch.css";
import React, {useState} from "react";
import {handleSwitchCount} from "./SwitchCount.jsx"

// const handleSwitchCount = (state, setState) => {
//     if(state > 3 ){
//         setState(1)
//     }else {
//         setState(state + 1)
//     }
    
// }

export default function Switch({onClick = handleSwitchCount}){
    
    const [state, setState] = useState(1)

    

    let switchSpan;
    if (state === 1 ){
        switchSpan = 'position-1';
        
    }
    else if (state === 2 ){
        switchSpan = 'position-2';
        
    }
    else if (state === 3 ){
        switchSpan = 'position-3'
        
    }
    
    return (
        <>
        <button onClick={() => onClick(state, setState)} className="switch-button">
            <span className={switchSpan}></span>
        </button>
        </>
    )
}