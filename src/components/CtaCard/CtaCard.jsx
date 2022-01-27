import React from "react";
import './styles.css'

export const CtaCard = (props) => {
    const {text,title,eventDate,nickName} = props;
    return (
        <div className='cta-wrapper'>
            <div className="cta-header">
            <div className="card-title ">{title}</div>
            <div className='nickNameAndDate'><p>{eventDate}</p><p>{nickName}</p></div>
            </div>

            <p className='cta-content'>
            {text}
            </p>
        </div>
    )
}