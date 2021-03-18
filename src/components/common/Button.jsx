import React from 'react';
import style from './Button.module.css'

const Button = ({onClickCallBack}) => {

    return (
        <button
            onClick={onClickCallBack}
            className={style.button}
        >
            Get my plan
        </button>
    )
};

export default Button;