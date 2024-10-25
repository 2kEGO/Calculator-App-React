import React from "react";
import "./button.css"

function CalButton() {
    const keys = [
        {key: '7'},
        {key: '8'},
        {key: '9'},
        {key: 'DEL', className: 'delete'},
    
        {key: '4'},
        {key: '5'},
        {key: '6'},
        {key: '+', className: 'plus'},
    
        {key: '1'},
        {key: '2'},
        {key: '3'},
        {key: '-', className: 'minus'},
    
        {key: '.', className: ''},
        {key: '0'},
        {key: '/', className: 'divide'},
        {key: 'x', className: 'multiply'},
    
        {key: 'RESET', className: 'reset'},
        {key: '=', className: 'equal'}
    ];
        
        return (
            <div className="keyboard">
                {keys.map((item) => (
                    <button key={item.key} className={`key ${item.className || ''}`}>
                        {item.key}
                    </button>
                ))}
            </div>
        );
}

export default CalButton;