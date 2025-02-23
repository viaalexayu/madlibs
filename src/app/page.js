"use client"

import { useState, useEffect } from "react";
import React from 'react';
import styles from './styles.css';

const Navbar = ({ setShowMadLibs, isLightMode, toggleMode }) => {
  return (
    <div>
      <ul id="nav">
        <li className="link" onClick={() => setShowMadLibs(false)}>Home</li>
        <li className="link" onClick={() => setShowMadLibs(true)}>Mad Libs</li>
        <li className="right"><Mode isLightMode={isLightMode} toggleMode={toggleMode} /></li>
      </ul>
    </div>
  );
};

function Mode({ isLightMode, toggleMode }) {
  return (
    <div>
      <button onClick={toggleMode} className="modeBtn">
        {isLightMode ? 'Dark Mode' : 'Light Mode'}
      </button>
    </div>
  );
}

function ToggleMessage({ setShowMadLibs }) {
  const [isOn, setIsOn] = useState(true);
  const toggle = () => {
    setIsOn(!isOn);
  };
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div id="content">
      {isOn ? (
        <div>
          <form onSubmit={handleSubmit}>
            <label><h1>Hi, what's your name?</h1>
              <br />
              <input type="text" className="name"
                value={inputValue}
                onChange={handleInputChange}
              />
            </label>
            <br />
            <br />
            <button type="submit" className="btn" onClick={toggle}>Submit</button>
          </form>
        </div>
      ) : (
        <div>
          <h1>Welcome to Mad Libs, {inputValue}!</h1>
          <br />
          <button className="btn" onClick={() => setShowMadLibs(true)}>Start</button>
        </div>
      )}
    </div>
  );
}

function MadLibs() {
  const [isOn, setIsOn] = useState(true);
  const toggle = () => {
    setIsOn(!isOn);
  };
  const [inputValue1, setInputValue1] = useState("");
  const [inputValue2, setInputValue2] = useState("");
  const [inputValue3, setInputValue3] = useState("");
  const [inputValue4, setInputValue4] = useState("");
  const [inputValue5, setInputValue5] = useState("");
  const [inputValue6, setInputValue6] = useState("");
  const [inputValue7, setInputValue7] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleInputChange = (event, setState) => {
    setState(event.target.value);
  };

  return (
    <div id="content">
      {isOn ? (
        <div>
          <form onSubmit={handleSubmit}>
            <label>Name&nbsp;
              <input type="text" className="answers"
                value={inputValue1}
                onChange={(e) => handleInputChange(e, setInputValue1)} />
            </label>
            <br />
            <br />

            <label>Adjective&nbsp;
              <input type="text" className="answers"
                value={inputValue2}
                onChange={(e) => handleInputChange(e, setInputValue2)} />
            </label>
            <br />
            <br />

            <label>Animal&nbsp;
              <input type="text" className="answers"
                value={inputValue3}
                onChange={(e) => handleInputChange(e, setInputValue3)} />
            </label>
            <br />
            <br />

            <label>Past Verb&nbsp;
              <input type="text" className="answers"
                value={inputValue4}
                onChange={(e) => handleInputChange(e, setInputValue4)} />
            </label>
            <br />
            <br />

            <label>Place&nbsp;
              <input type="text" className="answers"
                value={inputValue5}
                onChange={(e) => handleInputChange(e, setInputValue5)} />
            </label>
            <br />
            <br />

            <label>Object&nbsp;
              <input type="text" className="answers"
                value={inputValue6}
                onChange={(e) => handleInputChange(e, setInputValue6)} />
            </label>
            <br />
            <br />

            <label>Emotion Noun&nbsp;
              <input type="text" className="answers"
                value={inputValue7}
                onChange={(e) => handleInputChange(e, setInputValue7)} />
            </label>
            <br />
            <br />

            <button type="submit" className="btn"
              onClick={toggle}>Generate</button>
          </form>
        </div>
      ) : (
        <div>
          <h1>One day...</h1>
          <p>
            <b>{inputValue1}</b> woke up feeling <b>{inputValue2}</b>.
            Suddenly, a <b>{inputValue3}</b> burst into their room and <b>{inputValue4}</b> on the bed!
            Shocked, <b>{inputValue1}</b> ran to the <b>{inputValue5}</b> to escape.
            But instead of safety, they found a magical <b>{inputValue6}</b> that started glowing!
            Overcome with <b>{inputValue7}</b>, <b>{inputValue1}</b> screamed, "Why is my life like this?!"
          </p>
        </div>
      )}
    </div>
  );
}

export default function App() {
  const [showMadLibs, setShowMadLibs] = useState(false);
  const [isLightMode, setMode] = useState(true);

  const toggleMode = () => {
    setMode(!isLightMode);
  };

  useEffect(() => {
    document.body.className = isLightMode ? "light-mode" : "dark-mode";
  }, [isLightMode]);

  return (
    <div className={isLightMode ? 'light-mode' : 'dark-mode'}>
      <Navbar setShowMadLibs={setShowMadLibs} isLightMode={isLightMode} toggleMode={toggleMode} />
      {!showMadLibs ? <ToggleMessage setShowMadLibs={setShowMadLibs} /> : <MadLibs />}
    </div>
  );
}