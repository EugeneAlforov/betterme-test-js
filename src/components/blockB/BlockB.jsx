import React, {useState} from "react"
import Button from "../common/Button/Button"
import Input from "./Input"
import "./BlockB.css"
import Illustration from "../../assets/img/Illustration.png"

const BlockB = () => {

    const [showInput, setShowInput] = useState(true);
    const [inputValue, setInputValue] = useState("")
    
    const showInputBlock = () => {
        setShowInput(true);
    }

    const setToLocalStorage = () => {
        localStorage.setItem("userEmail", JSON.stringify(inputValue));
        setShowInput(false);
        setInputValue("")
    }

    const setOnClick = () => {
        return showInput
                    ? setToLocalStorage
                    : showInputBlock;
    }

    return (
    <div className="section-b" id="blockB">
        <div className="b-left">
            <div className="text">
                Get your <span>Personalized</span> Plan
            </div>
            
            {showInput && <Input inputValue={inputValue} setInputValue={setInputValue} handleClick={() => setShowInput(false)}/>}
            
            <Button handleClick={setOnClick()}/>
        </div>
        <div className="input">
          <input type="text" placeholder="Enter your email to get your plan" />
        </div>
<<<<<<< HEAD
        <Button />
      </div>
      <div className="b-right">
        <img src={Illustration} alt="" />
      </div>
=======
>>>>>>> 160a0b73fcd0e468ac90ea6d183c28a10e0ae60e
    </div>
  );
};

export default BlockB;
