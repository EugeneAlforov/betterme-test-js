import React from 'react';

export const Timer = ({ time }) => {
  
const minutes = Math.floor(time / 60);
const seconds = Math.floor(time % 60);

    return (
      <div>
        <p>{`${minutes >= 10 ? minutes : '0' + minutes}`} : {`${seconds}`}</p>
      </div>
    )
  };
