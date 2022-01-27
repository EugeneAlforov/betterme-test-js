import React, { useState, useRef } from 'react';
import Button from "../../components/Button/Button";
import './PersonalizedPlanContainer.css'
import bannerPlan from '../../assets/personalizedPlan.png'

const PersonalizedPlanContainer = () => {
    const [isOpen, setIsOpen] = useState(false);
    const email = useRef('');

    const handleClick = () => {
        setIsOpen(!isOpen);
    }

    const handleSetLocalStorage = () => {
        localStorage.setItem('email', email.current.value)
    }

    return (
        <section className="personalized-container">
            <div className="personalized-form">
                <h2 className="personalized-title">
                    Get Your <span className="personalized-title--danger">Personalized</span> Plan
                </h2>
                {isOpen && <input ref={email}
                                  placeholder="Enter your email to get your plan"
                                  className="personalized-email-input" />}
                <Button onClick={isOpen ? handleSetLocalStorage : handleClick}/>
            </div>
            <div>
                <img src={bannerPlan} />
            </div>
        </section>
    )
}

export default PersonalizedPlanContainer