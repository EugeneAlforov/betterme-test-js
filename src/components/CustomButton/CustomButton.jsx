import React from "react";
import './styles.css' ;

export const CustomButton = (props) => {
    const {onSecondBlockRef, style} = props;

    const onHandlerClick = () => {
        onSecondBlockRef.current.scrollIntoView({block: "center", behavior: "smooth"})
    }
    return (
        <div style={style} className='buttonWrapper first-wrapper'>
        <div className='buttonWrapper'>
        <button
        onClick= {onHandlerClick}
        className="custom-button">
            <span>GET MY PLAN</span>
      </button>
      </div>
      </div>
    )
}