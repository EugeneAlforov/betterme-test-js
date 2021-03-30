import React from "react"
import close from "../../assets/img/Close.svg"

const Input = ({inputValue, setInputValue, handleClick}) => {

    return (
        <div className="input">
            <div className="input-left">
                <span>Enter your email to get your plan</span>
                <input 
                    type="text" 
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
            </div>
            <img onClick={handleClick} className="close-button" src={close} alc="close" />
        </div>
    )
    
}

export default Input