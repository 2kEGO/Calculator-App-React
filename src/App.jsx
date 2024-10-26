import './App.css';
import React, { useState } from 'react';
import CalButton from './Components/Button/CalButton.jsx'

function App() {

  
  const [display, setDisplay] = useState(0);

  function handleButtonClick(event) {
    let buttonText = event.target.innerText;
    
    switch (buttonText) {

      case 'x':
        buttonText = '*';
        break;

      case 'RESET':
        setDisplay('0');
        return;

      case 'DEL':
        const removeNumber = display.length > 1 ? display.slice(0,-1) : "0";
        setDisplay(removeNumber);
        return;

      case '=':
        try {
          setDisplay(eval(display).toString());
        } catch {
          setDisplay('Error');
        }

        return;
        
      default:
        break;
    }

    setDisplay(prevDisplay => prevDisplay === '0' && prevDisplay !== '.' ?  buttonText : prevDisplay + buttonText);
  
  }

  return (
    <>
      <div className="calculator-container">

        <div className="header-container">
          <div className="header-items-left">
            <h3>calc</h3>
          </div>

          <div className="header-items-right">

            <div className='header-item'>
              <h4>THEME</h4>
            </div>

            <div className="switch-container">
              <div className="switch-header">
                <span>1</span>
                <span>2</span>
                <span>3</span>
              </div>
              
              <div className="switch-container"></div>
            </div>
            
          </div>
        </div>

        <div className="display-container">
          <div className="display">{display}</div>
        </div>

        <div className="button-container">
          <CalButton onClick={handleButtonClick}/>
        </div>
      </div>
    </>
  )
}




export default App
