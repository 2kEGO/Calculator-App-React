import './App.css';
import React, { useState } from 'react';

function App() {

  const [display, setDisplay] = useState("0");


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

        <div className="button-container"></div>
      </div>
    </>
  )
}

export default App
