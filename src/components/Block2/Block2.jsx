import React, { useState } from "react";

import Confetti from "react-confetti";

import classes from "./Block2.module.scss";

const Block2 = () => {
  const [showConfetti, setShowConfety] = useState(false);
  return (
    <>
      {showConfetti && <Confetti />}

      <div id="block2" className={classes.wrapper}>
        <div className={classes.container}>
          <div className={classes.wrapperInner}>
            <div className={classes.column}>
              <h2 className={classes.title}>Get Your <span>Personalized</span> Plan</h2>
              <button className={classes.button} onClick={() => setShowConfety(!showConfetti)}>Get my plan</button>
            </div>
            <div className={classes.column}>
              <img className={classes.img} src="/block-2.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Block2;
