import React, {useRef, useEffect} from "react"
import close from "../../assets/img/Close.svg"

const Input = ({inputValue, setInputValue, handleClick}) => {


    const inputRef = useRef();
    useEffect(() => {
        inputRef.current.focus();
    })

    return (
        <>
            <input 
                ref={inputRef}
                type="text" 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <div className="input-controls">
                <span>Enter your email to get your plan</span>
                <img onClick={handleClick} className="close-button" src={close} alt="close" />
            </div>
        </>
        
    )
    
}

export default Input