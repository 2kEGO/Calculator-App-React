import "./Switch.css";
import React, {useState} from "react";

export default function Switch(){
    
    function onClick (event) {
        const [number, setNumber] = useState("1");
        setNumber((prevNumber) => (prevNumber === 3 ? 1 : prevNumber + 1));

    }   

    return (
        <>
        <button onClick={onClick} className="switch-button">
            <span ></span>
        </button>
        </>
    )
}