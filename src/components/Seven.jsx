import React from 'react';
import { FaHeart } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import './Seven.css';

const Seven = () => {
  return (
    <div className="main">
      <h1 className="title">
        <FaHeart />
        <i>AVLICAL</i></h1>
      <div className="container">
        <h1 className="heading">Welcome To AVLICAL Dating App</h1>
        <div className="first">
          <FaCheck style={{ color: "rgb(197, 95, 123)" }} />
          <p style={{ fontWeight: "600", color: "rgb(44, 44, 44)", marginBottom: "20px" }}>Be yourself.</p>
        </div>
        <p style={{ color: "white", fontSize: "14px", marginBottom: "20px" }}>Make sure your photos, age and bio are true to who you are.</p>
        <div className="first">
          <FaCheck style={{ color: "rgb(197, 95, 123)", marginBottom: "20px" }} />
          <p style={{ fontWeight: "600", color: "rgb(44, 44, 44)", marginBottom: "20px" }}>Stay Safe.</p>
        </div>
        <p style={{ color: "white", fontSize: "14px", marginRight: "7px", marginBottom: "20px" }}>Don't be too quick to give personal information.<u>Date Safely</u></p>
        <div className="first">
          <FaCheck style={{ color: "rgb(197, 95, 123)", marginBottom: "20px" }} />
          <p style={{ fontWeight: "600", color: "rgb(44, 44, 44)", marginBottom: "20px" }}>Play it Cool.</p>
        </div>
        <p style={{ color: "white", fontSize: "14px", marginLeft: "15px", marginBottom: "20px" }}>Respect others and treat them as you would like to be treated.</p>
        <div className="first">
          <FaCheck style={{ color: "rgb(197, 95, 123)" }} />
          <p style={{ fontWeight: "600", color: "rgb(44, 44, 44)", marginBottom: "20px" }}>Be Proactive.</p>
        </div>
        <p style={{ color: "white", fontSize: "14px", marginRight: "200px", marginBottom: "10px" }}>Always report bad behavior.</p>
        <button className='BTN'>I AGREE</button>
      </div>
    </div>
  );
};

export default Seven;