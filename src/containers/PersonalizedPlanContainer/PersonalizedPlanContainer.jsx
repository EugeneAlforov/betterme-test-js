import React, { useState, useRef } from 'react';
import Button from "../../components/Button/Button";
import './PersonalizedPlanContainer.css'
import bannerPlan from '../../assets/personalizedPlan.png'

const PersonalizedPlanContainer = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [email, setEmail] = useState('');

    const handleClick = () => {
        setIsOpen(!isOpen);
    }

    const handleChangeEmail = (e) => {
        setEmail(e.target.value)
    }

    const handleSetLocalStorage = () => {
        localStorage.setItem('email', email)
    }

    return (
        <section className="wrapper">
            <div className="personalized-form">
                <h2 className="personalized-title">
                    Get Your <span className="personalized-title--danger">Personalized</span> Plan
                </h2>
                {isOpen && <input onChange={(e) => handleChangeEmail(e)}
                                  placeholder="Enter your email to get your plan"
                                  className="personalized-email-input" />}
                <Button onClick={isOpen ? handleSetLocalStorage : handleClick}/>
            </div>
            <div className="personalized-banner-box">
                <img src={bannerPlan} />
            </div>
        </section>
    )
}

export default PersonalizedPlanContainer