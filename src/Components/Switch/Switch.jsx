import "./Switch.css";
import React, {useState} from "react";
import {handleSwitchCount} from "./SwitchCount.jsx"


export default function Switch({onClick = handleSwitchCount, state, setState}){
    

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
    console.log(switchSpan);
    
    return (
        <>
        <button onClick={() => onClick(state, setState)} className="switch-button">
            <span className={switchSpan}></span>
        </button>
        </>
    )
}