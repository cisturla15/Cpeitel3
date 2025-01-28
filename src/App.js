import React, { useState } from "react";
import "./App.css";

function App() {
  const [displayText, setDisplayText] = useState("C-PEITEL3 EXPECTATIONS");

  const handleButtonClick = (value) => {
    const expectations = {
      1: "Being On Time",
      2: "Making An Effort",
      3: "Being High Energy",
      4: "Having A Positive Attitude",
      5: "Being Passionate",
      6: "Using Good Body Language",
      7: "Being Coachable",
      8: "Doing A Little Extra",
      9: "Being Prepared",
      0: "Having A Strong Work Ethic",
      RESET: "C-PEITEL3 EXPECTATIONS",
      NAME: "CRISTOPHER IAN S. TURLA",
      "What I learned?": "The importance of showing up and making an effort.",
      "What I want to learn?": "To stay energized and motivated in all circumstances.",
      "How will I learn?": "By being consistent and open to feedback.",
    };

    setDisplayText(expectations[value] || "Invalid Option");
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>CRISTOPHER IAN S. TURLA - IT3A</h1>
        <h2>{displayText}</h2>
        <div className="buttons">
          <button onClick={() => handleButtonClick(1)}>1</button>
          <button onClick={() => handleButtonClick(2)}>2</button>
          <button onClick={() => handleButtonClick(3)}>3</button>
          <button onClick={() => handleButtonClick(4)}>4</button>
          <button onClick={() => handleButtonClick(5)}>5</button>
          <button onClick={() => handleButtonClick(6)}>6</button>
          <button onClick={() => handleButtonClick(7)}>7</button>
          <button onClick={() => handleButtonClick(8)}>8</button>
          <button onClick={() => handleButtonClick(9)}>9</button>
          <button onClick={() => handleButtonClick(0)}>0</button>
          <button onClick={() => handleButtonClick("RESET")}>RESET</button>
          <button onClick={() => handleButtonClick("NAME")}>NAME</button>
          <button onClick={() => handleButtonClick("What I learned?")}>
            What I learned?
          </button>
          <button onClick={() => handleButtonClick("What I want to learn?")}>
            What I want to learn?
          </button>
          <button onClick={() => handleButtonClick("How will I learn?")}>
            How will I learn?
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;