import React, { useState, useEffect } from 'react';

const padTime = time => {
  return String(time).length === 1 ? `0${time}` : `${time}`;
};

const format = time => {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  return `${minutes}:${padTime(seconds)}`;
};

const Timer = () => {
  const [counter, setCounter] = useState(600);
  
  useEffect(() => {
    let timer;

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
      <div className="time">
      {counter === 0 
        ? <div className='modalka__timer'>Время закончилось</div> 
        : <div className="modalka__timer"><div className="modalka__timer__counter">{format(counter)}<p className="modalka__timer__time">minutes seconds</p></div></div>} 
      </div>
   </div>
  )
}

export default Timer;