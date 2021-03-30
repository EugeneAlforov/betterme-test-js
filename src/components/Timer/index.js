import React, { useEffect, useState } from 'react'
import moment from 'moment';
import './style.css';

const defaultTime = new Date('03 30 2021, 14:00');
const formatTime = 'MM DD YYYY, h:mm'

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(10);
  useEffect(() => {
    setInterval(() => {
      const now = moment()
      const then = moment(defaultTime, formatTime);
      const countdown = moment(then - now);
      const min = countdown.format('mm');
      const sec = countdown.format('ss');
      if (min !== minutes) setMinutes(min);
      if (sec !== seconds) setSeconds(sec);
    }, 1000)
  })


  return (
    <div className="timer">
      {minutes}:{seconds}
    </div>
  )
}

export default Timer
