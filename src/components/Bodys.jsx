import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { faFire } from "@fortawesome/free-solid-svg-icons";
import "./Bodys.css";

const Bodys = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const inputElement = (
    <input type="tel" placeholder="Enter Your Phone Number" className="numberbox"/>
  );
  const handleclick = () => {
    console.log("Button Clicked");
  };
  const CrossMark = () => {};
  return (
    <div className="bella">
      <div className="number">
        <div className="logos">
          <FontAwesomeIcon className="fire" icon={faFire} size="2x" />
          <button
            onClick={onclick}
            style={{ cursor: "pointer", border: "none", background: "none" }}
          >
            <FontAwesomeIcon className="cross" icon={faTimes} size="2x" />
          </button>
        </div>
        <h3 className="ke">Put Your Phone number: </h3>
        <div className="kho">
          <div className="place">
            <p>Country:</p>
            <select
              id="options"
              value={selectedOption}
              onChange={handleSelectChange}
              className="optionbox"
            >
              <option value="">Np +977</option>
              <option value="1">Ind +91</option>
              <option value="2">China +86</option>
              <option value="3">Aus +61</option>
            </select>
          </div>
          <div className="input">
            <p>Phone Number:</p>
            {inputElement}
          </div>
        </div>
        <p>
          We'll text you a code to verify you're really you. Message and data
          rates may apply.
          <p className="underline">
            <u>What happens if your number changes?</u>
          </p>
        </p>
        <button className="com" onClick={handleclick}>
          Next
        </button>
      </div>
    </div>
  );
};
export default Bodys;
