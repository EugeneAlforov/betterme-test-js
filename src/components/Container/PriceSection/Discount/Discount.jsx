import React from 'react';
import Button from '../../../common/Button';
import style from './Discount.module.css';

const Discount = () => {

    const scrollToContainer = (sectionId) => {
        document.getElementById('test').scrollIntoView({block: "center", behavior: "smooth"});
    }

    return (
        <div>
            <div className={style.text}>
                Discount expires at
            </div>
            <div className={style.container}> 
                Counter
            </div>
            <div>
                <Button onClickCallBack={scrollToContainer}/>
            </div>
            
        </div>

    )
};

export default Discount;