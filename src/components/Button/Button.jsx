import React from "react";
import './ButtonStyles.css'

const Button = (props) => {
    const { onClick } = props;
    return <button onClick={onClick} className="button" >Get my plan</button>
}

export default Button