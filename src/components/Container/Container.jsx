import React from 'react';
import style from './Container.module.css';
import PriceSection from './PriceSection/PriceSection';

const Main  = () => {
    return (
        <div className={style.containerInner}>
            <PriceSection />
        </div>
    )
}

export default Main;