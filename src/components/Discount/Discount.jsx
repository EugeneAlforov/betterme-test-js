import React, { useState } from 'react';

import Button from '../Button/Button';
import Timer from '../Timer';

import './Discount.scss';

const Discount = ({ counter, setCounter }) => {
    const scrollToBlockB = () => {
        document.querySelector('.block_b').scrollIntoView({behavior: "smooth"});
    };

    return (
        <>
            <div className="discount">
                <div className="discount__info">
                    <h1 className="discount__title">
                        Discount <span className="selected">expires</span> at
                    </h1>
                    <Timer counter={counter} setCounter={setCounter} />
                    <Button scrollToBlockB={scrollToBlockB}/>

                    <div className="companies">
                        <span className="companies__title">As featured in:</span>
                        <img src="" alt=""/>
                    </div>    
                </div>

                <div className="prices">
                    <div className="discount__wrapper">
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Discount;
