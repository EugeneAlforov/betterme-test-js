import React, { useState } from 'react';

import Button from '../Button/Button';

import './Discount.scss';

const Discount = () => {
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
                    <span className="discount__counter">10</span>

                    <Button scrollToBlockB={scrollToBlockB}/>

                    <p>nknknknkn</p><p>nknknknkn</p><p>nknknknkn</p><p>nknknknkn</p><p>nknknknkn</p><p>nknknknkn</p><p>nknknknkn</p><p>nknknknkn</p><p>nknknknkn</p><p>nknknknkn</p><p>nknknknkn</p><p>nknknknkn</p><p>nknknknkn</p><p>nknknknkn</p><p>nknknknkn</p><p>nknknknkn</p><p>nknknknkn</p><p>nknknknkn</p><p>nknknknkn</p><p>nknknknkn</p><p>nknknknkn</p><p>nknknknkn</p><p>nknknknkn</p><p>nknknknkn</p><p>nknknknkn</p><p>nknknknkn</p><p>nknknknkn</p><p>nknknknkn</p><p>nknknknkn</p><p>nknknknkn</p><p>nknknknkn</p><p>nknknknkn</p>
                    <div className="companies">
                        <img src="" alt=""/>
                    </div>    
                </div>

                <div className="prices">

                </div>
            </div>

            <div className="block_b">
                Block B
            </div>
        </>
    );
};

export default Discount;
