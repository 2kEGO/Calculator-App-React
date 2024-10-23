import React from "react";
import "./Button/button.css"

const Button = ({color, onClick,label}) => {
    return (
        <button
            className={`background: ${color}`}
            onClick={onClick}
        >
            {label}
        </button>
    )
}