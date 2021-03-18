import React, { useState } from "react";
import classes from "./BlockB.module.scss";
import image from "./../../assets/Illustration.png";

export const BlockB = () => {
  const [inputView, setInputView] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const planFormHandler = () => {
    setInputValue("");
    localStorage.setItem("plan", inputValue);
  };

  return (
    <div className={classes.block_b}>
      <div className={classes.wrapper}>
        <div className={classes.plan}>
          <div className={classes.plan_text}>Get your pesonalized plan</div>
          {inputView ? (
            <form onSubmit={planFormHandler}>
              <input
                type="email"
                onChange={(e) => setInputValue(e.target.value)}
              />
              <button
                className={classes.plan_button}
                type="submit"
                value="Submit"
              >
                send
              </button>
            </form>
          ) : (
            <button
              className={classes.plan_button}
              onClick={() => setInputView(true)}
            >
              Get my plan
            </button>
          )}
        </div>
        <div className={classes.image}>
          <img src={image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default BlockB;
