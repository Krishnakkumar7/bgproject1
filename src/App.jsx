import React, { useState } from "react";
import './App.css';

function App() {
  const [bgClr, setBgClr] = useState("#ffffff");

  const handleColorChange = (color) => {
    setBgClr(color);
  }

  return (
    <div className="app" style={{
      backgroundColor: bgClr,
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      transition: "background-color 0.3s ease"
    }}>
      <h1>Color Changing App</h1>

      <div className="btn-container">
        <button className="btn btn1" onClick={() => handleColorChange('#9b59b6')}>Purple</button>
        <button className="btn btn2" onClick={() => handleColorChange('#e67e22')}>Orange</button>
        <button className="btn btn3" onClick={() => handleColorChange('#f39c12')}>Pink</button>
        <button className="btn btn4" onClick={() => handleColorChange('#1abc9c')}>Cyan</button>
        <button className="btn btn5" onClick={() => handleColorChange('#2ecc71')}>Light Green</button>
      </div>
    </div>
  );
}

export default App;
