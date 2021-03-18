import React, { useEffect, useState } from 'react';
import { Timer } from './common/timer';

export const Test = () => {
  const [time, setTime] = useState(599);

  const decrementTime = () => {
    setTime(prevTime => prevTime - 1)
  }

  useEffect(() => {
    setInterval(decrementTime, 1000);
  }, [])



  return (
    <div>
      <p>Test</p>
      <Timer time={time}/>
    </div>
  )
}

export default Test;