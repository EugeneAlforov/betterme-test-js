import React from 'react';

import './Button.scss';

const Button = ({ scrollToBlockB }) => {
    const scroll = () => {
        scrollToBlockB();
    };

    return (
        <button
            className="button"
            onClick={scroll}
        >
            get my plan
        </button>
    );
};

export default Button;
