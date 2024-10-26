import React from "react";
import "./button.css"

function CalButton({onClick}) {
    const keys = [
        {key: '7', className: 'number'},
        {key: '8', className: 'number'},
        {key: '9', className: 'number'},
        {key: 'DEL', className: 'delete'},
    
        {key: '4', className: 'number'},
        {key: '5', className: 'number'},
        {key: '6', className: 'number'},
        {key: '+', className: 'plus'},
    
        {key: '1', className: 'number'},
        {key: '2', className: 'number'},
        {key: '3', className: 'number'},
        {key: '-', className: 'minus'},
    
        {key: '.', className: 'number'},
        {key: '0', className: 'number'},
        {key: '/', className: 'divide'},
        {key: 'x', className: 'multiply'},
    
        {key: 'RESET', className: 'reset'},
        {key: '=', className: 'equal'}
    ];
        
        return (
            <div className="keyboard">
                {keys.map((item) => (
                    <button onClick={onClick} key={item.key} className={`key ${item.className || ''} `}>
                        {item.key}
                    </button>
                ))}
            </div>
        );
}

export default CalButton;