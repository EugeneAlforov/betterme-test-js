import React from "react"
import "./BlockB.css"
import Illustration from "../../assets/img/Illustration.png"

export const BlockB = () => {
    const test = 'test';
    return (
    <div className="section-b">
        <div className="b-left">
            <div className="text">
                Get your <span>Personalized</span> Plan
            </div>
            <div className="input">
                <input type="text" placeholder="Enter your email to get your plan"/>
            </div>
        </div>
        <div className="b-right">
            <img src={Illustration} alt="" />
        </div>
        
    </div>
    )
}

export default BlockB;