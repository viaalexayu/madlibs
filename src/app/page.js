"use client"

import { useState } from 'react';
import React from 'react';
import styles from './styles.css';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div>
      <ul id="nav">
        <li><Link href="#">Home</Link></li>
        <li><Link href="/madlibs">Mad Libs</Link></li>
        <li className="right"><Language /></li>
      </ul>
    </div>
  );
};

function Language() {
  const [isEnglish, setLanguage] = useState(true);
  const toggle = () => {
    setLanguage(!isEnglish);
  }

  return (<div>
    {isEnglish ?
      (<div>
        <button onClick={toggle} className="langBtn">Japanese</button></div>)
      :
      (<div>
        <button onClick={toggle} className="langBtn">English</button></div>)}</div>);
}

function ToggleMessage() {
  const [isOn, setIsOn] = useState(true);
  const toggle = () => {
    setIsOn((isOn) => !isOn);
  }
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (<div>
    {isOn ?
      (<div>
        <form onSubmit={handleSubmit}>
          <label>Hi, what's your name?
            <br />
            <input type="text"
              value={inputValue}
              onChange={handleInputChange}
            />
          </label>
          <br />
          <button type="submit"
            onClick={toggle}>Submit</button>
        </form>
      </div>)
      :
      (<div>
        Welcome to MadLibs, {inputValue}!
        <br />
        <button><a href="#">Let's start</a></button>
      </div>)
    }
  </div>);
}







export default function App() {
  return (
    <div>
      <Navbar />
      <ToggleMessage />
      {/* <MadLibs /> */}
    </div>
  );
}
