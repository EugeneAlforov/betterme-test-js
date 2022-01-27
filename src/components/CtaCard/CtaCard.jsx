import React from "react";

export const CtaCard = (props) => {
    const {text,title,data} = props;
    return (
        <div className='cta-wrapper'>
            <p>
            {text}
            </p>
        </div>
    )
}