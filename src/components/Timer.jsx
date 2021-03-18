import React, { useState, useEffect } from 'react';

const padTime = time => {
  return String(time).length === 1 ? `0${time}` : `${time}`;
};

const format = time => {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  return `${minutes}:${padTime(seconds)}`;
};

const Timer = ({counter, setCounter}) => {
  let timer;

  useEffect(() => {
    

    if (counter > 0) {
      timer = setTimeout(() => setCounter(c => c - 1), 1000);
    };

    return () => {
      if (timer) {
        clearTimeout(timer);
      };
    };
  }, [counter]);


  return (
    <div className="container">
      <div className="timer">
      {counter === 0 
        ? <div className='timer'>Out of time</div> 
        : <div className="timer">{format(counter)}<p className="timer__time">minutes seconds</p></div>} 
      </div>
   </div>
  )
}

export default Timer;