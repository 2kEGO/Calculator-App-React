import "./Switch.css";
import React, {useState} from "react";

export default function Switch({onSwitchChange}){
    
    const [state, setState] = useState(1)

    const onClick = () => {
        if(state > 3 ){
            setState(1)
        }else {
            setState(state + 1)
        }
        
    }

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
        <button onClick={onClick} className="switch-button">
            <span className={switchSpan}></span>
        </button>
        </>
    )
}