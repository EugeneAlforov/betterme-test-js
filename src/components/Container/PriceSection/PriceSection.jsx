import React from 'react';
import Button from '../../common/Button';

const PriceSection = () => {

    return (
        <section>
            <div >
                <div>
                    Counter
                    <Button onClickCallBack={() => console.log('CALLBACK')}/>
                </div>
                <div>
                    Price
                </div>
            </div>
            <div >
                Logos
            </div>
        </section>
    )
};

export default PriceSection;