import React, { useState } from "react";
import Logo from "./images/logo.png";
import "./App.css";
import { textWords } from "./text";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [highlight, setHighlight] = useState("");
  const [newText, setNewText] = useState([]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    if (textWords.indexOf(event.target.value) === -1) {
      setHighlight("red");
    } else {
      setHighlight("");
    }
  };
  const submit = () => {

    setNewText(newText.concat(inputValue));
    setInputValue("");
  };

  return (
    <div className="App">
      <div className="header"></div>
      <img className="image" src={Logo} alt="logo" />
      <h1>Basic English Spell Checker</h1>
      <label htmlFor="Check spelling" className="top-input">
        Check Your Spelling
      </label>
      <input
        className={highlight}
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Type here"
      />
      <div className="button-box">
        <button className="submit-btn" onClick={submit}>
          submit
        </button>
      </div>
      <ul>
        {newText.map((item, index) => {
          return <li key={index}>{item} </li>;
        })}
      </ul>
    </div>
  );
}

export default App;
