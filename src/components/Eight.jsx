import React from 'react';
import { FaHeart } from "react-icons/fa";
import d from "../assets/d.png"
import './Eight.css';

const Eight = () => {
    return (
        <div className="main">
            <h1 className="title">
                <FaHeart />
                <i>AVLICAL</i></h1>
            <div className='cont'>
                <img src={d} style={{ width: "900px", borderRadius: "20px", height: "600px" }} />
                <div className='text'>
                    <p className='texts'>Let get you ready</p>
                    <p className='textsi'>with</p>
                    <p className='textse'>AVLICAL</p>
                    <div className='butons'>
                        <button className='start'>Start Tutorial</button><br></br>
                        <button className='skip'>skip</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Eight;