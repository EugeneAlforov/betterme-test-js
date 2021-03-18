import React from 'react';
import style from './Container.module.css';
import PriceSection from './PriceSection/PriceSection';
import CommentsSection from './CommentsSection/CommentsSection';

const Main  = ({ time }) => {
    return (
        <div className={style.containerInner}>
            <PriceSection />
            <CommentsSection time={time}/>
        </div>
    )
}

export default Main;