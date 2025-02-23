"use client"

import { useState } from 'react';

function MadLibs() {
  const [isOn, setIsOn] = useState(true);
  const toggle = () => {
    setIsOn((isOn) => !isOn);
  }
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

  return (<div>
    {isOn ?
      (<div>
        <form onSubmit={handleSubmit}>
          <label>Name&nbsp;
            <input type="text"
              value={inputValue1}
              onChange={(e) => handleInputChange(e, setInputValue1)} />
          </label>
          <br />

          <label>Adjective&nbsp;
            <input type="text"
              value={inputValue2}
              onChange={(e) => handleInputChange(e, setInputValue2)} />
          </label>
          <br />

          <label>Animal&nbsp;
            <input type="text"
              value={inputValue3}
              onChange={(e) => handleInputChange(e, setInputValue3)} />
          </label>
          <br />

          <label>Past Verb&nbsp;
            <input type="text"
              value={inputValue4}
              onChange={(e) => handleInputChange(e, setInputValue4)} />
          </label>

          <br />
          <label>Place&nbsp;
            <input type="text"
              value={inputValue5}
              onChange={(e) => handleInputChange(e, setInputValue5)} />
          </label>
          <br />

          <label>Object&nbsp;
            <input type="text"
              value={inputValue6}
              onChange={(e) => handleInputChange(e, setInputValue6)} />
          </label>
          <br />

          <label>Emotion&nbsp;
            <input type="text"
              value={inputValue7}
              onChange={(e) => handleInputChange(e, setInputValue7)} />
          </label>
          <br />

          <button type="submit"
            onClick={toggle}>Submit</button>
        </form>
      </div>)
      :
      (<div>
        One day, {inputValue1} woke up feeling {inputValue2}.
        Suddenly, a {inputValue3} burst into their room and {inputValue4} on the bed!
        Shocked, {inputValue1} ran to the {inputValue5} to escape.
        But instead of safety, they found a magical {inputValue6} that started glowing!
        Overcome with {inputValue7}, {inputValue1} screamed, "Why is my life like this?!"
      </div>)
    }
  </div>);
}

export default MadLibs();