import React from 'react';
import '../common/Timer.module.css';

export const Timer = ({ time }) => {
  
const minutes = Math.floor(time / 60);
const seconds = Math.floor(time % 60);

    return (
      <div className="timer">
        <p>{`${minutes >= 10 ? minutes : '0' + minutes}`} : {`${seconds >= 10 ? seconds : '0' + seconds}`}</p>
      </div>
    )
  };
