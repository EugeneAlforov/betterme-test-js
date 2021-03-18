import React, { useState } from "react";
import "./BlockB.scss";

export const BlockB = () => {
  const [inputView, setInputView] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const planFormHandler = () => {
    setInputValue("");
    localStorage.setItem("plan", inputValue);
  };

  return (
    <div className="block_b">
      <div className="getPlan">
        <div>Get your pesonalized plan</div>
        {inputView ? (
          <form onSubmit={planFormHandler}>
            <input
              type="email"
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button type="submit" value="Submit">
              send
            </button>
          </form>
        ) : (
          <button onClick={() => setInputView(true)}>Get my plan</button>
        )}
      </div>
    </div>
  );
};

export default BlockB;
