import './App.css';
import React, { useState, useEffect } from 'react';
import CalButton from './Components/Button/CalButton.jsx';
import Switch from './Components/Switch/Switch.jsx';
import {handleSwitchCount} from './Components/Switch/SwitchCount.jsx';


function App() {

  const [state, setState] = useState(1);

  const getBackGround = state === 1? "#3b4664" : state === 2 ? "#e6e6e6" : "#3b4664";

  document.body.style.backgroundColor = getBackGround;
  
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
      <div className="calculator-container" id='calculator-container' data-theme={`theme-${state}`}>
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
              
              
                <Switch state={state} setState={setState} />
              
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
