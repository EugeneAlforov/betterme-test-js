import React, {useState} from "react"
import Button from "../common/Button/Button"
import Input from "./Input"
import "./BlockB.css"
import Illustration from "../../assets/img/Illustration.png"

const BlockB = () => {

    const [showInput, setShowInput] = useState(false);
    const [inputValue, setInputValue] = useState("")
    
    const toggleInputBlock = (val) => {
        setShowInput(val);
    }

    const setToLocalStorage = () => {
        localStorage.setItem("userEmail", JSON.stringify(inputValue));
        toggleInputBlock(false);
        setInputValue("")
    }

    const setOnClick = () => {
        return showInput
                    ? setToLocalStorage
                    : () => toggleInputBlock(true);
    }

    return (
    <div className="section-b" id="blockB">
        <div className="b-left">

            <div className="text">
                Get your <span>Personalized</span> Plan
            </div>
            
            {showInput && <Input inputValue={inputValue} setInputValue={setInputValue} handleClick={() => toggleInputBlock(false)}/>}
            
            <Button handleClick={setOnClick()}/>

        </div>

        <div className="b-right">
            <img src={Illustration} alt="" />
        </div>
        
    </div>
    )
}

export default BlockB;