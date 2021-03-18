import React from 'react';
import Discount from './Discount/Discount';
import style from './PriceSection.module.css';

const PriceSection = () => {

    return (
        <section className={style.section} id="section_top">
            <div className={style.sectionTop}>
                <div className={style.sectionTopDiscount}>
                    <Discount />
                </div>
                <div className={style.sectionTopPrice}>
                    Price
                </div>
            </div>
            <div className={style.sectionBottom}>
                Logos
            </div>
        </section>
    )
};

export default PriceSection;