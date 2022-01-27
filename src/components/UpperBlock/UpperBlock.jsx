import React from 'react'

import './UpperBlock.css'

import { CustomButton } from '../CustomButton/CustomButton';
import { Title } from '../Title/Title';
import { Pricer } from '../Pricer/Pricer';
import { Timer } from '../Timer/Timer'



const UpperBlock = ({onSecondBlockRef}) => {

    console.log('hi');
    return (
        <div className='container'>
            <div className='block-wrapper'>
                <Title>
                    Discount <span className='title-span'>expires</span> at
                </Title>
                <Timer />
                <CustomButton onSecondBlockRef={onSecondBlockRef} style={{margin: 0}}/>
            </div>
            <Pricer />
        </div>
    )
}

export default UpperBlock