import React, { useState } from "react";
// import logo from './logo.svg';
import "./App.css";
import { textWords } from "./Components/text";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [highlight, setHighlight] = useState("");
  const [newText, setNewText] = useState([]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    // console.log(
    //   "text-update",
    //   event.target.value,
    //   "short",
    //   event.target.value.indexOf(text)
    // );
    if (textWords.indexOf(event.target.value) === -1) {
      setHighlight("red");
      // alert("check your spelling");
    } else {
      setHighlight("");
    }
  };
  const submit = (event) => {
    //to store the output line 28 & 36 & 60 //
    // localStorage.setItem("item", JSON.stringify(inputValue));
    // if (text.indexOf(event.target.value) === text) {

    // }

    setNewText(newText.concat(inputValue));
    setInputValue("");
  };
  // const caught = localStorage.getItem("item");
  // console.log(caught);
  return (
    <div className="App">
      <div className="header"></div>
      <label htmlFor="Check spelling" className="top-input">
        {" "}
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
      {/* <p>{caught}</p> */}
    </div>
  );
}

export default App;
